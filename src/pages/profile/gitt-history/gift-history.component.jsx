import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import { getBonusHistory } from "../../../redux/wheel/wheel.action";
import { setHeaderMode } from "../../../redux/header/header.action";

import "../profile.styles.scss";

const GiftHistorypage = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setHeaderMode(pathname));
    dispatch(getBonusHistory());
  }, []);

  return (
    <div className="profile-container">
      <p>History</p>
    </div>
  );
};

export default GiftHistorypage;
