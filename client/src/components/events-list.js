import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";

const EventsList = (props) => (
  <div>
    {
      props.events.map(v => (
        <a href={v.url} style={{ textDecoration: "none" }}>
          <Paper elevation={0} style={{ border: "1px solid #ddd", margin: "10px 0", padding: 10 }}>
            <Typography variant="h5">
              {v.title}
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Typography variant="body2" color="textSecondary">
                  {/* Remove HTML tags */}
                  {v.description.replace(/<\/?[a-z ]+>/g, "")}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" color="textSecondary">
                  When: {(new Date(v.datestart)).toDateString()} from {v.times[0].timestart} to {v.times[0].timeend}
                  <br /> 
                  <br /> 
                  Where: {v.location}
                  { 
                    v.regresurl.length > 0
                      ? <div>
                        <br />
                        <Link href={v.regresurl}>Website</Link>
                        </div>
                      : null
                  }
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </a>
      ))
    }
  </div>
)

export default EventsList;
