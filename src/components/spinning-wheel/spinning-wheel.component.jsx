import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import { setHeaderMode } from "../../redux/header/header.action";

import logger from "../../services/logService";

import Arrow from "./../../assets/images/lucky-wheel/arrow/arrow.png";

import "./spinning-wheel.styles.scss";

const SpinningWheel = ({
  bonusList,
  userChanceConuter,
  bonusId,
  isWheelSpinning,
}) => {
  logger.logInfo("bonusList-spinning-wheel:", bonusList);
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(setHeaderMode(pathname));
  }, [pathname, dispatch]);

  const colors = [
    "linear-gradient(180deg, #fe8816, #f4c446)",
    "linear-gradient(to bottom, #003069, #007aff)",
  ];

  const wheelvars = {
    "--wheel-items-length": bonusList.length,
    "--selectedd-item": bonusId,
    "--item-width": "",
  };
  return (
    <div className="spinning-wheel-component">
      <button id="spin">
        <span className="chance-number">{userChanceConuter}</span>
        <br />
        <span className="chance-text">{t("Chance")}</span>
      </button>
      <img className="arrow" src={Arrow} alt="lucky-wheel-pointer" />

      <div className="wheel-outer-container">
        <div className="wheel-inner-container">
          <div className="inner-border">
            <div
              className={`wheel ${
                isWheelSpinning === true ? "spinning-wheel" : ""
              }`}
              style={wheelvars}
            >
              {bonusList.map((item, index) => (
                <div
                  className="item"
                  key={index}
                  style={{
                    "--wheel-item-number": index,
                    "--wheel-item-color": index % 2 ? colors[0] : colors[1],
                  }}
                >
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpinningWheel;
