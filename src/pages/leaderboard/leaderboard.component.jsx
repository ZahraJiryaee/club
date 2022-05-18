import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { setHeaderMode } from "../../redux/header/header.action";
import {
  getUserListWeekly,
  getUserListSeasonal,
} from "../../redux/leaderboard/leaderboard.action";

import LeaderboardHeader from "../../components/leaderboard-header/leaderboard-header.component";

// import topUsersWeekly from "../../components/mock/leaderborad.mock";

import ProfileAvatar from "./../../assets/images/icon/profile-avatar.png";

import "./leaderboard.styles.scss";

const LeaderBoardPage = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const leaderboardHeaderStatus = useSelector(
    (state) => state.leaderboard.leaderboardHeaderStatus
  );
  const currentUser = useSelector((state) => state.user.currentUser);

  const [topUsers, setTopUsers] = useState(null);
  const [loggedinUser, setLoggedinUser] = useState(null);

  const checkIFUserIsInBetween = (rowIndex) => {
    return rowIndex >= 7 &&
      rowIndex <= 13 &&
      rowIndex === loggedinUser.index - 1
      ? true
      : false;
  };

  const FindCurrentUserInLeaderboardList = useCallback(
    (topUsers) => {
      if (currentUser) {
        const loggedinUser = topUsers.filter(
          (user) => user.user.username === currentUser.username
        );
        setLoggedinUser(loggedinUser[0]);
      }
    },
    [currentUser]
  );

  const UserRecord = ({ user }) => {
    const { first_name, last_name, avatar } = user.user;
    const { award, index, seasonal, weakly } = user;
    return (
      <div className="user-record">
        <span className="user-index">{index}</span>
        <div className="user-info">
          <div className="user--avatar-name">
            <img
              src={`${avatar ? avatar : ProfileAvatar}`}
              alt="user-avater"
              className="avatar"
            />
            <span className="name">
              {last_name} {first_name}
            </span>
          </div>
          <div className="user--score-prize">
            {award && <span>{t("Prize")}</span>}
            <span>
              {leaderboardHeaderStatus ? weakly : seasonal} {t("Score")}
            </span>
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    dispatch(setHeaderMode(pathname));
  }, [dispatch, pathname]);

  useEffect(() => {
    /*
    true:general
    false:weekly
    */
    let result;
    if (leaderboardHeaderStatus) {
      result = dispatch(getUserListSeasonal());
    } else {
      result = dispatch(getUserListWeekly());
    }
    result.then((response) => {
      if (response.status === 200) {
        setTopUsers(response.data.data);
      }
    });
  }, [leaderboardHeaderStatus, dispatch]);

  useEffect(() => {
    if (topUsers) FindCurrentUserInLeaderboardList(topUsers);
  }, [topUsers, FindCurrentUserInLeaderboardList]);

  return topUsers ? (
    <div>
      {/* header */}
      <LeaderboardHeader top3={topUsers.slice(0, 3)} />

      {/* content */}
      <div className="leaderboard-container">
        <p className="leaderborad-headline-txt">{t("Leaderboard_Table")}</p>
        <div className="center-flex">
          <div
            className={`leaderboard-user-list ${
              loggedinUser &&
              loggedinUser.index - 1 >= 7 &&
              loggedinUser.index - 1 <= 13
                ? "leaderboard-height-current-user-between-7-and-13"
                : ""
            } ${topUsers.length < 7 ? "leaderboard-full-width-records" : ""}`}
          >
            {topUsers
              .filter((user, idx) => idx <= 13)
              .map((user, idx) => (
                <div
                  key={user.id}
                  className={`leaderboard-each-user ${
                    loggedinUser && loggedinUser.index - 1 === idx
                      ? "current-user-in-first-14 current-user-loggedin"
                      : ""
                  } ${
                    loggedinUser && checkIFUserIsInBetween(idx)
                      ? "current-user-between-7-and-13 current-user-loggedin"
                      : ""
                  }`}
                >
                  <UserRecord user={user} />
                </div>
              ))}
          </div>
        </div>

        {loggedinUser && loggedinUser.index > 14 && (
          <div className="center-flex">
            <div className="current-user-out-first-14 current-user-loggedin">
              <UserRecord user={loggedinUser} />
            </div>
          </div>
        )}
      </div>
    </div>
  ) : null;
};

export default LeaderBoardPage;
