import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import {
  getGameDetailsInformation,
  getUserApplicationInformation,
  isApplicationInstalled,
} from "../../redux/games/games.action";
import { setHeaderMode } from "../../redux/header/header.action";
import { setOpenValidationDialog } from "../../redux/user/user.action";

import {
  selectUserApplicationInfo,
  selectIsApplicationInstalled,
  selectGameDetails,
} from "../../redux/games/games.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import GameDetailHeader from "../../components/game-details-header/game-details-header.componetnt";
import GamesRow from "../../components/games/games-row/games-row.component";
import DownloadAppsBottomSheet from "../../components/download-apps-bottom-sheet/download-apps-bottom-sheet.component";
import Page from "../page";

import { routeNames } from "../../services/routeService";
import logger from "../../services/logService";

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
  let navigate = useNavigate();
  const { pathname } = useLocation();
  const { t } = useTranslation();

  const { id: gameId } = useParams();

  const gameDetails = useSelector(selectGameDetails);
  const userApplicationInfo = useSelector(selectUserApplicationInfo);
  const appInstallationStatus = useSelector(selectIsApplicationInstalled);
  const currentUser = useSelector(selectCurrentUser);

  logger.logInfo("gameDetails-game-details:", gameDetails);
  logger.logInfo("userApplicationInfo-game-details:", userApplicationInfo);
  logger.logInfo("appInstallationStatus-game-details:", appInstallationStatus);

  const [showMore, setShowMore] = useState(false);
  const [openBtmSheet, setOpenBtmSheet] = useState(false);

  const [isUserValid, setIsUserValid] = useState(true);

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
    dispatch(setHeaderMode(pathname));
  }, [dispatch, pathname]);

  useEffect(() => {
    dispatch(isApplicationInstalled(gameId));
  }, [gameId, dispatch, currentUser]);

  useEffect(() => {
    dispatch(getGameDetailsInformation(gameId));
  }, [gameId, dispatch]);

  useEffect(() => {
    dispatch(getUserApplicationInformation(gameId));
    /* returns a award lists that user has achieved -level */
  }, [gameId, dispatch, currentUser]);

  useEffect(() => {
    let userPassedLevels = {};
    if (userApplicationInfo === t("User_Not_Valid_Msg")) {
      setIsUserValid(false);
    } else {
      setIsUserValid(true);
      userApplicationInfo.forEach(
        (item) => (userPassedLevels[item.level.id] = true)
      );
      logger.logInfo("userPassedLevels-game-details:", userPassedLevels);
      setAwardsThatUserPassed(userPassedLevels);
    }
  }, [userApplicationInfo, currentUser, t]);

  useEffect(() => {
    if (Object.keys(gameDetails).length !== 0) {
      let level_purchase = [];
      /* ------------- Load Data --------------- */
      /* original */
      logger.logInfo("gameDetails:", gameDetails);
      const { level } = gameDetails;
      const { purchase } = gameDetails;
      /* mock */
      // const level = levelMock;
      // const purchase = purchaseMock;
      /* -------------------------------------- */
      logger.logInfo("level", level);
      level.forEach((l) => {
        level_purchase.push({ ...l, _customType: "level" });
      });
      purchase.forEach((p) => {
        level_purchase.push({ ...p, _customType: "purchase" });
      });
      logger.logInfo("level_purchase-game-details:", level_purchase);
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
    }
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

  const handleUserNotValidTextClick = () => {
    dispatch(setOpenValidationDialog(true));
  };

  return (
    Object.keys(gameDetails).length !== 0 && (
      <Page title={`${t("Game_Details_Page")} ${gameDetails.name}`}>
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
                  <span>
                    +{gameDetails.user_install_counter / 1000} {t("Thousand")}
                  </span>
                  <br />
                  <span>{t("Active_Installation")}</span>
                </li>
                <hr />
                <li>
                  <span>
                    {gameDetails.rate}
                    <StarLogo />
                  </span>
                  <br />
                  <span>{t("Score")}</span>
                </li>
                <hr />
                <li>
                  <span>{t("Size")}</span>
                  <br />
                  <span>
                    {gameDetails.size} {t("Megabytes")}
                  </span>
                </li>
                <hr />
                <li>
                  <span>{t("Creator")}</span>
                  <br />
                  <span>{gameDetails.creator}</span>
                </li>
              </ul>
              <button
                className="install-btn"
                onClick={() => setOpenBtmSheet(true)}
              >
                {t("Install")}
              </button>
            </div>
          </div>
          {/* intro */}
          <div className="game-detail-intro-container">
            <div className="game-detail-header">
              <p className="title">{t("Game_Introduction")}</p>
              <p className="more" onClick={() => setShowMore(!showMore)}>
                {showMore ? t("Less") : t("More")}
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
                {t("Awards_That_Can_Be_Achieved_With_This_Game")}
              </p>
              {!isUserValid ? (
                <p
                  className="game-detail-level-user-not-valid"
                  onClick={handleUserNotValidTextClick}
                >
                  {t("Login_To_See_Award_List")}
                </p>
              ) : null}
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
                    {t("Install_This_App_And")}{" "}
                    {gameDetails.install_score_counter} {t("Get_X_Points")}
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
                            {award.description} {t("And")}{" "}
                            {award.reach_score_counter} {t("Get_X_Points")}
                          </span>
                        </li>
                      </div>
                    );
                  })}
              </ul>
              <div className="more-bonus" onClick={handleMoreBonusClick}>
                <span className="txt">
                  {t("Prizes")} {awardsListTxt ? t("More_Extended") : t("Less")}
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
              <div className="game-detail-header">
                <p className="title">{t("Similar_Games")}</p>
                <p
                  className="more"
                  onClick={() => {
                    return navigate(
                      `/${routeNames.game}/category/${gameDetails.categories[0].id}`
                    );
                  }}
                >
                  {t("More")}
                  <img src={ArrowIconMB} alt="arrow-back" />
                </p>
              </div>
              <GamesRow
                applications={gameDetails.suggest}
                page={routeNames.game}
              />
            </div>
          )}
        </div>

        {/* Bottom Sheet */}
        <DownloadAppsBottomSheet
          open={openBtmSheet}
          setOpen={(e) => setOpenBtmSheet(e)}
          downloadLinks={gameDetails.link}
        />
      </Page>
    )
  );
};

export default GameDetails;
