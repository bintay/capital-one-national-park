import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import LoadingItem from "./loading-item";

const CenterList = (props) => (
  <div>
    {
      props.loading
      ? <div>
          <LoadingItem />
          <LoadingItem />
          <LoadingItem />
        </div>
      : props.centers.map(v => (
          <a href={v.url} style={{ textDecoration: "none" }}>
            <Paper elevation={0} style={{ border: "1px solid #ddd", margin: "10px 0", padding: 10 }}>
              { 
                v.directionsUrl.length > 0
                  ? <Button color="primary" href={v.directionsUrl} style={{ float: "right" }}>Read More</Button>
                  : null
              }
              <Typography variant="h5">
                {v.name}
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <Typography variant="body2" color="textSecondary">
                    {v.description}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" color="textSecondary">
                    {/* The data can come back a little messy, so we need to check different properties for the same info */}
                    Directions: {v.directionsInfo || v.directionsOverview || v.directionsoverview}
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </a>
        ))
    }    
  </div>
)

export default CenterList;
