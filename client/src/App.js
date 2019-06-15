import React, { Component } from "react";
import "./App.css";
import Header from "./components/header";
import Results from "./components/results";

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      parks: []
    };
  }

  handleSearchResults = (results) => {
    this.setState({ parks: results });
  }

  render = () => (
    <div>
      <Header handleSearchResults={this.handleSearchResults} />
      <Results parks={this.state.parks} />
    </div>
  )
}

export default App;
