import React, { useEffect, useState } from "react";

import "./compoonent-internal-header.styyles.scss";

const ComponentInternalHeader = ({ setFixer, children }) => {
  const [navbarGenreFixed, setNavbarGenreFixed] = useState("");

  useEffect(() => {
    if (setFixer && typeof window !== "undefined") {
      window.onscroll = () => {
        let currentScrollPos = window.pageYOffset;
        // console.log("currentScrollPos:", currentScrollPos);
        let maxScroll = document.body.scrollHeight - window.innerHeight;
        // console.log("maxScroll:", maxScroll);
        if (currentScrollPos > 51) {
          setNavbarGenreFixed("component-internal-header-fixed");
        } else {
          setNavbarGenreFixed("");
        }
      };
    }
  });

  return (
    <>
      <div className={`component-internal-header ${navbarGenreFixed}`}>
        {children}
      </div>
    </>
  );
};

export default ComponentInternalHeader;
