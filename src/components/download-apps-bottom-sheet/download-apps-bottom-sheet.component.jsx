import React from "react";

import { BottomSheet } from "react-spring-bottom-sheet";

import appLogoMapper from "./appsLogosMapper";

import "./download-apps-bottom-sheet.styles.scss";

const DownloadAppsBottomSheet = ({ open, setOpen, downloadLinks }) => {
  const onDismiss = () => {
    setOpen(false);
  };

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
        <ul className="bottom-sheet-dn-logo-list">
          {Object.keys(downloadLinks).map((key, index) =>
            Object.keys(appLogoMapper[key]).length === 0 ? null : (
              <a
                href={downloadLinks[key] ? downloadLinks[key] : "/"}
                target="_blank"
                key={index}
              >
                <li>
                  <img
                    src={appLogoMapper[key].icon}
                    alt={appLogoMapper[key].name}
                    className="bottom-sheet-icon"
                  />{" "}
                  <br />
                  {appLogoMapper[key].name}
                </li>
              </a>
            )
          )}
        </ul>
      </BottomSheet>
    </div>
  );
};

export default DownloadAppsBottomSheet;
