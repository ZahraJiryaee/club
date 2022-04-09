import React from "react";

import UserAvatarContainer from "./../../assets/images/leaderboard/user-avatar-container.png";

import "./leaderboard-header.styles.scss";

const LeaderboardHeader = ({ top3 }) => (
  <div className="leaderboard-header-container">
    <div className="leaderboard-header">
      <p>lb header</p>
      <div className="top-three">
        {top3.map((user) => (
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
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default LeaderboardHeader;
