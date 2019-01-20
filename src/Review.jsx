import { Grid, Paper, withStyles, Typography, Button } from "@material-ui/core";
import React, { Component } from "react";

let styles = themes => ({});

class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Grid container spacing={8}>
        <Grid item xs={12}>
          <Paper>
            <Grid container>
              <Grid item xs={12}>
                <Typography variant="h6">Review and Confirm</Typography>
              </Grid>
            </Grid>
            <Grid container spacing={8} justify="flex-end">
              <Grid item xs={2}>
                <Button variant="contained" color="secondary">
                  Book
                </Button>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Review);