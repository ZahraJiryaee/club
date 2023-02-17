import http from "./httpServices";
import { getAPIUrl } from "./api";
import getApis from "./api";

import { getAccessToken, getRefreshToken } from "../redux/user/token.action";

//Signup
const postPhoneNumberApiEndpoint = getAPIUrl() + "/api/v1/user/signup/request";
const postOtpApiEndpoint = getAPIUrl() + "/api/v1/user/signup/verify";
// const postPasswordApiEndpoint = getAPIUrl() + "/api/v1/user/signup";

//Login
const getLoginTokenApiEndpoint = getAPIUrl() + "/api/v1/user/token";

// Foget Password
const forgetPasswordRequestApiEndpoint =
  getAPIUrl() + "/api/v1/user/forget_password/request";

const forgetPasswordVerifyApiEndpoint =
  getAPIUrl() + "/api/v1/user/forget_password/verify";

//InviterNumer
const postInviterPhoneNumberApiEndpoint = getAPIUrl() + "/api/v1/user/invite";

//DeviceId
const postDeviceIdApiEndpoint =
  getAPIUrl() + "/api/v1/user/sync/device/request";

////////////////////////////////////////////////////////////////////

//Signup//
export const sendPhoneNumber = (phoneNumber) => {
  const body = { mobile_number: phoneNumber };
  JSON.stringify(body);
  return http.post(postPhoneNumberApiEndpoint, body);
};

export const checkOTP = (body) => {
  delete body.inviter_number;
  JSON.stringify(body);
  return http.post(postOtpApiEndpoint, body);
};

//Login//
export const setLoginToken = (username, password) => {
  const body = { username: username, password: password };
  JSON.stringify(body);
  return http.post(getLoginTokenApiEndpoint, body);
};

export const setNewToken = () => {
  const refreshToken = getRefreshToken();
  const body = { refresh: refreshToken ? `${refreshToken}` : "Bearer" };
  JSON.stringify(body);
  return http.post(getApis.newTokenApiEndpoint, body);
};

//Profile//
export const getUserProfile = () => {
  const accessToken = getAccessToken();
  return http.get(getApis.userProfileApiEndpoint, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
};

export const setUserProfile = (body) => {
  const accessToken = getAccessToken();
  return http.put(getApis.userProfileApiEndpoint, body, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
};

export const setBonusAddress = (bonusLogId, body) => {
  const accessToken = getAccessToken();
  return http.put(getApis.setBonusAddress + bonusLogId + `/address`, body, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
};

export const getAllOfTheUserAddresses = () => {
  const accessToken = getAccessToken();
  return http.get(getApis.getUserAddresses, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
};

//InviterNumber//
export const setInviterNumber = (inviter_number) => {
  const accessToken = getAccessToken();
  const body = { inviter_number };
  JSON.stringify(body);
  return http.post(postInviterPhoneNumberApiEndpoint, body, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
};

//DeviceId//
export const setDeviceId = (deviceId) => {
  const accessToken = getAccessToken();
  const body = { public_id: deviceId };
  JSON.stringify(body);
  return http.post(postDeviceIdApiEndpoint, body, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
};

export const Forget_Password_Request = (body) => {
  return http.post(forgetPasswordRequestApiEndpoint, body);
};

export const Forget_Password_Verify = (body) => {
  return http.post(forgetPasswordVerifyApiEndpoint, body);
};
