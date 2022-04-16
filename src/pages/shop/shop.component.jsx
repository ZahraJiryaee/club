import React from "react";

import ShopHeader from "../../components/shop-header/shop-header.component";

import shopMock from "../../components/mock/shop.mock";

import "./shop.styles.scss";

const ShopPage = () => (
  <div>
    {/* header */}
    <ShopHeader />
    {/* content */}
    <span className="shop-grid-data">
      {shopMock.shopItems.map(
        (item, index) =>
          index < 12 && (
            <div className="shop-item" key={item.id}>
              <img
                className="shop-item-img"
                src="https://th.bing.com/th/id/OIP.MPz376vD6rfBlfArgX-6GQAAAA?w=181&h=181&c=7&r=0&o=5&pid=1.7"
                alt="shop-item-img"
              />
              <div className="shop-item-name">{item.name}</div>
              <div className="shop-item-score-needed">
                {item.scoreNeeded} امتیاز
              </div>
              <div className="shop-item-purchase-btn">خرید</div>
            </div>
          )
      )}
    </span>
  </div>
);

export default ShopPage;
