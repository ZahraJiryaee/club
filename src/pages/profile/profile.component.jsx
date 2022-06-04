import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { ProfileMenu } from "../../model/profile-menu-model";

import { setHeaderMode } from "../../redux/header/header.action";
import ProfileAvatar from "./../../assets/images/icon/blue-avatar-icon.png";
import ArrowIconMB from "../../assets/images/icon/arrow-back-dark.png";

import "./profile.styles.scss";

const ProfilePage = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const currentUser = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    dispatch(setHeaderMode(pathname));
  }, []);

  // useEffect(() => {
  //   if (currentUser) {
  //     console.log("currentUser Profileeee", true);
  //   } else {
  //     console.log("currentUser Profileeee", false);
  //   }
  //   console.log("currentUser Profileeee", currentUser);
  // }, [currentUser]);

  return (
    <div className="profile-container">
      <div className="profile-info">
        <img src={ProfileAvatar} alt="user-avater" className="avatar" />
        <p className="user-name">
          {currentUser ? currentUser?.username : t("Login_To_Access_Features")}
        </p>
        <button
          className="login-btn"
          // onClick={handleWheelSpinBtnClick}
        >
          {currentUser ? t("Edit_Profile") : t("Login")}
        </button>
      </div>
      <div className="profile-details">
        {ProfileMenu.map((item) => {
          return (
            <div className="details-container" key={item.id}>
              <div className="title-container">
                <img src={item.icon} alt="title-icon" className="title-icon" />
                <span className="title">{t(item.title)}</span>
              </div>
              <img className="more-icon" src={ArrowIconMB} alt="arrow-back" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfilePage;
