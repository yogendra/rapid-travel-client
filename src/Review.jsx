import { Grid, withStyles, Typography, Button } from "@material-ui/core";
import React from "react";

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

const Review = props => {
  const { classes } = props;

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h6">Review and Confirm</Typography>
      </Grid>
      <Grid item xs={12}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
        explicabo, assumenda quam esse in officiis rem optio provident dolore
        eius? Voluptates fuga soluta ad enim ullam accusantium similique. Vitae,
        consequatur!
      </Grid>
      <Grid container item xs={12} className={classes.actionBar}>
        <Button
          className={classes.action}
          variant="contained"
          color="secondary"
          onClick={props.onConfirm}
        >
          Book
        </Button>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Review);
