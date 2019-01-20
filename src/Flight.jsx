import { Grid, withStyles, Typography, Icon } from "@material-ui/core";
import React, { Component } from "react";

const styles = themes => ({
  arrow: {
    paddingTop: 4
  }
});

class Flight extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { flight, classes } = this.props;
    return (
      <Grid container>
        <Grid item xs={5} sm={2}>
          <Typography variant="h4">{flight.source}</Typography>
          <Typography variant="caption">
            {flight.departureDate} {flight.departureTime}
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <Icon className={classes.arrow}>arrow_forward</Icon>
        </Grid>
        <Grid item xs={5} sm={2}>
          <Typography variant="h4">{flight.destination}</Typography>
          <Typography variant="caption">
            {flight.arrivalDate} {flight.arrivalTime}
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Flight);
