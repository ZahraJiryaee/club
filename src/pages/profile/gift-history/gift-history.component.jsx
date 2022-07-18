import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import { getBonusHistory } from "../../../redux/wheel/wheel.action";
import { setHeaderMode } from "../../../redux/header/header.action";

import Page from "../../page";
import HistoryContainer from "../../../components/history/history.component";

import { GiftHistory } from "./giftHistoryMock";

import "./gift-history.styles.scss";

const GiftHistorypage = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(setHeaderMode(pathname));
    dispatch(getBonusHistory());
  }, []);

  return (
    <Page title={t("Gifts_History")}>
      <div className="gift-history-page">
        {GiftHistory.map((data) => {
          return (
            <div className="gift-container">
              <HistoryContainer history={data} />
            </div>
          );
        })}
      </div>
    </Page>
  );
};

export default GiftHistorypage;
