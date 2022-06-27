import http from "./httpServices";
import getApis from "./api";

const apiUrl = getApis.API_URL;

export const retrieveBonusList = () => {
  return http.get(apiUrl + "/api/v1/bonus/view");
};

export const setBonus = () => {
  return http.post(apiUrl + "/api/v1/bonus/view");
};

export const getBonusLog = () => {
  return http.get(apiUrl + "/api/v1/bonus/log");
};
