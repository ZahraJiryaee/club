import { createSelector } from "reselect";

const selectUser = (state) => state.user;

export const selectIsLoading = createSelector(
  [selectUser],
  (user) => user.isLoading
);
