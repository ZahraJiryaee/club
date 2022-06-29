import http from "./httpServices";
import { getAPIUrl } from "./api";
import getApis from "./api";
import localstorageService from "./localstorageService";

const refreshToken = localstorageService.getRefreshToken();

//Signup
const postPhoneNumberApiEndpoint = getAPIUrl() + "/api/v1/user/signup/request";
const postOtpApiEndpoint = getAPIUrl() + "/api/v1/user/signup/verify";
// const postPasswordApiEndpoint = getAPIUrl() + "/api/v1/user/signup";

//Login
const getLoginTokenApiEndpoint = getAPIUrl() + "/api/v1/user/token";

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
  const body = { refresh: refreshToken ? `${refreshToken}` : "Bearer" };
  JSON.stringify(body);
  return http.post(getApis.newTokenApiEndpoint, body);
};

//Profile//
export const getUserProfile = () => {
  const accessToken = localstorageService.getAccessToken();
  return http.get(getApis.userProfileApiEndpoint, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
};

export const setUserProfile = (body) => {
  const accessToken = localstorageService.getAccessToken();
  return http.put(getApis.userProfileApiEndpoint, body, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
};

export const setBonusAddress = (bonusLogId, body) => {
  const accessToken = localstorageService.getAccessToken();
  return http.put(getApis.setBonusAddress + bonusLogId + `/address`, body, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
};

//InviterNumber//
export const setInviterNumber = (inviter_number) => {
  const accessToken = localstorageService.getAccessToken();
  const body = { inviter_number };
  JSON.stringify(body);
  return http.post(postInviterPhoneNumberApiEndpoint, body, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
};

//DeviceId//
export const setDeviceId = (deviceId) => {
  const accessToken = localstorageService.getAccessToken();
  const body = { public_id: deviceId };
  JSON.stringify(body);
  return http.post(postDeviceIdApiEndpoint, body, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
};
