import { Grid, withStyles, Typography, Radio, Button } from "@material-ui/core";
import React, { Component } from "react";
import InsuranceItem from "./InsuranceItem";

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

class Insurance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: props.products,
      selected: null
    };
  }
  shouldComponentUpdate = nextProps => {
    return nextProps.products !== this.state.products;
  };

  handleNext = event => {
    this.props.onSelect(this.state.selected);
  };
  render() {
    let items = this.props.insuranceList.map(i => {
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
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h6">Insurance Selection</Typography>
          {items}
        </Grid>

        <Grid item xs={12} container spacing={8} justify="flex-end">
          <Grid item xs={2}>
            <Button
              variant="contained"
              color="secondary"
              onClick={this.handleNext}
            >
              Next
            </Button>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Insurance);
