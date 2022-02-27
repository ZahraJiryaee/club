import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";

import { getSearchedItem } from "../../redux/games/games.action";

import "./genre-header.styles.scss";

const GenreHeader = () => {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genres.allGenres);
  const [navbarGenreFixed, setNavbarGenreFixed] = React.useState("");
  const [searchField, setSearchField] = React.useState("");

  const handelSearch = async () => {
    dispatch(getSearchedItem(searchField));
    setSearchField("");
  };

  useEffect(() => {
    const updateNavbarGenreFixed = () => {
      if (
        document.documentElement.scrollTop >= 30 ||
        document.body.scrollTop >= 30
      ) {
        setNavbarGenreFixed("genre-fixed");
      } else if (
        document.documentElement.scrollTop < 30 ||
        document.body.scrollTop < 30
      ) {
        setNavbarGenreFixed("");
      }
    };

    window.addEventListener("scroll", updateNavbarGenreFixed);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarGenreFixed);
    };
  });

  return (
    <>
      <div className={`genre-header ${navbarGenreFixed}`}>
        <div className="search-box-container">
          <div className="search-box">
            <Link onClick={handelSearch} to={`/search/${searchField}`}>
              <i className="fa fa-search search-icon" />
            </Link>
            <input
              value={searchField}
              className="search-text"
              type="text"
              placeholder="جستجو بازی‌ها"
              onChange={(e) => setSearchField(e.target.value)}
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
      {navbarGenreFixed === "genre-fixed" && (
        <div className="spacer">&nbsp;</div>
      )}
    </>
  );
};

export default GenreHeader;
