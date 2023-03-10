import React from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import { setLeaderBoardHeaderStatus } from "../../redux/leaderboard/leaderboard.action";

import UserAvatarContainer from "./../../assets/images/leaderboard/user-avatar-container.png";
import Crown from "./../../assets/images/icon/crown.png";
import ProfileAvatar from "./../../assets/images/icon/profile-avatar.png";

import "./leaderboard-header.styles.scss";

const LeaderboardHeader = ({ top3 }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleLeaderboardCheckboxChange = (event) => {
    /*
    true:general
    false:weekly
    */
    dispatch(setLeaderBoardHeaderStatus(event.target.checked));
  };

  let indexedTop3 = [...top3];
  for (let i = 0; i < top3.length; i++) {
    indexedTop3[i].index = i + 1;
  }

  return (
    <div className="leaderboard-header-container">
      <div className="leaderboard-header">
        {/* ------------------------- Switch ---------------------------- */}
        <div className="checkbox-container">
          <div className="checkbox-cover">
            <input
              type="checkbox"
              className="checkbox"
              onChange={(e) => handleLeaderboardCheckboxChange(e)}
            />
            <div className="knobs">
              <span>{t("Weekly")}</span>
            </div>
            <div className="layer"></div>
            <div className="separator"></div>
          </div>
        </div>
        {/* ------------------------- Crown ---------------------------- */}
        <img className="crown" src={Crown} alt="crown" />
        {/* ------------------------- Top3 ---------------------------- */}
        <div className="top-three">
          {[indexedTop3[2], indexedTop3[0], indexedTop3[1]].map((user) => {
            const { id, award } = user;
            const { avatar, first_name, last_name } = user.user;
            return (
              <div key={id}>
                <img
                  className="user-avatar-container"
                  src={UserAvatarContainer}
                  alt="user-avatar-container"
                />
                <img
                  className="user-avatar"
                  src={`${avatar ? avatar : ProfileAvatar}`}
                  alt="user-avatar"
                />
                <span className="medal">{user.index}</span>
                <span className="name-award">
                  <span>
                    {first_name} {last_name}
                  </span>
                  <br /> <span>{award}</span>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LeaderboardHeader;
