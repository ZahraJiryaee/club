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
    <div className="outer-box">
      <div className="main-header">
        <h2>گردونه شانس مدریک</h2>
        <p>
          در گردونه مدریک شانس خود را جهت برنده شدن جوایز ارزنده امتحان کنید
        </p>
      </div>
      <div style={{ position: "absolute", top: "30%" }}>
        <SpinningWheel
          items={items}
          wheelItem={wheelItem}
          setWheelItem={(e) => setWheelItem(e)}
        />
      </div>
    </div>
  );
};

export default LuckyWheelPage;
