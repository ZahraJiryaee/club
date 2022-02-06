import React, { useEffect, useState } from "react";

import { ReactComponent as StarLogo } from "../../assets/images/header/star.svg";
import { ReactComponent as BurgerIcon } from "../../assets/images/header/burger-icon.svg";
import { ReactComponent as GamesIcon } from "../../assets/images/footer/games.svg";

import "./header.styles.scss";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header>
      <a href="#" className="logo">
        Club
      </a>
      <div className="group">
        <ul className={`${toggleMenu ? "active" : ""} navigat`}>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
        <ul className="action">
          <li>
            <a href="#">
              <StarLogo />
            </a>
          </li>
          <div
            className={`${toggleMenu ? "active" : ""} menu-toggle`}
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            <BurgerIcon className="toggle-icon" />
            <GamesIcon className="toggle-icon" />
          </div>
        </ul>
      </div>
    </header>
  );
};

export default Header;
