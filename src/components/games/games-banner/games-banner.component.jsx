import React from "react";
import { useNavigate } from "react-router-dom";

import { routeNames } from "../../../services/routeService";

import "./games-banner.styles.scss";

const BannerGames = ({ category }) => {
  let navigate = useNavigate();
  console.log("category.applications.length", category.applications.length);
  return (
    <div
      className="games-banner-container"
      style={{ "--games-banner-items-length": category.applications.length }}
    >
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
