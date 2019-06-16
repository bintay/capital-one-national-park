import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import SearchBar from "material-ui-search-bar";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Paper from "@material-ui/core/Paper";
import states from "../data/states.json";
import designations from "../data/designations.json";

const styles = {
  header: {
    flexGrow: 1,
    background: "linear-gradient(to right, #7474bf, #348ac7)",
    height: 100,
    padding: "0 10%"
  },
  title: {
    flexGrow: 1,
  },
  searchBar: {
    width: 200,
    minWidth: 200,
    padding: 5,
    transition: "width 0.3s",
    "&:focus-within": {
      width: "40%"
    }
  }
};

class Header extends Component {
  constructor (props) {
    super(props);

    this.state = {
      searchText: "",
      stateCode: [""],
      designations: [""]
    };
  }

  handleSearchUpdate = () => {
    this.props.handleSearchUpdate(this.state.searchText, this.state.stateCode, this.state.designations);
  }

  handleSearchTextChange = value => {
    this.setState({ searchText: value }, this.handleSearchUpdate);
  };

  handleStateCodeChange = event => {
    // Here, we're making sure that
    // when "All States" is selected,
    // it is the only option that is
    // selected

    const defaultStateIndex = event.target.value.indexOf("");
    
    if (defaultStateIndex !== -1 && this.state.stateCode.indexOf("") === -1) {
      event.target.value = [""];
    } else if (defaultStateIndex !== -1 && event.target.value.length > 1) {
      event.target.value.splice(defaultStateIndex, 1);
    } else if (defaultStateIndex === -1 && event.target.value.length < 1) {
      event.target.value.push("");
    }

    this.setState({ stateCode: event.target.value }, this.handleSearchUpdate);
  };

  handleDesignationsChange = event => {
    // Here, we're making sure that
    // when "All States" is selected,
    // it is the only option that is
    // selected

    const defaultStateIndex = event.target.value.indexOf("");
    
    if (defaultStateIndex !== -1 && this.state.designations.indexOf("") === -1) {
      event.target.value = [""];
    } else if (defaultStateIndex !== -1 && event.target.value.length > 1) {
      event.target.value.splice(defaultStateIndex, 1);
    } else if (defaultStateIndex === -1 && event.target.value.length < 1) {
      event.target.value.push("");
    }

    this.setState({ designations: event.target.value }, this.handleSearchUpdate);
  };

  render = ( props ) => {
    const { classes } = this.props;
    return (
      <AppBar position="fixed">
        <Toolbar className={classes.header}>
          <Typography variant="h6" className={classes.title}>
            National Park Utility
          </Typography>
          <SearchBar
            datasource={this.state.dataSource}
            className={classes.searchBar}
            value={this.state.searchText}
            onChange={this.handleSearchTextChange}
            onRequestSearch={() => console.log("TODO " + this.state.searchText)}
          />
          <Paper style={{ padding: 13, marginLeft: 10 }}>
            <Select
              multiple
              value={this.state.stateCode}
              onChange={this.handleStateCodeChange}
              style={{ maxWidth: 200 }}
            >
              <MenuItem key="allStates" value="">
                All States
              </MenuItem>
              {
                states.map(state => (
                  <MenuItem key={state.name} value={state.code}>
                    {state.name}
                  </MenuItem>
                ))
              }
            </Select>
          </Paper>
          <Paper style={{ padding: 13, marginLeft: 10 }}>
            <Select
              multiple
              value={this.state.designations}
              onChange={this.handleDesignationsChange}
              style={{ maxWidth: 200 }}
            >
              <MenuItem key="allDesignations" value="">
                All Designations
              </MenuItem>
              {
                designations.map(designation => (
                  <MenuItem key={designation} value={designation}>
                    {designation}
                  </MenuItem>
                ))
              }
            </Select>
          </Paper>
        </Toolbar>
      </AppBar>
    );
  };
}

export default withStyles(styles)(Header);
