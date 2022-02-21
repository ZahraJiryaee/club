import React, { useState } from "react";
import SpinningWheel from "../../components/spinning-wheel/spinning-wheel.component";

import "./lucky-wheel.component.scss";

const LuckyWheelPage = () => {
  const [selectedItem, setSelectedItem] = useState(6);
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
    <div className="blue-bg outer-box spacing">
      <div className="main-header">
        <h2 className="header-txt">گـــردونه شــانــس مـدریــک</h2>
        <p className="subheader-txt">
          در گردونه مدریک شانس خود را جهت برنده شدن جوایز ارزنده امتحان کنید.
        </p>
      </div>
      <div className="wheel-component">
        <SpinningWheel
          items={items}
          wheelItem={wheelItem}
          setWheelItem={(e) => setWheelItem(e)}
        />
      </div>
      <div>
        <button className="lucky-wheel-page-btn">بچرخون</button>
      </div>
      <p className="want-more-chance">
        شــانـس بیشتری برای چـرخونـدن گـردونه می‌خـوای؟
      </p>
      <p className="click-here">اینجا را کلیک کن</p>
    </div>
  );
};

export default LuckyWheelPage;
