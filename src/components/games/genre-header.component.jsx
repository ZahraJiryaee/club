import React from "react";
import { useSelector } from "react-redux";

import "./genre-header.styles.scss";

const GenreHeader = () => {
  const genres = useSelector((state) => state.genres.allGenres);

  console.log("genres");
  console.log(genres);

  return (
    <div>
      <div className="game-header">
        <div className="search-box-container">
          <div className="search-box">
            <i className="fa fa-search search-icon" />
            <input
              className="search-text"
              type="text"
              placeholder="جستجو بازی‌ها"
            />
          </div>
        </div>
        <div className="genres-container">
          <ul>
            <li className="current">همه</li>
            {genres.map((genre) => {
              return (
                <li key={genre.id}>
                  <a>{genre.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GenreHeader;
