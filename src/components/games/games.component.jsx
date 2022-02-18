import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAllGenres } from "../../redux/genres/genres.action";

import GenreHeader from "./genre-header.component";
import RowGames from "./games.row.component";
import BannerGames from "./games.banner.component";

import "./games.styles.scss";

const Games = () => {
  const dispatch = useDispatch();
  const games = useSelector((state) => state.games.allGames);

  //Mock
  let genre = "همه";

  useEffect(() => {
    dispatch(getAllGenres());
  }, []);

  return (
    <div>
      <GenreHeader />
      <div className="games-page">
        {genre === "همه"
          ? games.map((category) => {
              return category.enumerate_type === 1 ? (
                <>
                  <div className="category-container">
                    <span className="category-title">{category.title}</span>
                    <div>
                      <span className="more-button">بیشتر</span>
                      <span className="more-icon">
                        <i className="fa fa-solid fa-chevron-left" />
                      </span>
                    </div>
                  </div>
                  <RowGames key={category.id} category={category} />
                </>
              ) : (
                <>
                  <div className="category-container">
                    <span className="category-title">{category.title}</span>
                  </div>
                  <BannerGames key={category.id} category={category} />
                </>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default Games;
