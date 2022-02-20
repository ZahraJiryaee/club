import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router";

import { getSelectedGenre } from "../../redux/genres/genres.action";

import GenreHeader from "./genre-header.component";
import GenreView from "./genre.view.component";

import "./genre.styles.scss";

const GenrePage = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const id = pathname.substring(pathname.lastIndexOf("/") + 1);

  useEffect(() => {
    dispatch(getSelectedGenre(id));
  });

  return (
    <div>
      <GenreHeader />
      <GenreView />
    </div>
  );
};

export default GenrePage;
