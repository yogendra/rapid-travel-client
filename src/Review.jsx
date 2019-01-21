import { Grid, withStyles, Typography, Button } from "@material-ui/core";
import React from "react";

let styles = themes => ({
  actionBar: {
    marginTop: 8,
    display: "flex",
    justifyContent: "flex-end"
  },
  action: {
    display: "inline-block"
  }
});

const ReviewLine = props => {
  return (
    <React.Fragment>
      <Grid item xs={12} sm={6}>
        <Typography variant="caption">{props.label}</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="h6">{props.value}</Typography>
      </Grid>
    </React.Fragment>
  );
};
const Review = props => {
  const { classes, customer, flight, insurance } = props;
  let total = "USD " + (flight.price.amount + insurance.premium.amount);
  return (
    <Grid container spacing={8} justify="center">
      <Grid item xs={12}>
        <Typography variant="h6">Review and Confirm</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subheading">
          Please check the following information before proceeding.
        </Typography>
      </Grid>
      <Grid container item xs={12} spacing={8} justify="center">
        <ReviewLine label="Name" value={customer.name} />
        <ReviewLine label="Email" value={customer.email} />
        <ReviewLine label="Phone" value={customer.phone} />
        <ReviewLine label="Credit Card Number" value={customer.ccNumber} />
        <ReviewLine label="Expiry Date" value={customer.ccExpiry} />
        <ReviewLine label="Cvv" value="XXX" />
        <ReviewLine label="Flight #" value={flight.flight} />
        <ReviewLine label="Departing From" value={flight.source} />
        <ReviewLine
          label="Departing At"
          value={flight.departureDate + " " + flight.departureTime}
        />
        <ReviewLine label="Arriving To" value={flight.destination} />
        <ReviewLine
          label="Arriving At"
          value={flight.arrivalDate + " " + flight.arrivalTime}
        />
        <ReviewLine
          label="Price"
          value={flight.price.currency + " " + flight.price.amount}
        />

        <ReviewLine label="Insurace" value={insurance.name} />
        <ReviewLine
          label="Insurance Price"
          value={insurance.premium.currency + " " + insurance.premium.amount}
        />
        <Grid
          item
          xs={12}
          container
          spacing={8}
          justify="center"
          alignItems="center"
        >
          <Grid item xs={6} md={2}>
            <Typography variant="h5">Total</Typography>
          </Grid>
          <Grid item xs={6} md={2}>
            <Typography variant="h5">{total}</Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid container item xs={12} className={classes.actionBar}>
        <Button
          className={classes.action}
          variant="contained"
          color="secondary"
          onClick={props.onConfirm}
        >
          Book
        </Button>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Review);
