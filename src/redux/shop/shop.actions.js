import { ShopActionTypes } from "./shop.types";
import { mapSearchedShopItemsToSearchPage } from "../../services/shopService";

export const getSearchedShopItems = (mockData) => async (dispatch) => {
  dispatch({
    type: ShopActionTypes.GET_SEARCHED_SHOP_ITEMS,
    payload: mockData,
  });
  return mapSearchedShopItemsToSearchPage(mockData);
};
