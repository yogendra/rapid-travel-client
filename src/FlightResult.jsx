import React, { Component } from "react";
import { Paper, Grid, withStyles, Radio, Typography } from "@material-ui/core";
import Flight from "./Flight";
const styles = theme => ({
  header: {}
});

class FlightResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flights: this.props.flights,
      flight: {}
    };
  }
  render() {
    const { onSelect } = this.props;

    let flightList = this.state.flights.map(flight => {
      return (
        <Grid item containter key={flight.flight} xs={12}>
          <Grid item xs={1}>
            <Radio
              value={flight.flight}
              checked={flight === this.state.flight}
            />
          </Grid>
          <Grid item xs={10}>
            <Flight flight={flight} onSelect={onSelect} />
          </Grid>
        </Grid>
      );
    });
    return (
      <Paper>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h6">Flight Results</Typography>
          </Grid>
          <Grid item xs={12}>
            {flightList}
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles)(FlightResult);
