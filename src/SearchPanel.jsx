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
const airports = [
  { code: "SIN", name: "Singapore Changi Airport" },
  { code: "NRT", name: "Tokyo Narita" },
  { code: "CTS", name: "Sapporo" },
  { code: "BOM", name: "Bombay, India (CST)" }
];

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.search;
  }

  handleFromChange = departurePort => {
    this.setState({ departurePort });
  };
  handleDepartureDateChange = departureDate => {
    this.setState({ departureDate });
  };
  handleReturnDateChange = returnDate => {
    this.setState({ returnDate });
  };
  handleToChange = to => {
    this.setState({ to });
  };
  handleSearch = event => {
    this.props.onSearch(this.state);
  };
  handleClear = event => {};
  render() {
    const state = this.state;
    const { classes } = this.props;

    const airportMenuItems = airports.map(airport => {
      return (
        <MenuItem key={airport.code} value={airport.code}>
          {airport.name} ({airport.code})
        </MenuItem>
      );
    });
    return (
      <form noValidate>
        <Grid container justify="center" alignItems="center" spacing={8}>
          <Grid item xs={12}>
            <Typography variant="h6">Flight Search</Typography>
          </Grid>

          <Grid item xs={6} sm={6}>
            <FormControl className={classes.formControl} fullWidth={true}>
              <InputLabel>From</InputLabel>
              <Select
                label="From"
                variant="filled"
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

          <Grid item xs={6} sm={6}>
            <FormControl className={classes.formControl} fullWidth={true}>
              <InputLabel>To</InputLabel>
              <Select
                value={state.to}
                onChange={this.handleToChange}
                label="To"
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
            <Grid item xs={6} sm={6}>
              <FormControl className={classes.formControl} fullWidth={true}>
                <DatePicker
                  value={state.departureDate}
                  label="Departure Date"
                  onChange={this.handleDepartureDateChange}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6} sm={6}>
              <FormControl className={classes.formControl} fullWidth={true}>
                <DatePicker
                  value={state.returnDate}
                  label="Return Date"
                  onChange={this.handleReturnDateChange}
                />
              </FormControl>
            </Grid>
          </MuiPickersUtilsProvider>
        </Grid>
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
      </form>
    );
  }
}

export default withStyles(styles)(SearchPanel);
