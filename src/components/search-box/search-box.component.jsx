import React from "react";

import "./search-box.styles.scss";

const SearchBox = ({
  onSearchIconClick,
  searchField,
  setSearchField,
  searchInputPlaceHolder,
}) => {
  return (
    <div className="search-box-container">
      <div className="search-box">
        <div onClick={onSearchIconClick}>
          <i className="fa fa-search search-icon" />
        </div>
        <input
          value={searchField}
          className="search-text"
          type="text"
          placeholder={searchInputPlaceHolder}
          onChange={(e) => setSearchField(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBox;
