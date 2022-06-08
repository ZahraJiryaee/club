import {
  getGames,
  getFilteredCategory,
  getSearchedApplication,
  getGameDetails,
  getUserApplicationInfo,
  isAppInstalled,
} from "../../services/gamesServices";
import { GamesActionTypes } from "./games.types";

export const getAllGames = () => async (dispatch) => {
  let result = "";
  await getGames()
    .then((response) => {
      if (response.status === 200) {
        dispatch({
          type: GamesActionTypes.GET_ALL_GAMES,
          payload: response.data,
        });
      }
    })
    .catch((e) => {
      console.log(e);
      //toast
    });
  return result;
};

export const getSelectedCategory = (id) => async (dispatch) => {
  const { data } = await getFilteredCategory(id);

  await dispatch({
    type: GamesActionTypes.GET_FILTERED_CATEGORY,
    payload: data,
  });
};

export const getSearchedItem = (id) => async (dispatch) => {
  const { data } = await getSearchedApplication(id);

  if (data.length === 0) {
    await dispatch({
      type: GamesActionTypes.GET_SEARCHED_ITEM,
      payload: [],
    });
  } else {
    await dispatch({
      type: GamesActionTypes.GET_SEARCHED_ITEM,
      payload: data,
    });
  }
};

export const getGameDetailsInformation = (id) => async (dispatch) => {
  let result = "";
  await getGameDetails(id)
    .then((response) => {
      if (response.status === 200) {
        dispatch({
          type: GamesActionTypes.GET_GAME_DETAILS,
          payload: response.data,
        });
      }
    })
    .catch((e) => {
      console.log(e);
      //toast
    });
  return result;
};

export const getUserApplicationInformation = (gameId) => async (dispatch) => {
  await getUserApplicationInfo(gameId)
    .then((response) => {
      if (response.status === 200) {
        dispatch({
          type: GamesActionTypes.GET_USER_APPLICATION_INFO,
          payload: response.data,
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

export const isApplicationInstalled = (gameId) => async (dispatch) => {
  await isAppInstalled(gameId)
    .then((response) => {
      if (response.status === 200) {
        dispatch({
          type: GamesActionTypes.IS_APPLICATION_INSTALLED,
          payload: response.data,
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
