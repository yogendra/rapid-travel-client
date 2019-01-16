import React, { Component } from "react";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import NavBar from "./NavBar";
import SearchPanel from "./SearchPanel";
import { MuiPickersUtilsProvider } from "material-ui-pickers";
import DateFnsUtils from "@date-io/date-fns";
import "typeface-roboto";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles, Paper, Grid, createMuiTheme } from "@material-ui/core";
import CustomerDetail from "./CustomerDetail";
import Insurance from "./Insurance";
import Review from "./Review";
import FlightResult from "./FlightResult";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#84e8d4",
      main: "#50b5a3",
      dark: "#0f8574",
      contrastText: "#000000"
    },
    secondary: {
      light: "#4d5faf",
      main: "#11367f",
      dark: "#001252",
      contrastText: "#ffffff"
    }
  },
  overrides: {
    typography: {
      useNextVariants: true
    }
  }
});

const styles = theme => ({
  appBar: {
    position: "relative"
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },

  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3
    }
  },
  stepper: {
    padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end"
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit
  }
});

const flights = [
  {
    source: "SIN",
    destination: "NRT",
    departureTime: "09:30",
    arrivalTime: "17:05",
    arrivalDay: "0",
    flight: "AA12"
  },
  {
    source: "SIN",
    destination: "NRT",
    departureTime: "23:55",
    arrivalTime: "07:30",
    arrivalDay: "1",
    flight: "AA12"
  }
];
class AzapAir extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: {},
      flights: flights,
      flight: null,
      customer: {},
      insurance: {}
    };
    this.onSearch = this.onSearch.bind(this);
    this.onClearSearch = this.onClearSearch.bind(this);
    this.onSelectFlight = this.onSelectFlight.bind(this);
    this.onCustomerUpdate = this.onCustomerUpdate.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
  }
  onSearch = event => {};
  onClearSearch = event => {};
  onSelectFlight = flight => {
    console.log(flight);
  };
  onCustomerUpdate = event => {};
  onConfirm = event => {};
  render = () => {
    const { classes } = this.props;
    let state = this.state;

    return (
      <MuiThemeProvider theme={theme}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <CssBaseline />
          <NavBar />
          <Grid container spacing={8} justify="center" alignItems="center">
            <Grid item xs={12} sm={8}>
              <Paper className={classes.paper}>
                <SearchPanel
                  onSearch={this.onSearch}
                  onClear={this.onClearSearch}
                />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={8}>
              <FlightResult flights={state.flights} />
            </Grid>
            <Grid item xs={12} sm={8}>
              <CustomerDetail />
            </Grid>
            <Grid item xs={12} sm={8}>
              <Insurance />
            </Grid>
            <Grid item xs={12} sm={8}>
              <Review />
            </Grid>
          </Grid>
        </MuiPickersUtilsProvider>
      </MuiThemeProvider>
    );
  };
}

export default withStyles(styles)(AzapAir);
