import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import about from "../../Assets/about_img.png";

const useStyles = makeStyles((theme) => ({
  imageStyle: {
    width: "100%",
    [theme.breakpoints.down("sm")]: {
      width: "95%",
    },
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <Box>
      <Grid container>
        <Grid item sm={6}>
          <Box p={{ md: 8}}>
            <img
              src={about}
              alt={"AboutImage"}
              className={classes.imageStyle}
            />
          </Box>
        </Grid>
        <Grid item sm={6}>
          <Box pt={{xs:1, md:15}}>
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
                    Tell your visitors a little something about your company or
                    services here. It's the perfect way to introduce yourself
                    online. Lorem ipsum dolor, sit amet consectetur adipisicing
                    elit. Ratione corporis enim esse, voluptatem quam
                    consectetur excepturi! Deserunt cum esse repudiandae,
                    dolores unde sapiente rem! Optio aperiam id fugiat
                    laboriosam nihil?
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
