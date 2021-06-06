import { Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import { useHistory } from "react-router";
import header from "../Assets/header.png";

const useStyles = makeStyles((theme) => ({
  imageStyle: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "95%",
    },
  },
  gridContainer: {
    flexDirection: "row-reverse",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "row",
    },
  },
  welcome: {
    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
      textAlign: "center",
      paddingBottom: "20px",
    },
    paddingBottom: "30px",
  },
  infoIntro: {
    paddingBottom: "60px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
      paddingBottom: "0px",
    },
  },
}));

export default function HomePage() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <React.Fragment>
      <Grid
        container
        justify="center"
        alignItems="center"
        spacing={10}
        className={classes.gridContainer}
      >
        <Grid item sm={6} >
          <img src={header} className={classes.imageStyle} />
        </Grid>
        <Grid item sm={6} style={{padding:"0px 40px"}}>
          <Typography
            variant="h2"
            component="h5"
            color="primary"
            className={classes.welcome}
          >
            Welcome!
          </Typography>

          <Grid container>
            <Grid item sm={12}>
              <Typography
                className={classes.infoIntro}
                variant="h6"
                component="h6"
                color="textSecondary"
              >
                <q>
                  Informatsy gathers all the information regarding classroom
                  activities which helps students to keep track of their
                  academic activities.
                </q>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <div style={{ height: "100vh" }}></div>
    </React.Fragment>
  );
}
