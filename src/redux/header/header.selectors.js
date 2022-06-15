import { createSelector } from "reselect";

const selectHeader = (state) => state.header;

export const selectHeaderMode = createSelector(
  [selectHeader],
  (header) => header.headerMode
);
