import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import SpinningWheel from "../../components/spinning-wheel/spinning-wheel.component";
import Modal from "../../components/lucky-wheel-modal/modal.component";

import { getBonusList, setUserBonus } from "../../redux/wheel/wheel.action";
import { setUserProfile } from "../../redux/user/user.action";

import HandPointUp from "./../../assets/images/icon/hand-point-up.png";

import "./lucky-wheel.component.scss";

const LuckyWheelPage = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.user.currentUser);
  const bonusList = useSelector((state) => state.wheel.bonusList);
  const setBonus = useSelector((state) => state.wheel.bonus);

  const [userChanceConuter, setUserChanceConuter] = useState(0);
  const [wheelItem, setWheelItem] = useState(6);
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(true);
  };

  const handlePopupClose = () => {
    setModal(false);
  };

  useEffect(() => {
    dispatch(getBonusList());
  }, []);

  const getProfile = () => {
    dispatch(setUserProfile()).then((res) => {
      console.log("pro res", res);
    });
  };

  useEffect(() => {
    console.log("currentUser:", currentUser);
    if (!isEmpty(currentUser)) {
      setUserChanceConuter(currentUser.chance_counter);
    }
  }, [currentUser]);

  const [isWheelSpinning, setIsWheelSpinning] = useState(false);
  let isSpinOnItemOne = false; //controls wheel goes back to item1 after every spin
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
      } else if (response.status === 403) {
        console.log("luckwheel -error");
        // popup optopns to increase chances
      }
    });
  };

  const spinHandler = useCallback(() => {
    console.log("isSpinOnItemOne:", isSpinOnItemOne);
    console.log("isWheelSpinning:", isWheelSpinning);
    if (isSpinOnItemOne === true) {
      setIsWheelSpinning(true);
      // isSpinOnItemOne = false;
    } else {
      isSpinOnItemOne = true;
      setIsWheelSpinning(false);
      setTimeout(spinHandler, 400);
    }
  }, [setBonus]);

  const isEmpty = (inputObject) => {
    return Object.keys(inputObject).length === 0;
  };

  return (
    <div className="blue-bg outer-box">
      {/* ---------------- Page Upper Txt ------------------ */}
      <div className="main-header">
        <h2 className="header-txt center-absolute">
          گـــردونه شــانــس مـدریــک
        </h2>
        <p className="subheader-txt center-absolute">
          در گردونه مدریک شانس خود را جهت برنده شدن جوایز
          <br />
          ارزنده امتحان کنید.
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
        // onClick={toggleModal}
        onClick={handleWheelSpinBtnClick}
      >
        بچرخون
      </button>
      {/* ---------------- Page Lower Txt ------------------ */}
      <p className="want-more-chance center-absolute">
        شــانـس بیشتری برای چـرخونـدن گـردونه می‌خـوای؟
      </p>
      <div className="click-here center-absolute">
        <img
          className="click-here--icon"
          src={HandPointUp}
          alt="hand-point-up"
        />
        <p className="click-here--text" onClick={getProfile}>
          اینجا را کلیک کن
        </p>
      </div>
      {/* ---------------- modal ------------------ */}
      {/* prizetype can either be coin or physical-item */}
      {modal && (
        <Modal
          title="50 سکه گلمراد"
          // prizeType="coin"
          prizeType="physical-item"
          onClosePopup={handlePopupClose}
        />
      )}
    </div>
  );
};

export default LuckyWheelPage;
