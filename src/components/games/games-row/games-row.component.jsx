import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { routeNames } from "../../../services/routeService";

import StarLogo from "./../../../assets/images/icon/star.png";

import "./games-row.styles.scss";

const GamesRow = ({ applications, page }) => {
  let navigate = useNavigate();
  const { t } = useTranslation();

  const navigateToGameDetails = (application) => {
    return navigate(`/${routeNames.game}/detail/${application.id}`);
  };

  const handleGameClicked = (app) => {
    if (page === routeNames.game) {
      return navigateToGameDetails(app);
    }
  };

  console.log("applications:", applications);

  return (
    <div
      className={`games-rows-container ${
        applications.length <= 4
          ? `games-rows-container__${applications.length}`
          : ""
      }`}
      style={{ "--games-row-items-length": applications.length }}
    >
      {applications.map((app) => (
        <React.Fragment key={app.id}>
          <div className="each-game">
            <div className="icon-name-shortDes-score">
              <img
                className="icon"
                src={app.source.icon}
                alt="game-icon"
                onClick={() => handleGameClicked(app)}
              />
              <div className="name-shortDes-score">
                <span className="name" onClick={() => handleGameClicked(app)}>
                  {app.name}
                </span>
                <span className="shortDes">{app.short_description}</span>
                <span className="score">{`${app.install_score_counter} ${t(
                  "Achieve_X_Points_By_Installing_This_Game"
                )}`}</span>
              </div>
            </div>
            <div className="rate-container">
              <div className="rate-number">{app.rate}</div>
              <img className="star" src={StarLogo} alt="star" />
            </div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default GamesRow;
