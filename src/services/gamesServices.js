import http from "./httpServices";
import getApis from "./api";

import { getAccessToken } from "../redux/user/token.action";

export const getGames = () => {
  return http.get(getApis.getGamesApiEndpoint);
};

export const getFilteredCategory = (id) => {
  const params = { categories: id };
  return http.get(getApis.getFilteredCategoryApiEndpoint, { params });
};

export const getSearchedApplication = (id) => {
  return http.get(getApis.getFilteredCategoryApiEndpoint + "?search=" + id);
};

export const getGameDetails = (id) => {
  return http.get(getApis.getGamesApiEndpoint + id);
};

export const getUserApplicationInfo = (gameId) => {
  const accessToken = getAccessToken();

  return http.get(getApis.getUserApplicationInfoEndpoint + gameId, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
};

export const isAppInstalled = (gameId) => {
  const accessToken = getAccessToken();

  return http.get(getApis.isAppInstalledEndpoint + gameId, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
};
