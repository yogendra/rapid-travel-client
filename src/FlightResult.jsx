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
      selectedFlight: {}
    };
  }
  handleFlightChange = event => {
    this.setState({ selectedFlight: event.target.value });
  };
  render() {
    // let flightList = this.state.flights.map(flight => {
    //   console.log("Rendering flight " + flight.flight);
    //   return (
    //     <Grid key={flight.flight} item xs={12}>
    //       <Grid container>
    //         <Grid item xs={1}>
    //           <Radio
    //             checked={this.state.selectedFlight === flight.flight}
    //             onChange={this.handleFlightChange}
    //             value={flight.flight}
    //           />
    //         </Grid>
    //         <Grid item xs={10}>
    //           <Flight flight={flight} />
    //         </Grid>
    //       </Grid>
    //     </Grid>
    //   );
    // });
    return (
      <Paper>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h6">Flight Results</Typography>
          </Grid>
          <Grid container>
            {this.state.flights.map(x => {
              return <Flight flight={x} />;
            })}
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles)(FlightResult);
