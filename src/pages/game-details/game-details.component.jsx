import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import GameDetailHeader from "../../components/game-details-header/game-details-header.componetnt";
import RowGames from "../../components/games/games.row.component";

import InstagramIcon from "../../assets/images/icon/instagram.png";
import ArrowIconMB from "../../assets/images/icon/arrow-back-marineblue.png";
import { ReactComponent as StarLogo } from "../../assets/images/icon/star.svg";

import "./game-details.styles.scss";

const GameDetails = () => {
  let navigate = useNavigate();
  const {
    state: { application, category },
  } = useLocation();
  console.log("application:", application);
  const [showMore, setShowMore] = useState(false);

  return (
    <div>
      {/* header */}
      <GameDetailHeader screenshots={application.source.screenshots} />
      {/* icon-social */}

      <div className="game-details-container">
        <div className="game-detail-icon-list-responsive-controller">
          <div className="game-details-icons-container">
            <div className="game-details-gameicon-names-container">
              <img
                className="gameicon"
                src={application.source.icon}
                alt="game-icon"
              />
              <p className="names">
                <span className="name">{application.name}</span>
                <br />
                <span className="short-des">
                  {application.short_description}
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
                <span>+30 هزار</span>
                <br />
                <span>نصب فعال</span>
              </li>
              <hr />
              <li>
                <span>
                  {application.rate}
                  <StarLogo />
                </span>
                <br />
                <span>6012</span>
              </li>
              <hr />
              <li>
                <span>حجم</span>
                <br />
                <span>2 مگابایت</span>
              </li>
              <hr />
              <li>
                <span>سازنده</span>
                <br />
                <span>مدریک</span>
              </li>
            </ul>
            <button className="install-btn">نصب</button>
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
              ? application.description
              : application.description.length > 300
              ? `${application.description.substring(0, 300)} ...`
              : application.description}
          </div>
          <div className="game-detail-intro-tabdes">
            {application.description}
          </div>
        </div>
        {/* simiral games */}
        <div className="game-detail-simiral-games-container">
          <div
            className="game-detail-header"
            onClick={() => navigate(`/games/category/${category.id}`)}
          >
            <p className="title">بازی‌های مشابه</p>
            <p className="more">
              بیشتر
              <img src={ArrowIconMB} alt="arrow-back" />
            </p>
          </div>
          <RowGames category={category} />
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
