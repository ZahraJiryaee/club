import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

import { getAllGenres } from "../../redux/genres/genres.action";
import { getAllGames } from "../../redux/games/games.action";
import { setHeaderMode } from "../../redux/header/header.action";

import { routeNames } from "../../services/routeService";

import GenreHeader from "../../components/genres/genre-header.component";
import GamesRow from "../../components/games/games-row/games-row.component";
import BannerGames from "../../components/games/games-banner/games-banner.component";

import ArrowIconMB from "../../assets/images/icon/arrow-back-marineblue.png";

import "./games.styles.scss";
import "../game-details/game-details.styles.scss";

const GamesPage = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const games = useSelector((state) => state.games.allGames);

  const setGamesAndGenres = useCallback(async () => {
    try {
      await dispatch(setHeaderMode(pathname));
      await dispatch(getAllGames());
      await dispatch(getAllGenres());
    } catch (ex) {
      console.log(ex);
      //tast error
    }
  }, []);

  useEffect(() => {
    setGamesAndGenres();
  }, [setGamesAndGenres]);

  return (
    <div>
      <GenreHeader />
      <div className="games-page">
        {games.map((category) => {
          return category.enumerate_type === 1 ? (
            <div key={category.id} className="games-container">
              <div className="game-category-header">
                <p className="title">{category.title}</p>
                <Link
                  to={`/${routeNames.game}/category/${category.id}`}
                  className="more"
                >
                  <p className="more">
                    بیشتر
                    <img src={ArrowIconMB} alt="arrow-back" />
                  </p>
                </Link>
              </div>
              <GamesRow
                applications={category.applications}
                page={routeNames.game}
              />
            </div>
          ) : (
            <div key={category.id} className="games-container">
              <div className="game-category-header">
                <span className="title">{category.title}</span>
              </div>
              <BannerGames category={category} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GamesPage;
