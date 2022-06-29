import http from "./httpServices";
import getApis from "./api";
import localstorageService from "./localstorageService";

const apiUrl = getApis.API_URL;

export const retrieveBonusList = () => {
  return http.get(apiUrl + "/api/v1/bonus/view");
};

export const setBonus = () => {
  const accessToken = localstorageService.getAccessToken();
  return http.post(apiUrl + "/api/v1/bonus/view", null, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
};

export const getBonusLog = () => {
  const accessToken = localstorageService.getAccessToken();
  return http.get(apiUrl + "/api/v1/bonus/log", {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
};
