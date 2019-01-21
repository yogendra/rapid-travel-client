import { Grid, withStyles, Typography, Icon } from "@material-ui/core";
import React, { Component } from "react";
import airports from "./airports.json";
import AmountUI from "./AmountUI.jsx";
const styles = themes => ({
  arrow: {
    paddingTop: 4
  },
  flighticon: {
    marginBottom: -4
  }
});

const airportsMap = (airports => {
  let m = {};
  airports.map(x => {
    m[x.code] = x.name;
    return x;
  });
  return m;
})(airports);

class Flight extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { flight, classes } = this.props;
    console.log([flight, airportsMap]);
    return (
      <Grid container>
        <Grid item xs={4}>
          <Typography variant="h4">{flight.source}</Typography>
          <Typography vasriant="h5">{airportsMap[flight.source]}</Typography>
          <Typography variant="caption">
            <Icon className={classes.flighticon}>flight_takeoff</Icon>
            {flight.departureDate} {flight.departureTime}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Icon className={classes.arrow}>arrow_forward</Icon>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="h4">{flight.destination}</Typography>
          <Typography vasriant="h5">
            {airportsMap[flight.destination]}
          </Typography>
          <Typography variant="caption">
            <Icon className={classes.flighticon}>flight_land</Icon>
            {flight.arrivalDate} {flight.arrivalTime}
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <AmountUI amount={flight.price} />
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Flight);
