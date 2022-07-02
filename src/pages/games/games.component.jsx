import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { getAllGenres } from "../../redux/genres/genres.action";
import { getAllGames } from "../../redux/games/games.action";
import { setHeaderMode } from "../../redux/header/header.action";

import { selectAllGames } from "../../redux/games/games.selectors";

import { routeNames } from "../../services/routeService";
import logger from "../../services/logService";

import GenreHeader from "../../components/genres/genre-header.component";
import GamesRow from "../../components/games/games-row/games-row.component";
import BannerGames from "../../components/games/games-banner/games-banner.component";
import Page from "../page";

import ArrowIconMB from "../../assets/images/icon/arrow-back-marineblue.png";

import "./games.styles.scss";
import "../game-details/game-details.styles.scss";

const GamesPage = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const games = useSelector(selectAllGames);

  const setGamesAndGenres = useCallback(async () => {
    try {
      dispatch(setHeaderMode(pathname));
      dispatch(getAllGames());
      dispatch(getAllGenres());
    } catch (ex) {
      logger.logError("ex-games", ex);
      //tast error
    }
  }, [dispatch, pathname]);

  useEffect(() => {
    setGamesAndGenres();
  }, [setGamesAndGenres]);

  return (
    <Page title={t("Games_Page")}>
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
                    {t("More")}
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
    </Page>
  );
};

export default GamesPage;
