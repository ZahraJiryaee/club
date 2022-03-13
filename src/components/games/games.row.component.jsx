import React from "react";
import { useNavigate } from "react-router-dom";

import { ReactComponent as StarLogo } from "../../assets/images/icon/star.svg";

import "../../pages/games/games.styles.scss";

function Column({ data }) {
  let navigate = useNavigate();

  const navigateToGameDetails = (application) => {
    return navigate(`/games/detail/${application.id}`, { state: application });
  };

  return (
    <div>
      {data.map((application, index) => {
        return (
          <div key={index}>
            <div className="application-container">
              <div className="application-details">
                <img
                  className="icon"
                  src={application.source.icon}
                  alt="icon"
                  onClick={() => navigateToGameDetails(application)}
                />
                <div className="description">
                  <span
                    className="title"
                    onClick={() => navigateToGameDetails(application)}
                  >
                    {application.name}
                  </span>
                  <span className="short-description">
                    {application.short_description}
                  </span>
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
            {index !== 2 ? <hr className="application-divider" /> : null}
          </div>
        );
      })}
    </div>
  );
}

const RowGames = ({ category }) => {
  let applicationLength = category.applications.length;
  let column = Math.ceil(applicationLength / 3);
  let maxRow = 3;

  let data = [];

  for (let i = 0; i < column; i++) {
    let temp = [];
    for (let j = 0; j < maxRow; j++) {
      if (i * maxRow + j >= applicationLength) break;
      temp.push(category.applications[i * maxRow + j]);
    }
    data.push(temp);
  }

  return (
    <div className="row-container">
      {data.map((columnData, index) => {
        return (
          <div key={index} className="column-container">
            {index !== 2 ? <Column data={columnData} /> : null}
          </div>
        );
      })}
    </div>
  );
};

export default RowGames;
