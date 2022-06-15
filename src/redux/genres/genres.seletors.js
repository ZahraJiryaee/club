import { createSelector } from "reselect";

const selectGenres = (state) => state.genres;

export const selectAllGenres = createSelector(
  [selectGenres],
  (genres) => genres.allGenres
);

export const selectFilteredGenre = createSelector(
  [selectGenres],
  (genres) => genres.filteredGenre
);
