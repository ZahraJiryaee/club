import { getGames } from "../../services/gamesServices";
import { GamesActionTypes } from "./games.types";

export const getAllGames = () => async (dispatch) => {
  const { data } = await getGames();
  await dispatch({
    type: GamesActionTypes.GET_ALL_GAMES,
    payload: data,
  });
};
