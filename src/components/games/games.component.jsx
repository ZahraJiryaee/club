import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getAllGenres,
  getSelectedGenre,
} from "../../redux/genres/genres.action";

import GenreHeader from "./genre-header.component";
import RowGames from "./games.row.component";
import BannerGames from "./games.banner.component";
import GenrePage from "./games.genre.component";

import "./games.styles.scss";

const Games = () => {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.games.allGames);

  //Mock
  let genre = "هههمه";
  let id = "c91cb401-1bec-4d0a-b77a-503b5a6c6fb9";

  useEffect(() => {
    dispatch(getAllGenres());
    dispatch(getSelectedGenre(id));
  }, []);

  return (
    <div>
      <GenreHeader />
      <div className="games-page">
        {genre === "همه" ? (
          games.map((category) => {
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
          })
        ) : (
          <GenrePage />
        )}
      </div>
    </div>
  );
};

export default Games;
