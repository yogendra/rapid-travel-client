import React, { Component } from "react";
import { Grid, withStyles, Typography, Button, Radio } from "@material-ui/core";
import Flight from "./Flight";
const styles = theme => ({
  header: {},
  actionBar: {
    marginTop: 8,
    display: "flex",
    justifyContent: "flex-end"
  },
  action: {
    display: "inline-block"
  }
});
class FlightResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flights: this.props.flights,
      selectedFlight: this.props.flight
    };
  }
  handleFlightChange = flight => {
    console.log(flight);
    this.setState({ selectedFlight: flight });
  };
  handleNext = event => {
    this.props.onSelect(this.state.selectedFlight);
  };
  render() {
    let { classes } = this.props;
    return (
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h6">Flight Results</Typography>
        </Grid>
        <Grid container item xs={12} spacing={8}>
          {this.state.flights.map(x => {
            return (
              <Grid key={x.flight} container item xs={12}>
                <Grid item xs={1}>
                  <Radio
                    name="flight"
                    value={x.flight}
                    onClick={() => this.handleFlightChange(x)}
                  />
                </Grid>
                <Grid item xs={11}>
                  <Flight flight={x} />
                </Grid>
              </Grid>
            );
          })}
        </Grid>
        <Grid container item xs={12} className={classes.actionBar}>
          <Button
            className={classes.action}
            variant="contained"
            color="secondary"
            onClick={this.handleNext}
          >
            Next
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(FlightResult);
