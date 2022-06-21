import React, { useEffect, useState } from "react";

import "./compoonent-internal-header.styles.scss";

const ComponentInternalHeader = ({ setFixer, children }) => {
  const [navbarGenreFixed, setNavbarGenreFixed] = useState("");

  useEffect(() => {
    const updateNavbarGenreFixed = () => {
      if (setFixer) {
        if (
          document.documentElement.scrollTop >= 85 ||
          document.body.scrollTop >= 85
        ) {
          setNavbarGenreFixed("component-internal-header-fixed");
        } else if (
          document.documentElement.scrollTop < 85 ||
          document.body.scrollTop < 85
        ) {
          setNavbarGenreFixed("");
        }
      }
    };

    window.addEventListener("scroll", updateNavbarGenreFixed);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarGenreFixed);
    };
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
