import React, { Fragment } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import LuckyWheelPage from "./pages/lucky-wheel/lucky-wheel.component";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/lucky-wheel" element={<LuckyWheelPage />} />
        <Route path="/" element={<Navigate replace to="/lucky-wheel" />} />
      </Routes>
    </Fragment>
  );
}

export default App;
