import React from "react";

import ClipLoader from "react-spinners/BarLoader";

import useAxiosLoader from "../../../services/useLoader";

import "./loading.style.scss";

const Loading = () => {
  const [loading] = useAxiosLoader();

  return (
    loading && (
      <ClipLoader
        color={"#ff9f0a"}
        loading={true}
        css={{
          position: "absolute",
          top: "0",
          left: "0",
          right: "0",
          width: "100vw",
          margin: "0 auto",
          padding: "0",
        }}
      />
    )
  );
};

export default Loading;
