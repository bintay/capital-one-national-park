import React from "react";
import campingImage from "../images/camping.svg";
import Typography from "@material-ui/core/Typography"

const Results = (props) => (
   <div style={{ maxWidth: "60%", margin: "140px auto", maxHeight: "90vh" }}>
      {
         props.parks.length > 0
         ?
            <p>Parks go here</p>
         :
            <div>
               <img src={campingImage} alt="Search above for parks" style={{ maxHeight: "90vh", opacity: 0.9 }} />
               <Typography variant="h4" component="h2" style={{ textAlign: "center", position: "relative", top: -120, color: "#666", fontWeight: 300, marginBottom: -60 }} >
                 Search for Parks Above
               </Typography>
            </div>
      }
   </div>
)

export default Results;
