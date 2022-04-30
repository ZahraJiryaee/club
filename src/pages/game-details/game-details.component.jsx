import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { getGameDetailsInformation } from "../../redux/games/games.action";

import GameDetailHeader from "../../components/game-details-header/game-details-header.componetnt";
import GamesRow from "../../components/games/games-row/games-row.component";
import DownloadAppsBottomSheet from "../../components/download-apps-bottom-sheet/download-apps-bottom-sheet.component";

// import level from "../../components/mock/level.mock";

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
  console.log("gameDetails:", gameDetails);

  const [showMore, setShowMore] = useState(false);
  const [openBtmSheet, setOpenBtmSheet] = useState(false);

  const [levelLength, setLevelLength] = useState(0);
  const [levelFilterConuter, setLevelFilterConuter] = useState(0);
  const [levelFilterClickTimes, setLevelFilterClickTimes] = useState(0);
  const howManyItemToShowOnEachClick = 4;
  const [levelFilter, setLevelFilter] = useState(howManyItemToShowOnEachClick);
  const [levelTxt, setLevelTxt] = useState(true); /* true=>بیشتر  false=>کمتر */

  useEffect(() => {
    dispatch(getGameDetailsInformation(gameId));
  }, [gameId]);

  useEffect(() => {
    if (gameDetails.length !== 0) {
      const { level } = gameDetails;
      setLevelLength(level.length);
      setLevelFilterConuter(
        level.length > howManyItemToShowOnEachClick ? 1 : 0
      );
      setLevelFilterClickTimes(
        (level.length / howManyItemToShowOnEachClick) % 1 === 0
          ? level.length / howManyItemToShowOnEachClick - 1
          : level.length / howManyItemToShowOnEachClick
      );
    }
  }, [gameDetails]);

  useEffect(() => {
    if (levelFilterConuter > levelFilterClickTimes) {
      setLevelTxt(false);
    }
  }, [levelFilterConuter, levelFilterClickTimes]);

  const handleMoreBonusClick = () => {
    setLevelFilter(levelFilter + howManyItemToShowOnEachClick);
    setLevelFilterConuter(levelFilterConuter + 1);

    if (!levelTxt) {
      setLevelFilter(howManyItemToShowOnEachClick);
      setLevelFilterConuter(levelLength > howManyItemToShowOnEachClick ? 1 : 0);
      setLevelTxt(true);
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
          {/* levels */}
          {gameDetails.level.length > 0 && (
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
                    <img src={NotCheckedIcon} alt="check-icon" />
                  </span>
                  <span>
                    این برنامه را نصب کنبد و {gameDetails.install_score_counter}{" "}
                    امتیاز دریافت کنید
                  </span>
                </li>
                {gameDetails.level
                  .filter((level, idx) => idx < levelFilter)
                  .map((level) => (
                    <div key={level.id}>
                      <li>
                        <span className="level-icons">
                          <img src={NotCheckedIcon} alt="check-icon" />
                        </span>
                        <span>
                          به مرحله {level.level} برسید و{" "}
                          {level.reach_score_counter} امتیاز دریافت نمایید
                        </span>
                      </li>
                    </div>
                  ))}
              </ul>
              <div className="more-bonus" onClick={handleMoreBonusClick}>
                <span className="txt">
                  جوایز {levelTxt ? "بیشـــتر" : "کمتر"}
                </span>
                <span className={`${!levelTxt ? "reverse-arrow" : ""}`}>
                  <img src={BlueArrowIcon} alt="arrow-down" />
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
