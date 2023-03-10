import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { setOpenValidationDialog } from "../../redux/user/user.action";
import { setHeaderMode } from "../../redux/header/header.action";

import { routeNames } from "../../services/routeService";
import { toastError } from "./../../services/toastService";

import Page from "../page";
import { ProfileMenu } from "../../model/profile-menu-model";

import ProfileAvatar from "./../../assets/images/icon/blue-avatar-icon.png";
import ArrowIconMB from "../../assets/images/icon/arrow-back-dark.png";

import "./profile.styles.scss";

const ProfilePage = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const currentUser = useSelector((state) => state.user.currentUser);

  console.log("currentUser", currentUser);
  useEffect(() => {
    dispatch(setHeaderMode(pathname));
  }, []);

  const handleLogin = () => {
    dispatch(setOpenValidationDialog(true));
  };

  const handleEditProfile = () => {
    return navigate(`/${routeNames.profile}/edit-information`);
  };

  const handleMovePage = (route) => {
    if (currentUser) {
      route === "/set-inviter" && currentUser?.has_invited === true
        ? toastError(t("Inviter_Code_Error"))
        : navigate(`/${routeNames.profile}${route}`);
    }
  };

  return (
    <Page title={t("Profile")}>
      <div className="profile-container">
        <div className="profile-info">
          <img src={ProfileAvatar} alt="user-avater" className="avatar" />
          <p className="user-name">
            {currentUser
              ? currentUser?.username
              : t("Login_To_Access_Features")}
          </p>
          <button
            className="login-btn"
            onClick={currentUser ? handleEditProfile : handleLogin}
          >
            {currentUser ? t("Edit_Profile") : t("Login")}
          </button>
        </div>
        <div className="profile-details">
          {ProfileMenu.map((item) => {
            return (
              <div
                className="details-container"
                key={item.id}
                onClick={() => handleMovePage(item.route)}
              >
                <div className="title-container">
                  <img
                    src={item.icon}
                    alt="title-icon"
                    className="title-icon"
                  />
                  <span className="title">{t(item.title)}</span>
                </div>
                <img className="more-icon" src={ArrowIconMB} alt="arrow-back" />
              </div>
            );
          })}
        </div>
      </div>
    </Page>
  );
};

export default ProfilePage;
