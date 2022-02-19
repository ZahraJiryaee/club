import http from "./httpServices";
import { getAPIUrl } from "./api";

const getGamesApiEndpoint = getAPIUrl() + "/api/v1/application/";

export const getGames = () => {
  return http.get(getGamesApiEndpoint);
};
