import React, { useEffect, useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setHeaderMode } from "../../redux/header/header.action";

import ShopHeader from "../../components/shop-header/shop-header.component";
import Pagination from "../../components/common/pagination/pagination.component";

import shopMock from "../../components/mock/shop.mock";

import ShopItem from "./../../assets/images/test/shop-item.png";

import "./shop.styles.scss";

let PageSize = 12;

const ShopPage = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);

  const currentShopData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return shopMock.shopItems.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  useEffect(() => {
    dispatch(setHeaderMode(pathname));
  }, []);

  return (
    <div>
      {/* header */}
      <ShopHeader />
      {/* content */}
      <span className="shop-grid-data">
        {currentShopData.map((item) => (
          <div className="shop-item" key={item.id}>
            <div className="shop-item-img-container">
              <div
                className="shop-item-img"
                style={{ backgroundImage: `url(${ShopItem})` }}
              ></div>
            </div>
            <div className="name-score-container">
              <div className="shop-item-name">{item.name}</div>
              <div className="shop-item-score-needed">
                {item.scoreNeeded} امتیاز
              </div>
            </div>
            <div className="shop-item-purchase-btn">خرید</div>
          </div>
        ))}
      </span>
      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalCount={shopMock.shopItems.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default ShopPage;
