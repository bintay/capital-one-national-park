import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import LoadingItem from "./loading-item";

const EducationList = (props) => (
  <div>
    <Typography variant="h4">
      Lesson Plans
    </Typography>
    {
      props.lessonsLoading
        ? <div>
            <LoadingItem />
            <LoadingItem />
            <LoadingItem />
          </div>
        : props.lessons.map(v => (
            <a href={v.url} style={{ textDecoration: "none" }}>
              <Paper elevation={0} style={{ border: "1px solid #ddd", margin: "10px 0", padding: 10 }}>
                <Button color="primary" href={v.url} style={{ float: "right" }}>Read More</Button>
                <Typography variant="h5">
                  {v.title}
                </Typography>
                <Typography variant="subtitle1">
                  {v.duration} / {v.gradeLevel || v.gradelevel}
                </Typography>
              </Paper>
            </a>
          ))
      }
    <br />
    <br />
    <Typography variant="h4">
      People &amp; Places
    </Typography>
    {
      props.peopleAndPlacesLoading
        ? <div>
            <LoadingItem />
            <LoadingItem />
            <LoadingItem />
          </div>
        : props.peopleAndPlaces.map(v => (
            <a href={v.url} style={{ textDecoration: "none" }}>
              <Paper elevation={0} style={{ border: "1px solid #ddd", margin: "10px 0", padding: 10 }}>
                <Button color="primary" href={v.url} style={{ float: "right" }}>Read More</Button>
                <Typography variant="h5">
                  {v.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {v.listingDescription || v.listingdescription}
                </Typography>
              </Paper>
            </a>
          ))
    }
  </div>
)

export default EducationList;
