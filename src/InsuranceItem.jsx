import React from "react";
import { Grid, withStyles, Typography } from "@material-ui/core";

const styles = theme => ({
  header: {}
});

const InsuranceItem = props => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <img src="http://via.placeholder.com/240" />
        <Typography variant="h3">{props.insurance.name}</Typography>
        <Typography variant="subheading">
          {props.insurance.description}
        </Typography>
        <Typography variant="subheading">IDR 115,000 only</Typography>
      </Grid>
      <Grid xs={4}>Coverage: {props.insurance.coverage.amount}</Grid>
      <Grid xs={4}>Premium: {props.insurance.premium.amount}</Grid>
    </Grid>
  );
};

export default withStyles(styles)(InsuranceItem);

/*
[
  {
    code: "WSKI001",
    type: "SPORT_SKI",
    name: "Weekly SKU Insurance",
    description: "Weekly insurance for skiing anywhere in the world",
    premiumType: "ONE_TIME",
    premium: { currency: "USD", amount: 50.0 },
    coverage: { currency: "USD", amount: 20000.0 },
    smallBanner: "banner-small.jpg",
    mediumBanner: "banner-medium.jpg",
    largeBanner: "banner-large.jpg",
    parameters: []
  },
  {
    code: "WSKI002",
    type: "SPORT_SKI",
    name: "Daily SKU Insurance",
    description: "Daily insurance for skiing anywhere in the world",
    premiumType: "ONE_TIME",
    premium: { currency: "USD", amount: 12.0 },
    coverage: { currency: "USD", amount: 2000.0 },
    smallBanner: "banner-small.jpg",
    mediumBanner: "banner-medium.jpg",
    largeBanner: "banner-large.jpg",
    parameters: []
  }
]
*/
