import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectHeaderMode } from "../../redux/header/header.selectors";
import { selectAllGenres } from "../../redux/genres/genres.seletors";

import { ReactComponent as StarLogo } from "../../assets/images/header/star.svg";
import Logo from "../../assets/images/icon/medrick-logo.png";
import ArrowBack from "../../assets/images/icon/arrow-back.png";

import { sidebarNavigation, headerNavigation } from "../../model/header.model";
import BarLoader from "../common/bar-loader/bar-loader.component";

import generateUniqueId from "../../services/generateUniqueId";
import { routeNames } from "../../services/routeService";

import "./header.styles.scss";

const Header = () => {
  const { t } = useTranslation();

  const currentUser = useSelector(selectCurrentUser);
  const headerMode = useSelector(selectHeaderMode);
  const genres = useSelector(selectAllGenres);

  const [toggleMenu, setToggleMenu] = useState(false);
  const [scoreCounter, setScoreCounter] = useState(0);

  useEffect(() => {
    setScoreCounter(currentUser ? currentUser.score_counter : "?");
  }, [currentUser]);

  return (
    <header className={headerMode}>
      <BarLoader />
      {/* ---------------------- Sidebar --------------------------- */}
      <div className="sidebar-group">
        <ul className={`${toggleMenu ? "active" : ""} sidebar-navigation`}>
          {sidebarNavigation.map((sn) => (
            <li key={generateUniqueId("sidebar-navigation")}>
              <NavLink
                to={`/${sn.link}`}
                className={({ isActive }) =>
                  isActive ? "sidebar-nav-selected" : ""
                }
              >
                <span className="sidebar-text">{sn.title}</span>
                <img
                  className="sidebar-arrow-icon"
                  src={ArrowBack}
                  alt="arrow-back"
                />
              </NavLink>
              <hr />
            </li>
          ))}
          <p className="version">{t("Version")} 1.1.1</p>
        </ul>
      </div>
      {/* ---------------------- Logo --------------------------- */}
      <div className="logo">
        <NavLink to={`/${routeNames.lucky_wheel}`}>
          <img src={Logo} alt="navbar-logo" />
        </NavLink>
      </div>
      {/* ---------------------- Divider --------------------------- */}
      <hr className="header-divider" />
      {/* ---------------------- Score --------------------------- */}
      <div className="action">
        <div className="score">
          <StarLogo />
          <span className="score-text">{scoreCounter}</span>
        </div>
      </div>
      {/* ---------------------- Navbar - Menu Toggle --------------------------- */}
      <div className="header-nav-toggle-container">
        <div className="header-group">
          <ul className={`${toggleMenu ? "active" : ""} header-navigation`}>
            {headerNavigation.map((hn) => (
              <li key={generateUniqueId("header-navigation")}>
                <NavLink
                  to={`/${hn.link}`}
                  className={({ isActive }) =>
                    isActive ? `${"header-nav-selected"} ${"genre"}` : "genre"
                  }
                >
                  {hn.id === "hn2" ? (
                    <>
                      <>
                        {hn.title}
                        <i className="fa fa-caret-down" />
                      </>
                      <div className="subnav-content">
                        {genres.map((genre) => {
                          return (
                            <li key={genre.id}>
                              <NavLink
                                to={`/games/genre/${genre.id}`}
                                className={({ isActive }) =>
                                  isActive ? "selected" : ""
                                }
                              >
                                {genre.title}
                              </NavLink>
                            </li>
                          );
                        })}
                      </div>
                    </>
                  ) : (
                    hn.title
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div
          className={`${toggleMenu ? "active" : ""} menu-toggle`}
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <div className="toggle-icon burgur-icon"></div>
          <div className="toggle-icon close-icon"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
