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

import { routeNames } from "./services/routeService";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: `${routeNames.lucky_wheel}`, element: <LuckyWheelPage /> },
      { path: "profile", element: <LuckyWheelPage /> },
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
