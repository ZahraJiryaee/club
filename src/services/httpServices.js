import axios from "axios";
import { useDispatch } from "react-redux";

import getApis from "./api";
import localstorageService from "./localstorageService";
import { error } from "./toastService";
import { setNewToken } from "./userServices";

import {
  setOpenValidationDialog,
  setIsLoading,
} from "./../redux/user/user.action";

export function useSetupAxios() {
  const dispatch = useDispatch();

  dispatch(setIsLoading(true));

  return (
    axios.interceptors.request.use(
      (config) => {
        const accessToken = localstorageService.getAccessToken();
        if (accessToken)
          config.headers["Authorization"] = accessToken
            ? `Bearer ${accessToken}`
            : "";
        axios.defaults.headers.post["Content-Type"] = "application/json";
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    ),
    axios.interceptors.response.use(
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
              return axios.request(error.config);
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
    )
  );
}

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};

export default http;
