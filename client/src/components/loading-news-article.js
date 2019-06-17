import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./loading.css";

const LoadingNewsArticle = (props) => (
  <Paper elevation={0} style={{ border: "1px solid #ddd", margin: "10px 0" }}>
    <Grid container spacing={0}>
      <Grid item xs={3} m={2} xl={1}>
        <div className="loadingImage" style={{ width: "100%", paddingBottom: "100%", borderRadius: "4px 0 0 4px" }}></div>
      </Grid>
      <Grid item xs={9} m={10} xl={11}>
        <div style={{ padding: "10px 15px" }}>
          <div className="loadingText" style={{ float: "right", width: 60, height: 30 }}></div>
          <div className="loadingText" style={{ width: "70%", height: 30 }}></div>
          <br /> 
          <div className="loadingText" style={{ width: "100%", height: 100}}></div>
        </div>
      </Grid>
    </Grid>
  </Paper>
);

export default LoadingNewsArticle;
