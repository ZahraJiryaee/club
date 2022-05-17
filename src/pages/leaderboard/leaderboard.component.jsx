import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { setHeaderMode } from "../../redux/header/header.action";
import {
  getUserListWeekly,
  getUserListSeasonal,
} from "../../redux/leaderboard/leaderboard.action";

import LeaderboardHeader from "../../components/leaderboard-header/leaderboard-header.component";

import topUsers from "../../components/mock/leaderborad.mock";

import "./leaderboard.styles.scss";

const LeaderBoardPage = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const [crtUser, setCrtUser] = useState({
    id: "tg35",
    index: 5,
    name: "علی حاتیاننننصثیم",
    score: 111,
    prize: "جایزه",
  });

  const leaderboardHeaderStatus = useSelector(
    (state) => state.leaderboard.leaderboardHeaderStatus
  );
  const userListWeekly = useSelector(
    (state) => state.leaderboard.userListWeekly
  );
  const userListSeasonal = useSelector(
    (state) => state.leaderboard.userListSeasonal
  );

  const checkIFUserIsInBetween = (rowIndex) => {
    return rowIndex >= 7 && rowIndex <= 13 && rowIndex === crtUser.index
      ? true
      : false;
  };

  useEffect(() => {
    dispatch(setHeaderMode(pathname));
  }, [dispatch, pathname]);

  useEffect(() => {
    console.log("userListWeekly:", userListWeekly);
  }, [userListWeekly]);

  useEffect(() => {
    console.log("userListSeasonal:", userListSeasonal);
  }, [userListSeasonal]);

  useEffect(() => {
    /*
    true:general
    false:weekly
    */
    if (leaderboardHeaderStatus) {
      dispatch(getUserListSeasonal());
    } else {
      dispatch(getUserListWeekly());
    }
  }, [leaderboardHeaderStatus]);

  return (
    <div>
      {/* header */}
      <LeaderboardHeader top3={topUsers.slice(0, 3)} />

      {/* content */}
      <div className="leaderboard-container">
        <p className="leaderborad-headline-txt">جدول رده‌بندی</p>
        <div className="center-flex">
          <div
            className={`leaderboard-user-list ${
              crtUser.index >= 7 && crtUser.index <= 13
                ? "leaderboard-height-current-user-between-7-and-13"
                : ""
            }`}
          >
            {topUsers
              .filter((user, index) => index <= 13)
              .map((user, index) => (
                <div
                  className={`leaderboard-each-user ${
                    crtUser.index === index
                      ? "current-user-in-first-14 current-user-loggedin"
                      : ""
                  } ${
                    checkIFUserIsInBetween(index)
                      ? "current-user-between-7-and-13 current-user-loggedin"
                      : ""
                  }`}
                >
                  <UserRecord user={user} index={index} />
                </div>
              ))}
          </div>
        </div>
        <div className="center-flex">
          {crtUser.index >= 14 && (
            <div className="current-user-out-first-14 current-user-loggedin">
              <UserRecord user={crtUser} index={crtUser.index} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const UserRecord = ({ user, index }) => (
  <div className="user-record">
    <span className="user-index">{index + 1}</span>
    <div className="user-info">
      <div className="user--avatar-name">
        <img
          src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/avat-01-512.png"
          alt="user-avater"
          className="avatar"
        />
        <span className="name">{user.name}</span>
      </div>
      <div className="user--score-prize">
        {user.prize && <span>جایزه</span>}
        <span>{user.score} امتیاز</span>
      </div>
    </div>
  </div>
);

export default LeaderBoardPage;
