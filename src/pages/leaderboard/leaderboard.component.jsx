import React, { useEffect } from "react";
import { useLocation } from "react-router";
import { useDispatch } from "react-redux";

import { setHeaderMode } from "../../redux/header/header.action";

import LeaderboardHeader from "../../components/leaderboard-header/leaderboard-header.component";

import topUsers from "../../components/mock/leaderborad.mock";

import "./leaderboard.styles.scss";

const LeaderBoardPage = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHeaderMode(pathname));
  }, []);

  return (
    <div>
      {/* header */}
      <LeaderboardHeader top3={topUsers.slice(0, 3)} />

      {/* content */}
      <div className="leaderboard-container">
        <p className="leaderborad-topusers-grid-txt">جدول رده‌بندی</p>
        <div className="leaderborad-topusers-grid">
          {topUsers.map(
            (user, index) =>
              (index < 14 || user.user) && (
                <div
                  key={index}
                  className={`each-user ${user.user ? "loggedin-user" : ""} ${
                    user.user && index > 14 ? "loggedin-user-in-middle" : ""
                  } ${!user.prize ? "extract-prize" : ""}`}
                >
                  <span className="user-index">{index + 1}</span>
                  <div className="user-record">
                    <div className="user--avatar-name-score">
                      <img
                        src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png"
                        alt="user-avater"
                        className="avatar"
                      />
                      <span className="name-score">
                        <div>{user.name}</div>
                        <div>{user.score} امتیاز</div>
                      </span>
                    </div>
                    <div className="user-prize">{user.prize}</div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default LeaderBoardPage;
