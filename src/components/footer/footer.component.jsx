import React from "react";

import { NavLink } from "react-router-dom";
import { useLocation } from "react-router";

import { ReactComponent as LeaderBoardLogo } from "../../assets/images/footer/inactive/leader-board.svg";
import { ReactComponent as GamesLogo } from "../../assets/images/footer/inactive/games.svg";
import { ReactComponent as WheelLogo } from "../../assets/images/footer/inactive/wheel.svg";
import { ReactComponent as ShopLogo } from "../../assets/images/footer/inactive/shop.svg";
import { ReactComponent as ProfileLogo } from "../../assets/images/footer/inactive/profile.svg";

import { ReactComponent as ActiveLeaderBoardLogo } from "../../assets/images/footer/active/leader-board-active.svg";
import { ReactComponent as ActiveGamesLogo } from "../../assets/images/footer/active/games-active.svg";
import { ReactComponent as ActiveWheelLogo } from "../../assets/images/footer/active/wheel-active.svg";
import { ReactComponent as ActiveShopLogo } from "../../assets/images/footer/active/shop-active.svg";
import { ReactComponent as ActiveProfileLogo } from "../../assets/images/footer/active/profile-active.svg";

import "./footer.styles.scss";

const Footer = () => {
  const { pathname } = useLocation();

  return (
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
                {pathname === "/profile" ? (
                  <ActiveProfileLogo />
                ) : (
                  <ProfileLogo />
                )}
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
                {pathname === "/shop" ? <ActiveShopLogo /> : <ShopLogo />}
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
                {pathname === "/lucky-wheel" ? (
                  <ActiveWheelLogo />
                ) : (
                  <WheelLogo />
                )}
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
                {pathname === "/games" ? <ActiveGamesLogo /> : <GamesLogo />}
              </span>
              <span className="text">بازی‌ها</span>
            </NavLink>
          </li>
          <li className="list">
            <NavLink
              to="/leaderboard"
              className={({ isActive }) => (isActive ? "selected" : "")}
            >
              <span className="icon">
                {pathname === "/leaderboard" ? (
                  <ActiveLeaderBoardLogo />
                ) : (
                  <LeaderBoardLogo />
                )}
              </span>
              <span className="text">رده‌بندی</span>
            </NavLink>
          </li>
          <div className="indicator"></div>
        </ul>
      </div>
    </>
  );
};

export default Footer;
