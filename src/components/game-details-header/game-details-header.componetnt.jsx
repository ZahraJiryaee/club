import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import generateUniqueId from "../../services/generateUniqueId";

import "./game-details-header.styles.scss";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const GameDetailHeader = ({ screenshots }) => {
  return (
    <div className="game-detail-header-container">
      <div className="game-detail-header">
        <Swiper
          dir="rtl"
          modules={[Pagination]}
          pagination={{ clickable: true }}
          scrollbar={false}
          breakpoints={{
            1024: {
              slidesPerView: 3.2,
            },
            768: {
              slidesPerView: 2.5,
            },
            479: {
              slidesPerView: 1.3,
            },
          }}
          className="game-detail-header-swiper"
          style={{
            "--swiper-pagination-color": "#fff",
          }}
        >
          {screenshots.map((screenshot) => (
            <SwiperSlide key={generateUniqueId("screenshot")}>
              <img src={screenshot} alt="game-screenshot" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default GameDetailHeader;
