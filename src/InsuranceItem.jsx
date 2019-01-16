import React, { Component } from "react";
import { Grid, withStyles, Radio, Typography } from "@material-ui/core";
import Flight from "./Flight";
const styles = theme => ({
  header: {}
});

class InsuranceItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h3">Daily SKI Insurance</Typography>
          <Typography variant="subheading">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint
            accusantium, soluta atque optio pariatur reprehenderit repellendus,
            praesentium facilis beatae vel, aspernatur dolorem voluptas
            perspiciatis rem illum. Sit quaerat dolorum eos.
          </Typography>
          <Typography variant="subheading">IDR 115,000 only</Typography>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(InsuranceItem);
