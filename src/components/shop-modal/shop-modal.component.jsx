import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import { setOpenShopModal } from "../../redux/shop/shop.actions";
import { setCurrentUser } from "../../redux/user/user.action";

import {
  selectSetOpenShopModal,
  selectShopModalData,
} from "../../redux/shop/shop.selectors";

import CustomButton from "../common/custom-button/custom-button.component";

import CloseIcon from "./../../assets/images/icon/close-icon.png";
import ShopItemImg from "./../../assets/images/test/shop-item.png";
import CheckCircleGreen from "./../../assets/images/icon/check-circle-green.png";
import ErrorOutlineMarineBlue from "./../../assets/images/icon/error-outline-marineblue.png";

import "./shop-modal.styles.scss";

const ShopModal = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const isShopModalOPen = useSelector(selectSetOpenShopModal);
  const shopModalData = useSelector(selectShopModalData);
  const currentUser = useSelector((state) => state.user.currentUser);
  console.log("shopModalData:", shopModalData);

  const [phase, setPhase] = useState(1);
  const [userAddress, setUserAddress] = useState("");

  const handleShopModalClose = () => {
    setPhase(1);
    setUserAddress("");
    dispatch(setOpenShopModal(false));
  };

  /* ------------------ Get User Profile --------------------- */
  useEffect(() => {
    // dispatch(setCurrentUser());
  }, []);

  /* ------------------ UI Models ------------------ */
  const YourScore = (fontSize) => {
    const { score_counter } = currentUser || {};
    return (
      <p className={`shop-moadal-score-container fontsize-${fontSize}`}>
        <span>
          {t("Your_Score")} {score_counter}
        </span>
      </p>
    );
  };

  const ShopItemImage = (imgWidth) => {
    return (
      <img
        src={ShopItemImg}
        alt="shop-item-image"
        className={`shop-modal-item-img img-width-${imgWidth}`}
      />
    );
  };

  const ShopItemTitle = (fontSize) => {
    return (
      <p className={`shop-item-title fontsize-${fontSize}`}>
        {shopModalData.title}
      </p>
    );
  };

  const ShopItemLeaveChanceCounter = (fontSize) => {
    return (
      <p className={`shop-item-leave-chance-counter fontsize-${fontSize}`}>
        {shopModalData.leave_chance_counter} {t("Score")}
      </p>
    );
  };

  const EnterAddressTxt = () => {
    return (
      <p className="shop-modal-enter-address-container fontsize-18">
        <span>{t("Enter_Address")}</span>
        <span className="required">{t("Required")}</span>
      </p>
    );
  };

  const Textarea = () => {
    return (
      <textarea
        className="textarea shop-item-textarea"
        defaultValue={userAddress}
        onChange={handleUserAddressTxtChange}
        autoFocus
      />
    );
  };

  const LowScoreWarning = () => {
    const { score_counter } = currentUser || {};
    const { leave_chance_counter } = shopModalData;

    return leave_chance_counter > score_counter ? (
      <p className="shop-modal-low-scroe-warning fontsize-10">
        {t("Low_Score_Warning")}
      </p>
    ) : null;
  };

  const SuccessfulRequest = () => {
    return (
      <p className="successful-req">
        <img src={CheckCircleGreen} alt="success-icon" />
        <span>{t("Your_Request_Was_Successful")}</span>
      </p>
    );
  };

  const EnterCodeInGame = () => {
    return (
      <p className="shop-modal-enter-code-in-game fontsize-13">
        <img src={ErrorOutlineMarineBlue} alt="error-outline" />
        <span>{t("Enter_Code_In_Game")}</span>
      </p>
    );
  };

  const SupportNumber = () => {
    return (
      <p className="shop-modal-support-number fontsize-10">
        {t("Support_Number")} : 1234567890
      </p>
    );
  };

  const SendToAddress = () => {
    return (
      <p className="shop-modal-send-to-address fontsize-13">
        {t("Send_To")} {userAddress}
      </p>
    );
  };

  /* ----------------- Populate Popup With Above Componnets ------------------- */

  const handleNonDigItems = () => {
    switch (phase) {
      case 1:
        return (
          <>
            {YourScore(18)}
            {ShopItemImage(143)}
            {ShopItemTitle(21)}
            {ShopItemLeaveChanceCounter(18)}
            <CustomButton
              btnBgColor="cool-green"
              onClick={handleNonDigAction_Phase1}
            >
              {t("Continue")}
            </CustomButton>
            {LowScoreWarning()}
          </>
        );

      case 2:
        return (
          <>
            {YourScore(18)}
            {ShopItemImage(93)}
            {ShopItemTitle(21)}
            {ShopItemLeaveChanceCounter(18)}
            {EnterAddressTxt()}
            {Textarea()}
            <CustomButton
              btnBgColor="cool-green"
              onClick={handleNonDigAction_Phase2}
            >
              {t("Confirm")}
            </CustomButton>
          </>
        );
      case 3:
        return (
          <>
            {YourScore(18)}
            {ShopItemImage(143)}
            {ShopItemTitle(21)}
            {ShopItemLeaveChanceCounter(18)}
            {SuccessfulRequest()}
            <CustomButton
              btnBgColor="deep-sky-blue"
              disabled
              // onClick={handleNonDigAction_Phase3}
            >
              {t("Tracking_Code")}: 67676
            </CustomButton>
            {SendToAddress()}
            {SupportNumber()}
          </>
        );
      default:
        return <h1>Sry</h1>;
    }
  };

  const handleDigItems = () => {
    switch (phase) {
      case 1:
        return (
          <>
            {YourScore(18)}
            {ShopItemImage(143)}
            {ShopItemTitle(21)}
            {ShopItemLeaveChanceCounter(18)}
            <CustomButton
              btnBgColor="cool-green"
              onClick={handleDigAction_Phase1}
            >
              {t("Confirm")}
            </CustomButton>
            {LowScoreWarning()}
          </>
        );
      case 2:
        return (
          <>
            {YourScore(18)}
            {ShopItemImage(143)}
            {ShopItemTitle(21)}
            {ShopItemLeaveChanceCounter(18)}
            {SuccessfulRequest()}
            <CustomButton
              btnBgColor="deep-sky-blue"
              disabled
              // onClick={handleDigAction_Phase2}
            >
              {t("Verification_Code")}: 9090909
            </CustomButton>
            {EnterCodeInGame()}
          </>
        );
      default:
        break;
    }
  };

  const populateUi = () => {
    const { type } = shopModalData;
    switch (type) {
      case "dig":
        return handleDigItems();
      case "non-dig":
        return handleNonDigItems();
      default:
        break;
    }
  };

  /* ------------------- Handle OnClicks ---------------------- */
  const handleNonDigAction_Phase1 = () => {
    setPhase(2);
  };

  const handleNonDigAction_Phase2 = () => {
    setPhase(3);
  };

  const handleDigAction_Phase1 = () => {
    setPhase(2);
  };

  const handleUserAddressTxtChange = (e) => {
    setUserAddress(e.target.value);
  };

  /* --------------------------------------------------------- */
  return isShopModalOPen ? (
    <div className="shop-modal-container">
      <div className="shop-modal">
        {/* close Icon */}
        <div
          className="shop-modal-close-container"
          onClick={handleShopModalClose}
        >
          <img src={CloseIcon} alt="close-modal" className="shop-modal-close" />
        </div>
        {/* content */}
        <div className="flex-container ">{populateUi()}</div>
      </div>
    </div>
  ) : null;
};

export default ShopModal;
