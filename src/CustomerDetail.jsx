import {
  Grid,
  withStyles,
  Typography,
  Button,
  TextField
} from "@material-ui/core";
import React, { Component } from "react";
import MaskedInput from "react-text-mask";

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
class CustomerDetail extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.customer;
  }
  onFieldChange = event => {
    console.log(event.target);
    let fieldName = event.target.name;
    let fieldValue = event.target.value;
    let change = {};
    change[fieldName] = fieldValue;
    console.log(change);
    this.setState(change);
  };

  handleNext = () => {
    this.props.onSelect(this.state);
  };
  render() {
    const { classes } = this.props;
    const customer = this.state;

    return (
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Typography variant="h6">Customer Details</Typography>
        </Grid>
        <Grid item xs={12} container spacing={8}>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth={true}
              label="Name"
              name="name"
              value={customer.name}
              onChange={this.onFieldChange}
              autoComplete="name"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth={true}
              label="Email"
              name="email"
              type="email"
              value={customer.email}
              onChange={this.onFieldChange}
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth={true}
              label="Phone Number"
              name="phone"
              type="tel"
              value={customer.phone}
              onChange={this.onFieldChange}
              autoComplete="phone tel"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth={true}
              label="Credit Card Number"
              name="ccNumber"
              value={customer.ccNumber}
              onChange={this.onFieldChange}
              inputComponent={CreditCardInput}
              autoComplete="off"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth={true}
              label="Expity"
              name="ccExpiry"
              value={customer.ccExpiry}
              onChange={this.onFieldChange}
              autoComplete="off"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth={true}
              label="CVV"
              name="ccCvv"
              type="password"
              max={3}
              value={customer.ccCvv}
              onChange={this.onFieldChange}
              autoComplete="off"
            />
          </Grid>
        </Grid>
        <Grid item xs={12} container spacing={8} className={classes.actionBar}>
          <Button
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

function CreditCardInput(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={inputRef}
      mask={[
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        " ",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        " ",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
        " ",
        /\d/,
        /\d/,
        /\d/,
        /\d/
      ]}
      placeholderChar={"\u2000"}
      showMask
    />
  );
}

export default withStyles(styles)(CustomerDetail);
