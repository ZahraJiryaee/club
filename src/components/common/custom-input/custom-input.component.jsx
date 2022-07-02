import React from "react";

import "./custom-input.styles.scss";

const CustomInput = ({
  icon,
  label,
  onValueChange,
  onPassword1VisibleIconToggle,
  errorMsg,
  ...otherProps
}) => (
  <>
    <div className="custom-input-container">
      <label
        htmlFor=""
        className="text-right lighter-txt space-padding--bottom--10 space-padding--up--25"
      >
        {label}
      </label>
      <input
        className="custom-input"
        onChange={(e) => onValueChange(e)}
        required
        {...otherProps}
      />

      <i
        className={`fa fa-${icon} fa-xs input-${icon}-icon`}
        aria-hidden="true"
        onClick={onPassword1VisibleIconToggle}
      ></i>
    </div>
    {errorMsg ? <p className="custom-input-error-message">{errorMsg}</p> : null}
  </>
);

export default CustomInput;
