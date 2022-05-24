import http from "./httpServices";
import { getAPIUrl } from "./api";

const getGamesApiEndpoint = getAPIUrl() + "/api/v1/application/";
const getFilteredCategoryApiEndpoint =
  getAPIUrl() + "/api/v1/application/filter";

export const getGames = () => {
  return http.get(getGamesApiEndpoint);
};

export const getFilteredCategory = (id) => {
  const params = { categories: id };
  return http.get(getFilteredCategoryApiEndpoint, { params });
};

export const getSearchedApplication = (id) => {
  const params = { search: id };
  return http.get(getFilteredCategoryApiEndpoint, { params });
};

export const getGameDetails = (id) => {
  return http.get(getGamesApiEndpoint + id);
};

export const mapSearchedGameItemsToSearchPage = (items) => {
  const newItems = items.map((item) => {
    return {
      id: item.id,
      icon: item.source.icon,
      header: item.name,
      subHeader: `${item.install_score_counter} امتیاز با نصب این بازی دریافت کنید.`,
      action: { component: "game", content: item.rate },
    };
  });
  return { data: newItems, component: "game" };
};
