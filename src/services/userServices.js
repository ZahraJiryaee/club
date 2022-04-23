import http from "./httpServices";
import { getAPIUrl } from "./api";

//Signup
const postPhoneNumberApiEndpoint =
  getAPIUrl() + "/api/v1/user/signup/verify/request";
const postOtpApiEndpoint = getAPIUrl() + "/api/v1/user/signup/verify";
const postPasswordApiEndpoint = getAPIUrl() + "/api/v1/user/signup";
// const postInvitedCodeApiEndpoint = getAPIUrl() + "";

//Login
const getTokenApiEndpoint = getAPIUrl() + "/api/v1/user/token";

export const sendPhoneNumber = (phoneNumber) => {
  const body = { mobile_number: phoneNumber };
  JSON.stringify(body);
  return http.post(postPhoneNumberApiEndpoint, body);
};

export const checkOTP = (phoneNumber, otp) => {
  const body = { mobile_number: phoneNumber, otp: otp };
  JSON.stringify(body);
  return http.post(postOtpApiEndpoint, body);
};

export const setPassword = (password, phoneNumber) => {
  const body = { password: password, mobile_number: phoneNumber };
  JSON.stringify(body);
  return http.post(postPasswordApiEndpoint, body);
};

export const setToken = (username, password) => {
  const body = { username: username, password: password };
  JSON.stringify(body);
  return http.post(getTokenApiEndpoint, body);
};

// export const setInvitedCode = (invitedCode) => {};
