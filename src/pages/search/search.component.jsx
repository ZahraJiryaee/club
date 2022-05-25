import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";

import {
  setOpenShopModal,
  setShopModalData,
} from "../../redux/shop/shop.actions";

import { selectSearchedGameItemsMappedToSearchPage } from "../../redux/games/games.selectors";
import { selectSearchedShopItemsMappedToSearchPage } from "../../redux/shop/shop.selectors";

import GenreHeader from "../../components/genres/genre-header.component";
import ShopHeader from "../../components/shop-header/shop-header.component";

import { routeNames } from "../../services/routeService";

import { ReactComponent as StarLogo } from "../../assets/images/icon/star.svg";

const SearchPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();

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

  const [hasMore, setHasMore] = useState(true);
  const [data, setData] = useState([]);

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
            <div>
              <span className="rate-text">{action.content}</span>
            </div>
            <StarLogo className="rate-icon" />
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

  // useEffect(() => {
  //   setData(data.concat(Array.from()));
  // }, []);

  // const fetchMoreData = () => {
  //   if (data.length >= filteredItems.length) {
  //     setHasMore(false);
  //     return;
  //   }

  //   setTimeout(() => {
  //     setData(data.concat(Array.from(filteredItems)));
  //   });
  // };

  return (
    <div>
      {firstSliceOfPathname === routeNames["game"] ? <GenreHeader /> : null}
      {firstSliceOfPathname === routeNames["shop"] ? <ShopHeader /> : null}

      <div className="genre-container">
        <div className="category-container">
          <span className="category-title">
            {filteredItems.data.length === 0
              ? "نتیجه‌ای یافت نشد!"
              : `${filteredItems.data.length} مورد یافت شد.`}
          </span>
        </div>
        {filteredItems.data.map((application) => {
          return (
            <div key={application.id}>
              <div className="application-container">
                <div className="application-details">
                  <img className="icon" src={application.icon} alt="icon" />
                  <div className="description">
                    <span className="title">{application.header}</span>
                    <span className="install-score">
                      {application.subHeader}
                    </span>
                  </div>
                </div>
                <div className="application-rate">
                  <br />
                  <>{handleApplicationPlayer(application)}</>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchPage;
