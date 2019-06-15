import React from "react";
import campingImage from "../images/camping.svg";
import Typography from "@material-ui/core/Typography";
import ParkCard from "./park-card";

const Results = (props) => (
  <div style={{ maxWidth: "50%", margin: "60px auto 0 auto", maxHeight: "90vh" }}>
    {
      props.parks && props.parks.length > 0
      ?
        <div style={{ marginTop: 120 }}>
          {
            props.parks.map(park => (
              <ParkCard park={park} />
            ))
          }
        </div>
      :
        <div>
          <img src={campingImage} alt="Search above for parks" style={{ opacity: 0.9 }} />
          <Typography variant="h4" component="h2" style={{ textAlign: "center", position: "relative", top: "-7vw", color: "#666", fontWeight: 300, marginBottom: "-7vw" }} >
            Search for Parks Above
          </Typography>
        </div>
    }
  </div>
)

export default Results;
