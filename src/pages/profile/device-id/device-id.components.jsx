import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";

import { LinkDeviceID } from "../../../redux/user/user.action";
import { setHeaderMode } from "../../../redux/header/header.action";

import Page from "../../page";

import "../profile.styles.scss";

const DeviceIdPage = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    dispatch(setHeaderMode(pathname));
  }, []);

  const [deviceId, setDeviceId] = useState("");
  const [activeSendButton, setActiveSendButton] = useState(false);

  const handledeviceIdChange = (event) => {
    const { value, maxLength } = event.target;
    const code = value.slice(0, maxLength);
    setActiveSendButton(code.length === 6 ? true : false);
    setDeviceId(code);
  };

  const handleSendCode = () => {
    setActiveSendButton(false);
    const result = dispatch(LinkDeviceID(deviceId));
    result.then((response) => {
      if (response.status === 200 || response.status === 201) {
        navigate("/profile");
        setDeviceId("");
      }
    });
  };

  return (
    <Page title={t("Connect_To_Games")}>
      <div className="profile-container">
        <div className="device-id-container">
          <div className="header-container">
            <p className="description-text">{t("Device_ID_Description")}</p>
          </div>
          <div className="set-device-id-container">
            <div className="device-code">
              <span className="title-input">{t("Enter_Device_ID")}</span>
              <input
                className="code-input"
                type="text"
                maxLength={6}
                value={deviceId}
                onChange={(e) => handledeviceIdChange(e)}
              />
            </div>
            <div className="btn-container">
              <button
                className=""
                className={`${
                  activeSendButton ? "active-button" : "deactive-button"
                } enter-btn`}
                onClick={
                  activeSendButton
                    ? () => handleSendCode()
                    : () => {
                        console.log("Error");
                      }
                }
              >
                {t("Enter")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default DeviceIdPage;
