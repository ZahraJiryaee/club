import http from "./httpServices";
import getApis from "./api";

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
  return http.get(getApis.getUserApplicationInfoEndpoint + gameId);
};

export const isAppInstalled = (gameId) => {
  return http.get(getApis.isAppInstalledEndpoint + gameId);
};
