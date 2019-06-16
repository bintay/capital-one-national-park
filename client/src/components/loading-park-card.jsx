import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import "./loading.css";

const LoadingParkCard = (props) => (
  <Card style={{ width: "80%", minWidth: 300, margin: "0 auto 20px auto" }}>
      <div style={{ height: 280 }} className="loadingImage"></div>
      <CardContent>
        <div style={{ height: 40, width: "100%" }} className="loadingText"></div>
        <div style={{ height: 140, width: "100%" }} className="loadingText"></div>
        <div style={{ height: 40, width: "10%", display: "inline-block", marginBottom: 0 }} className="loadingText"></div>
        <div style={{ height: 40, width: "10%", display: "inline-block", marginBottom: 0, marginLeft: 20 }} className="loadingText"></div>
      </CardContent>
  </Card>
)

export default LoadingParkCard;
