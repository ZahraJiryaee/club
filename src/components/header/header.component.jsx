import React, { useState } from "react";

import { NavLink } from "react-router-dom";

import { ReactComponent as StarLogo } from "../../assets/images/header/star.svg";
import { ReactComponent as BurgerIcon } from "../../assets/images/header/burger-icon.svg";
import { ReactComponent as CloseIcon } from "../../assets/images/header/close.svg";
import Logo from "../../assets/images/header/logo.png";

import "./header.styles.scss";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header>
      <div
        className={`${toggleMenu ? "active" : ""} menu-toggle`}
        onClick={() => setToggleMenu(!toggleMenu)}
      >
        <BurgerIcon className="toggle-icon" />
        <CloseIcon className="toggle-icon" />
      </div>
      <div className="logo">
        <NavLink to="/home">
          <img src={Logo} alt="navbar-logo" />
        </NavLink>
      </div>
      <div className="group">
        <ul className={`${toggleMenu ? "active" : ""} navigat`}>
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? "header-nav-selected" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                isActive ? "header-nav-selected" : ""
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                isActive ? "header-nav-selected" : ""
              }
            >
              Contact Us
            </NavLink>
          </li>
        </ul>

        <div className="action">
          <div className="score">
            <span className="score-text">500</span>
            <StarLogo />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
