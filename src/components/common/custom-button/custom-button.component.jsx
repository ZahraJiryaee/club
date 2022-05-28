import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, btnBgColor, ...props }) => (
  <button className={`wide-button wide-button__${btnBgColor}`} {...props}>
    {children}
  </button>
);

export default CustomButton;
