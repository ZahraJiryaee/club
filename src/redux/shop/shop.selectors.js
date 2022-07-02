import { createSelector } from "reselect";

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
    return {
      id: item.id,
      icon: "https://th.bing.com/th?q=League+of+Legends+Borders&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.5&pid=InlineBlock&mkt=en-WW&cc=IR&setlang=en&adlt=strict&t=1&mw=247",
      header: item.title,
      subHeader: `${item.cost_chance_count} امتیاز`,
      action: { component: "shop", content: "خرید" },
      originalItem: item,
    };
  });
  return { data: newItems, component: "shop" };
};
