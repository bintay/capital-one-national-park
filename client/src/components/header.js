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
      stateCode: [""]
    };
  }

  handleSearchTextChange = event => {
    this.setState({ searchText: event.target.searchText });
  };

  handleStateCodeChange = event => {
    const defaultStateIndex = event.target.value.indexOf("");
    
    if (defaultStateIndex !== -1 && event.target.value.length > 1) {
      event.target.value.splice(defaultStateIndex, 1);
    } else if (defaultStateIndex === -1 && event.target.value.length < 1) {
      event.target.value.push("");
    }

    this.setState({ stateCode: event.target.value });
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
              inputProps={{
                name: "age"
              }}
              style={{ maxWidth: 200 }}
            >
              <MenuItem key="all" value="">
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
        </Toolbar>
      </AppBar>
    );
  };
}

export default withStyles(styles)(Header);
