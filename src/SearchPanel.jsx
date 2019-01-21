import React, { Component } from "react";
import {
  Button,
  withStyles,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography
} from "@material-ui/core";
import { DatePicker, MuiPickersUtilsProvider } from "material-ui-pickers";
import DateFnsUtils from "@date-io/date-fns";
import airports from "./airports.json";
const styles = theme => ({
  actionBar: {
    marginTop: 8,
    display: "flex",
    justifyContent: "flex-end"
  },
  action: {
    display: "inline-block"
  }
});

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.search;
  }

  handleFromChange = event => {
    this.setState({ from: event.target.value });
  };
  handleDepartureDateChange = departureDate => {
    this.setState({ departureDate });
  };
  handleReturnDateChange = returnDate => {
    this.setState({ returnDate });
  };
  handleToChange = event => {
    this.setState({ to: event.target.value });
  };
  handleSearch = event => {
    this.props.onSearch(this.state);
  };

  render() {
    const state = this.state;
    const { classes } = this.props;

    const airportMenuItems = airports.map(airport => {
      return (
        <MenuItem key={"airport_" + airport.code} value={airport.code}>
          {airport.name} ({airport.code})
        </MenuItem>
      );
    });

    return (
      <Grid container alignItems="center" spacing={8}>
        <Grid item xs={12}>
          <Typography variant="h6">Flight Search</Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <FormControl fullWidth={true}>
            <InputLabel shrink>From</InputLabel>
            <Select
              value={state.from}
              onChange={this.handleFromChange}
              className={classes.textField}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {airportMenuItems}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={6}>
          <FormControl fullWidth={true}>
            <InputLabel shrink>To</InputLabel>

            <Select
              value={state.to}
              onChange={this.handleToChange}
              className={classes.textField}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {airportMenuItems}
            </Select>
          </FormControl>
        </Grid>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid item xs={12} md={6}>
            <FormControl className={classes.formControl} fullWidth={true}>
              <DatePicker
                value={state.departureDate}
                label="Departure Date"
                onChange={this.handleDepartureDateChange}
              />
            </FormControl>
          </Grid>
        </MuiPickersUtilsProvider>
        <Grid item xs={12} container spacing={8} className={classes.actionBar}>
          <Button
            variant="contained"
            color="secondary"
            onClick={this.handleSearch}
            className={classes.action}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(SearchPanel);
