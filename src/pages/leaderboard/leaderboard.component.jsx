import React from "react";

import LeaderboardHeader from "../../components/leaderboard-header/leaderboard-header.component";

import "./leaderboard.styles.scss";

const LeaderBoardPage = () => (
  <div>
    {/* header */}
    <LeaderboardHeader />

    {/* content */}
    <div className="leaderboard-container">
      <p>جدول رده‌بندی</p>
    </div>
  </div>
);

export default LeaderBoardPage;
