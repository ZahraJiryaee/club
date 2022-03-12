import React, { useState, useEffect } from "react";

import CloseIcon from "./../../assets/images/icon/close-icon.png";

import "./modal.styles.scss";

const Modal = ({ title, prizeType, onClosePopup }) => {
  const [prizeReceived, setPrizeReceived] = useState(false);
  const [userAddress, setUserAddress] = useState("");
  const [popupBtnTxt, setPopupBtnTxt] = useState(
    prizeType === "coin" ? "دریافت" : "تایید"
  );

  const popupPrizeBtn = () => {
    console.log("api call");
    setPrizeReceived(true);
    if (prizeType === "coin") {
      setPopupBtnTxt("کدتایید: 123456");
    } else if (prizeType === "physical-item") {
      setPopupBtnTxt("کد پیگیری: 123456");
    }
  };

  const handleTxt = (e) => {
    setUserAddress(e.target.value);
  };

  return (
    <>
      <div className="overlay">
        <div className="popup">
          <div className={`bg-hooray bg-hooray-${prizeType}`}></div>
          <div className="ttt">
            {/*--------------------- close icon -------------------*/}
            <img
              src={CloseIcon}
              alt="popup-close"
              className="popup-close"
              onClick={onClosePopup}
            />
            {/*--------------------- title -------------------*/}
            <p
              className={`center-absolute popup-title popup-title-${prizeType}
              popup-title-${prizeType}-prize-received-${prizeReceived}
              `}
            >
              {title}
            </p>
            {/*--------------------- Physical-item Specific -------------------*/}
            {prizeType === "physical-item" && (
              <div className="user-address-container">
                {!prizeReceived ? (
                  <>
                    <p className="center-absolute user-address-label">
                      <span>لطفا شهر و آدرس محل دریافت را وارد نمایید.</span>
                      <span>(اجباری)</span>
                    </p>
                    <textarea
                      defaultValue={userAddress}
                      className="center-absolute user-address"
                      onChange={handleTxt}
                    />
                  </>
                ) : (
                  <>
                    <p className="center-absolute send-to-user-address">
                      <span>ارسال به:</span>
                      <span>{userAddress}</span>
                    </p>
                    <p className="center-absolute support-number">
                      <span>شماره پشتیبانی:</span>
                      <span>{process.env.REACT_APP_SUPPORT_NUMBER}</span>
                    </p>
                  </>
                )}
              </div>
            )}
            {/*--------------------- Coin Specific -------------------*/}
            {prizeType === "coin" && prizeReceived && (
              <p className="center-absolute coin-prize-received-hint">
                توجه: کد دریافتی را در بازی مورد نظر وارد نمایید.
              </p>
            )}
            {/*--------------------- Button -------------------*/}
            <button
              disabled={prizeType === "physical-item" && userAddress === ""}
              className={`center-absolute popup-prize-btn popup-prize-btn-${prizeType} 
              popup-prize-btn-${prizeType}-prize-received-${prizeReceived}
              `}
              onClick={popupPrizeBtn}
            >
              <span>{popupBtnTxt}</span>
            </button>
            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
