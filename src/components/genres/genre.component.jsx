import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";

import { getSelectedGenre } from "../../redux/genres/genres.action";
import { getSelectedCategory } from "../../redux/games/games.action";

import GenreHeader from "./genre-header.component";
import GenreView from "./genre.view.component";

import "./genre.styles.scss";

const GenrePage = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const allCategories = useSelector((state) => state.games.allGames);
  const [categoryTitle, setCategoryTitle] = useState("");

  const type = pathname.substring(
    pathname.indexOf("/") + 1,
    pathname.lastIndexOf("/")
  );
  const id = pathname.substring(pathname.lastIndexOf("/") + 1);

  useEffect(() => {
    if (type === "genre") {
      dispatch(getSelectedGenre(id));
    } else if (type === "category") {
      dispatch(getSelectedCategory(id));
      for (let i = 0; i < allCategories.length; i++) {
        if (allCategories[i]["id"] === id)
          setCategoryTitle(allCategories[i]["title"]);
      }
    }
  });

  return (
    <div>
      <GenreHeader />
      <GenreView title={categoryTitle} />
    </div>
  );
};

export default GenrePage;
