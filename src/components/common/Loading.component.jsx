import React from "react";
import ReactLoading from "react-loading";

import "./Loading.style.scss";

const Loading = ({ type, color, width, height, text }) => (
  <div className="loading-container">
    <ReactLoading type={type} color={color} width={width} height={height} />
    <p>{text}</p>
  </div>
);

export default Loading;
