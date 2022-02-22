import React, { useState } from "react";

import "./spinning-wheel.styles.scss";

const SpinningWheel = ({ items }) => {
  const colors = [
    "linear-gradient(180deg, #fe8816, #f4c446)",
    "linear-gradient(to bottom, #003069, #007aff)",
  ];
  const [wheelItem, setWheelItem] = useState(null);
  let isSpinning = false;

  const spinHandler = () => {
    console.log("isSpinning:", isSpinning);
    console.log("wheelItem:", wheelItem);
    if (isSpinning === true) {
      // const selectedItem = Math.floor(Math.random() * this.props.items.length);
      setWheelItem(5);
      isSpinning = false;
    } else {
      isSpinning = true;
      setWheelItem(null);
      setTimeout(spinHandler, 400);
    }
  };

  const wheelvars = {
    "--wheel-items-length": items.length,
    "--selectedd-item": 2,
    "--item-width": "",
  };
  return (
    <div className="spinning-wheel-component">
      <button id="spin" onClick={spinHandler}>
        <span className="chance-number">3</span>
        <br />
        <span className="chance-text">شانس</span>
      </button>
      <span className="arrow"></span>
      <div className="wheel-outer-container">
        <div className="wheel-inner-container">
          <div className="inner-border">
            <div
              className={`wheel ${wheelItem !== null ? "spinning-wheel" : ""}`}
              style={wheelvars}
            >
              {items.map((item, index) => (
                <div
                  className="item"
                  key={index}
                  style={{
                    "--wheel-item-number": index,
                    "--wheel-item-color": index % 2 ? colors[0] : colors[1],
                  }}
                >
                  <p>{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpinningWheel;
