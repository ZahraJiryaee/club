import axios from "axios";
import { useDispatch } from "react-redux";

import getApis from "./api";
import localstorageService from "./localstorageService";
import { error } from "./toastService";
import { setNewToken } from "./userServices";

import { setOpenValidationDialog } from "./../redux/user/user.action";

export function useSetupAxios() {
  const dispatch = useDispatch();

  return (
    axios.interceptors.request.use(
      (config) => {
        const accessToken = localstorageService.getAccessToken();
        if (accessToken)
          config.headers["Authorization"] = `Bearer ${accessToken}`;
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
            });
        }
        return Promise.reject(error);
      }
    )
  );
}

const errorHandling = (status) => {
  if (status === 401) {
  } else if (status === 403) {
    return error("Access_denied");
  } else if (status === 404) {
    return error("یافت نشد");
  } else {
    return error("Something went wrong! Please try again.");
  }
};

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
