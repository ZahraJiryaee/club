// import { getGenres, getFilteredGenre } from "../../services/genresServices";
import { HeaderActionTypes } from "./header.types";

import { routeNames } from "../../services/routeService";

export const setHeaderMode = (pathname) => async (dispatch) => {
  let headerMode = "";

  if (pathname === `/${routeNames.lucky_wheel}`) headerMode = "transparent";
  else if (
    pathname.includes(`${routeNames.game}`) ||
    pathname.includes(`${routeNames.leaderboard}`) ||
    pathname.includes(`${routeNames.shop}`)
  )
    headerMode = "full-gradient";
  else headerMode = "half-gradient";

  await dispatch({
    type: HeaderActionTypes.GET_HEADER_MODE,
    payload: headerMode,
  });
};
