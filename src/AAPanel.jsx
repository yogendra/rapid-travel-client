import React, { Component } from "react";
import { withStyles, Paper, Typography } from "@material-ui/core";

const styles = theme => ({});
const AAPanel = props => {
  return (
    <Paper>
      <Typography variant="h4">{props.title}</Typography>
      {props.children}
    </Paper>
  );
};

export default withStyles(styles)(AAPanel);
