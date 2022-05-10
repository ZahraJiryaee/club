import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { ReactComponent as StarLogo } from "../../assets/images/header/star.svg";
import Logo from "../../assets/images/icon/medrick-logo.png";
import ArrowBack from "../../assets/images/icon/arrow-back.png";

import { sidebarNavigation, headerNavigation } from "../../model/header.model";

import "./header.styles.scss";

const Header = () => {
  const currentUser = useSelector((state) => state.user.currentUser);

  const headerMode = useSelector((state) => state.header.headerMode);
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
          <p className="version">نسخه 1.1.1</p>
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
                    isActive ? "header-nav-selected" : ""
                  }
                >
                  {hn.title}
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
