import { ShopActionTypes } from "./shop.types";

const INITIAL_STATE = {
  allShopItems: [],
  searchedShopItems: [],
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.GET_ALL_SHOP_ITEMS:
      return {
        ...state,
        allShopItems: action.payload,
      };
    case ShopActionTypes.GET_SEARCHED_SHOP_ITEMS:
      return {
        ...state,
        searchedShopItems: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
