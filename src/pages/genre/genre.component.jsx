import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";

import { getSelectedGenre } from "../../redux/genres/genres.action";
import { getSelectedCategory } from "../../redux/games/games.action";
import { setHeaderMode } from "../../redux/header/header.action";

import { selectAllGames } from "../../redux/games/games.selectors";

import GenreHeader from "../../components/genres/genre-header.component";
import GenreView from "../../components/genres/genre-view.component";

import logger from "../../services/logService";

const GenrePage = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { type, id } = useParams();

  const allCategories = useSelector(selectAllGames);

  const [categoryTitle, setCategoryTitle] = useState("");

  const setGenres = useCallback(() => {
    try {
      if (type === "genre") {
        dispatch(getSelectedGenre(id));
      } else if (type === "category") {
        dispatch(getSelectedCategory(id));
        for (let i = 0; i < allCategories.length; i++) {
          if (allCategories[i]["id"] === id)
            setCategoryTitle(allCategories[i]["title"]);
        }
      }
    } catch (ex) {
      logger.logError("ex-genre", ex);
      //tast error
    }
  }, [dispatch, type, id, allCategories]);

  useEffect(() => {
    setGenres();
  }, [setGenres]);

  useEffect(() => {
    dispatch(setHeaderMode(pathname));
  }, [dispatch, pathname]);

  return (
    <div>
      <GenreHeader />
      <GenreView title={categoryTitle} />
    </div>
  );
};

export default GenrePage;
