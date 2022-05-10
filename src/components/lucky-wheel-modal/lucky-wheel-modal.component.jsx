import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { setOpenWheelModal } from "../../redux/wheel/wheel.action";
import { setUserProfile } from "../../redux/user/user.action";

import CloseIcon from "./../../assets/images/icon/close-icon.png";

import "./lucky-wheel-modal.styles.scss";

const LuckyWheelModal = () => {
  const dispatch = useDispatch();

  const setBonus = useSelector((state) => state.wheel.bonus);
  const openWheelModal = useSelector((state) => state.wheel.openWheelModal);

  const { title, type: prizeType, value } = setBonus || {};

  const [prizeReceived, setPrizeReceived] = useState(false);
  const [userAddress, setUserAddress] = useState("");
  const [popupBtnTxt, setPopupBtnTxt] = useState(
    prizeType === "dig" ? "دریافت" : "تایید"
  );

  const popupPrizeBtn = () => {
    console.log("api call");
    setPrizeReceived(true);
    if (prizeType === "dig") {
      setPopupBtnTxt(`کد تایید: ${value}`);
    } else if (prizeType === "non-dig") {
      setPopupBtnTxt(`کد پیگیری: ${value}`);
    }
  };

  const handleTxt = (e) => {
    setUserAddress(e.target.value);
  };

  const handleClosePopup = () => {
    dispatch(setOpenWheelModal(false));
    dispatch(setUserProfile());
  };

  useEffect(() => {
    setPrizeReceived(false);
    setUserAddress("");
    setPopupBtnTxt(prizeType === "dig" ? "دریافت" : "تایید");
  }, [prizeType]);

  useEffect(() => {
    console.log("setBonus- modal:", setBonus);
  }, [setBonus]);

  return openWheelModal && setBonus ? (
    <>
      <div className="overlay">
        <div className="popup">
          <div className={`bg-hooray bg-hooray-${prizeType}`}></div>
          {/*--------------------- close icon -------------------*/}
          <img
            src={CloseIcon}
            alt="popup-close"
            className="popup-close"
            onClick={handleClosePopup}
          />
          {/*--------------------- title -------------------*/}
          <p
            className={`center-absolute popup-title popup-title-${prizeType}
              popup-title-${prizeType}-prize-received-${prizeReceived}
              `}
          >
            {title}
          </p>
          {/*--------------------- Non Digital Specific -------------------*/}
          {prizeType === "non-dig" && (
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
                    autoFocus
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
          {/*--------------------- Digital Specific -------------------*/}
          {prizeType === "dig" && prizeReceived && (
            <p className="center-absolute dig-prize-received-hint">
              توجه: کد دریافتی را در بازی مورد نظر وارد نمایید.
            </p>
          )}
          {/*--------------------- Button -------------------*/}
          <button
            disabled={
              (prizeType === "non-dig" && userAddress === "") || prizeReceived
            }
            className={`center-absolute popup-prize-btn popup-prize-btn-${prizeType} 
              popup-prize-btn-${prizeType}-prize-received-${prizeReceived}
              ${prizeType === "non-dig" && userAddress === "" ? "disabled" : ""}
              `}
            onClick={popupPrizeBtn}
          >
            <span>{popupBtnTxt}</span>
          </button>
          {/*  */}
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};

export default LuckyWheelModal;
