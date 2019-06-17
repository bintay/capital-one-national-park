import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Gallery from "react-photo-gallery";
import "./image-gallery.css";
import "./loading.css";
import EventsList from "./events-list";
import AlertList from "./alert-list";
import NewsList from "./news-list";
import CenterList from "./center-list";
import EducationList from "./education-list";
import axios from "axios";

class ParkInformationModal extends Component {
  constructor (props) {
    super(props);

    // temp data
    this.state = {
      alerts: [],
      news: [],
      events: [],
      centers: [],
      lessons: [],
      peopleAndPlaces: [],
      alertsLoading: true,
      newsLoading: true,
      eventsLoading: true,
      centersLoading: true,
      lessonsLoading: true,
      peopleAndPlacesLoading: true
    };
  }

  componentDidMount() {
    axios.get(`http://localhost:4000/api/alerts?parkCode=${this.props.park.parkCode}`)
      .then(res => {
        this.setState({ alerts: res.data, alertsLoading: false });
      });
    
    axios.get(`http://localhost:4000/api/newsreleases/articles?parkCode=${this.props.park.parkCode}`)
      .then(res => {
        this.setState({ news: res.data, newsLoading: false });
      });

    axios.get(`http://localhost:4000/api/events?parkCode=${this.props.park.parkCode}`)
      .then(res => {
        this.setState({ events: res.data, eventsLoading: false });
      });
    
    axios.get(`http://localhost:4000/api/visitorcenters/campgrounds?parkCode=${this.props.park.parkCode}`)
      .then(res => {
        this.setState({ centers: res.data, centersLoading: false });
      });
    
    axios.get(`http://localhost:4000/api/people/places?parkCode=${this.props.park.parkCode}`)
      .then(res => {
        this.setState({ peopleAndPlaces: res.data, peopleAndPlacesLoading: false });
      });
    
    axios.get(`http://localhost:4000/api/lessonplans?parkCode=${this.props.park.parkCode}`)
      .then(res => {
        this.setState({ lessons: res.data, lessonsLoading: false });
      });
  }

  render = () => (
    <Paper style={{
      width: "80%",
      margin: "20px auto",
      padding: 20
    }}>
      <Typography variant="h2">
        {this.props.park.name}
      </Typography>
      <br />
      <AlertList alerts={this.state.alerts} />
      <Typography variant="body1" color="textSecondary" component="p">
        {this.props.park.description}
      </Typography>
      <br />
      <br />
      <Typography variant="h4">
        Articles &amp; News Releases
      </Typography>
      <NewsList news={this.state.news} loading={this.state.newsLoading} />
      <br />
      <br /> 
      <Typography variant="h4">
        Events
      </Typography>
      <EventsList events={this.state.events} loading={this.state.eventsLoading} />
      <br />
      <br />
      <Typography variant="h4">
        Visitor Centers &amp; Campgrounds
      </Typography>
      <CenterList centers={this.state.centers} loading={this.state.centersLoading} />
      <br />
      <br />
      <Typography variant="h4">
        Pictures
      </Typography>
      <br />
      <Gallery photos={
        this.props.park.images.slice(0, 6).map((v, i) => {
          const aspectRatio = [[3, 2], [2, 3], [1, 1], [4, 3], [5, 8], [1, 1]]
          return {
            src: v.url,
            width: aspectRatio[i % 6][0],
            height: aspectRatio[i % 6][1]
          }
        })
      } />
      <br />
      <br />
      <EducationList 
        lessons={this.state.lessons} 
        peopleAndPlaces={this.state.peopleAndPlaces} 
        lessonsLoading={this.state.lessonsLoading} 
        peopleAndPlacesLoading={this.peopleAndPlacesLoading} 
      />
    </Paper>
  )
}

export default ParkInformationModal;
