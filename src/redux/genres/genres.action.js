import { getGenres, getFilteredGenre } from "../../services/genresServices";
import { GenresActionTypes } from "./genres.types";

export const getAllGenres = () => async (dispatch) => {
  const { data } = await getGenres();

  await dispatch({
    type: GenresActionTypes.GET_ALL_GENRES,
    payload: data,
  });
};

export const getSelectedGenre = (id) => async (dispatch) => {
  const { data } = await getFilteredGenre(id);

  console.log("data");
  console.log(data);

  await dispatch({
    type: GenresActionTypes.GET_FILTERED_GENRE,
    payload: data,
  });
};
