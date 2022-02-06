import React, { useEffect, useState } from "react";

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
        <a href="#">
          <img src={Logo} />
        </a>
      </div>
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

        <div className="action">
          <a href="#">
            <StarLogo />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
