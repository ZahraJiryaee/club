import { t } from "i18next";
import { createSelector } from "reselect";

import ShopItem from "./../../assets/images/icon/shop-item.png";

const selectShop = (state) => state.shop;

export const selectSetOpenShopModal = createSelector(
  [selectShop],
  (shop) => shop.setOpenShopModal
);

export const selectAllShopItems = createSelector(
  [selectShop],
  (shop) => shop.allShopItems
);

export const selectShopModalData = createSelector(
  [selectShop],
  (shop) => shop.shopModalData
);

export const selectSearchedShopItems = createSelector(
  [selectShop],
  (shop) => shop.searchedShopItems
);

export const selectSearchedShopItemsMappedToSearchPage = createSelector(
  [selectShop],
  (shop) => mapSearchedShopItemsToSearchPage(shop.searchedShopItems)
);

const mapSearchedShopItemsToSearchPage = (items) => {
  const newItems = items.map((item) => {
    console.log("item:", item);
    return {
      id: item.id,
      icon: item.icon.source ? item.icon.source : ShopItem,
      header: item.title,
      subHeader: `${item.cost_chance_count} ${t("Score")}`,
      action: { component: "shop", content: t("Purchase") },
      originalItem: item,
    };
  });
  return { data: newItems, component: "shop" };
};
