import React from "react";
import { Typography } from "@material-ui/core";

const AmountUI = props => {
  return (
    <Typography variant={props.variant || "subheading"}>
      <span style={{ marginRight: 2 }}>{props.label}</span>
      <span>{props.label ? ":" : ""}</span>
      <span style={{ marginRight: 2 }}>{props.amount.currency}</span>
      <span>{props.amount.number}</span>
    </Typography>
  );
};
export default AmountUI;
