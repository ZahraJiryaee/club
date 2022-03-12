// import { getGenres, getFilteredGenre } from "../../services/genresServices";
import { HeaderActionTypes } from "./header.types";

export const setHeaderMode = (pathname) => async (dispatch) => {
  let headerMode = "";

  if (pathname === "/lucky-wheel") headerMode = "transparent";
  else if (pathname.includes("games")) headerMode = "games";
  else headerMode = "simple";

  await dispatch({
    type: HeaderActionTypes.GET_HEADER_MODE,
    payload: headerMode,
  });
};
