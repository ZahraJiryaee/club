import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllGenres } from "../../redux/genres/genres.action";

import GenreHeader from "../genres/genre-header.component";
import RowGames from "./games.row.component";
import BannerGames from "./games.banner.component";

import "./games.styles.scss";

const GamesPage = () => {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.games.allGames);

  useEffect(() => {
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
                  <span className="more-button">بیشتر</span>
                  <span className="more-icon">
                    <i className="fa fa-solid fa-chevron-left" />
                  </span>
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
