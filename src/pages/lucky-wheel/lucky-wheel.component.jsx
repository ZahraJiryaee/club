import React, { useEffect, useState, useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import SpinningWheel from "../../components/spinning-wheel/spinning-wheel.component";
import Page from "../page";

import {
  getBonusList,
  setUserBonus,
  setOpenWheelModal,
  setWantMoreChanceModaMode,
} from "../../redux/wheel/wheel.action";
import { setHeaderMode } from "../../redux/header/header.action";

import {
  selectCurrentUser,
  selectIsLoading,
} from "../../redux/user/user.selectors";
import { selectBonusList } from "../../redux/wheel/wheel.selectors";

import HandPointUp from "./../../assets/images/icon/hand-point-up.png";

import "./lucky-wheel.component.scss";

const LuckyWheelPage = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { t } = useTranslation();

  const currentUser = useSelector(selectCurrentUser);
  const bonusList = useSelector(selectBonusList);
  const isLoading = useSelector(selectIsLoading);

  const [userChanceConuter, setUserChanceConuter] = useState(0);
  const [wheelItem, setWheelItem] = useState(6);

  useEffect(() => {
    dispatch(setHeaderMode(pathname));
  }, [dispatch, pathname]);

  const toggleModal = () => {
    dispatch(setOpenWheelModal(true));
  };

  useEffect(() => {
    console.log("isLoading::", isLoading);
    dispatch(getBonusList());
  }, [dispatch, isLoading]);

  useEffect(() => {
    console.log("currentUser-luck:", currentUser);
    setUserChanceConuter(currentUser ? currentUser.chance_counter : "?");
  }, [currentUser]);

  const [isWheelSpinning, setIsWheelSpinning] = useState(false);
  const [bonusId, setBonusId] = useState(0);

  const handleWheelSpinBtnClick = () => {
    let result = dispatch(setUserBonus());
    result.then((response) => {
      if (response.status === 200) {
        const bonusId = bonusList.findIndex(
          (bonus) => bonus.id === response.data.id
        );
        console.log("bonusId:", bonusId);
        setBonusId(bonusId);

        spinHandler();

        setTimeout(() => {
          toggleModal();
        }, 10000);
      } else if (response.status === 403) {
        // popup optopns to increase chances
      } else {
        // toast
      }
    });
  };

  const isSpinOnItemOne = useRef(false); //controls wheel goes back to item1 after every spin
  const spinHandler = useCallback(() => {
    console.log("isSpinOnItemOne.current:", isSpinOnItemOne.current);
    if (isSpinOnItemOne.current === true) {
      setIsWheelSpinning(true);
      isSpinOnItemOne.current = false;
    } else {
      isSpinOnItemOne.current = true;
      setIsWheelSpinning(false);
      setTimeout(spinHandler, 450);
    }
  }, []);

  const handleWantMoreChanceClick = () => {
    dispatch(setWantMoreChanceModaMode(true));
  };

  return (
    <Page title={t("Lucky_Wheel_Page")}>
      <div className="blue-bg outer-box">
        {/* ---------------- Page Upper Txt ------------------ */}
        <div className="main-header">
          <h2 className="header-txt center-absolute">
            {t("Lucky_Wheel_Header_Txt")}
          </h2>
          <p className="subheader-txt center-absolute">
            {t("Lucky_Wheel_Sub_Header_Txt_Lin1")}
            <br />
            {t("Lucky_Wheel_Sub_Header_Txt_Lin2")}
          </p>
        </div>
        {/* ---------------- Wheel ------------------ */}
        <div className="wheel-component center-absolute">
          <SpinningWheel
            bonusList={bonusList}
            bonusId={bonusId}
            wheelItem={wheelItem}
            userChanceConuter={userChanceConuter}
            setWheelItem={(e) => setWheelItem(e)}
            isWheelSpinning={isWheelSpinning}
          />
        </div>
        {/* ---------------- Spin Btn ------------------ */}
        <button
          className="lucky-wheel-page-btn center-absolute"
          onClick={handleWheelSpinBtnClick}
        >
          {t("Lucky_Wheel_Spin_Btn")}
        </button>
        {/* ---------------- Page Lower Txt ------------------ */}
        <p className="want-more-chance center-absolute">
          {t("Lucky_wheel_Want_More_Chance")}
        </p>
        <div className="click-here center-absolute">
          <img
            className="click-here--icon"
            src={HandPointUp}
            alt="hand-point-up"
          />
          <p className="click-here--text" onClick={handleWantMoreChanceClick}>
            {t("Lucky_Wheel_Click_Here")}
          </p>
        </div>
      </div>
    </Page>
  );
};

export default LuckyWheelPage;
