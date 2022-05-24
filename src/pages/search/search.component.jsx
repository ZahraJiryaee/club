import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

import GenreHeader from "../../components/genres/genre-header.component";

import { ReactComponent as StarLogo } from "../../assets/images/icon/star.svg";

const SearchPage = () => {
  const location = useLocation();

  let filteredItems = location.state.selector;

  const [hasMore, setHasMore] = useState(true);
  const [data, setData] = useState([]);

  const handleShopItemClick = () => {
    console.log("open dialogue");
  };

  const handleApplicationPlayer = (action) => {
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
            onClick={handleShopItemClick}
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
      {filteredItems.component === "game" ? <GenreHeader /> : null}
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
                  <>{handleApplicationPlayer(application.action)}</>
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
