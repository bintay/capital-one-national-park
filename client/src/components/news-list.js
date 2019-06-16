import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const NewsList = (props) => (
  <div>
    {
      props.news.map(v => (
        <a href={v.url} style={{ textDecoration: "none" }}>
          <Paper elevation={0} style={{ border: "1px solid #ddd", margin: "10px 0" }}>
            <Grid container spacing={0}>
              <Grid item xs={3} m={2} xl={1}>
                <div style={{ width: "100%", paddingBottom: "100%", background: `url(${v.image.url}) center`, backgroundSize: "cover", borderRadius: "4px 0 0 4px" }}></div>
              </Grid>
              <Grid item xs={9} m={10} xl={11}>
                <div style={{ padding: "10px 15px" }}>
                  <Typography variant="h5">
                    {v.title}
                  </Typography>
                  <br /> 
                  <Typography variant="body2" color="textSecondary">
                    {v.abstract}
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Paper>
        </a>
      ))
    }
  </div>
)

export default NewsList;
