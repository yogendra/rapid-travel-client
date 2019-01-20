import React from "react";
import {
  withStyles,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button
} from "@material-ui/core";

const styles = theme => ({
  header: {},
  card: {
    maxWidth: "92%"
  },
  media: {
    height: 200
  }
});

const InsuranceItem = props => {
  const i = props.insurance;
  const classes = props.classes;

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={i.largeBanner}
          title={i.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {i.name}
          </Typography>
          <Typography component="p">{i.description}</Typography>
          <Typography variant="h6">
            Coverage: {i.coverage.currency}
            &nbsp;
            {i.coverage.amount}
          </Typography>
          <Typography variant="h6">
            Premium: {i.premium.currency}
            &nbsp;
            {i.premium.amount}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
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
