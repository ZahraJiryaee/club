import { createSelector } from "reselect";

const selectGames = (state) => state.games;

export const selectSearchedGameItems = createSelector(
  [selectGames],
  (games) => games.searchedItem
);

export const selectSearchedGameItemsMappedToSearchPage = createSelector(
  [selectGames],
  (games) => mapSearchedGameItemsToSearchPage(games.searchedItem)
);

const mapSearchedGameItemsToSearchPage = (items) => {
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
