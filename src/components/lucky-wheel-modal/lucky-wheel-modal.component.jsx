import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import { setOpenWheelModal } from "../../redux/wheel/wheel.action";
import {
  setCurrentUser,
  setUserProfileAddress,
} from "../../redux/user/user.action";

import {
  selectBonus,
  selectOpenWheelModal,
} from "../../redux/wheel/wheel.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import CloseIcon from "./../../assets/images/icon/close-icon.png";

import "./lucky-wheel-modal.styles.scss";

const LuckyWheelModal = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const setBonus = useSelector(selectBonus);
  const openWheelModal = useSelector(selectOpenWheelModal);
  const currentUser = useSelector(selectCurrentUser);

  const { title, type: prizeType, value } = setBonus || {};

  const [prizeReceived, setPrizeReceived] = useState(false);
  const [userAddress, setUserAddress] = useState("");
  const [popupBtnTxt, setPopupBtnTxt] = useState(
    prizeType === "dig" ? t("Receive") : t("Confirm")
  );

  const popupPrizeBtn = () => {
    console.log("api call");
    setPrizeReceived(true);
    if (prizeType === "dig") {
      setPopupBtnTxt(`${t("Verification_Code")}: ${value}`);
    } else if (prizeType === "non-dig") {
      setPopupBtnTxt(`${t("Tracking_Code")}: ${value}`);

      const {
        first_name,
        last_name,
        avatar,
        gender,
        birth_date,
        postal_code,
        username,
      } = currentUser;

      const setProfileBody = {
        first_name,
        last_name,
        avatar,
        gender,
        birth_date,
        address: userAddress,
        postal_code,
        contact_mobile_number: username,
      };

      dispatch(setUserProfileAddress(setProfileBody));
    }
  };

  const handleTxt = (e) => {
    setUserAddress(e.target.value);
  };

  const handleClosePopup = () => {
    dispatch(setOpenWheelModal(false));
    dispatch(setCurrentUser());
  };

  useEffect(() => {
    console.log("setBonus- modal:", setBonus);
    const { type } = setBonus || {};

    setPrizeReceived(false);
    setUserAddress("");
    setPopupBtnTxt(type === "dig" ? t("Receive") : t("Confirm"));
  }, [setBonus, t]);

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
                    <span>{t("Enter_Address")}</span>
                    <span>{t("Required")}</span>
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
                    <span>{t("Send_To")}</span>
                    <span>{userAddress}</span>
                  </p>
                  <p className="center-absolute support-number">
                    <span>{t("Support_Number")}</span>
                    <span>{process.env.REACT_APP_SUPPORT_NUMBER}</span>
                  </p>
                </>
              )}
            </div>
          )}
          {/*--------------------- Digital Specific -------------------*/}
          {prizeType === "dig" && prizeReceived && (
            <p className="center-absolute dig-prize-received-hint">
              {t("Enter_Code_In_Game__LuckyWheelModal")}
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
