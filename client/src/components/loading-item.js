import React from "react";
import Paper from "@material-ui/core/Paper";
import "./loading.css";

const LoadingItem = (props) => (
  <Paper elevation={0} style={{ border: "1px solid #ddd", margin: "10px 0" }}>
    <div style={{ padding: "10px 15px" }}>
      <div className="loadingText" style={{ float: "right", width: 60, height: 30 }}></div>
      <div className="loadingText" style={{ width: "70%", height: 30 }}></div>
      <br />
      <div className="loadingText" style={{ width: "100%", height: 100}}></div>
    </div>
  </Paper>
);

export default LoadingItem;
