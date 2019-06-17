import React from "react";
import Chip from "@material-ui/core/Chip";

const AlertList = (props) => (
    <div>
      {
        props.alerts.map(v => (
          <Chip 
            color="secondary"
            label={v.title}
            style={{ marginRight: 10, marginTop: 10 }}
            href={v.url}
            component={v.url.length > 0 ? "a" : "div" }
            clickable={v.url.length > 0}
          />
        ))
      }
      {
        props.alerts.length > 0
          ? <div><br /></div>
          : null
      }
    </div>
)

export default AlertList;
