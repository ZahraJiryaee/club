import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import { setOpenShopModal } from "../../redux/shop/shop.actions";

import {
  selectSetOpenShopModal,
  selectShopModalData,
} from "../../redux/shop/shop.selectors";

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
  console.log("shopModalData:", shopModalData);

  const handleShopModalClose = () => {
    dispatch(setOpenShopModal(false));
  };

  /* UI Models */
  const YourScore = (fontSize) => {
    return (
      <p className={`shop-moadal-score-container fontsize-${fontSize}`}>
        <span>امتیاز شما: </span>
        <span>500</span>
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
        {shopModalData.leave_chance_counter} امتیاز
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
    return <textarea className="textarea shop-item-textarea" />;
  };

  const LowScoreWarning = () => {
    return (
      <p className="shop-modal-low-scroe-warning fontsize-10">
        {t("Low_Score_Warning")}
      </p>
    );
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
        {t("Send_To")} تست تست
      </p>
    );
  };

  const ShopBtn = (btnBgColor) => {
    return (
      <button className={`wide-button wide-button__${btnBgColor}`}>
        تایید
      </button>
    );
  };

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
        <div className="flex-container ">
          {YourScore(18)}
          {ShopItemImage(143)}
          {ShopItemTitle(21)}
          {ShopItemLeaveChanceCounter(18)}
          {EnterAddressTxt()}
          {SuccessfulRequest()}
          {Textarea()}
          {ShopBtn("cool-green")}
          {LowScoreWarning()}
          {EnterCodeInGame()}
          {SendToAddress()}
          {SupportNumber()}
        </div>
      </div>
    </div>
  ) : null;
};

export default ShopModal;
