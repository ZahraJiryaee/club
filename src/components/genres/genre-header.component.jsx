import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import "./genre-header.styles.scss";

const GenreHeader = () => {
  const genres = useSelector((state) => state.genres.allGenres);

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
          <ul className="genre-title">
            <NavLink
              to="/games"
              className={({ isActive }) =>
                isActive ? "selected" : "not-selected"
              }
            >
              <li>همه</li>
            </NavLink>
            {genres.map((genre) => {
              return (
                <NavLink
                  key={genre.id}
                  to={`/genre/${genre.id}`}
                  className={({ isActive }) =>
                    isActive ? "selected" : "not-selected"
                  }
                >
                  <li>{genre.title}</li>
                </NavLink>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GenreHeader;
