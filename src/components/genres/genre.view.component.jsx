import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

import { ReactComponent as StarLogo } from "../../assets/images/icon/star.svg";

import "./genre.styles.scss";

const GenreView = ({ title }) => {
  let navigate = useNavigate();

  const { type } = useParams();

  let filteredData;

  const filteredGenre = useSelector((state) => state.genres.filteredGenre);
  const filteredCategory = useSelector((state) => state.games.filteredCategory);

  if (type === "genre") filteredData = filteredGenre;
  else if (type === "category") filteredData = filteredCategory;

  return (
    <div className="genre-container">
      {type === "category" ? (
        <div className="category-container">
          <span className="category-title">{title}</span>
        </div>
      ) : null}
      {filteredData.map((application) => {
        return (
          <div key={application.id}>
            <div className="application-container">
              <div
                className="application-details"
                onClick={() => {
                  return navigate(`/games/detail/${application.id}`, {
                    state: {
                      application: application,
                      category: { applications: [] },
                    },
                  });
                }}
              >
                <img
                  className="icon"
                  src={application.source.icon}
                  alt="icon"
                />
                <div className="description">
                  <span className="title">{application.name}</span>
                  <span className="install-score">{`${application.install_score_counter} امتیاز با نصب این بازی دریافت کنید.`}</span>
                </div>
              </div>
              <div className="application-rate">
                <br />
                <div>
                  <span className="rate-text">{application.rate}</span>
                </div>
                <StarLogo className="rate-icon" />
              </div>
            </div>
            <div className="banner-container">
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
          </div>
        );
      })}
    </div>
  );
};

export default GenreView;
