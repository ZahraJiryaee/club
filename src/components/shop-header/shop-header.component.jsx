import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getSearchedShopItems } from "../../redux/shop/shop.actions";

import ComponentInternalHeader from "../compoonent-internal-header/compoonent-internal-header.component";
import SearchBox from "../search-box/search-box.component";

import shopMock from "../../components/mock/shop.mock";

import "./shop-header.styles.scss";

const ShopHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchField, setSearchField] = React.useState("");

  const handelShopSearch = async () => {
    setSearchField("");
    dispatch(getSearchedShopItems(shopMock.shopItems2));
    return navigate(`/shop/search/${searchField}`);
  };

  const handleSetSearchField = (value) => {
    setSearchField(value);
  };

  return (
    <ComponentInternalHeader>
      {/* <Search /> */}
      <SearchBox
        onSearchIconClick={handelShopSearch}
        searchField={searchField}
        setSearchField={handleSetSearchField}
        searchInputPlaceHolder="جستجو در فروشگاه"
      />
    </ComponentInternalHeader>
  );
};

export default ShopHeader;
