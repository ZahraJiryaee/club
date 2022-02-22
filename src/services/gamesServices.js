import http from "./httpServices";
import { getAPIUrl } from "./api";

const getGamesApiEndpoint = getAPIUrl() + "/api/v1/application/";
const getFilteredCategoryApiEndpoint =
  getAPIUrl() + "/api/v1/application/filter";

export const getGames = () => {
  return http.get(getGamesApiEndpoint);
};

export const getFilteredCategory = (id) => {
  return http.get(`${getFilteredCategoryApiEndpoint}?categories=${id}`);
};
