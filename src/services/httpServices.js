import axios from "axios";

import { setNewToken } from "./userServices";

axios.defaults.headers.post["Content-Type"] = "application/json";

const token = localStorage.getItem("token");

if (token) axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

axios.interceptors.response.use(null, (error) => {
  const expectedErrors =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (error.response.status === 401) {
    const refreshToken = localStorage.getItem("refreshToken");
    const { status, data } = setNewToken(refreshToken);
    if (status === 200) {
      //toast -> try again...
      localStorage.setItem("accessToken", data.access);
      localStorage.setItem("refreshToken", data.refresh);
    } else {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      //Go to login popup
    }
  }
  if (!expectedErrors) {
    console.log("Server error!");
    console.log(error);
  }
  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
