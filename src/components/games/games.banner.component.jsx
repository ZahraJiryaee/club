import React from "react";
import { useNavigate } from "react-router-dom";

import { routeNames } from "../../services/routeService";

import "../../pages/games/games.styles.scss";

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
              return navigate(`/${routeNames.game}/detail/${application.id}`, {
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