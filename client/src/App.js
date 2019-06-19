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
      parks: [],
      lastRequest: new Date(),
      loading: false,
      selectedPark: {},
      parkModalOpen: false
    };
  }

  handleSearchUpdate = (text, states, designations) => {
    if (text === "" && states === "" && designations === "") {
      this.setState({ parks: [], lastRequest: new Date(), loading: false });
    } else {
      const timeSent = new Date(); // keep track of when we sent this to make sure we're up to date and not overriding with old data
      this.setState({ loading: true });
      axios.get(`http://134.209.173.108:3000/api/parks?text=${text}&states=${states.join(",")}&designations=${designations.join(",")}`)
        .then((res) => {
          // make sure we don't override current data with out-of-date data
          if (timeSent - this.state.lastRequest > 0) {
            this.setState({ parks: res.data, loading: false, lastRequest: timeSent });
          }
        });
    }
  }

  handleParkClick = (park) => {
    this.setState({ selectedPark: park, parkModalOpen: true });
  }

  handleClose = () => {
    this.setState({ selectedPark: {}, parkModalOpen: false });
  }

  render = () => (
    <div>
      <Header handleSearchUpdate={this.handleSearchUpdate} />
      <Results parks={this.state.parks} loading={this.state.loading} onParkClick={this.handleParkClick} />
      <Modal open={this.state.parkModalOpen} style={{ maxHeight: "100vh", overflowY: "auto" }} onClose={this.handleClose}>
        <ParkInformationModal park={this.state.selectedPark} />
      </Modal>
    </div>
  )
}

export default App;
