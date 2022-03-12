import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";

import GenreHeader from "../../components/genres/genre-header.component";

import { ReactComponent as StarLogo } from "../../assets/images/icon/star.svg";

const SearchPage = () => {
  const filteredItems = useSelector((state) => state.games.searchedItem);
  const [hasMore, setHasMore] = useState(true);
  const [data, setData] = useState([]);

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
      <GenreHeader />
      <div className="genre-container">
        <div className="category-container">
          <span className="category-title">
            {filteredItems.length === 0
              ? "نتیجه‌ای یافت نشد!"
              : `${filteredItems.length} مورد یافت شد.`}
          </span>
        </div>
        {filteredItems.map((application) => {
          return (
            <div key={application.id}>
              <div className="application-container">
                <div className="application-details">
                  <img
                    className="icon"
                    src={application.source.icon}
                    alt="icon"
                  />
                  <div className="description">
                    <span className="title">{application.name}</span>
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SearchPage;
