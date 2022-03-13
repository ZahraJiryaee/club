import React from "react";
import { Navigate } from "react-router-dom";

import MainLayout from "./layouts/main-layout/main-layout.component";

import LuckyWheelPage from "./pages/lucky-wheel/lucky-wheel.component";
import GamesPage from "../src/pages/games/games.component";
import GameDetails from "./pages/game-details/game-details.component";
import GenrePage from "../src/pages/genre/genre.component";
import SearchPage from "./pages/search/search.component";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "lucky-wheel", element: <LuckyWheelPage /> },
      { path: "profile", element: <LuckyWheelPage /> },
      { path: "shop", element: <LuckyWheelPage /> },
      { path: "games/genre/all", element: <GamesPage /> },
      { path: "games/:type/:id", element: <GenrePage /> },
      { path: "games/search/:id", element: <SearchPage /> },
      { path: "games/detail/:id", element: <GameDetails /> },
      { path: "leaderboard", element: <LuckyWheelPage /> },
      { path: "home", element: <LuckyWheelPage /> },
      { path: "about-us", element: <LuckyWheelPage /> },
      { path: "contact-us", element: <LuckyWheelPage /> },
      { path: "/", element: <Navigate replace to="/lucky-wheel" /> },
      { path: "*", element: <Navigate replace to="/lucky-wheel" /> },
    ],
  },
];

export default routes;
