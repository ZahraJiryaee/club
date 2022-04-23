import axios from "axios";

import { error } from "./toastService";

axios.defaults.headers.post["Content-Type"] = "application/json";

const token = localStorage.getItem("token");

if (token) axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

axios.interceptors.response.use(null, (error) => {
  const expectedErrors =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedErrors) {
    error("Server error!");
    console.log(error);
  } else {
    errorHandling(error.response.status);
  }

  return Promise.reject(error);
});

const errorHandling = (status) => {
  if (status === 401) {
    return error("User Unauthorized");
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
