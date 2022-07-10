import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import {
  logout,
  editUserProfileInformation,
} from "../../../redux/user/user.action";
import { setHeaderMode } from "../../../redux/header/header.action";
import { toastError } from "./../../../services/toastService";

import Page from "../../page";
import CustomButton from "../../../components/common/custom-button/custom-button.component";

import { Gender } from "../../../model/gender.model";

import ProfileAvatar from "./../../../assets/images/icon/blue-avatar-icon.png";

import "./edit-profile.styles.scss";

const EditProfilePage = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const currentUser = useSelector((state) => state.user.currentUser);
  const [editMode, setEditMode] = useState(false);
  const [userName, setUserName] = useState("");
  const [gender, setGender] = useState(0);

  useEffect(() => {
    dispatch(setHeaderMode(pathname));
  }, []);

  useEffect(() => {
    if (currentUser) {
      setUserName(currentUser.username);
      setGender(currentUser.gender);
    }
  }, [currentUser]);

  const changeEditMode = async () => {
    setEditMode(!editMode);
  };

  const handleSaveEditedValues = async () => {
    if (userName !== "") {
      const {
        first_name,
        last_name,
        avatar,
        birth_date,
        address,
        postal_code,
        contact_mobile_number,
      } = currentUser;

      const setProfileBody = {
        first_name,
        last_name,
        avatar,
        gender: gender,
        birth_date,
        address,
        postal_code,
        contact_mobile_number,
        username: userName,
      };

      const result = dispatch(editUserProfileInformation(setProfileBody));
      result.then((response) => {
        if (response.status === 200) {
          setEditMode(!editMode);
          navigate("/profile");
        }
      });
    } else toastError(t("Empty_Field_Error"));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Page title={t("Profile")}>
      <div className="profile-container">
        <div className="profile-header">
          <img src={ProfileAvatar} alt="user-avater" className="avatar" />
          <p
            className="edit-button"
            onClick={editMode ? () => {} : changeEditMode}
          >
            {editMode ? "" : t("Edit")}
          </p>
        </div>

        <div className="profile-info">
          <span className="label">{t("Username")}</span>
          <div className="input-container">
            <input
              name="username"
              className={`input ${!editMode ? "disable-input" : ""}`}
              value={userName}
              disabled={editMode ? false : true}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <span className="label">{t("Gender")}</span>
          <div className="input-container">
            <select
              name="gender"
              className={`input ${!editMode ? "disable-input" : ""}`}
              value={gender}
              disabled={editMode ? false : true}
              onChange={(e) => setGender(e.target.value)}
            >
              {Gender.map((gender) => (
                <option value={gender.value}>{t(gender.label)}</option>
              ))}
            </select>
          </div>
          <CustomButton
            btnBgColor="marine-blue"
            onClick={editMode ? handleSaveEditedValues : handleLogout}
            className="logout-btn"
          >
            {editMode ? t("Save") : t("Logout")}
          </CustomButton>
        </div>
      </div>
    </Page>
  );
};

export default EditProfilePage;
