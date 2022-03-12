import React from "react";

import "../../pages/games/games.styles.scss";

const BannerGames = ({ category }) => {
  return (
    <div className="banner-container">
      {category.applications.map((application) => {
        return (
          <img
            key={application.id}
            className="banner"
            src={application.source.banner}
            alt="banner"
          />
        );
      })}
    </div>
  );
};

export default BannerGames;
