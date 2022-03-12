import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

import { getAllGenres } from "../../redux/genres/genres.action";
import { setHeaderMode } from "../../redux/header/header.action";

import GenreHeader from "../../components/genres/genre-header.component";
import RowGames from "../../components/games/games.row.component";
import BannerGames from "../../components/games/games.banner.component";

import "./games.styles.scss";

const GamesPage = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const games = useSelector((state) => state.games.allGames);

  useEffect(() => {
    dispatch(setHeaderMode(pathname));
    dispatch(getAllGenres());
  }, []);

  return (
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
  );
};

export default GamesPage;
