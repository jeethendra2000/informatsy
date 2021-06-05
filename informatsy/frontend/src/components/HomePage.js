import { Typography } from "@material-ui/core";
import React from "react";
import Input from "./Input";

export default function HomePage() {
  return (
    <div style={{ height: "200vh" }}>
      <React.Fragment>
        <Typography variant="h4" align="center" color="textPrimary">
          Home Page
        </Typography>
      </React.Fragment>
      <Input classname="ther" name="jeeth" type="password" />
    </div>
  );
}
