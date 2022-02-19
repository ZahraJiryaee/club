import React from "react";

import "./games.styles.scss";

const BannerGames = ({ category }) => {
  return (
    <div className="banner-container">
      {category.applications.map((application) => {
        return (
          <img
            key={application.id}
            className="banner"
            src={application.source.banner}
          />
        );
      })}
    </div>
  );
};

export default BannerGames;
