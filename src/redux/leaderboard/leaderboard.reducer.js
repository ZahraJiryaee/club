import { LeaderboardActionTypes } from "./leaderboard.types";

const INITIAL_STATE = {
  leaderboardHeaderStatus: false,
  userListWeekly: null,
  userListMonthly: null,
  userListSeasonal: null,
};

const leaderboardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LeaderboardActionTypes.SET_LEADERBOARD_HEADER_STATUS:
      return {
        ...state,
        leaderboardHeaderStatus: action.payload,
      };
    case LeaderboardActionTypes.USER_LIST_WEEKLY:
      return {
        ...state,
        userListWeekly: action.payload,
      };
    case LeaderboardActionTypes.USER_LIST_MONTHLY:
      return {
        ...state,
        userListMonthly: action.payload,
      };

    case LeaderboardActionTypes.USER_LIST_SEASONAL:
      return {
        ...state,
        userListSeasonal: action.payload,
      };
    default:
      return state;
  }
};

export default leaderboardReducer;
