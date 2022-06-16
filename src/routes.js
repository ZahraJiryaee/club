import React from "react";
import { Navigate } from "react-router-dom";

import MainLayout from "./layouts/main-layout/main-layout.component";

import LuckyWheelPage from "./pages/lucky-wheel/lucky-wheel.component";
import GamesPage from "../src/pages/games/games.component";
import GameDetails from "./pages/game-details/game-details.component";
import GenrePage from "../src/pages/genre/genre.component";
import SearchPage from "./pages/search/search.component";
import LeaderBoardPage from "./pages/leaderboard/leaderboard.component";
import ShopPage from "./pages/shop/shop.component";
import ProfilePage from "./pages/profile/profile.component";
import EditProfilePage from "./pages/profile/edit-profile/edit-profile.conponent";
import InviterCodePage from "./pages/profile/inviter-code/inviter-code.component";
import DeviceIdPage from "./pages/profile/device-id/device-id.components";
import InviteFriendsPage from "./pages/profile/invite-friends/invite-friends.component";

import { routeNames } from "./services/routeService";

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
      { path: "leaderboard", element: <LeaderBoardPage /> },
      { path: "about-us", element: <LuckyWheelPage /> },
      { path: "contact-us", element: <LuckyWheelPage /> },
      { path: "/", element: <Navigate replace to="/lucky-wheel" /> },
      { path: "*", element: <Navigate replace to="/lucky-wheel" /> },
    ],
  },
];

export default routes;
