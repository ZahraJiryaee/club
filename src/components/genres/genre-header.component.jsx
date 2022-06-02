import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { getSearchedItem } from "../../redux/games/games.action";

import { routeNames } from "../../services/routeService";

import ComponentInternalHeader from "../compoonent-internal-header/compoonent-internal-header.component";
import SearchBox from "../search-box/search-box.component";

import "./genre-header.styles.scss";

const GenreHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const genres = useSelector((state) => state.genres.allGenres);

  const [searchField, setSearchField] = React.useState("");

  const handelSearch = () => {
    setSearchField("");
    dispatch(getSearchedItem(searchField));
    return navigate(`/${routeNames.game}/search/${searchField}`);
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
          searchInputPlaceHolder={t("Search_In_Games")}
        />
        {/* Genre */}
        <div className="genres-container">
          <ul className="genre-title">
            <NavLink
              to={`/${routeNames.game}/genre/all`}
              className={({ isActive }) =>
                isActive ? "selected" : "not-selected"
              }
            >
              <li>{t("All")}</li>
            </NavLink>
            {genres.map((genre) => {
              return (
                <NavLink
                  key={genre.id}
                  to={`/${routeNames.game}/genre/${genre.id}`}
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
