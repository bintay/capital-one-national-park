import React from "react";
import campingImage from "../images/camping.svg";
import Typography from "@material-ui/core/Typography";
import ParkCard from "./park-card";
import LoadingParkCard from "./loading-park-card";

const Results = (props) => (
  <div style={{ maxWidth: "50%", margin: "60px auto 0 auto", maxHeight: "90vh" }}>
    {
      props.loading
      ? <div style={{ marginTop: 120 }}>
          <LoadingParkCard />
        </div>
      : props.parks && props.parks.length > 0
        ? <div style={{ marginTop: 120 }}>
            {
              props.parks.map(park => (
                <ParkCard park={park} onParkClick={props.onParkClick} />
              ))
            }
          </div>
        : <div style={{ maxHeight: "100vh", overflowY: "hidden" }}>
            <img src={campingImage} alt="Search above for parks" style={{ opacity: 0.9, width: "80%", margin: "0 auto", display: "block" }} />
            <Typography variant="h4" component="h2" style={{ textAlign: "center", position: "relative", top: "-7vw", color: "#666", fontWeight: 300 }} >
              Search for Parks Above
            </Typography>
            <Typography variant="h5" component="h2" style={{ textAlign: "center", position: "relative", top: "-7vw", color: "#666", fontWeight: 300, marginBottom: "-7vw" }} >
              (no results found)
            </Typography>
          </div>
    }
  </div>
)

export default Results;
