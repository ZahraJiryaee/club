import React from "react";

import { NavLink } from "react-router-dom";

import { ReactComponent as LeaderBoardLogo } from "../../assets/images/footer/leader-board.svg";
import { ReactComponent as GamesLogo } from "../../assets/images/footer/games.svg";
import { ReactComponent as WheelLogo } from "../../assets/images/footer/wheel.svg";
import { ReactComponent as ShopLogo } from "../../assets/images/footer/shop.svg";
import { ReactComponent as ProfileLogo } from "../../assets/images/footer/profile.svg";

import "./footer.styles.scss";

const Footer = () => (
  <>
    <p className="divider"></p>
    <div className="footer-navigation">
      <ul>
        <li className="list">
          <NavLink
            to="/profile"
            className={({ isActive }) => (isActive ? "selected" : "")}
          >
            <span className="icon">
              <ProfileLogo />
            </span>
            <span className="text">پروفایل</span>
          </NavLink>
        </li>
        <li className="list">
          <NavLink
            to="/shop"
            className={({ isActive }) => (isActive ? "selected" : "")}
          >
            <span className="icon">
              <ShopLogo />
            </span>
            <span className="text">فروشگاه</span>
          </NavLink>
        </li>
        <li className="list active">
          <NavLink
            to="/lucky-wheel"
            className={({ isActive }) => (isActive ? "selected" : "")}
          >
            <span className="icon">
              <WheelLogo />
            </span>
            <span className="text">گردونه</span>
          </NavLink>
        </li>
        <li className="list">
          <NavLink
            to="/games"
            className={({ isActive }) => (isActive ? "selected" : "")}
          >
            <span className="icon">
              <GamesLogo />
            </span>
            <span className="text">بازیها</span>
          </NavLink>
        </li>
        <li className="list">
          <NavLink
            to="/leaderboard"
            className={({ isActive }) => (isActive ? "selected" : "")}
          >
            <span className="icon">
              <LeaderBoardLogo />
            </span>
            <span className="text">رده بندی</span>
          </NavLink>
        </li>
        <div className="indicator"></div>
      </ul>
    </div>
  </>
);

export default Footer;
