import { getGenres } from "../../services/genresServices";
import { GenresActionTypes } from "./genres.types";

export const getAllGenres = () => async (dispatch) => {
  const { data } = await getGenres();

  await dispatch({
    type: GenresActionTypes.GET_ALL_GENRES,
    payload: data,
  });
};
