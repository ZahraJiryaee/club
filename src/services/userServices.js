import http from "./httpServices";
import { getAPIUrl } from "./api";

//Signup
const postPhoneNumberApiEndpoint =
  getAPIUrl() + "/api/v1/user/signup/verify/request";
const postOtpApiEndpoint = getAPIUrl() + "/api/v1/user/signup/verify";
const postPasswordApiEndpoint = getAPIUrl() + "/api/v1/user/signup";

//Login
const getLoginTokenApiEndpoint = getAPIUrl() + "/api/v1/user/token";
const getNewTokenApiEndpoint = getAPIUrl() + "/api/v1/user/token/refresh";

//Profile
const getUserProfileApiEndpoint = getAPIUrl() + "/api/v1/user/profile";

//InviterNumer
const postInviterPhoneNumberApiEndpoint = getAPIUrl() + "/api/v1/user/invite";

////////////////////////////////////////////////////////////////////

//Signup//
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
  const body = { mobile_number: phoneNumber, password: password };
  JSON.stringify(body);
  return http.post(postPasswordApiEndpoint, body);
};

//Login//
export const setLoginToken = (username, password) => {
  const body = { username: username, password: password };
  JSON.stringify(body);
  return http.post(getLoginTokenApiEndpoint, body);
};

export const setNewToken = (refreshToken) => {
  const body = { refresh: refreshToken };
  JSON.stringify(body);
  return http.post(getNewTokenApiEndpoint, body);
};

//Profile//
export const getUserProfile = (accessToken) => {
  return http.get(getUserProfileApiEndpoint, {
    headers: {
      Authorization: accessToken,
    },
  });
};

//InviterNumber//
export const setInviterNumber = (inviterNumber, accessToken) => {
  const body = { inviter_number: inviterNumber };
  JSON.stringify(body);
  return http.post(postInviterPhoneNumberApiEndpoint, body, {
    headers: {
      Authorization: accessToken,
    },
  });
};
