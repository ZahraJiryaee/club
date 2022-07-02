import http from "./httpServices";
import getApis from "./api";

import { getAccessToken } from "../redux/user/token.action";

const apiUrl = getApis.API_URL;

export const retrieveBonusList = () => {
  return http.get(apiUrl + "/api/v1/bonus/view");
};

export const setBonus = () => {
  const accessToken = getAccessToken();
  return http.post(apiUrl + "/api/v1/bonus/view", null, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
};

export const getBonusLog = () => {
  const accessToken = getAccessToken();
  return http.get(apiUrl + "/api/v1/bonus/log", {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
};
