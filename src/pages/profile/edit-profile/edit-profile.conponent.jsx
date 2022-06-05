import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import {
  logout,
  editUserProfileInformation,
} from "../../../redux/user/user.action";
import { setHeaderMode } from "../../../redux/header/header.action";

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
  const [phoneNumber, setPhoneNumber] = useState("");
  const [gender, setGender] = useState(0);

  useEffect(() => {
    dispatch(setHeaderMode(pathname));
  }, []);

  useEffect(() => {
    if (currentUser) {
      setUserName(currentUser.username);
      setPhoneNumber(currentUser.contact_mobile_number);
      setGender(currentUser.gender);
    }
  }, [currentUser]);

  const changeEditMode = async () => {
    setEditMode(!editMode);
  };

  const handleSaveEditedValues = async () => {
    if (userName !== "" && phoneNumber !== "") {
      const {
        // first_name,
        last_name,
        avatar,
        // gender,
        birth_date,
        address,
        postal_code,
        // username,
        // contact_mobile_number,
      } = currentUser;

      const setProfileBody = {
        first_name: userName,
        last_name: userName,
        avatar,
        gender: gender,
        birth_date,
        address,
        postal_code,
        contact_mobile_number: phoneNumber,
      };

      const result = dispatch(editUserProfileInformation(setProfileBody));
      result.then((response) => {
        if (response.status === 200) {
          setEditMode(!editMode);
          navigate("/profile");
        }
      });
    } else {
      //validation fields
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  const handlePhoneNumberChange = (event) => {
    const { value, maxLength } = event.target;
    const mobileNumber = value.slice(0, maxLength);
    setPhoneNumber(mobileNumber);
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src={ProfileAvatar} alt="user-avater" className="avatar" />
        <p
          className="edit-button"
          onClick={editMode ? handleSaveEditedValues : changeEditMode}
        >
          {editMode ? t("Save") : t("Edit")}
        </p>
      </div>

      <div className="profile-info">
        <span className="label">{t("Username")}</span>
        <div className="input-container">
          <input
            name="username"
            // className="input"
            className={`input ${!editMode ? "disable-input" : ""}`}
            value={userName}
            disabled={editMode ? false : true}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <span className="label">{t("Phone_Number")}</span>
        <div className="input-container">
          <input
            name="mobile_number"
            className={`input ${!editMode ? "disable-input" : ""}`}
            value={phoneNumber}
            disabled={editMode ? false : true}
            onChange={(e) => handlePhoneNumberChange(e)}
            type="number"
            maxLength={11}
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
        <button className="logout-btn" onClick={handleLogout}>
          {t("Logout")}
        </button>
      </div>
    </div>
  );
};

export default EditProfilePage;
