import React, { useEffect, useState, Fragment } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { selectFilteredGenre } from "../../redux/genres/genres.seletors";
import { selectFilteredCategory } from "../../redux/games/games.selectors";

import Page from "../../pages/page";

import { routeNames } from "../../services/routeService";
import generateUniqueId from "../../services/generateUniqueId";
import logger from "../../services/logService";

import StarLogo from "../../assets/images/icon/star.png";

import "./genre-view.styles.scss";

const GenreView = ({ title }) => {
  let navigate = useNavigate();
  const { type, id } = useParams();
  const { t } = useTranslation();

  const filteredGenre = useSelector(selectFilteredGenre);
  const filteredCategory = useSelector(selectFilteredCategory);

  const [filteredData, setFilteredData] = useState([]);
  const [pageTitle, setPageTitle] = useState("");

  useEffect(() => {
    logger.logInfo("filteredGenre-genre-view:", filteredGenre);
    if (type === "genre" && filteredGenre.length !== 0) {
      setFilteredData(filteredGenre);
      let currentGenre = filteredGenre[0].genres.filter(
        (item) => item.id === id
      );
      setPageTitle(currentGenre[0]?.title);
    } else if (type === "category" && filteredCategory.length !== 0) {
      setFilteredData(filteredCategory);
      let currentCaretory = filteredCategory[0].categories.filter(
        (item) => item.id === id
      );
      setPageTitle(currentCaretory[0]?.title);
    }
  }, [type, id, filteredData, filteredCategory, filteredGenre]);

  const navigateToGameDetails = (applicationId) => {
    return navigate(`/${routeNames.game}/detail/${applicationId}`);
  };

  return (
    <Page
      title={`${
        type === "genre" ? `${t("Genre")}` : `${t("Category")}`
      }${pageTitle}`}
    >
      <div className="genre-page">
        <div className="genre-container">
          {type === "category" ? (
            <div className="category-header">
              <p className="title">{title}</p>
            </div>
          ) : null}
          {filteredData.map((application) => {
            return (
              <Fragment key={application.id}>
                <div className="game-detail">
                  <div className="icon-name-shortDes-score">
                    <img
                      className="icon"
                      src={application.source.icon}
                      alt="game-icon"
                      onClick={() => {
                        navigateToGameDetails(application.id);
                      }}
                    />
                    <div className="name-shortDes-score">
                      <span
                        className="name"
                        onClick={() => {
                          navigateToGameDetails(application.id);
                        }}
                      >
                        {application.name}
                      </span>
                      <span className="shortDes">
                        {application.short_description}
                      </span>
                      <span className="score">{`${
                        application.install_score_counter
                      } ${t(
                        "Achieve_X_Points_By_Installing_This_Game"
                      )}`}</span>
                    </div>
                  </div>
                  <div className="rate-container">
                    <div className="rate-number">{application.rate}</div>
                    <img className="star" src={StarLogo} alt="star" />
                  </div>
                </div>

                <div className="games-banner-container">
                  {application.source.screenshots.map((screenshot) => (
                    <img
                      className="banner"
                      key={generateUniqueId("genre-view")}
                      src={screenshot}
                      alt="banner"
                    />
                  ))}
                </div>
              </Fragment>
            );
          })}
        </div>
      </div>
    </Page>
  );
};

export default GenreView;
