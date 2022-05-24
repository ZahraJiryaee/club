import React, { useEffect, useState, useMemo, useCallback } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setHeaderMode } from "../../redux/header/header.action";
import { getSearchedShopItems } from "../../redux/shop/shop.actions";

import ShopHeader from "../../components/shop-header/shop-header.component";
import Pagination from "../../components/common/pagination/pagination.component";

import shopMock from "../../components/mock/shop.mock";

import ShopItem from "./../../assets/images/test/shop-item.png";

import "./shop.styles.scss";
//
import SearchBox from "../../components/search-box/search-box.component";
import ComponentInternalHeader from "../../components/compoonent-internal-header/compoonent-internal-header.component";
import { getSearchedItem } from "../../redux/games/games.action";

let PageSize = 4 * 4;

const ShopPage = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);

  const currentShopData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return shopMock.shopItems.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  //
  const [searchField, setSearchField] = React.useState("");

  const handelShopSearch = async () => {
    setSearchField("");
    const result = dispatch(getSearchedShopItems(shopMock.shopItems2));
    result.then((response) => {
      console.log("response:", response);
      return navigate(`/shop/search/${searchField}`, {
        state: { selector: response },
      });
    });
  };

  const nnnnnnn = useCallback(async () => {}, []);

  const handleSetSearchField = (value) => {
    setSearchField(value);
  };

  useEffect(() => {
    dispatch(setHeaderMode(pathname));
  }, []);

  return (
    <div>
      {/* General Header */}
      <ComponentInternalHeader>
        {/* <Search /> */}
        <SearchBox
          onSearchIconClick={handelShopSearch}
          searchField={searchField}
          setSearchField={handleSetSearchField}
          searchInputPlaceHolder="جستجو در فروشگاه"
        />
      </ComponentInternalHeader>

      {/* Ordering header */}
      <ShopHeader />

      {/* content */}
      <span className="shop-grid-data">
        {currentShopData.map((item) => (
          <div className="shop-item" key={item.id}>
            <div className="shop-item-img-container">
              <img className="shop-item-img" src={ShopItem} alt="shop-item" />
            </div>
            <div className="name-score-container">
              <div className="shop-item-name">{item.name}</div>
              <div className="shop-item-score-needed">
                {item.scoreNeeded} امتیاز
              </div>
            </div>
            <div className="shop-item-purchase-btn-position shop-item-purchase-btn">
              خرید
            </div>
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
