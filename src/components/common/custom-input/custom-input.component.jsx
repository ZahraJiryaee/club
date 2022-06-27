import React from "react";

import "./custom-input.styles.scss";

const CustomInput = ({
  icon,
  label,
  type,
  maxLength,
  minLength,
  placeholder,
  value,
  onValueChange,
  onPassword1VisibleIconToggle,
}) => (
  <div className="custom-input-container">
    <label
      htmlFor=""
      className="text-right lighter-txt space-padding--bottom--10"
    >
      {label}
    </label>
    <input
      className="custom-input"
      type={type}
      maxLength={maxLength}
      minLength={minLength}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onValueChange(e)}
      required
    />

    <i
      className={`fa fa-${icon} fa-xs input-${icon}-icon`}
      aria-hidden="true"
      onClick={onPassword1VisibleIconToggle}
    ></i>
  </div>
);

export default CustomInput;
