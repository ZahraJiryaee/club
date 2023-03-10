import React, { useState, useEffect } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import { useTranslation } from "react-i18next";

import appLogoMapper from "./appsLogosMapper";

import generateUniqueId from "../../services/generateUniqueId";

import "./download-apps-bottom-sheet.styles.scss";

const DownloadAppsBottomSheet = ({ open, setOpen, downloadLinks }) => {
  const { t } = useTranslation();

  const [availableLinks, setAvailableLinks] = useState([]);

  const onDismiss = () => {
    setOpen(false);
  };

  useEffect(() => {
    let links = [];
    Object.keys(downloadLinks).forEach((key) => {
      if (downloadLinks[key])
        links.push({
          name: appLogoMapper[key].name,
          icon: appLogoMapper[key].icon,
          content: downloadLinks[key],
          id: generateUniqueId("dn-apps"),
        });
    });
    setAvailableLinks(links.length === 0 ? null : links);
  }, [downloadLinks]);

  return (
    <div>
      <BottomSheet
        open={open}
        onDismiss={onDismiss}
        snapPoints={({ maxHeight }) => [0.27 * maxHeight, 0.5 * maxHeight]}
        defaultSnap={({ lastSnap, snapPoints }) => {
          lastSnap ?? Math.min(...snapPoints);
        }}
        blocking={true}
      >
        {availableLinks ? (
          <div className="bottom-sheet-dn-logo-list">
            {availableLinks.map((item) => (
              <a
                key={item.id}
                href={item.content}
                target="_blank"
                rel="noreferrer"
              >
                <li>
                  <img src={item.icon} alt={item.name} />
                  <br />
                  {item.name}
                </li>
              </a>
            ))}
          </div>
        ) : (
          <p className="bottom-sheet-dn--no-links">
            {t("No_Links_To_display")}
          </p>
        )}
      </BottomSheet>
    </div>
  );
};

export default DownloadAppsBottomSheet;
