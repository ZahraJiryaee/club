import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import GenreHeader from "../../components/genres/genre-header.component";

import StarLogo from "../../assets/images/icon/star.png";

import "../../components/genres/genre-view.styles.scss";
import "./search.styles.scss";

const SearchPage = () => {
  const filteredItems = useSelector((state) => state.games.searchedItem);

  return (
    <div>
      <GenreHeader />
      <div className="genre-page">
        <div className="genre-container">
          <div className="category-header">
            <p className="title">
              {filteredItems.length === 0
                ? "نتیجه‌ای یافت نشد!"
                : `${filteredItems.length} مورد یافت شد.`}
            </p>
          </div>
          {filteredItems.map((application) => {
            return (
              <div key={application.id} className="game-detail">
                <div className="application-container">
                  <div className="icon-name-shortDes-score">
                    <img
                      className="icon"
                      src={application.source.icon}
                      alt="icon"
                    />
                    <div className="name-shortDes-score">
                      <span className="name">{application.name}</span>
                      <span className="score">{`${application.install_score_counter} امتیاز با نصب این بازی دریافت کنید.`}</span>
                      <div className="rate-detail">
                        <div className="rate-number">{application.rate}</div>
                        <img className="star" src={StarLogo} alt="star" />
                      </div>
                    </div>
                  </div>
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
