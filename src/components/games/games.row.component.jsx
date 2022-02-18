import React from "react";

import { ReactComponent as StarLogo } from "../../assets/images/icon/star.svg";

import "./games.styles.scss";

const RowGames = ({ category }) => {
  let applicationLength = category.applications.length;
  let column = Math.ceil(applicationLength / 3);
  let data = [];
  console.log("category");
  console.log(category);
  console.log("column");
  console.log(column);

  for (let i = 0; i < column; i++) {
    return (
      <div>
        {category.applications.map((application) => {
          return (
            <div>
              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      // marginBottom: "17.5px",
                      justifyContent: "space-between",
                    }}
                  >
                    <img
                      src={application.source.icon}
                      width="65"
                      height="60"
                      style={{
                        borderRadius: "10px",
                        boxShadow: "0 3px 6px 0 rgba(0, 0, 0, 0.16)",
                        margin: "0 0 17.5px ",
                      }}
                    />
                    <div style={{ marginRight: "10px" }}>
                      <span
                        style={{
                          fontSize: "15px",
                          fontWeight: "500",
                          padding: "0",
                        }}
                      >
                        {application.name}
                      </span>
                      <br />
                      <span
                        style={{
                          fontSize: "10px",
                          fontWeight: "500",
                          padding: "0",
                          color: "#707070",
                        }}
                      >
                        بازی جورچین
                      </span>
                      <br />
                      <span
                        style={{
                          fontSize: "10px",
                          fontWeight: "500",
                          padding: "0",
                        }}
                      >{`${application.install_score_counter} امتیاز با نصب این بازی دریافت کنید.`}</span>
                    </div>
                  </div>
                  <div style={{ alignItems: "center" }}>
                    <br />
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: "500",
                        padding: "0",
                        color: "#707070",
                        marginBottom: "1px",
                      }}
                    >
                      4.5
                    </span>
                    <StarLogo
                      style={{
                        width: "16px",
                        height: "14.9px",
                        marginRight: "4px",
                        marginTop: "4px",
                      }}
                    />
                  </div>
                </div>
                {/* <hr style={{ width: "259", direction: "ltr" }} /> */}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  // return (
  //   <di>
  //     <h1>s</h1>
  //   </di>
  // );
};

export default RowGames;
