import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  withStyles
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
const styles = themes => ({
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
});

class NavBar extends Component {
  state = {};
  render() {
    const { classes } = this.props;
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit">
            Travizza!!
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(NavBar);
