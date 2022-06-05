import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { logout } from "../../../redux/user/user.action";
import { setHeaderMode } from "../../../redux/header/header.action";

import ProfileAvatar from "./../../../assets/images/icon/blue-avatar-icon.png";

import "./edit-profile.styles.scss";

const EditProfilePage = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const currentUser = useSelector((state) => state.user.currentUser);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    dispatch(setHeaderMode(pathname));
  }, []);

  const changeEditMode = () => {
    setEditMode(!editMode);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src={ProfileAvatar} alt="user-avater" className="avatar" />
        <p className="edit-button" onClick={changeEditMode}>
          {editMode ? t("Save") : t("Edit")}
        </p>
      </div>

      <div className="profile-info">
        <span className="label">{t("Username")}</span>
        <div className="input-container">
          <input
            className="input"
            value={currentUser.username}
            disabled={editMode ? false : true}
            // onChange={(e) => handleSigninMobileNumberChange(e)}
          />
        </div>
        <span className="label">{t("Phone_Number")}</span>
        <div className="input-container">
          <input
            className="input"
            value={currentUser.mobile_number}
            disabled={editMode ? false : true}
            // onChange={(e) => handleSigninMobileNumberChange(e)}
          />
        </div>
        <span className="label">{t("Gender")}</span>
        <div className="input-container">
          <input
            className="input"
            value={currentUser.gender}
            disabled={editMode ? false : true}
            // onChange={(e) => handleSigninMobileNumberChange(e)}
          />
        </div>
        <button className="logout-btn" onClick={handleLogout}>
          {t("Logout")}
        </button>
      </div>
    </div>
  );
};

export default EditProfilePage;
