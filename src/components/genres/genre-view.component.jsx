import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { routeNames } from "../../services/routeService";

import StarLogo from "../../assets/images/icon/star.png";

import "./genre-view.styles.scss";

const GenreView = ({ title }) => {
  let navigate = useNavigate();

  const { type } = useParams();

  let filteredData;

  const filteredGenre = useSelector((state) => state.genres.filteredGenre);
  const filteredCategory = useSelector((state) => state.games.filteredCategory);

  if (type === "genre") filteredData = filteredGenre;
  else if (type === "category") filteredData = filteredCategory;

  return (
    <div className="genre-page">
      <div className="genre-container">
        {type === "category" ? (
          <div className="category-header">
            <p className="title">{title}</p>
          </div>
        ) : null}
        {filteredData.map((application) => {
          return (
            <>
              <div key={application.id} className="game-detail">
                <div className="icon-name-shortDes-score">
                  <img
                    className="icon"
                    src={application.source.icon}
                    alt="game-icon"
                    onClick={() => {
                      return navigate(
                        `/${routeNames.game}/detail/${application.id}`
                      );
                    }}
                  />
                  <div className="name-shortDes-score">
                    <span className="name">{application.name}</span>
                    <span className="shortDes">
                      {application.short_description}
                    </span>
                    <span className="score">{`${application.install_score_counter} امتیاز با نصب این بازی دریافت کنید.`}</span>
                  </div>
                </div>
                <div className="rate-container">
                  <div className="rate-number">{application.rate}</div>
                  <img className="star" src={StarLogo} alt="star" />
                </div>
              </div>

              <div className="games-banner-container">
                {application.source.screenshots.map((screenshot, index) => {
                  return (
                    <img
                      className="banner"
                      key={index}
                      src={screenshot}
                      alt="banner"
                    />
                  );
                })}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default GenreView;
