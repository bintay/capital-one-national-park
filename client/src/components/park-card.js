import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const ParkCard = (props) => (
  <Card style={{ width: "80%", minWidth: 300, margin: "0 auto 20px auto" }}>
    <CardActionArea>
      {
        props.park.images && props.park.images.length > 0
          ? <CardMedia
              style={{ height: 280 }}
              image={props.park.images[0].url}
              title={props.park.images[0].title}
            />
          : null
      }
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.park.name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.park.description}
        </Typography>
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Button size="small" color="primary">
        Learn More
      </Button>
      {
        props.park.url 
          ? <Button size="small" color="primary" href={props.park.url}>
              Official Website
            </Button>
          : null
      }
    </CardActions>
  </Card>
)

export default ParkCard;
