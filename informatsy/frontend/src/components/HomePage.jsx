import { Box, Button, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { useHistory } from "react-router";
import header from "../Assets/header.png";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import About from "./layoutsComponent/About";
import Features from "./layoutsComponent/Features";
import Contact from "./layoutsComponent/Contact";

const useStyles = makeStyles((theme) => ({
  imageStyle: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "95%",
    },
  },
  gridContainer: {
    flexDirection: "row-reverse",
    [theme.breakpoints.down("xs")]: {
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
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
    },
  },
}));

export default function HomePage() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <React.Fragment>
      <Box pb={{ xs: 4, sm: 5 }}>
        <Grid
          container
          justify="center"
          alignItems="center"
          spacing={window.innerWidth < 600 ? 3 : 10}
          className={classes.gridContainer}
        >
          <Grid item sm={6}>
            <img
              src={header}
              alt={"HomePageImage"}
              className={classes.imageStyle}
            />
          </Grid>
          <Grid item sm={6}>
            <Box>
              <Grid container>
                <Grid item sm={12}>
                  <Typography
                    variant="h2"
                    component="h5"
                    color="primary"
                    className={classes.welcome}
                  >
                    Welcome!
                  </Typography>
                </Grid>
                <Grid item sm={12}>
                  <Grid container spacing={3}>
                    <Grid item sm={12}>
                      <Typography
                        className={classes.infoIntro}
                        variant="h6"
                        component="h6"
                        color="textSecondary"
                      >
                        <q>
                          Informatsy gathers all the information regarding
                          classroom activities which helps students to keep
                          track of their academic activities.
                        </q>
                      </Typography>
                    </Grid>
                    <Grid item sm={8}>
                      <Grid container justify="space-between" spacing={1}>
                        <Grid item>
                          <Button
                            onClick={() => {
                              window.location.assign("https://youtu.be/wZE9HuQzH_E");
                            }}
                            variant="contained"
                            color="secondary"
                            startIcon={
                              <PlayArrowIcon style={{ color: "white" }} />
                            }
                          >
                            <Typography variant="h6" style={{ color: "white" }}>
                              Watch
                            </Typography>
                          </Button>
                        </Grid>
                        <Grid item>
                          <Button
                            variant="text"
                            onClick={() => {
                              history.push("/");
                              alert("This Feature will be released Soon!");
                            }}
                            color="primary"
                          >
                            <Typography variant="h6">
                              Go to Classroom
                            </Typography>
                          </Button>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* About Section */}
      <About />

      {/* Features Section */}
      <Features />

      {/* Contact Section */}
      <Contact />
    </React.Fragment>
  );
}
