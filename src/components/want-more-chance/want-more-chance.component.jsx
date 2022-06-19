import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setWantMoreChanceModaMode } from "../../redux/wheel/wheel.action";

import { selectIsWantMorreChanceModalOpen } from "../../redux/wheel/wheel.selectors";

import wantMoreChanceModalData from "../mock/want-more-chance.mock";

import CloseIcon from "./../../assets/images/icon/close-icon.png";
import Roulette from "./../../assets/images/icon/roulette.png";
import CheckedTangerine from "./../../assets/images/icon/check-tangerine.png";

import "./want-more-chance.styles.scss";

const WantMoreChance = () => {
  const dispatch = useDispatch();

  const isWantMoreChanceModalOpen = useSelector(
    selectIsWantMorreChanceModalOpen
  );

  const handleWantMoreChanceModalClose = () => {
    dispatch(setWantMoreChanceModaMode(false));
  };

  return isWantMoreChanceModalOpen ? (
    <div className="want-more-chance-container">
      <div className="want-more-chance">
        {/* close Icon */}
        <div
          className="want-more-chance-close-container"
          onClick={handleWantMoreChanceModalClose}
        >
          <img
            src={CloseIcon}
            alt="close-modal"
            className="want-more-chance-close"
          />
        </div>
        {/*  */}
        <img
          src={Roulette}
          alt="roulette"
          className="want-more-chance-roulette"
        />
        <p className="want-more-chance-header">
          از طریق فعالیت‌های زیر می‌تونی شانس چرخوندن گردونه را دریافت کنی
        </p>
        <div className="want-more-chance-content-list">
          {wantMoreChanceModalData.map((item) => (
            <React.Fragment key={item.id}>
              <li className="list">
                <img src={CheckedTangerine} alt="checked" />
                <span>{item.content}</span>
              </li>
              <div className="divider" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  ) : null;
};

export default WantMoreChance;
