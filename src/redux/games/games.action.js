import { getGames, getFilteredCategory } from "../../services/gamesServices";
import { GamesActionTypes } from "./games.types";

export const getAllGames = () => async (dispatch) => {
  const { data } = await getGames();
  await dispatch({
    type: GamesActionTypes.GET_ALL_GAMES,
    payload: data,
  });
};

export const getSelectedCategory = (id) => async (dispatch) => {
  const { data } = await getFilteredCategory(id);

  await dispatch({
    type: GamesActionTypes.GET_FILTERED_CATEGORY,
    payload: data,
  });
};
