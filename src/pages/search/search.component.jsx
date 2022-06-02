import React from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import {
  setOpenShopModal,
  setShopModalData,
} from "../../redux/shop/shop.actions";

import { selectSearchedGameItemsMappedToSearchPage } from "../../redux/games/games.selectors";
import { selectSearchedShopItemsMappedToSearchPage } from "../../redux/shop/shop.selectors";

import GenreHeader from "../../components/genres/genre-header.component";
import ShopHeader from "../../components/shop-header/shop-header.component";

import { routeNames } from "../../services/routeService";

import StarLogo from "../../assets/images/icon/star.png";

import "../../components/genres/genre-view.styles.scss";

const SearchPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const firstSliceOfPathname = location.pathname.slice(1).split("/")[0];
  const selector = {
    [routeNames["game"]]: useSelector(
      selectSearchedGameItemsMappedToSearchPage
    ),
    [routeNames["shop"]]: useSelector(
      selectSearchedShopItemsMappedToSearchPage
    ),
  };
  let filteredItems = selector[firstSliceOfPathname];

  const handleShopItemClick = (originalItem) => {
    dispatch(setOpenShopModal(true));
    dispatch(setShopModalData(originalItem));
  };

  const handleApplicationPlayer = (application) => {
    const { action } = application;
    switch (action.component) {
      case "game":
        return (
          <>
            <div className="rate-number">{action.content}</div>
            <img src={StarLogo} alt="star-logo" className="star" />
          </>
        );

      case "shop":
        return (
          <button
            className="shop-item-purchase-btn"
            onClick={() => handleShopItemClick(application.originalItem)}
          >
            {action.content}
          </button>
        );

      default:
        break;
    }
  };

  return (
    <div>
      {firstSliceOfPathname === routeNames["game"] ? <GenreHeader /> : null}
      {firstSliceOfPathname === routeNames["shop"] ? <ShopHeader /> : null}

      <div className="genre-page">
        <div className="genre-container">
          <span className="category-header">
            <p className="title">
              {filteredItems.data.length === 0
                ? t("No_Results_Were_Found")
                : `${filteredItems.data.length} ${t("X_Results_Were_Found")}`}
            </p>
          </span>

          {filteredItems.data.map((application) => {
            return (
              <div key={application.id} className="game-detail">
                <div className="icon-name-shortDes-score">
                  <img className="icon" src={application.icon} alt="icon" />
                  <div className="name-shortDes-score">
                    <span className="name">{application.header}</span>
                    <span className="score">{`${application.subHeader}`}</span>
                  </div>
                </div>
                <div className="rate-container">
                  {handleApplicationPlayer(application)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
