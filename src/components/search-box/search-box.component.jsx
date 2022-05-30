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
        <form
          className="search-box-form"
          onSubmit={(e) => {
            e.preventDefault();
            return onSearchIconClick();
          }}
        >
          <button type="submit" className="search-icon-container">
            <i className="fa fa-search search-icon" />
          </button>
          <input
            value={searchField}
            className="search-text"
            type="text"
            placeholder={searchInputPlaceHolder}
            onChange={(e) => setSearchField(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default SearchBox;
