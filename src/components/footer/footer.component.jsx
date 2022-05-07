import React from "react";

import { NavLink, useLocation } from "react-router-dom";

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
    if (pathname.includes("profile")) return -2;
    else if (pathname.includes("shop")) return -1;
    else if (pathname.includes("lucky-wheel")) return 0;
    else if (pathname.includes("games")) return 1;
    else if (pathname.includes("leaderboard")) return 2;
  };

  return (
    <>
      <div
        className="footer-wrapper"
        style={{ "--footer-indicator-number": MapUrlToIndicatorNum() }}
      >
        <div className="footer-filler">
          <div className="left"></div>
          <div className="middle"></div>
          <div className="right"></div>
        </div>
        <div className="footer-container"></div>
        <div className="footer-navigation">
          <ul>
            <li
              className={`list ${pathname.includes("profile") ? "active" : ""}`}
            >
              <NavLink to="/profile">
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
            <li className={`list ${pathname.includes("shop") ? "active" : ""}`}>
              <NavLink to="/shop">
                <span className="icon">
                  {pathname === "/shop" ? <ActiveShopLogo /> : <ShopLogo />}
                </span>
                <span className="text">فروشگاه</span>
              </NavLink>
            </li>
            <li
              className={`list ${
                pathname.includes("lucky-wheel") ? "active" : ""
              }`}
            >
              <NavLink to="/lucky-wheel">
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
            <li
              className={`list ${pathname.includes("games") ? "active" : ""}`}
            >
              <NavLink to="/games/genre/all">
                <span className="icon">
                  {pathname.includes("games") ? (
                    <ActiveGamesLogo />
                  ) : (
                    <GamesLogo />
                  )}
                </span>
                <span className="text">بازی‌ها</span>
              </NavLink>
            </li>
            <li
              className={`list ${
                pathname.includes("leaderboard") ? "active" : ""
              }`}
            >
              <NavLink to="/leaderboard">
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
