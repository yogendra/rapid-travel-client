import React, { Component } from "react";
import { Grid, Typography, withStyles, Paper } from "@material-ui/core";
let style = (theme) => {
    paper: {
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2,
        padding: theme.spacing.unit,
        [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
          marginTop: theme.spacing.unit * 3,
          marginBottom: theme.spacing.unit * 3,
          padding: theme.spacing.unit * 2
        }
      }
}
let AppPanel = props => {
    let {classes} = props;
  return (
      <Paper className={classes.paper}>
        <Grid container justify="center" alignItems="center" spacing={8}>
            <Grid item xs={12}>
                <Typography variant="h6">{props.title}</Typography>
            </Grid>
            <Grid item xs={12} container spacing={8}>
                {props.childern}
            </Grid>        
        </Grid>
      </Paper>
  );
};
export default withStyles(styles)(AppPanel);
