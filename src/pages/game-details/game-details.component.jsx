import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {
  getGameDetailsInformation,
  getUserApplicationInformation,
  isApplicationInstalled,
} from "../../redux/games/games.action";

import {
  selectUserApplicationInfo,
  selectIsApplicationInstalled,
} from "../../redux/games/games.selectors";

import GameDetailHeader from "../../components/game-details-header/game-details-header.componetnt";
import GamesRow from "../../components/games/games-row/games-row.component";
import DownloadAppsBottomSheet from "../../components/download-apps-bottom-sheet/download-apps-bottom-sheet.component";

// import {levelMock,purchaseMock,userAppInfoMock,} from "../../components/mock/level.mock";

import InstagramIcon from "../../assets/images/icon/instagram.png";
import ArrowIconMB from "../../assets/images/icon/arrow-back-marineblue.png";
import CheckedIcon from "./../../assets/images/icon/check.png";
import NotCheckedIcon from "./../../assets/images/icon/not-check.png";
import LevelBadgeIcon from "./../../assets/images/icon/level-badge.png";
import BlueArrowIcon from "./../../assets/images/icon/blue-arrow.png";
import { ReactComponent as StarLogo } from "../../assets/images/icon/star.svg";

import "./game-details.styles.scss";

const GameDetails = () => {
  const dispatch = useDispatch();

  const { id: gameId } = useParams();

  const gameDetails = useSelector((state) => state.games.gameDetails);
  const userApplicationInfo = useSelector(selectUserApplicationInfo);
  const appInstallationStatus = useSelector(selectIsApplicationInstalled);

  console.log("gameDetails:", gameDetails);
  console.log("userApplicationInfo:", userApplicationInfo);
  console.log("appInstallationStatus:", appInstallationStatus);

  const [showMore, setShowMore] = useState(false);
  const [openBtmSheet, setOpenBtmSheet] = useState(false);

  const [awardsThatUserPassed, setAwardsThatUserPassed] = useState({});
  const [awardsList, setAwardsList] = useState([]);
  const [awardsListLength, setAwardsListLength] = useState(0);
  const [awardsListFilterConuter, setAwardsListFilterConuter] = useState(0);
  const [awardsListFilterClickTimes, setAwardsListFilterClickTimes] =
    useState(0);
  const howManyItemToShowOnEachClick = 4;
  const [awardsListFilter, setAwardsListFilter] = useState(
    howManyItemToShowOnEachClick
  );
  const [awardsListTxt, setAwardsListTxt] =
    useState(true); /* true=>show more  false=>show less */

  useEffect(() => {
    dispatch(isApplicationInstalled(gameId));
  }, [gameId]);

  useEffect(() => {
    dispatch(getGameDetailsInformation(gameId));
  }, [gameId]);

  useEffect(() => {
    dispatch(getUserApplicationInformation(gameId));
  }, [gameId]);

  useEffect(() => {
    let userPassedLevels = {};
    userApplicationInfo.forEach(
      (item) => (userPassedLevels[item.level.id] = true)
    );
    console.log("userPassedLevels:", userPassedLevels);
    setAwardsThatUserPassed(userPassedLevels);
  }, [userApplicationInfo]);

  useEffect(() => {
    let level_purchase = [];
    /* ------------- Load Data --------------- */
    /* original */
    const { level } = gameDetails;
    const { purchase } = gameDetails;
    /* mock */
    // const level = levelMock;
    // const purchase = purchaseMock;
    /* -------------------------------------- */
    level.forEach((level) => {
      level_purchase.push({ ...level, _customType: "level" });
    });
    purchase.forEach((purchase) => {
      level_purchase.push({ ...purchase, _customType: "purchase" });
    });
    console.log("level_purchase:", level_purchase);
    setAwardsList(level_purchase);
    //
    setAwardsListLength(level_purchase.length);
    setAwardsListFilterConuter(
      level_purchase.length > howManyItemToShowOnEachClick ? 1 : 0
    );
    setAwardsListFilterClickTimes(
      (level_purchase.length / howManyItemToShowOnEachClick) % 1 === 0
        ? level_purchase.length / howManyItemToShowOnEachClick - 1
        : level_purchase.length / howManyItemToShowOnEachClick
    );
  }, [gameDetails]);

  useEffect(() => {
    if (awardsListFilterConuter > awardsListFilterClickTimes) {
      setAwardsListTxt(false);
    }
  }, [awardsListFilterConuter, awardsListFilterClickTimes]);

  const handleMoreBonusClick = () => {
    setAwardsListFilter(awardsListFilter + howManyItemToShowOnEachClick);
    setAwardsListFilterConuter(awardsListFilterConuter + 1);

    if (!awardsListTxt) {
      setAwardsListFilter(howManyItemToShowOnEachClick);
      setAwardsListFilterConuter(
        awardsListLength > howManyItemToShowOnEachClick ? 1 : 0
      );
      setAwardsListTxt(true);
    }
  };

  return (
    gameDetails.length !== 0 && (
      <div>
        {/* header */}
        <GameDetailHeader screenshots={gameDetails.source.screenshots} />

        {/* content */}
        <div className="game-details-container">
          <div className="game-detail-icon-list-responsive-controller">
            {/* game name,des,icons */}
            <div className="game-details-icons-container">
              <div className="game-details-gameicon-names-container">
                <img
                  className="gameicon"
                  src={gameDetails.source.icon}
                  alt="game-icon"
                />
                <p className="names">
                  <span className="name">{gameDetails.name}</span>
                  <br />
                  <span className="short-des">
                    {gameDetails.short_description}
                  </span>
                </p>
              </div>
              <div className="game-details-shareicon-container">
                <img
                  className="instagramicon"
                  src={InstagramIcon}
                  alt="instagram-icon"
                />
              </div>
            </div>
            {/* lists */}
            <div className="game-detail-list-info-container">
              <ul>
                <li>
                  <span>+{gameDetails.user_install_counter / 1000} هزار</span>
                  <br />
                  <span>نصب فعال</span>
                </li>
                <hr />
                <li>
                  <span>
                    {gameDetails.rate}
                    <StarLogo />
                  </span>
                  <br />
                  <span>امتیاز</span>
                </li>
                <hr />
                <li>
                  <span>حجم</span>
                  <br />
                  <span>{gameDetails.size} مگابایت</span>
                </li>
                <hr />
                <li>
                  <span>سازنده</span>
                  <br />
                  <span>{gameDetails.creator}</span>
                </li>
              </ul>
              <button
                className="install-btn"
                onClick={() => setOpenBtmSheet(true)}
              >
                نصب
              </button>
            </div>
          </div>
          {/* intro */}
          <div className="game-detail-intro-container">
            <div className="game-detail-header">
              <p className="title">معرفی برنامه</p>
              <p className="more" onClick={() => setShowMore(!showMore)}>
                {showMore ? "کمتر" : "بیشتر"}
                <img src={ArrowIconMB} alt="arrow-back" />
              </p>
            </div>
            <div
              className={`game-detail-intro-mobile ${
                showMore ? "full-height" : ""
              }`}
            >
              {showMore
                ? gameDetails.description
                : gameDetails.description.length > 300
                ? `${gameDetails.description.substring(0, 300)} ...`
                : gameDetails.description}
            </div>
            <div className="game-detail-intro-tabdes">
              {gameDetails.description}
            </div>
          </div>
          {/* Awards List */}
          {awardsList.length > 0 && (
            <div className="game-detail-level-container">
              <img
                className="game-detail-level-badge"
                src={LevelBadgeIcon}
                alt="level-badge"
              />
              <p className="game-detail-level-header">
                جوایزی که با این بازی می‌تونی بگیری:
              </p>
              <ul className="game-detail-level-list-container">
                <li>
                  <span className="level-icons">
                    <img
                      src={
                        appInstallationStatus.is_install
                          ? CheckedIcon
                          : NotCheckedIcon
                      }
                      alt="check-icon"
                      className="check-icon"
                    />
                  </span>
                  <span
                    className={`${
                      appInstallationStatus.is_install ? "color-dark-65" : ""
                    }`}
                  >
                    این برنامه را نصب کنبد و {gameDetails.install_score_counter}{" "}
                    امتیاز دریافت کنید
                  </span>
                </li>
                {awardsList
                  .filter((award, idx) => idx < awardsListFilter)
                  .map((award, idx) => {
                    return (
                      <div key={award.id}>
                        <li>
                          <span className="level-icons">
                            {award._customType === "level" ? (
                              <img
                                src={
                                  awardsThatUserPassed[award.id]
                                    ? CheckedIcon
                                    : NotCheckedIcon
                                }
                                alt="check-icon"
                                className="check-icon"
                              />
                            ) : null}
                          </span>
                          <span
                            className={`${
                              awardsThatUserPassed[award.id]
                                ? "color-dark-65"
                                : ""
                            }`}
                          >
                            {award.description} و {award.reach_score_counter}{" "}
                            امتیاز دریافت نمایید
                          </span>
                        </li>
                      </div>
                    );
                  })}
              </ul>
              <div className="more-bonus" onClick={handleMoreBonusClick}>
                <span className="txt">
                  جوایز {awardsListTxt ? "بیشـــتر" : "کمتر"}
                </span>
                <span className={`${!awardsListTxt ? "reverse-arrow" : ""}`}>
                  <img
                    className="more-bonus-arrow"
                    src={BlueArrowIcon}
                    alt="arrow-down"
                  />
                </span>
              </div>
            </div>
          )}
          {/* simiral games */}
          {gameDetails.suggest.length > 0 && (
            <div className="game-detail-simiral-games-container">
              <div
                className="game-detail-header"
                // onClick={() => navigate(`/games/category/${category.id}`)}
              >
                <p className="title">بازی‌های مشابه</p>
                <p className="more">
                  بیشتر
                  <img src={ArrowIconMB} alt="arrow-back" />
                </p>
              </div>
              <GamesRow applications={gameDetails.suggest} />
            </div>
          )}
        </div>

        {/* Bottom Sheet */}
        <DownloadAppsBottomSheet
          open={openBtmSheet}
          setOpen={(e) => setOpenBtmSheet(e)}
          downloadLinks={gameDetails.link}
        />
      </div>
    )
  );
};

export default GameDetails;
