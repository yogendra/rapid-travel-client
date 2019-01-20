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
import { DatePicker } from "material-ui-pickers";
import DateFnsUtils from "@date-io/date-fns";

const dateFn = new DateFnsUtils();
const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    // margin: theme.spacing.unit
  },

  selectEmpty: {
    marginTop: theme.spacing.unit * 2
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

    let today = dateFn.startOfDay(new Date());
    let tomorrow = dateFn.addDays(today, 1);
    this.state = {
      from: "SIN",
      departureDate: today,
      to: "CTS",
      returnDate: tomorrow
    };
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
    this.props.onSearch({
      from: this.state.from,
      to: this.state.to,
      departureDate: this.state.departureDate,
      returnDate: this.state.returnDate
    });
  };
  handleClear = event => {};
  render() {
    let state = this.state;
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
                value={this.state.from}
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
                value={this.state.to}
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
        </Grid>
        <Grid container spacing={8} justify="flex-end">
          <Grid item xs={3} lg={2}>
            <Button variant="text" color="secondary" onClick={this.handleClear}>
              Clear Search
            </Button>
          </Grid>

          <Grid item xs={3} lg={2}>
            <Button
              variant="contained"
              color="secondary"
              onClick={this.handleSearch}
            >
              Search
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={8} />
      </form>
    );
  }
}

export default withStyles(styles)(SearchPanel);
