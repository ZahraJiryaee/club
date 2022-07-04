import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import { setOpenWheelModal } from "../../redux/wheel/wheel.action";
import {
  getUserAddresses,
  setCurrentUser,
  setUserBonusAddress,
} from "../../redux/user/user.action";

import {
  selectBonus,
  selectOpenWheelModal,
} from "../../redux/wheel/wheel.selectors";
import { selectAllUserAddresses } from "../../redux/user/user.selectors";

import CustomRadioInput from "../common/custom-radio-input/custom-radio-input.component";
import CustomButton from "../common/custom-button/custom-button.component";

import logger from "../../services/logService";
import generateUniqueId from "../../services/generateUniqueId";

import CloseIcon from "./../../assets/images/icon/close-icon.png";
import AddNewAddress from "./../../assets/images/icon/add-address.png";

import "./lucky-wheel-modal.styles.scss";

const LuckyWheelModal = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const mockData = {
    addresses: [
      "آدرس  dskjcfb soicj ci cicddicd cduch cucg cdgc cygd cycgayscg aycga scasygc asycgasyc asycas cysgcysc ysysa cfuyas cayst1",
      "آدرس 2",
      "آدرس 3",
      "آدرس 4",
    ],
  };
  // const mockData = {
  //   addresses: [],
  // };

  const { detail: setBonus, log_id } = useSelector(selectBonus) || {};
  const allUserAddresses = useSelector(selectAllUserAddresses);
  const openWheelModal = useSelector(selectOpenWheelModal);

  const { title, type: prizeType, code } = setBonus || {};

  const [luckyWheelModalStage, setLuckyWheelModalStage] = useState(1);
  const [prizeReceived, setPrizeReceived] = useState(false);
  const [userAddress, setUserAddress] = useState("");
  const [popupBtnTxt, setPopupBtnTxt] = useState(
    prizeType === "dig" ? t("Receive") : t("Confirm")
  );
  const [addressData, setAddressData] = useState([]);

  useEffect(() => {
    dispatch(getUserAddresses());
  }, [dispatch]);

  useEffect(() => {
    console.log("allUserAddresses:", allUserAddresses);
    if (prizeType === "non-dig") {
      if (allUserAddresses.addresses.length === 0) {
        setLuckyWheelModalStage(2);
      } else {
        const data = allUserAddresses.addresses.map((address) => ({
          content: address,
          id: generateUniqueId("radio-input"),
        }));
        setAddressData(data);
      }
    }
  }, [allUserAddresses]);

  const popupPrizeBtn = () => {
    setPrizeReceived(true);
    if (prizeType === "dig") {
      setPopupBtnTxt(`${t("Verification_Code")}: ${code}`);
    } else if (prizeType === "non-dig") {
      setPopupBtnTxt(`${t("Tracking_Code")}: ${code}`);
    }
  };

  const setBonusAddress = () => {
    const setBonusAddressBody = {
      address: userAddress,
    };

    dispatch(setUserBonusAddress(log_id, setBonusAddressBody));
  };

  const handleTxt = (e) => {
    setUserAddress(e.target.value);
  };

  const handleClosePopup = () => {
    dispatch(setOpenWheelModal(false));
    dispatch(setCurrentUser());
  };

  useEffect(() => {
    logger.logInfo("setBonus-wheel-modal:", setBonus);
    const { type } = setBonus || {};

    setPrizeReceived(false);
    setUserAddress("");
    setPopupBtnTxt(type === "dig" ? t("Receive") : t("Confirm"));
  }, [setBonus, t]);

  useEffect(() => {}, []);

  const ModalTitle = (prizeType, luckyWheelModalStage) => {
    return (
      <p
        className={`modal-title modal-title__${prizeType}-${luckyWheelModalStage}`}
      >
        {title}
      </p>
    );
  };

  /* ----------------------- NON DIGITAL BONUS -------------------------- */
  const [addressSelected, setAddressSelected] = useState(null);

  const handleAddNewAddressClick = () => {
    setUserAddress("");
    setLuckyWheelModalStage(2);
  };

  const handleModalBtn_Phase1_NonDig = () => {
    setBonusAddress();
    setLuckyWheelModalStage(3);
  };

  const handleModalBtn_Phase2_NonDig = () => {
    setBonusAddress();
    setLuckyWheelModalStage(3);
  };

  const handleModalBtn_Phase3_NonDig = () => {
    setLuckyWheelModalStage(1);
  };

  const handleAddressSelected = (value) => {
    setAddressSelected(value);
    const res = addressData.find((item) => item.id === value);
    console.log("res:", res);
    setUserAddress(res.content);
  };

  const ChooseAddress = () => {
    return (
      <div className="center-absolute top--55 width-100">
        {ModalTitle(prizeType, luckyWheelModalStage)}
        <p className="modal-choose-address">{t("Choose_Address")}</p>
        <CustomRadioInput
          data={addressData}
          addressSelected={addressSelected}
          onAddressSelectedChange={handleAddressSelected}
        />
        <p className="modal-add-new-address" onClick={handleAddNewAddressClick}>
          <img src={AddNewAddress} alt="" className="img" />
          {t("Add_New_Address")}
        </p>
        <CustomButton
          btnBgColor="cool-green"
          onClick={handleModalBtn_Phase1_NonDig}
          disabled={addressSelected === null}
        >
          {t("Confirm")}
        </CustomButton>
      </div>
    );
  };

  const EnterNewAddress = () => {
    return (
      <div className="center-absolute top--55 dir-rtl width-100">
        {ModalTitle(prizeType, luckyWheelModalStage)}
        <p className="user-address-label">
          <span>{t("Enter_Address")}</span>
          <span>{t("Required")}</span>
        </p>
        <textarea
          defaultValue={userAddress}
          className="user-address"
          onChange={handleTxt}
          autoFocus
        />
        <CustomButton
          btnBgColor="cool-green"
          onClick={handleModalBtn_Phase2_NonDig}
          disabled={userAddress === ""}
        >
          {t("Confirm")}
        </CustomButton>
      </div>
    );
  };

  const SendToUserAddress = () => {
    return (
      <div className="center-absolute top--55">
        {ModalTitle(prizeType, luckyWheelModalStage)}
        <p className="send-to-user-address">
          <span>{t("Send_To")}</span>
          <span>{userAddress}</span>
        </p>
        <CustomButton
          btnBgColor="deep-sky-blue"
          onClick={handleModalBtn_Phase3_NonDig}
        >
          {t("Tracking_Code")}: {code}
        </CustomButton>
        <p className="support-number">
          <span>{t("Support_Number")}</span>
          <span>{process.env.REACT_APP_SUPPORT_NUMBER}</span>
        </p>
      </div>
    );
  };

  const populateScreen = () => {
    console.log("luckyWheelModalStage:", luckyWheelModalStage);
    switch (prizeType) {
      case "dig":
        switch (luckyWheelModalStage) {
          case 1:
            break;

          case 2:
            break;

          default:
            break;
        }
        break;
      case "non-dig":
        switch (luckyWheelModalStage) {
          case 1:
            return <>{ChooseAddress()}</>;
          case 2:
            return <>{EnterNewAddress()}</>;
          case 3:
            return <>{SendToUserAddress()}</>;
          default:
            break;
        }
        break;

      default:
        break;
    }
  };

  return setBonus ? (
    <>
      <div className="overlay">
        <div className="popup">
          <div
            className={`bg-hooray bg-hooray__${prizeType}_${luckyWheelModalStage}`}
          ></div>
          {/*--------------------- close icon -------------------*/}
          <img
            src={CloseIcon}
            alt="popup-close"
            className="popup-close"
            onClick={handleClosePopup}
          />
          {/*  */}
          {populateScreen()}
          {/*--------------------- title -------------------*/}

          {/* <p
            className={`popup-title popup-title-${prizeType}
              popup-title-${prizeType}-prize-received-${prizeReceived}
              `}
          >
            {title}
          </p> */}
          {/*--------------------- Non Digital Specific -------------------*/}

          {/* {prizeType === "non-dig" && (
            <div className="user-address-container">
              {!prizeReceived ? (
                <>
                  <p className="user-address-label">
                    <span>{t("Enter_Address")}</span>
                    <span>{t("Required")}</span>
                  </p>
                  <textarea
                    defaultValue={userAddress}
                    className="user-address"
                    onChange={handleTxt}
                    autoFocus
                  />
                </>
              ) : (
                <>
                  <p className="send-to-user-address">
                    <span>{t("Send_To")}</span>
                    <span>{userAddress}</span>
                  </p>
                  <p className="support-number">
                    <span>{t("Support_Number")}</span>
                    <span>{process.env.REACT_APP_SUPPORT_NUMBER}</span>
                  </p>
                </>
              )}
            </div>
          )} */}
          {/*--------------------- Digital Specific -------------------*/}
          {/* {prizeType === "dig" && prizeReceived && (
            <p className="center-absolute dig-prize-received-hint">
              {t("Enter_Code_In_Game__LuckyWheelModal")}
            </p>
          )} */}
          {/*--------------------- Button -------------------*/}
          {/* <button
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
          </button> */}
          {/*  */}
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};

export default LuckyWheelModal;
