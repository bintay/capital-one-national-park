import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import Results from "./components/results";
import axios from "axios";

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      parks: [],
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
    </div>
  )
}

export default App;
