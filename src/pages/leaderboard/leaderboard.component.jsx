import React from "react";

import LeaderboardHeader from "../../components/leaderboard-header/leaderboard-header.component";

import topUsers from "../../components/mock/leaderborad.mock";

import "./leaderboard.styles.scss";

const LeaderBoardPage = () => (
  <div>
    {/* header */}
    <LeaderboardHeader />

    {/* content */}
    <div className="leaderboard-container">
      <p>جدول رده‌بندی</p>
      <div className="leaderborad-topusers-grid">
        {topUsers.map(
          (user, index) =>
            (index < 14 || user.user) && (
              <div
                key={index}
                className={`each-user ${user.user ? "loggedin-user" : ""} ${
                  user.user && index > 14 ? "loggedin-user-wide" : ""
                }`}
              >
                {user.name} - {user.id}
              </div>
            )
        )}
      </div>
    </div>
  </div>
);

export default LeaderBoardPage;
