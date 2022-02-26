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

  const MapUrlToIndicatorNum = () => {
    switch (pathname) {
      case "/profile":
        return -2;
      case "/shop":
        return -1;
      case "/lucky-wheel":
        return 0;
      case "/games":
        return 1;
      case "/leaderboard":
        return 2;
      default:
      // code block
    }
  };

  return (
    <>
      <div
        className="footer-wrapper"
        style={{ "--footer-indicator-number": MapUrlToIndicatorNum() }}
      >
        <div className="footer-container"></div>
        <div className="footer-navigation">
          <ul>
            <li className={`list ${pathname === "/profile" ? "active" : ""}`}>
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
            <li className={`list ${pathname === "/shop" ? "active" : ""}`}>
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
            <li
              className={`list ${pathname === "/lucky-wheel" ? "active" : ""}`}
            >
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
            <li className={`list ${pathname === "/games" ? "active" : ""}`}>
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
            <li
              className={`list ${pathname === "/leaderboard" ? "active" : ""}`}
            >
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
      </div>
    </>
  );
};

export default Footer;
