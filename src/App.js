import React, { Fragment } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Footer from "./components/footer/footer.component";
import Header from "./components/header/header.component";

import LuckyWheelPage from "./pages/lucky-wheel/lucky-wheel.component";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/lucky-wheel" element={<LuckyWheelPage />} />
        <Route path="/" element={<Navigate replace to="/lucky-wheel" />} />
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
