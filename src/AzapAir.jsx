import React, { Component } from "react";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import NavBar from "./NavBar";
import SearchPanel from "./SearchPanel";
import { startOfDay, addDays, addHours, format } from "date-fns";
import "typeface-roboto";
import CssBaseline from "@material-ui/core/CssBaseline";
import {
  withStyles,
  Paper,
  Grid,
  createMuiTheme,
  Typography,
  Button
} from "@material-ui/core";
import CustomerDetail from "./CustomerDetail";
import Insurance from "./Insurance";
import Review from "./Review";
import FlightResult from "./FlightResult";
import System from "./System";

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
      useNextVariants: true,
      suppressDeprecationWarnings: true
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
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    padding: theme.spacing.unit,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 3,
      marginBottom: theme.spacing.unit * 3,
      padding: theme.spacing.unit * 2
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

class AzapAir extends Component {
  state = {
    flightList: [],
    flight: null,
    customer: {
      name: "",
      email: "",
      phone: "",
      ccNumber: "",
      ccExpiry: "",
      ccCvv: ""
    },
    insurance: [],
    insuranceList: [],
    search: {
      from: "SIN",
      to: "CTS",
      departureDate: startOfDay(addDays(new Date(), 1)),
      returnDate: startOfDay(addDays(new Date(), 2))
    },
    currentStep: 1
  };

  onSearch = search => {
    let flightList = [1, 2, 3].map(x => {
      let depart = addHours(startOfDay(search.departureDate), x * 2 + 8);
      let arrival = addHours(startOfDay(search.departureDate), x * 2 + 12);

      return {
        source: search.from,
        destination: search.to,
        departureDate: format(depart, "dd-MMM-yyyy"),
        departureTime: format(depart, "HH:mm"),
        arrivalDate: format(arrival, "dd-MMM-yyyy"),
        arrivalTime: format(arrival, "HH:mm"),
        flight: "AA1" + x,
        price: {
          currency: "USD",
          amount: 150 + x * (Math.random() * 10 + 1)
        }
      };
    });

    this.setState({ search, flightList });
    this.next();
  };

  onSelectFlight = flight => {
    this.setState({ flight });
    this.next();
  };
  onCustomerUpdate = customer => {
    console.log(customer);
    this.setState({ customer: customer });
    System.rapidApi.getSkiInsurance().then(insuranceList => {
      this.setState({ insuranceList });
      this.next();
    });
  };

  onInsuranceSelect = insurance => {
    this.setState({ insurance });
    this.next();
  };
  onConfirm = event => {
    this.setState({ confirme: true });
    this.next();
  };
  next = () => {
    this.setState(prevState => {
      return { currentStep: prevState.currentStep + 1 };
    });
  };
  goToStart = () => {
    this.setState({ currentStep: 1 });
  };

  render = () => {
    const { classes } = this.props;
    const state = this.state;
    const {
      customer,
      insurance,
      insuranceList,
      search,
      flight,
      flightList,
      currentStep
    } = state;
    let panel = <SearchPanel search={search} onSearch={this.onSearch} />;
    switch (currentStep) {
      case 2:
        panel = (
          <FlightResult
            flights={flightList}
            flight={flight}
            onSelect={this.onSelectFlight}
          />
        );
        break;
      case 3:
        panel = (
          <CustomerDetail
            customer={customer}
            onSelect={this.onCustomerUpdate}
          />
        );
        break;
      case 4:
        panel = (
          <Insurance
            insurance={insurance}
            insuranceList={insuranceList}
            onSelect={this.onInsuranceSelect}
          />
        );
        break;
      case 5:
        panel = (
          <Review
            flight={flight}
            customer={customer}
            insurance={insurance}
            booking={this.state}
            onConfirm={this.onConfirm}
          />
        );
        break;
      case 6:
        panel = (
          <React.Fragment>
            <Typography variant="h3" justify="center">
              Thank you for booking with us
            </Typography>
            <Typography>
              Your booking details and other addons will be sent you your email
              address
            </Typography>
            <Button onClick={this.goToStart}>Book More</Button>
          </React.Fragment>
        );
        break;
      default:
        break;
    }
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar onClick={this.goToStart} />
        <Grid container spacing={8} justify="center" alignItems="center">
          <Grid item xs={12} sm={8}>
            <Paper className={classes.paper}>{panel}</Paper>
          </Grid>
        </Grid>
      </MuiThemeProvider>
    );
  };
}

export default withStyles(styles)(AzapAir);
