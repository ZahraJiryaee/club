import { createSelector } from "reselect";

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);

export const selectOpenValidationDialog = createSelector(
  [selectUser],
  (user) => user.openValidationDialog
);

export const selectIsLoading = createSelector(
  [selectUser],
  (user) => user.isLoading
);
