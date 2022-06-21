import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import ComponentInternalHeader from "../compoonent-internal-header/compoonent-internal-header.component";
import SearchBox from "../search-box/search-box.component";

import { routeNames } from "../../services/routeService";

import "./shop-header.styles.scss";

const ShopHeader = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [searchField, setSearchField] = React.useState("");

  const handelShopSearch = async () => {
    setSearchField("");
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
        searchInputPlaceHolder={t("Search_In_Shop")}
      />
    </ComponentInternalHeader>
  );
};

export default ShopHeader;
