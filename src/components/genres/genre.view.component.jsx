import React from "react";
import { useSelector } from "react-redux";

import { ReactComponent as StarLogo } from "../../assets/images/icon/star.svg";

const GenreView = () => {
  const filteredGames = useSelector((state) => state.genres.filteredGenre);
  return (
    <div>
      {filteredGames.map((application) => {
        return (
          <div className="genre-container" key={application.id}>
            <div className="application-container">
              <div className="application-details">
                <img className="icon" src={application.source.icon} />
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
                return <img className="banner" key={index} src={screenshot} />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GenreView;
