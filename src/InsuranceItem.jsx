import React, { Component } from "react";
import {
  withStyles,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  TextField,
  Grid
} from "@material-ui/core";
import AmountUI from "./AmountUI";

const styles = theme => ({
  header: {},
  card: {
    maxWidth: "100%"
  },
  cardContent: {
    maxWidth: "95%"
  },
  media: {
    height: 200
  }
});
class InsuranceItem extends Component {
  constructor(props) {
    super(props);
    let premiumAmount =
      this.props.insurance.parameters &&
      this.props.insurance.parameters.length > 0
        ? {}
        : { ...this.props.insurance.premium };

    this.state = {
      parameters: {},
      insurance: this.props.insurance,
      premiumAmount: premiumAmount
    };
  }
  onParameterChange = change => {
    let premiumAmount = { ...this.state.insurance.premium };
    premiumAmount.number *= change.value;
    this.setState({ premiumAmount: premiumAmount });
    this.props.onPremiumUpdate(premiumAmount);
  };

  render() {
    const i = this.props.insurance;
    const classes = this.props.classes;

    let parameters = i.parameters.map(param => {
      return (
        <TextField
          key={i.code + "-" + param.name}
          name={param.name}
          label={param.name}
          title={param.name}
          InputLabelProps={{ variant: "filled", required: true }}
          onChange={event => {
            this.onParameterChange({
              name: param.name,
              value: event.target.value
            });
          }}
        />
      );
    });

    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={i.largeBanner}
            title={i.name}
          />
          <CardContent className={classes.cardContent}>
            <Grid container space={8}>
              <Grid item xs={12}>
                <Typography variant="h5" component="h2">
                  {i.name}
                </Typography>
                <Typography component="p">{i.description}</Typography>
              </Grid>
              <Grid item xs={6}>
                <AmountUI label="Premium" amount={i.premium} />
                <AmountUI label="Coverage" amount={i.coverage} />
              </Grid>
              <Grid item xs={6}>
                {parameters}
              </Grid>
            </Grid>
            <Grid item xs={12} container justify="flex-end">
              <Grid item xs={4} sm={2} justify={"flex-end"}>
                <AmountUI label="Total" amount={this.state.premiumAmount} />
              </Grid>
            </Grid>
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
  }
}

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
