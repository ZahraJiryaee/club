import React from "react";
import { useNavigate } from "react-router-dom";

import { routeNames } from "../../../services/routeService";

import "./games-banner.styles.scss";

const BannerGames = ({ category }) => {
  let navigate = useNavigate();

  return (
    <div className="games-banner-container">
      {category.applications.map((application) => {
        return (
          <img
            key={application.id}
            className={`banner banner__${category.applications.length}`}
            src={application.source.banner}
            alt="banner"
            onClick={() => {
              return navigate(`/${routeNames.game}/detail/${application.id}`);
            }}
          />
        );
      })}
    </div>
  );
};

export default BannerGames;
