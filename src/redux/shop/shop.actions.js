import { ShopActionTypes } from "./shop.types";

export const setOpenShopModal = (value) => ({
  type: ShopActionTypes.SET_OPEN_SHOP_MODAL,
  payload: value,
});

export const getSearchedShopItems = (mockData) => async (dispatch) => {
  dispatch({
    type: ShopActionTypes.GET_SEARCHED_SHOP_ITEMS,
    payload: mockData,
  });
};
