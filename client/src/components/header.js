import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchBar from 'material-ui-search-bar'

const styles = {
  header: {
    flexGrow: 1,
    background: 'linear-gradient(to right, #7474bf, #348ac7)',
    height: 100,
    padding: '0 20%'
  },
  title: {
    flexGrow: 1,
  },
  searchBar: {
    width: '50%',
    minWidth: 200,
    maxWidth: 800,
    padding: 5
  }
};

class Header extends  Component {
  constructor (props) {
    super(props);

    this.state = {
      searchText: '',
      dataSource: ['hello']
    };
  }

  handleSearchTextChange = event => {
    this.setState({ searchText: event.target.searchText });
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
            onChange={(value) => this.setState({dataSource: [ value, value+value, value+value+value]})}
            onRequestSearch={() => console.log('TODO ' + this.state.value)}
          />
        </Toolbar>
      </AppBar>
    );
  };
}

export default withStyles(styles)(Header);
