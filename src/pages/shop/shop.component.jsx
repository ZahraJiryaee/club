import React, { useEffect, useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

import { setHeaderMode } from "../../redux/header/header.action";
import {
  setOpenShopModal,
  setShopModalData,
  getAllShopItems,
} from "../../redux/shop/shop.actions";

import { selectAllShopItems } from "../../redux/shop/shop.selectors";

import ShopOrderingHeader from "../../components/shop-ordering-header/shop-ordering-header.component";
import ShopHeader from "../../components/shop-header/shop-header.component";
import Pagination from "../../components/common/pagination/pagination.component";

// import shopMock from "../../components/mock/shop.mock";

import ShopItem from "./../../assets/images/icon/shop-item.png";

import "./shop.styles.scss";
import Page from "../page";

let PageSize = 4 * 4;

const ShopPage = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  // const allShopItems = shopMock.shopItems;
  const allShopItems = useSelector(selectAllShopItems);

  const [currentPage, setCurrentPage] = useState(1);

  const currentShopData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return allShopItems.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, allShopItems]);

  const onPurchaseClick = (item) => {
    dispatch(setOpenShopModal(true));
    dispatch(setShopModalData(item));
  };

  useEffect(() => {
    dispatch(setHeaderMode(pathname));
  }, [dispatch, pathname]);

  useEffect(() => {
    dispatch(getAllShopItems());
  }, [dispatch]);

  return (
    <Page title={t("Shop_Page")}>
      {/* General Haeder */}
      <ShopHeader />

      {/* Ordering header */}
      <ShopOrderingHeader />

      {/* content */}
      <span className="shop-grid-data">
        {currentShopData.map((item) => (
          <div className="shop-item" key={item.id}>
            <div className="shop-item-img-container">
              <img
                className="shop-item-img"
                src={item.icon.source ? item.icon.source : ShopItem}
                alt="shop-item"
              />
            </div>
            <div className="name-score-container">
              <div className="shop-item-name">{item.title}</div>
              <div className="shop-item-score-needed">
                {item.cost_chance_count} {t("Score")}
              </div>
            </div>
            <button
              className="shop-item-purchase-btn-position shop-item-purchase-btn"
              onClick={() => onPurchaseClick(item)}
            >
              {t("Purchase")}
            </button>
          </div>
        ))}
      </span>

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalCount={allShopItems.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </Page>
  );
};

export default ShopPage;
