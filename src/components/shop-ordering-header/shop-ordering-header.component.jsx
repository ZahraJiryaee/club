import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import logger from "../../services/logService";

import shopMock from "../mock/shop.mock";

import "./shop-ordering-header.styles.scss";

const ShopOrderingHeader = () => {
  const { t } = useTranslation();

  const [toggleSelect, setToggleSelect] = useState(false);
  const [orderShop, setOrderShop] = useState(shopMock.orderShop);
  const handleSelectToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setToggleSelect(!toggleSelect);
  };
  const handleCheckedItem = (id) => {
    /* set the "checked" value for the selected id to true & others to false */
    logger.logInfo("id-shop-ordering-header:", id);
    if (toggleSelect) {
      let clone = [...orderShop];
      let picked_data = clone.filter((item) => item.id === id);
      for (let i = 0; i < clone.length; i++) {
        if (clone[i].id === picked_data[0].id) {
          clone[i].checked = true;
        } else clone[i].checked = false;
      }
      setOrderShop(clone);
    }
  };

  return (
    <div className="shop-header-container">
      <div className="shop-header">
        <span className="txt">{t("Sorting")}:</span>
        <span
          className={`dropdown ${toggleSelect ? "expanded" : ""}`}
          onClick={(e) => handleSelectToggle(e)}
        >
          {orderShop.map((item) => (
            <React.Fragment key={item.id}>
              <input
                type="radio"
                name={`sort-${item.content}`}
                id={`sort-${item.content}`}
                value={item.content}
                checked={item.checked}
                readOnly
              />
              <label
                htmlFor={`sort-${item.content}`}
                onClick={() => handleCheckedItem(item.id)}
              >
                {item.content}
              </label>
            </React.Fragment>
          ))}
        </span>
      </div>
    </div>
  );
};

export default ShopOrderingHeader;
