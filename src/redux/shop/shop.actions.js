import { ShopActionTypes } from "./shop.types";

import {
  getAllShopGoods,
  getSearchedShopGoods,
  getSortedShopGoods,
} from "../../services/shopService";

export const setOpenShopModal = (value) => ({
  type: ShopActionTypes.SET_OPEN_SHOP_MODAL,
  payload: value,
});

export const getAllShopItems = () => async (dispatch) => {
  await getAllShopGoods()
    .then((response) => {
      if (response.status === 200) {
        dispatch({
          type: ShopActionTypes.GET_ALL_SHOP_ITEMS,
          payload: response.data,
        });
      }
    })
    .catch((error) => {
      dispatch({
        type: ShopActionTypes.GET_ALL_SHOP_ITEMS,
        payload: [],
      });
    });
};

export const setShopModalData = (data) => ({
  type: ShopActionTypes.SET_SHOP_MODAL_Data,
  payload: data,
});

export const getSearchedShopItems = (searchField) => async (dispatch) => {
  const { data } = await getSearchedShopGoods(searchField);
  dispatch({
    type: ShopActionTypes.GET_SEARCHED_SHOP_ITEMS,
    payload: data,
  });
};

export const getSortedShopItems = (sortKey) => async (dispatch) => {
  const { data } = await getSortedShopGoods(sortKey);
  dispatch({
    type: ShopActionTypes.GET_ALL_SHOP_ITEMS,
    payload: data,
  });
};
