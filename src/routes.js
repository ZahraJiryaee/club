import React, { lazy } from "react";
import { Navigate } from "react-router-dom";

import { routeNames } from "./services/routeService";

const MainLayout = lazy(() =>
  import("./layouts/main-layout/main-layout.component")
);
const LuckyWheelPage = lazy(() =>
  import("./pages/lucky-wheel/lucky-wheel.component")
);
const GamesPage = lazy(() => import("../src/pages/games/games.component"));
const GameDetails = lazy(() =>
  import("./pages/game-details/game-details.component")
);
const GenrePage = lazy(() => import("../src/pages/genre/genre.component"));
const SearchPage = lazy(() => import("./pages/search/search.component"));
const LeaderBoardPage = lazy(() =>
  import("./pages/leaderboard/leaderboard.component")
);
const ShopPage = lazy(() => import("./pages/shop/shop.component"));
const ProfilePage = lazy(() => import("./pages/profile/profile.component"));
const EditProfilePage = lazy(() =>
  import("./pages/profile/edit-profile/edit-profile.conponent")
);
const GiftHistorypage = lazy(() =>
  import("./pages/profile/gift-history/gift-history.component")
);
const InviterCodePage = lazy(() =>
  import("./pages/profile/inviter-code/inviter-code.component")
);
const DeviceIdPage = lazy(() =>
  import("./pages/profile/device-id/device-id.components")
);
const InviteFriendsPage = lazy(() =>
  import("./pages/profile/invite-friends/invite-friends.component")
);

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "lucky-wheel", element: <LuckyWheelPage /> },
      {
        path: `${routeNames.profile}/edit-information`,
        element: <EditProfilePage />,
      },
      {
        path: `${routeNames.profile}/gift-history`,
        element: <GiftHistorypage />,
      },
      {
        path: `${routeNames.profile}/set-inviter`,
        element: <InviterCodePage />,
      },
      {
        path: `${routeNames.profile}/invite-friends`,
        element: <InviteFriendsPage />,
      },
      {
        path: `${routeNames.profile}/connet-device`,
        element: <DeviceIdPage />,
      },
      { path: "profile", element: <ProfilePage /> },
      { path: "home", element: <LuckyWheelPage /> },
      { path: `${routeNames.game}/genre/all`, element: <GamesPage /> },
      { path: `${routeNames.game}/:type/:id`, element: <GenrePage /> },
      { path: `${routeNames.game}/search/:id`, element: <SearchPage /> },
      { path: `${routeNames.game}/detail/:id`, element: <GameDetails /> },
      { path: `${routeNames.shop}`, element: <ShopPage /> },
      { path: `${routeNames.shop}/search/:id`, element: <SearchPage /> },
      { path: `${routeNames.leaderboard}`, element: <LeaderBoardPage /> },
      { path: "about-us", element: <LuckyWheelPage /> },
      { path: "contact-us", element: <LuckyWheelPage /> },
      {
        path: "/",
        element: <Navigate replace to={`/${routeNames.lucky_wheel}`} />,
      },
      {
        path: "*",
        element: <Navigate replace to={`/${routeNames.lucky_wheel}`} />,
      },
    ],
  },
];

export default routes;
