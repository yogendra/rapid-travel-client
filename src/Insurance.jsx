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
    this.state = {
      products: props.products
    };
  }
  shouldComponentUpdate(nextProps) {
    return nextProps.products !== this.state.products;
  }

  componentDidUpdate(props) {
    this.setState({ products: props.products });
  }
  render() {
    let items = this.state.products.map(i => {
      return (
        <Grid container spacing={8} key={i.code}>
          <Grid item xs={1}>
            <Radio name="insurances" />
          </Grid>

          <Grid item xs={11}>
            <InsuranceItem insurance={i} />
          </Grid>
        </Grid>
      );
    });

    return (
      <Paper>
        <Typography variant="h6">Insurance Selection</Typography>
        {items}
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
