import React from "react";
import { useNavigate } from "react-router-dom";

import StarLogo from "./../../../assets/images/icon/star.png";

import "./games-row.styles.scss";

const GamesRow = ({ applications, page, category }) => {
  let navigate = useNavigate();

  const navigateToGameDetails = (application, category) => {
    return navigate(`/games/detail/${application.id}`, {
      state: { application: application, category: category },
    });
  };

  console.log("applications:", applications);

  return (
    <div
      className={`games-rows-container ${
        applications.length <= 4 ? `games-rows-container-short` : ""
      } ${applications.length <= 2 ? `games-rows-container-1-and-2` : ""}`}
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
                onClick={
                  page === "games-page"
                    ? () => navigateToGameDetails(app, category)
                    : () => {}
                }
              />
              <div className="name-shortDes-score">
                <span className="name">{app.name}</span>
                <span className="shortDes">{app.short_description}</span>
                <span className="score">{`${app.install_score_counter} امتیاز با نصب این بازی دریافت کنید.`}</span>
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
