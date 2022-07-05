import { t } from "i18next";

import { ShopActionTypes } from "./shop.types";

import {
  buyShopGood,
  getAllShopGoods,
  getSearchedShopGoods,
  getSortedShopGoods,
} from "../../services/shopService";
import logger from "../../services/logService";
import { toastError } from "../../services/toastService";

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

export const buyShopItem = (shopItemId) => async (dispatch) => {
  let result;
  await buyShopGood(shopItemId).then(
    (response) => {
      result = response.data;
      logger.logInfo("response-buyShopItem", response);
    },
    (error) => {
      result = error.response;
      logger.logError("response-buyShopItem", error);
      const { status } = error.response;
      if (status === 403) {
        toastError(t("You_Dont_Have_Enough_Score_To_Buy_This_Item"));
      } else if (status === 401) {
      } else {
        toastError(t("Try_Again"));
      }
    }
  );
  return result;
};
