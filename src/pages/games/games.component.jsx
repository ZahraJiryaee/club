import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";

import { getAllGenres } from "../../redux/genres/genres.action";
import { getAllGames } from "../../redux/games/games.action";
import { setHeaderMode } from "../../redux/header/header.action";

import Loading from "../../components/common/Loading.component";

import GenreHeader from "../../components/genres/genre-header.component";
import RowGames from "../../components/games/games.row.component";
import BannerGames from "../../components/games/games.banner.component";

import "./games.styles.scss";

const GamesPage = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const games = useSelector((state) => state.games.allGames);

  const { t } = useTranslation();

  const [loading, setLoading] = useState(true);

  const setGamesAndGenres = useCallback(async () => {
    try {
      await dispatch(setHeaderMode(pathname));
      await dispatch(getAllGames());
      await dispatch(getAllGenres());
    } catch (ex) {
      console.log(ex);
      //tast error
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    setGamesAndGenres();
  }, [setGamesAndGenres]);

  return (
    <>
      {loading ? (
        <Loading
          type="spinningBubbles"
          color="#3399de"
          height="50px"
          width="50px"
          text={t("Please wait...")}
        />
      ) : (
        <div>
          <GenreHeader />
          <div className="games-page">
            {games.map((category) => {
              return category.enumerate_type === 1 ? (
                <div key={category.id}>
                  <div className="category-container">
                    <span className="category-title">{category.title}</span>
                    <div>
                      <Link
                        className="more-button"
                        to={`/games/category/${category.id}`}
                      >
                        <span>بیشتر</span>
                      </Link>
                      <Link to={`/category/${category.id}`}>
                        <span className="more-icon">
                          <i className="fa fa-solid fa-chevron-left" />
                        </span>
                      </Link>
                    </div>
                  </div>
                  <RowGames category={category} />
                </div>
              ) : (
                <div key={category.id}>
                  <div className="category-container">
                    <span className="category-title">{category.title}</span>
                  </div>
                  <BannerGames category={category} />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default GamesPage;
