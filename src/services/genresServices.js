import http from "./httpServices";
import { getAPIUrl } from "./api";

const getGenresApiEndpoint = getAPIUrl() + "/api/v1/application/genre";

export const getGenres = () => {
  return http.get(getGenresApiEndpoint);
};
