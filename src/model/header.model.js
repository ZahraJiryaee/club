import { routeNames } from "../services/routeService";

export const sidebarNavigation = [
  { id: "sn1", title: "اتصال به بازی‌ها", link: "home" },
  { id: "sn2", title: "راهنمای استفاده از کدهای جایزه مدریک", link: "home" },
  { id: "sn3", title: "تماس با ما", link: "home" },
  { id: "sn4", title: "درباره ما", link: "home" },
  { id: "sn5", title: "سوالات متداول", link: "home" },
];

export const headerNavigation = [
  { id: "hn1", title: "گردونه", link: "lucky-wheel" },
  { id: "hn2", title: "بازی‌ها", link: `${routeNames.game}/genre/all` },
  { id: "hn3", title: "فروشگاه", link: `${routeNames.shop}` },
  { id: "hn4", title: "رده‌بندی", link: "leaderboard" },
  { id: "hn5", title: "پروفایل", link: "profile" },
];
