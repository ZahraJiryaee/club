import { createSelector } from "reselect";

const selectWheel = (state) => state.wheel;

export const selectBonusList = createSelector(
  [selectWheel],
  (wheel) => wheel.bonusList
);

export const selectBonus = createSelector(
  [selectWheel],
  (wheel) => wheel.bonus
);

export const selectOpenWheelModal = createSelector(
  [selectWheel],
  (wheel) => wheel.openWheelModal
);
