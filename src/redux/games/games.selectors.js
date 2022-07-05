import { t } from "i18next";
import { createSelector } from "reselect";

const selectGames = (state) => state.games;

export const selectAllGames = createSelector(
  [selectGames],
  (games) => games.allGames
);

export const selectFilteredCategory = createSelector(
  [selectGames],
  (games) => games.filteredCategory
);

export const selectSearchedGameItems = createSelector(
  [selectGames],
  (games) => games.searchedItem
);

export const selectGameDetails = createSelector(
  [selectGames],
  (games) => games.gameDetails
);

export const selectIsApplicationInstalled = createSelector(
  [selectGames],
  (games) => games.isApplicationInstalled
);

export const selectUserApplicationInfo = createSelector(
  [selectGames],
  (games) => games.userApplicationInfo
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
      subHeader: `${item.install_score_counter} ${t(
        "Achieve_X_Points_By_Installing_This_Game"
      )}`,
      action: { component: "game", content: item.rate },
    };
  });
  return { data: newItems, component: "game" };
};
