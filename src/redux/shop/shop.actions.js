import { ShopActionTypes } from "./shop.types";

export const getSearchedShopItems = (mockData) => async (dispatch) => {
  dispatch({
    type: ShopActionTypes.GET_SEARCHED_SHOP_ITEMS,
    payload: mockData,
  });
};
