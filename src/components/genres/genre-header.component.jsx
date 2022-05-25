import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";

import { getSearchedItem } from "../../redux/games/games.action";

import ComponentInternalHeader from "../compoonent-internal-header/compoonent-internal-header.component";
import SearchBox from "../search-box/search-box.component";

import "./genre-header.styles.scss";

const GenreHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const genres = useSelector((state) => state.genres.allGenres);

  const [searchField, setSearchField] = React.useState("");

  const handelSearch = () => {
    setSearchField("");
    dispatch(getSearchedItem(searchField));
    return navigate(`/games/search/${searchField}`);
  };

  const handleSetSearchField = (value) => {
    setSearchField(value);
  };

  return (
    <>
      <ComponentInternalHeader setFixer>
        {/* Search */}
        <SearchBox
          onSearchIconClick={handelSearch}
          searchField={searchField}
          setSearchField={handleSetSearchField}
          searchInputPlaceHolder="جستجو بازی‌ها"
        />
        {/* Genre */}
        <div className="genres-container">
          <ul className="genre-title">
            <NavLink
              to="/games/genre/all"
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
                  to={`/games/genre/${genre.id}`}
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
      </ComponentInternalHeader>
    </>
  );
};

export default GenreHeader;
