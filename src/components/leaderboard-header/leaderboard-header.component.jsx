import React from "react";

import UserAvatarContainer from "./../../assets/images/leaderboard/user-avatar-container.png";
import Crown from "./../../assets/images/icon/crown.png";

import "./leaderboard-header.styles.scss";

const LeaderboardHeader = ({ top3 }) => {
  const handleLeaderboardCheckboxChange = (event) => {
    /*
    true:general
    false:weekly
    */
    console.log("checkbox:", event.target.checked);
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
              <span>هفتگی</span>
            </div>
            <div className="layer"></div>
            <div className="separator"></div>
          </div>
        </div>
        {/* ------------------------- Top3 ---------------------------- */}
        <div className="top-three">
          {[indexedTop3[2], indexedTop3[0], indexedTop3[1]].map((user) => (
            <div key={user.id}>
              <img
                className="user-avatar-container"
                src={UserAvatarContainer}
                alt="user-avatar-container"
              />
              <img
                className="user-avatar"
                src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png"
                alt="user-avatar"
              />
              <span className="medal">{user.index}</span>
              <span className="name-score">
                <span>{user.name} </span>
                <br /> <span>{user.prize}</span>
              </span>
              {user.index === 1 && (
                <img className="crown" src={Crown} alt="crown" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeaderboardHeader;
