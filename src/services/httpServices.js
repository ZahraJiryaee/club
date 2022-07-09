import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  setOpenValidationDialog,
  setIsLoading,
} from "./../redux/user/user.action";
import { clearTokens, SetTokens } from "./../redux/user/token.action";

import getApis from "./api";
import { setNewToken } from "./userServices";

const request = axios.create({});

export function useSetupAxios() {
  const dispatch = useDispatch();

  dispatch(setIsLoading(true));

  useEffect(() => {
    request.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        if (
          error.response.status === 401 &&
          error.response.request.responseURL === getApis.newTokenApiEndpoint
        ) {
          dispatch(setOpenValidationDialog(true));
        } else if (error.response.status === 401) {
          await setNewToken()
            .then((response) => {
              const { access: accessToken, refresh: refreshToken } =
                response.data;

              dispatch(SetTokens({ accessToken, refreshToken }));

              if (error.response.request.responseURL.includes("bonus/view")) {
                return null;
              } else {
                error.config.headers["Authorization"] = `Bearer ${accessToken}`;
                error.config.baseURL = undefined;
                return request.request(error.config);
              }
            })
            .catch((refreshError) => {
              const { responseURL } = error.response.request;
              if (
                responseURL.includes(getApis.userProfileApiEndpoint) ||
                responseURL.includes(getApis.isAppInstalledEndpoint) ||
                responseURL.includes(getApis.getUserApplicationInfoEndpoint)
              ) {
                dispatch(setOpenValidationDialog(false));
              } else {
                // dispatch(setOpenValidationDialog(true));
              }

              if (refreshError.response.status === 401) {
                dispatch(clearTokens());
              }
            })
            .finally(() => {
              dispatch(setIsLoading(false));
            });
          // return error;
        }
        return Promise.reject(error);
      }
    );
  }, [dispatch]);

  return request;
}

const http = {
  get: request.get,
  post: request.post,
  put: request.put,
  delete: request.delete,
};

export default http;
