import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { routeNames } from "../../services/routeService";

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
  const { t } = useTranslation();

  const MapUrlToIndicatorNum = () => {
    if (pathname.includes(`${routeNames.profile}`)) return -2;
    else if (pathname.includes(`${routeNames.shop}`)) return -1;
    else if (pathname.includes(`${routeNames.lucky_wheel}`)) return 0;
    else if (pathname.includes(`${routeNames.game}`)) return 1;
    else if (pathname.includes(`${routeNames.leaderboard}`)) return 2;
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
              className={`list ${
                pathname.includes(`${routeNames.profile}`) ? "active" : ""
              }`}
            >
              <NavLink to="/profile">
                <span className="icon">
                  {pathname.includes(`${routeNames.profile}`) ? (
                    <ActiveProfileLogo />
                  ) : (
                    <ProfileLogo />
                  )}
                </span>
                <span className="text">{t("Profile")}</span>
              </NavLink>
            </li>
            <li
              className={`list ${
                pathname.includes(`${routeNames.shop}`) ? "active" : ""
              }`}
            >
              <NavLink to={`/${routeNames.shop}`}>
                <span className="icon">
                  {pathname === `/${routeNames.shop}` ? (
                    <ActiveShopLogo />
                  ) : (
                    <ShopLogo />
                  )}
                </span>
                <span className="text">{t("Shop")}</span>
              </NavLink>
            </li>
            <li
              className={`list ${
                pathname.includes(`${routeNames.lucky_wheel}`) ? "active" : ""
              }`}
            >
              <NavLink to={`/${routeNames.lucky_wheel}`}>
                <span className="icon">
                  {pathname === `/${routeNames.lucky_wheel}` ? (
                    <ActiveWheelLogo />
                  ) : (
                    <WheelLogo />
                  )}
                </span>
                <span className="text">{t("Wheel")}</span>
              </NavLink>
            </li>
            <li
              className={`list ${
                pathname.includes(`${routeNames.game}`) ? "active" : ""
              }`}
            >
              <NavLink to={`/${routeNames.game}/genre/all`}>
                <span className="icon">
                  {pathname.includes(`${routeNames.game}`) ? (
                    <ActiveGamesLogo />
                  ) : (
                    <GamesLogo />
                  )}
                </span>
                <span className="text">{t("Games")}</span>
              </NavLink>
            </li>
            <li
              className={`list ${
                pathname.includes(`${routeNames.leaderboard}`) ? "active" : ""
              }`}
            >
              <NavLink to={`/${routeNames.leaderboard}`}>
                <span className="icon">
                  {pathname === `/${routeNames.leaderboard}` ? (
                    <ActiveLeaderBoardLogo />
                  ) : (
                    <LeaderBoardLogo />
                  )}
                </span>
                <span className="text">{t("Leaderboard")}</span>
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
