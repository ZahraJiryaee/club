import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, btnBgColor, cursorAuto, ...props }) => (
  <button
    className={`wide-button wide-button__${btnBgColor} ${
      cursorAuto ? "cursor-auto" : ""
    }`}
    {...props}
  >
    {children}
  </button>
);

export default CustomButton;
