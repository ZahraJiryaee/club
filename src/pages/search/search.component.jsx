import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import {
  setOpenShopModal,
  setShopModalData,
  getSearchedShopItems,
} from "../../redux/shop/shop.actions";
import { getSearchedItem } from "../../redux/games/games.action";
import { setHeaderMode } from "../../redux/header/header.action";

import { selectSearchedGameItemsMappedToSearchPage } from "../../redux/games/games.selectors";
import { selectSearchedShopItemsMappedToSearchPage } from "../../redux/shop/shop.selectors";

import GenreHeader from "../../components/genres/genre-header.component";
import ShopHeader from "../../components/shop-header/shop-header.component";
import Page from "../page";

import { routeNames } from "../../services/routeService";

import StarLogo from "../../assets/images/icon/star.png";

import "../../components/genres/genre-view.styles.scss";

const SearchPage = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const { t } = useTranslation();

  /*
  route format:
  {the component we are searching on-as firstSliceOfPathname}/"search"/{searchField}
  */
  const firstSliceOfPathname = pathname.slice(1).split("/")[0];
  const searchField = pathname.slice(1).split("/")[2];

  const [pageTitle, setPageTitle] = useState("");

  useEffect(() => {
    dispatch(setHeaderMode(pathname));
  }, [dispatch, pathname]);

  useEffect(() => {
    switch (firstSliceOfPathname) {
      case routeNames.game:
        dispatch(getSearchedItem(searchField));
        setPageTitle(t("Search_Page__Game"));
        break;

      case routeNames.shop: {
        dispatch(getSearchedShopItems(searchField));
        setPageTitle(t("Search_Page__Shop"));
        break;
      }

      default:
        break;
    }
  }, [pathname, firstSliceOfPathname, searchField, dispatch, t]);

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

  const navigateToItemDetails = (routePath, applicationId) => {
    return navigate(`/${routePath}/detail/${applicationId}`);
  };

  const handleItemClicked = (application) => {
    const { action } = application;
    switch (action.component) {
      case "game":
        return navigateToItemDetails(routeNames["game"], application.id);
      case "shop":
        return null;
      default:
        return null;
    }
  };

  return (
    <Page title={pageTitle}>
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
                  <img
                    className="icon"
                    src={application.icon}
                    alt="icon"
                    onClick={() => handleItemClicked(application)}
                  />
                  <div className="name-shortDes-score">
                    <span
                      className="name"
                      onClick={() => handleItemClicked(application)}
                    >
                      {application.header}
                    </span>
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
    </Page>
  );
};

export default SearchPage;
