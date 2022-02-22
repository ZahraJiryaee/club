import http from "./httpServices";
import { getAPIUrl } from "./api";

const getGenresApiEndpoint = getAPIUrl() + "/api/v1/application/genre";
const getFilteredGenreApiEndpoint = getAPIUrl() + "/api/v1/application/filter";

export const getGenres = () => {
  return http.get(getGenresApiEndpoint);
};

export const getFilteredGenre = (id) => {
  return http.get(`${getFilteredGenreApiEndpoint}?genres=${id}`);
};
