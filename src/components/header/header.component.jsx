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
      <div className="sidebar-group">
        <ul className={`${toggleMenu ? "active" : ""} sidebar-navigation`}>
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? "sidebar-nav-selected" : ""
              }
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>اتصال به بازی‌ها</span>
                <span>
                  <i className="fa fa-solid fa-chevron-left" />
                </span>
              </div>
              <hr />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                isActive ? "sidebar-nav-selected" : ""
              }
            >
              راهنمای استفاده از کدهای جایزه مدریک
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                isActive ? "sidebar-nav-selected" : ""
              }
            >
              تماس با ما
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                isActive ? "sidebar-nav-selected" : ""
              }
            >
              درباره ما
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                isActive ? "sidebar-nav-selected" : ""
              }
            >
              سوالات متداول
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="logo">
        <NavLink to="/home">
          <img src={Logo} alt="navbar-logo" />
        </NavLink>
      </div>
      <hr className="header-divider" />
      <div className="action">
        <div className="score">
          <StarLogo />
          <span className="score-text">500</span>
        </div>
      </div>

      <div className="test">
        <div className="header-group">
          <ul className={`${toggleMenu ? "active" : ""} header-navigation`}>
            <li>
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  isActive ? "header-nav-selected" : ""
                }
              >
                گردونه
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  isActive ? "header-nav-selected" : ""
                }
              >
                بازی ها
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  isActive ? "header-nav-selected" : ""
                }
              >
                فروشگاه
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  isActive ? "header-nav-selected" : ""
                }
              >
                رده‌بندی
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact-us"
                className={({ isActive }) =>
                  isActive ? "header-nav-selected" : ""
                }
              >
                پروفایل
              </NavLink>
            </li>
          </ul>
        </div>
        <div
          className={`${toggleMenu ? "active" : ""} menu-toggle`}
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <BurgerIcon className="toggle-icon" />
          <CloseIcon className="toggle-icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
