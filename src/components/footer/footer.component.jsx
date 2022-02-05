import React from "react";
import { ReactComponent as LeaderBoardLogo } from "../../assets/images/footer/leader-board.svg";
import { ReactComponent as GamesLogo } from "../../assets/images/footer/games.svg";
import { ReactComponent as WheelLogo } from "../../assets/images/footer/wheel.svg";
import { ReactComponent as ShopLogo } from "../../assets/images/footer/shop.svg";
import { ReactComponent as ProfileLogo } from "../../assets/images/footer/profile.svg";

import "./footer.styles.scss";

const Footer = () => (
  <div className="navigation">
    <ul>
      <li className="list">
        <a href="#">
          <span className="icon">
            <ProfileLogo />
          </span>
          <span className="text">پروفایل</span>
        </a>
      </li>
      <li className="list">
        <a href="#">
          <span className="icon">
            <ShopLogo />
          </span>
          <span className="text">فروشگاه</span>
        </a>
      </li>
      <li className="list active">
        <a href="#">
          <span className="icon">
            <WheelLogo />
          </span>
          <span className="text">گردونه</span>
        </a>
      </li>
      <li className="list">
        <a href="#">
          <span className="icon">
            <GamesLogo />
          </span>
          <span className="text">بازیها</span>
        </a>
      </li>
      <li className="list">
        <a href="#">
          <span className="icon">
            <LeaderBoardLogo />
          </span>
          <span className="text">رده بندی</span>
        </a>
      </li>
      <div className="indicator"></div>
    </ul>
  </div>
);

export default Footer;
