import axios from "axios";
import { useDispatch } from "react-redux";

import {
  setOpenValidationDialog,
  setIsLoading,
} from "./../redux/user/user.action";

import getApis from "./api";
import localstorageService from "./localstorageService";
import { setNewToken } from "./userServices";

const request = axios.create({});

export function useSetupAxios() {
  const dispatch = useDispatch();

  dispatch(setIsLoading(true));

  request.interceptors.request.use(
    (config) => {
      const accessToken = localstorageService.getAccessToken();
      if (accessToken)
        config.headers["Authorization"] = accessToken
          ? `Bearer ${accessToken}`
          : "";
      request.defaults.headers.post["Content-Type"] = "application/json";
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  request.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const accessToken = localstorageService.getAccessToken();

      if (
        error.response.status === 401 &&
        error.response.request.responseURL === getApis.newTokenApiEndpoint
      ) {
        dispatch(setOpenValidationDialog(true));
      } else if (error.response.status === 401) {
        await setNewToken(accessToken)
          .then((response) => {
            const { data } = response;
            localstorageService.setToken({
              accessToken: data.access,
              refreshToken: data.refresh,
            });

            error.config.headers["Authorization"] = `Bearer ${data.access}`;
            error.config.baseURL = undefined;
            // window.location.reload();
            return request.request(error.config);
          })
          .catch((refreshError) => {
            if (
              error.response.request.responseURL ===
              getApis.userProfileApiEndpoint
            ) {
              dispatch(setOpenValidationDialog(false));
            } else {
              // dispatch(setOpenValidationDialog(true));
            }

            if (refreshError.response.status === 401) {
              localstorageService.clearToken();
            }
          })
          .finally(() => {
            dispatch(setIsLoading(false));
          });
      }
      return Promise.reject(error);
    }
  );

  return request;
}

const http = {
  get: request.get,
  post: request.post,
  put: request.put,
  delete: request.delete,
};

export default http;
