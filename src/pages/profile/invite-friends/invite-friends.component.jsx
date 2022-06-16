import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { RWebShare } from "react-web-share";

import { setHeaderMode } from "../../../redux/header/header.action";

import FriendsIcon from "./../../../assets/images/icon/invite-friends.png";

import "../profile.styles.scss";

const InviteFriendsPage = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  let phoneNumber = "09194051966";
  useEffect(() => {
    dispatch(setHeaderMode(pathname));
  }, []);

  return (
    <div className="profile-container">
      <div className="friends-container ">
        <div className="header-container">
          <img src={FriendsIcon} alt="friends" className="avatar" />
          <p className="description-text">{t("Invite_Friends_Description")}</p>
        </div>
        <div className="invite-friends-container">
          <RWebShare
            data={{
              text: t("Invite_Friends_Message_Text", { phoneNumber }),
              url: "https://medrick-club.com",
              title: t("Invite_Friends_Message_Title"),
            }}
            onClick={() => console.log("shared successfully!")}
          >
            <button className="share-btn">{t("Share")}</button>
          </RWebShare>
        </div>
      </div>
    </div>
  );
};

export default InviteFriendsPage;
