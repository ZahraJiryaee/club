import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getAllGames } from "../../redux/games/games.action";
import { getAllGenres } from "../../redux/genres/genres.action";

import GenreHeader from "./genre-header.component";

import { ReactComponent as StarLogo } from "../../assets/images/icon/star.svg";
import "./games.styles.scss";
import Game from "../../assets/images/heshamt.jpg";

const Games = () => {
  // var type = 1;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllGames());
    dispatch(getAllGenres());
  }, []);

  return (
    <div>
      <GenreHeader />
    </div>
  );
};

export default Games;
