import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { ReactComponent as StarLogo } from "../../assets/images/header/star.svg";
import Logo from "../../assets/images/icon/medrick-logo.png";
import ArrowBack from "../../assets/images/icon/arrow-back.png";

import { sidebarNavigation, headerNavigation } from "../../model/header.model";

import "./header.styles.scss";

const Header = () => {
  const { t } = useTranslation();

  const currentUser = useSelector((state) => state.user.currentUser);
  const headerMode = useSelector((state) => state.header.headerMode);
  const genres = useSelector((state) => state.genres.allGenres);

  const [toggleMenu, setToggleMenu] = useState(false);
  const [scoreCounter, setScoreCounter] = useState(0);

  useEffect(() => {
    if (currentUser) setScoreCounter(currentUser.score_counter);
  }, [currentUser]);

  return (
    <header className={headerMode}>
      {/* ---------------------- Sidebar --------------------------- */}
      <div className="sidebar-group">
        <ul className={`${toggleMenu ? "active" : ""} sidebar-navigation`}>
          {sidebarNavigation.map((sn) => (
            <li key={sn.id}>
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
        <NavLink to="/lucky-wheel">
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
              <li key={hn.id}>
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
                      <div class="subnav-content">
                        {genres.map((genre) => {
                          return (
                            <li>
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
