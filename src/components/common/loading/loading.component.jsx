import React from "react";

import ReactLoading from "react-loading";
import { useTranslation } from "react-i18next";

import useAxiosLoader from "../../../services/useLoader";

import "./loading.style.scss";

const Loading = () => {
  const [loading] = useAxiosLoader();

  const { t } = useTranslation();

  return (
    loading && (
      <div className="loading-container">
        <ReactLoading
          type="spinningBubbles"
          color="#3399de"
          width="50px"
          height="50px"
        />
        <p>{t("Please_Wait")}</p>
      </div>
    )
  );
};

export default Loading;
