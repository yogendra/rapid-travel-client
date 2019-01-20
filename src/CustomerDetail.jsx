import {
  Grid,
  Paper,
  withStyles,
  Typography,
  Button,
  TextField,
  FormControl
} from "@material-ui/core";
import React, { Component } from "react";

let styles = themes => ({});
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
    this.setState({ phoneNumber: event.target.value });
  };
  render() {
    let props = this.props;
    return (
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Paper>
            <Grid container spacing={8}>
              <Grid item xs={12}>
                <Typography variant="h6">Customer Details</Typography>
              </Grid>
            </Grid>
            <Grid container spacing={8}>
              <Grid item xs={6} md={3}>
                <FormControl fullWidth={true}>
                  <TextField
                    label="Name"
                    value={props.value}
                    onChange={this.onNameChange}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6} md={3}>
                <FormControl fullWidth={true}>
                  <TextField
                    label="Email"
                    value={props.value}
                    onChange={this.onEmailChange}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6} md={3}>
                <FormControl fullWidth={true}>
                  <TextField
                    label="Phone Number"
                    value={props.value}
                    onChange={this.onPhoneChange}
                  />
                </FormControl>
              </Grid>
            </Grid>

            <Grid container spacing={8} justify="flex-end">
              <Grid item xs={2}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={this.props.onUpdate}
                >
                  Next
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(CustomerDetail);
