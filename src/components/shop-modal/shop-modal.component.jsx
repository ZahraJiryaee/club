import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { setOpenShopModal } from "../../redux/shop/shop.actions";

import { selectSetOpenShopModal } from "../../redux/shop/shop.selectors";

import CloseIcon from "./../../assets/images/icon/close-icon.png";

import "./shop-modal.styles.scss";

const ShopModal = ({ shopItemData }) => {
  const dispatch = useDispatch();

  const isShopModalOPen = useSelector(selectSetOpenShopModal);
  //   console.log("isShopModalOPen:", isShopModalOPen);

  const handleShopModalClose = () => {
    dispatch(setOpenShopModal(false));
  };

  return isShopModalOPen ? (
    <div className="shop-modal-container">
      <div className="shop-modal">
        <div
          className="shop-modal-close-container"
          onClick={handleShopModalClose}
        >
          <img src={CloseIcon} alt="close-modal" className="shop-modal-close" />
        </div>
        <h1>hi</h1>
      </div>
    </div>
  ) : null;
};

export default ShopModal;
