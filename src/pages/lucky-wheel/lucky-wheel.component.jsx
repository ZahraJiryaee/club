import React, { useState } from "react";
import SpinningWheel from "../../components/spinning-wheel/spinning-wheel.component";

import HandPointUp from "./../../assets/images/icon/hand-point-up.png";

import "./lucky-wheel.component.scss";

const LuckyWheelPage = () => {
  // const [selectedItem, setSelectedItem] = useState(6);
  const [wheelItem, setWheelItem] = useState(6);
  const items = [
    {
      color: "red",
      gradient: "linear-gradient(to left, #743ad5, #d53a9d)",
      content: "جایزه 1",
    },

    {
      color: "yellow",
      gradient: "linear-gradient(to left, #743ad5, #d53a9d)",
      content: "جایزه 2",
    },

    {
      color: "red",
      gradient: "linear-gradient(to left, #743ad5, #d53a9d)",
      content: "جایزه 3",
    },

    {
      color: "yellow",
      gradient: "linear-gradient(to left, #743ad5, #d53a9d)",
      content: "جایزه 4",
    },

    {
      color: "red",
      gradient: "linear-gradient(to left, #743ad5, #d53a9d)",
      content: "جایزه 5",
    },

    {
      color: "yellow",
      gradient: "linear-gradient(to left, #743ad5, #d53a9d)",
      content: "جایزه 6",
    },
    {
      color: "red",
      gradient: "linear-gradient(to left, #743ad5, #d53a9d)",
      content: "جایزه 7",
    },

    {
      color: "yellow",
      gradient: "linear-gradient(to left, #743ad5, #d53a9d)",
      content: "جایزه 8",
    },
  ];
  return (
    <div className="blue-bg outer-box">
      {/* ---------------- Page Upper Txt ------------------ */}
      <div className="main-header">
        <h2 className="header-txt center-absolute">
          گـــردونه شــانــس مـدریــک
        </h2>
        <p className="subheader-txt center-absolute">
          در گردونه مدریک شانس خود را جهت برنده شدن جوایز
          <br />
          ارزنده امتحان کنید.
        </p>
      </div>
      {/* ---------------- Wheel ------------------ */}
      <div className="wheel-component center-absolute">
        <SpinningWheel
          items={items}
          wheelItem={wheelItem}
          setWheelItem={(e) => setWheelItem(e)}
        />
      </div>
      {/* ---------------- Spin Btn ------------------ */}
      <button className="lucky-wheel-page-btn center-absolute">بچرخون</button>
      {/* ---------------- Page Lower Txt ------------------ */}
      <p className="want-more-chance center-absolute">
        شــانـس بیشتری برای چـرخونـدن گـردونه می‌خـوای؟
      </p>
      <div className="click-here center-absolute">
        {/* <i
          className="fa fa-hand-pointer-o click-here--icon"
          aria-hidden="true"          
          ></i> */}
        <img
          className="click-here--icon"
          src={HandPointUp}
          alt="hand-point-up"
        />
        <p className="click-here--text">اینجا را کلیک کن</p>
      </div>
    </div>
  );
};

export default LuckyWheelPage;
