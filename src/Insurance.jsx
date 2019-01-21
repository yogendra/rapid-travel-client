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

  handleNext = event => {
    this.props.onSelect(this.state.selected);
  };
  render() {
    const { classes } = this.props;
    let items = this.props.insuranceList.map(i => {
      return (
        <Grid container spacing={8} key={i.code}>
          <Grid item xs={1}>
            <Radio
              name="insurances"
              onClick={() => this.setState({ selected: i })}
            />
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

        <Grid
          item
          xs={12}
          container
          spacing={8}
          justify="flex-end"
          className={classes.actionBar}
        >
          <Button
            variant="contained"
            color="secondary"
            className={classes.action}
            onClick={this.handleNext}
          >
            Next
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(Insurance);
