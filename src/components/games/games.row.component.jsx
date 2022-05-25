import React from "react";
import { useNavigate } from "react-router-dom";

import { routeNames } from "../../services/routeService";

import { ReactComponent as StarLogo } from "../../assets/images/icon/star.svg";

import "./games.row.styles.scss";

function Column({ data, category, maxRowNumber, dividerWidth }) {
  let navigate = useNavigate();

  const navigateToGameDetails = (application) => {
    return navigate(`/${routeNames.game}/detail/${application.id}`, {
      state: { application: application, category: category },
    });
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
            {index !== maxRowNumber - 1 ? (
              <hr className={dividerWidth} />
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

const RowGames = ({ category }) => {
  // chunk number represents rows
  let mobile_data = chunkArray(category.applications, 3);
  let tabletdesktop_data = chunkArray(category.applications, 2);

  return (
    <div className="row-container">
      {/*---------------------- Mobile ------------------------*/}
      <div className="row-container-mobile-view">
        {mobile_data.map((columnData, index) => {
          return (
            <div key={index} style={{ "--games-row-length": 1 }}>
              {/* index represents columns */}
              {/* --games-row-length is how many columns to show on each 100vw */}
              {index < 2 ? (
                <div className="column-container">
                  <Column
                    data={columnData}
                    category={category}
                    maxRowNumber={3}
                    dividerWidth="application-divider-full-width"
                  />
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
      {/*---------------------- Tablet ----------------------*/}
      <div className="row-container-tablet-view">
        {tabletdesktop_data.map((columnData, index) => {
          return (
            <div
              key={index}
              style={{
                "--games-row-length": tabletdesktop_data.length >= 2 ? 2 : 1,
              }}
            >
              {index < 2 ? (
                <div className="column-container">
                  <Column
                    data={columnData}
                    category={category}
                    maxRowNumber={2}
                    dividerWidth={`${
                      tabletdesktop_data.length === 1
                        ? "application-divider-full-width"
                        : "application-divider"
                    }`}
                  />
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
      {/*---------------------- Desktop ----------------------*/}
      <div className="row-container-desktop-view">
        {tabletdesktop_data.map((columnData, index) => {
          return (
            <div
              key={index}
              style={{
                "--games-row-length":
                  tabletdesktop_data.length >= 3
                    ? 3
                    : tabletdesktop_data.length,
              }}
            >
              {index < 3 ? (
                <div className="column-container">
                  <Column
                    data={columnData}
                    category={category}
                    maxRowNumber={2}
                    dividerWidth={`${
                      tabletdesktop_data.length === 1
                        ? "application-divider-full-width"
                        : "application-divider"
                    }`}
                  />
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

function chunkArray(arr, chunkLength) {
  var chunks = [];
  for (var i = 0; i < arr.length / chunkLength; i++) {
    if (chunkLength * (i + 1) <= arr.length)
      chunks.push(arr.slice(chunkLength * i, chunkLength * (i + 1)));
  }
  return chunks;
}

export default RowGames;
