import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import about from "../../Assets/about_img.png";
import wave from "../../Assets/wave.png";

const useStyles = makeStyles((theme) => ({
  imageStyle: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "95%",
    },
    position: "relative",
  },
  wave: {
    position: "absolute",
    marginLeft: "-70px",
    paddingTop: "60px",
    [theme.breakpoints.down("md")]: {
      marginLeft: "-48px",
      paddingTop: "20px",
    },
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <Box id="about">
      <img src={wave} alt={"wave"} className={classes.wave} />
      <Grid container>
        <Grid item sm={6}>
          <Box p={{ md: 8 }}>
            <img
              src={about}
              alt={"AboutImage"}
              className={classes.imageStyle}
            />
          </Box>
        </Grid>
        <Grid item sm={6} style={{ position: "relative" }}>
          <Box pt={{ xs: 1, md: 15 }}>
            <Grid container>
              <Grid item xs={12}>
                <Box pb={{ xs: 2, md: 2 }}>
                  <Typography variant="h5" component="h6" color="secondary">
                    About us
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box pb={{ xs: 2, md: 3 }}>
                  <Typography variant="h4" component="h6" color="primary">
                    <q>One stop platform for students</q>
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={11}>
                <Box>
                  <Typography
                    variant="body1"
                    component="h6"
                    color="textSecondary"
                  >
                    Informatsy is a team of enthusiastic students who believe in learning, exploring and sharing the knowledge.
                    <br />
                    Our goal is to help the students in the process of learning by providing them the necessary resources and features which makes easier for them to track the academic activities and alerts from their college. 
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
