import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import "./genre-header.styles.scss";

const GenreHeader = () => {
  const genres = useSelector((state) => state.genres.allGenres);
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
            <li>
              <NavLink
                to="/games"
                // style={{ textDecoration: "none", color: "#182737" }}
                className={({ isActive }) => (isActive ? "current" : "")}
              >
                همه
              </NavLink>
            </li>
            {genres.map((genre) => {
              return (
                <li key={genre.id}>
                  <NavLink
                    to={`/genre/${genre.id}`}
                    // style={{ textDecoration: "none", color: "#182737" }}
                    className={({ isActive }) => (isActive ? "current" : "")}
                  >
                    {genre.title}
                  </NavLink>
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
