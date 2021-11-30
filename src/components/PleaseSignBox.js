import React from "react";
import Draw from "./Draw";

const signBox = {
  width: "300px",
  height: "150px",
  border: "1px solid #333",
  display: "block",
  margin: "0 auto",
  background: "transparent"
};

export const PleaseSignBox = props => {
  return (
    <React.Fragment>
      <p style={{ width: "100%", height: "100%" }}>Please Sign Your Name</p>
      <Draw />
    </React.Fragment>
  );
};
