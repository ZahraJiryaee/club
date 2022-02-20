import React from "react";
import { Navigate } from "react-router-dom";

import MainLayout from "./layouts/main-layout/main-layout.component";

import LuckyWheelPage from "./pages/lucky-wheel/lucky-wheel.component";
import GamesPage from "./components/games/games.component";
import GenrePage from "./components/genres/genre.component";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "lucky-wheel", element: <LuckyWheelPage /> },
      { path: "profile", element: <LuckyWheelPage /> },
      { path: "shop", element: <LuckyWheelPage /> },
      { path: "games", element: <GamesPage /> },
      { path: "genre/:id", element: <GenrePage /> },
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
