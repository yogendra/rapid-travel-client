import {
  Grid,
  Paper,
  withStyles,
  Typography,
  Radio,
  Button
} from "@material-ui/core";
import React, { Component } from "react";
import InsuranceItem from "./InsuranceItem";

let styles = themes => ({});

class Insurance extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Paper>
        <Typography variant="h6">Insurance Selection</Typography>
        <Grid container spacing={8}>
          <Grid item xs={1}>
            <Radio />
          </Grid>

          <Grid item xs={11}>
            <InsuranceItem />
          </Grid>
        </Grid>
        <Grid container spacing={8}>
          <Grid item xs={1}>
            <Radio />
          </Grid>
          <Grid item xs={11}>
            <InsuranceItem />
          </Grid>
        </Grid>
        <Grid container spacing={8} justify="flex-end">
          <Grid item xs={2}>
            <Button variant="contained" color="secondary">
              Next
            </Button>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles)(Insurance);
