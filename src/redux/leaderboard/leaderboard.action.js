import { LeaderboardActionTypes } from "./leaderboard.types";
import {
  userListWeekly,
  userListMonthly,
  userListSeasonal,
} from "../../services/leaderboardService";
import logger from "../../services/logService";

export const setLeaderBoardHeaderStatus = (value) => ({
  type: LeaderboardActionTypes.SET_LEADERBOARD_HEADER_STATUS,
  payload: value,
});

export const getUserListWeekly = () => async (dispatch) => {
  let result;
  await userListWeekly()
    .then((response) => {
      logger.logInfo("response-leaderboard-weekly:", response);
      result = response;
      if (response.status === 200) {
        dispatch({
          type: LeaderboardActionTypes.USER_LIST_WEEKLY,
          payload: response.data,
        });
      }
    })
    .catch((error) => {
      logger.logError("error-leaderboard-weekly", error.response);
      result = error.response;
      dispatch({
        type: LeaderboardActionTypes.USER_LIST_WEEKLY,
        payload: null,
      });
    });
  return result;
};

export const getUserListMonthly = () => async (dispatch) => {
  let result;
  await userListMonthly()
    .then((response) => {
      logger.logInfo("response-leaderboard-monthly:", response);
      result = response;
      if (response.status === 200) {
        dispatch({
          type: LeaderboardActionTypes.USER_LIST_MONTHLY,
          payload: response.data,
        });
      }
    })
    .catch((error) => {
      logger.logError("error-leaderboard-monthly", error.response);
      result = error.response;
      dispatch({
        type: LeaderboardActionTypes.USER_LIST_MONTHLY,
        payload: null,
      });
    });
  return result;
};

export const getUserListSeasonal = () => async (dispatch) => {
  let result;
  await userListSeasonal()
    .then((response) => {
      logger.logInfo("response-leaderboard-seasonal:", response);
      result = response;
      if (response.status === 200) {
        dispatch({
          type: LeaderboardActionTypes.USER_LIST_SEASONAL,
          payload: response.data,
        });
      }
    })
    .catch((error) => {
      logger.logError("error-leaderboard-seasonal", error.response);
      result = error.response;
      dispatch({
        type: LeaderboardActionTypes.USER_LIST_SEASONAL,
        payload: null,
      });
    });
  return result;
};
