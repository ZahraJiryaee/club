import {
  getGames,
  getFilteredCategory,
  getSearchedApplication,
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
