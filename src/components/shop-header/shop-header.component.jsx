import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getSearchedShopItems } from "../../redux/shop/shop.actions";

import { selectAllShopItems } from "../../redux/shop/shop.selectors";

import ComponentInternalHeader from "../compoonent-internal-header/compoonent-internal-header.component";
import SearchBox from "../search-box/search-box.component";

import { routeNames } from "../../services/routeService";

import "./shop-header.styles.scss";

const ShopHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const allShopItems = useSelector(selectAllShopItems);

  const [searchField, setSearchField] = React.useState("");

  const handelShopSearch = async () => {
    setSearchField("");
    let searchedItem = [];
    allShopItems.forEach((item) => {
      if (item.title.includes(searchField)) searchedItem.push(item);
    });
    dispatch(getSearchedShopItems(searchedItem));
    return navigate(`/${routeNames.shop}/search/${searchField}`);
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
