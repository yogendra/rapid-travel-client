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
    this.state = {};
  }
  onNameChange = event => {
    this.setState({ name: event.target.value });
  };
  onEmailChange = event => {
    this.setState({ email: event.target.value });
  };
  onPhoneChange = event => {
    this.setState({ phone: event.target.value });
  };
  handleNext = event => {
    this.props.onSelect(this.state);
  };
  render() {
    const { customer, classes } = this.props;
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
                value={customer.name}
                onChange={this.onNameChange}
                autoComplete="name"
              />
            </FormControl>
          </Grid>
          <Grid item xs={6} md={3}>
            <FormControl fullWidth={true}>
              <TextField
                label="Email"
                value={customer.email}
                onChange={this.onEmailChange}
                autoComplete="email"
              />
            </FormControl>
          </Grid>
          <Grid item xs={6} md={3}>
            <FormControl fullWidth={true}>
              <TextField
                label="Phone Number"
                value={customer.phone}
                onChange={this.onPhoneChange}
                autoComplete="phone tel"
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
