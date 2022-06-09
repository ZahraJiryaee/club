import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

// import {
//   logout,
//   editUserProfileInformation,
// } from "../../../redux/user/user.action";
import { setHeaderMode } from "../../../redux/header/header.action";

import FriendsIcon from "./../../../assets/images/icon/invite-friends.png";

import "../profile.styles.scss";

const SetInviterCode = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(setHeaderMode(pathname));
  }, []);

  const [inviterCode, setInviterCode] = useState("");

  const handleInviterCodeChange = (event) => {
    const { value, maxLength } = event.target;
    const code = value.slice(0, maxLength);
    setInviterCode(code);
  };

  return (
    <div className="profile-container">
      <div className="friends-container ">
        <div className="header-container">
          <img src={FriendsIcon} alt="friends" className="avatar" />
          <p className="description-text">{t("Inviter_Description")}</p>
        </div>
        <div className="set-inviter-container">
          <div className="inviter-code">
            <input
              className="code-input"
              type="number"
              maxLength={11}
              value={inviterCode}
              onChange={(e) => handleInviterCodeChange(e)}
            />
          </div>
          <div className="send-code-text">{t("Inviter_Code")}</div>
        </div>
      </div>
    </div>
  );
};

export default SetInviterCode;
