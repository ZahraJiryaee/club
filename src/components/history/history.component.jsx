import React from "react";
import { useTranslation } from "react-i18next";
import moment from "moment-jalaali";
import "./history.styles.scss";

const HistoryContainer = ({ history }) => {
  const { t } = useTranslation();

  let jalaliDate = moment(history.created_at)
    .locale("fa")
    .format("HH:mm - jDD/jMM/jYYYY");

  return (
    <div className="history-container">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="image-container">
          <img className="icon" src={history.icon} alt={history.title} />
          <div>
            <div className="historyTitle">{history.title}</div>
            <div className="trackingCode">{`${t("Tracking_Code")}: ${
              history.tracking_code
            }`}</div>
          </div>
        </div>
        <div className="info-box">
          <div className="score">{`${history.cost} ${t("Score")}`}</div>
          <div>{jalaliDate}</div>
        </div>
        <div className="address-box address-resp">
          <div className="addresstitle">
            {history.log_type === "digital"
              ? `${t("Gift_Code")}: `
              : `${t("Address")}: `}
          </div>
          <div className="address">
            {history.log_type === "digital" ? history.code : history.address}
          </div>
        </div>
        {history.log_type !== "digital" ? (
          <div className="edit-address address-resp" onClick={() => {}}>
            {t("Edit_Address")}
          </div>
        ) : null}
      </div>

      {/* Responsive-Desktop-mode */}
      <div className="address-box address-resp2">
        <div className="addresstitle">
          {history.log_type === "digital"
            ? `${t("Gift_Code")}: `
            : `${t("Address")}: `}
        </div>
        <div className="address">
          {history.log_type === "digital" ? history.code : history.address}
        </div>
      </div>
      {history.log_type !== "digital" ? (
        <div className="edit-address edit-address-resp" onClick={() => {}}>
          {t("Edit_Address")}
        </div>
      ) : null}
    </div>
  );
};

export default HistoryContainer;
