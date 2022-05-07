import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setHeaderMode } from "../../redux/header/header.action";

import ShopHeader from "../../components/shop-header/shop-header.component";

import shopMock from "../../components/mock/shop.mock";

import ShopItem from "./../../assets/images/test/shop-item.png";

import "./shop.styles.scss";

const ShopPage = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHeaderMode(pathname));
  }, []);

  return (
    <div>
      {/* header */}
      <ShopHeader />
      {/* content */}
      <span className="shop-grid-data">
        {shopMock.shopItems.map(
          (item, index) =>
            index < 12 && (
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
            )
        )}
      </span>
    </div>
  );
};

export default ShopPage;
