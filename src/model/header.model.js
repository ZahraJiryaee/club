import i18n from "i18next";

import { routeNames } from "../services/routeService";

export const sidebarNavigation = [
  { id: "sn1", title: i18n.t("Connect_To_Games"), link: "home" },
  {
    id: "sn2",
    title: i18n.t("Guide_To_Using_Medric_Bonus_Codes"),
    link: "home",
  },
  { id: "sn3", title: i18n.t("Contact_Us"), link: "home" },
  { id: "sn4", title: i18n.t("About_Us"), link: "home" },
  { id: "sn5", title: i18n.t("Frequently_Asked_Questions"), link: "home" },
];

export const headerNavigation = [
  { id: "hn1", title: i18n.t("Wheel"), link: `${routeNames.lucky_wheel}` },
  { id: "hn2", title: i18n.t("Games"), link: `${routeNames.game}/genre/all` },
  { id: "hn3", title: i18n.t("Shop"), link: `${routeNames.shop}` },
  {
    id: "hn4",
    title: i18n.t("Leaderboard"),
    link: `${routeNames.leaderboard}`,
  },
  { id: "hn5", title: i18n.t("Profile"), link: `${routeNames.profile}` },
];
