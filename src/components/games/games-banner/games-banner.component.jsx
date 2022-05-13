import React from "react";
import { useNavigate } from "react-router-dom";

import "./games-banner.styles.scss";

const BannerGames = ({ category }) => {
  let navigate = useNavigate();

  return (
    <div className="banner-container">
      {category.applications.map((application) => {
        return (
          <img
            key={application.id}
            className="banner"
            src={application.source.banner}
            alt="banner"
            onClick={() => {
              return navigate(`/games/detail/${application.id}`, {
                state: { application: application, category: category },
              });
            }}
          />
        );
      })}
    </div>
  );
};

export default BannerGames;
