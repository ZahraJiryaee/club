import React from "react";
import { useLocation } from "react-router-dom";

import GameDetailHeader from "../../components/game-details-header/game-details-header.componetnt";

import InstagramIcon from "../../assets/images/icon/instagram.png";
import { ReactComponent as StarLogo } from "../../assets/images/icon/star.svg";

import "./game-details.styles.scss";

const GameDetails = () => {
  const { state: application } = useLocation();
  console.log("application:", application);

  return (
    <div>
      {/* header */}
      <GameDetailHeader screenshots={application.source.screenshots} />
      {/* icon-socal */}
      <div className="game-details-container">
        <div className="game-details-icons-container">
          <div className="game-details-gameicon-names-container">
            <img
              className="gameicon"
              src={application.source.icon}
              alt="game-icon"
            />
            <p className="names">
              <span>{application.name}</span>
              <br />
              <span>{application.short_description}</span>
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
        <div className="game-detail-list-info-container">
          <ul>
            <li>
              <span>30+ هزار</span>
              <br />
              <span>نصب فعال</span>
            </li>
            <hr />
            <li>
              <span>
                <span>4.8 </span>
                <span>
                  <StarLogo style={{ marginTop: "10px" }} />
                </span>
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
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
