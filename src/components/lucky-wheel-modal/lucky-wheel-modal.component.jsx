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

import generateUniqueId from "../../services/generateUniqueId";

import CloseIcon from "./../../assets/images/icon/close-icon.png";
import AddNewAddress from "./../../assets/images/icon/add-address.png";

import "./lucky-wheel-modal.styles.scss";

const LuckyWheelModal = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const { detail: setBonus, log_id } = useSelector(selectBonus) || {};
  const allUserAddresses = useSelector(selectAllUserAddresses);
  const openWheelModal = useSelector(selectOpenWheelModal);

  const { title, type: prizeType, code } = setBonus || {};

  const [luckyWheelModalStage, setLuckyWheelModalStage] = useState(1);
  const [userAddress, setUserAddress] = useState("");
  const [addressData, setAddressData] = useState([]);
  const [addressSelected, setAddressSelected] = useState(null);

  useEffect(() => {
    if (prizeType === "non-dig") {
      dispatch(getUserAddresses());
    }
  }, [dispatch, setBonus, prizeType]);

  useEffect(() => {
    setLuckyWheelModalStage(1);
    setUserAddress("");
    setAddressSelected(null);
  }, [setBonus]);

  useEffect(() => {
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

  const ModalTitle = () => {
    return <p className="modal-title">{title}</p>;
  };

  /* ----------------------- NON DIGITAL BONUS -------------------------- */

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
    setUserAddress(res.content);
  };

  const ChooseAddress = () => {
    return (
      <div className="center-absolute top--55 width-100">
        {ModalTitle()}
        <p className="choose-address">{t("Choose_Address")}</p>
        <CustomRadioInput
          data={addressData}
          addressSelected={addressSelected}
          onAddressSelectedChange={handleAddressSelected}
        />
        <p className="add-new-address" onClick={handleAddNewAddressClick}>
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
        {ModalTitle()}
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
        {ModalTitle()}
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

  /* ----------------------- DIGITAL BONUS -------------------------- */
  const handleModalBtn_Phase1_Dig = () => {
    setLuckyWheelModalStage(2);
  };

  const ShowDigitalBonusReceive = () => {
    return (
      <>
        <div className="center-absolute top--50">{ModalTitle()}</div>

        <div className="center-absolute top--75">
          <CustomButton
            btnBgColor="marine-blue"
            onClick={handleModalBtn_Phase1_Dig}
          >
            {t("Receive")}
          </CustomButton>
        </div>
      </>
    );
  };

  const ShowDigitalBonusVerification = () => {
    return (
      <>
        <div className="center-absolute top--45">{ModalTitle()}</div>
        <div className="center-absolute top--65">
          <CustomButton btnBgColor="deep-sky-blue">
            {t("Verification_Code")}: {code}
          </CustomButton>
        </div>
        <p className="center-absolute top--80 dig-prize-received-hint">
          {t("Enter_Code_In_Game__LuckyWheelModal")}
        </p>
      </>
    );
  };

  /* ----------------------- POPULATE SCREEN -------------------------- */
  const populateScreen = () => {
    switch (prizeType) {
      case "dig":
        switch (luckyWheelModalStage) {
          case 1:
            return <>{ShowDigitalBonusReceive()}</>;
          case 2:
            return <>{ShowDigitalBonusVerification()}</>;
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

  return openWheelModal && setBonus ? (
    <>
      <div className="lucky-wheel-modal-overlay">
        <div className="lucky-wheel-modal-popup">
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
        </div>
      </div>
    </>
  ) : (
    <></>
  );
};

export default LuckyWheelModal;
