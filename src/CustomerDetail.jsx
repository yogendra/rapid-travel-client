import {
  Grid,
  withStyles,
  Typography,
  Button,
  TextField,
  FormControl
} from "@material-ui/core";
import React, { Component } from "react";

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
          <Grid item xs={6} md={3}>
            <FormControl fullWidth={true}>
              <TextField
                label="Name"
                name="name"
                value={customer.name}
                onChange={this.onFieldChange}
                autoComplete="name"
              />
            </FormControl>
          </Grid>
          <Grid item xs={6} md={3}>
            <FormControl fullWidth={true}>
              <TextField
                label="Email"
                name="email"
                value={customer.email}
                onChange={this.onFieldChange}
                autoComplete="email"
              />
            </FormControl>
          </Grid>
          <Grid item xs={6} md={3}>
            <FormControl fullWidth={true}>
              <TextField
                label="Phone Number"
                name="phone"
                value={customer.phone}
                onChange={this.onFieldChange}
                autoComplete="phone tel"
              />
            </FormControl>
          </Grid>
          <Grid item xs={6} md={3}>
            <FormControl fullWidth={true}>
              <TextField
                label="Credit Card Number"
                name="ccNumber"
                value={customer.ccNumber}
                onChange={this.onFieldChange}
                autoComplete="off"
              />
            </FormControl>
          </Grid>
          <Grid item xs={6} md={3}>
            <FormControl fullWidth={true}>
              <TextField
                label="Expity"
                name="ccExpiry"
                value={customer.ccExpiry}
                onChange={this.onFieldChange}
                autoComplete="off"
              />
            </FormControl>
          </Grid>
          <Grid item xs={6} md={3}>
            <FormControl fullWidth={true}>
              <TextField
                label="CVV"
                name="ccCvv"
                value={customer.ccCvv}
                onChange={this.onFieldChange}
                autoComplete="off"
              />
            </FormControl>
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

export default withStyles(styles)(CustomerDetail);
