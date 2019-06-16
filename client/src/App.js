import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import Results from "./components/results";
import ParkInformationModal from "./components/park-information-modal"
import Modal from "@material-ui/core/Modal"
import axios from "axios";

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      parks: [
        {
        "states": "CO",
        "directionsInfo": "The park is accessed via U.S. Highway 50 and Highway 194. From La Junta, Colorado on U.S. Highway 50, take Colorado Highway 109 north 1 mile to Colorado Highway 194, then east on Colorado Highway 194 six miles to the fort. From Las Animas, Colorado, on U.S. Highway 50, take Colorado Highway 194 west 13 miles. Set your GPS to 35110 State Highway 194 E., La Junta, CO.",
        "directionsUrl": "http://www.nps.gov/beol/planyourvisit/directions.htm",
        "url": "https://www.nps.gov/beol/index.htm",
        "weatherInfo": "Summer temperatures are are often in the high 90s and low 100s. Weather is generally fair in the fall and spring. Winter temperatures can be below freezing. Most of the fort is unheated and does not have modern cooling systems, so dress accordingly.",
        "name": "Bent's Old Fort",
        "latLong": "lat:38.03977546, long:-103.4266499",
        "description": "Bent's Old Fort National Historic Site features a reconstructed 1840s adobe fur trading post on the mountain branch of the Santa Fe Trail where traders, trappers, travelers, and the Cheyenne and Arapaho tribes came together in peaceful terms for trade.  Today, living historians recreate the sights, sounds, and smells of the past with guided tours, demonstrations and special events.",
        "images": [
          {
            "credit": "NPS Photo",
            "altText": "Bent's Fort",
            "title": "Bent's Old Fort",
            "id": "3170",
            "caption": "Bent's Old Fort was the only permanent white settlement on the Santa Fe Trail between Missouri and Santa Fe.",
            "url": "https://www.nps.gov/common/uploads/structured_data/3C80168D-1DD8-B71B-0B61A79C6F138439.jpg"
          },
          {
            "credit": "NPS photo",
            "altText": "Fur trapper in camp",
            "title": "Fur trapper explains the work of the 1830s.",
            "id": "3174",
            "caption": "Special events bring the past alive with encampments, fort trade and Plains Indian life.",
            "url": "https://www.nps.gov/common/uploads/structured_data/3C801CAF-1DD8-B71B-0B934F1523649267.jpg"
          },
          {
            "credit": "NPS photo",
            "altText": "Plains Indian trade in plaza",
            "title": "A Lakota warrior barters with the traders in the fort plaza",
            "id": "3175",
            "caption": "Trade with a Lakota warrior for trade goods from around the world.",
            "url": "https://www.nps.gov/common/uploads/structured_data/3C801E10-1DD8-B71B-0B68B8F8E90A90DD.jpg"
          },
          {
            "credit": "NPS photo",
            "altText": "HIkers follow behind the fort's wagon on the Santa Fe Trail",
            "title": "Hiking the Santa Fe Trail",
            "id": "3176",
            "caption": "The Santa Fe Trail Encampment features a hike with the fort's wagon down the original Santa Fe Trail.",
            "url": "https://www.nps.gov/common/uploads/structured_data/3C801FBA-1DD8-B71B-0B2C529FA316725B.jpg"
          },
          {
            "credit": "NPS photo",
            "altText": "Cooking in fort kitchen",
            "title": "Open hearth cooking in the fort kitchen",
            "id": "3177",
            "caption": "Buffalo meat is broil in the reflector oven for the fort employees as was done in the 1840s.",
            "url": "https://www.nps.gov/common/uploads/structured_data/3C802137-1DD8-B71B-0BB3C863E556B5D2.jpg"
          },
          {
            "credit": "NPS photo",
            "altText": "Swivel cannon firing",
            "title": "Swivel cannon is fired using 18th century drill",
            "id": "3178",
            "caption": "The fort's security depended on its ability to resist attack.",
            "url": "https://www.nps.gov/common/uploads/structured_data/3C8022B5-1DD8-B71B-0B564D617D68F804.jpg"
          }
        ],
        "designation": "National Historic Site",
        "parkCode": "beol",
        "id": "87F9EFC7-1951-4250-A367-644EC5C4E6A2",
        "fullName": "Bent's Old Fort National Historic Site"
      }
    ],
      lastRequest: new Date(),
      loading: false
    };
  }

  handleSearchUpdate = (text, states, designations) => {
    if (text === "" && states === "" && designations === "") {
      this.setState({ parks: [], lastRequest: new Date(), loading: false });
    } else {
      const timeSent = new Date(); // keep track of when we sent this to make sure we're up to date and not overriding with old data
      this.setState({ loading: true });
      axios.get(`http://localhost:4000/api/parks?text=${text}&states=${states.join(",")}&designations=${designations.join(",")}`)
        .then((res) => {
          // make sure we don't override current data with out-of-date data
          if (timeSent - this.state.lastRequest > 0) {
            this.setState({ parks: res.data, loading: false });
          }
          this.setState({ lastRequest: timeSent });
        });
    }
  }

  render = () => (
    <div>
      <Header handleSearchUpdate={this.handleSearchUpdate} />
      <Results parks={this.state.parks} loading={this.state.loading} />
      <Modal open={true} style={{ maxHeight: "100vh", overflowY: "auto" }}>
        <ParkInformationModal park={this.state.parks[0]} />
      </Modal>
    </div>
  )
}

export default App;
