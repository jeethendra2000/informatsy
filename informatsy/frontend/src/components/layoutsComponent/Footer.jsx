import {
  Box,
  Container,
  Grid,
  Link,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import logo from "../../Assets/logo_white.png";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "white",
  },
  logo: {
    display: "flex",
    alignItems: "center",
  },
  logoIcon: {
    width: "100%",
    height: "auto",
    maxWidth: "60px",
  },
  logoTitle: {
    fontSize: "45px",
    paddingTop: "10px",
  },
  textLink: {
    color: "#F8F8F8",
    textTransform: "capitalize",
    "&:hover": {
      textDecoration: "inherit",
      color: "#DCDCDC",
    },
  },
}));
const currentYear = new Date().getFullYear();

export default function Footer() {
  const classes = useStyles();

  return (
    <footer>
      <Box
        bgcolor="primary.main"
        color="common.white"
        pt={{ xs: 5, sm: 6, md: 10 }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6}>
            <Grid item xs={12} sm={12} md={4}>
              <Grid container spacing={5}>
                <Grid item xs={12}>
                  <Box className={classes.logo}>
                    <img src={logo} alt="I" className={classes.logoIcon} />
                    <Typography variant="h4" className={classes.logoTitle}>
                      Informatsy
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    className={classes.logo}
                    style={{ color: "#F8F8F8" }}
                  >
                    <q>
                      Knowledge is of no value unless you put it into practice
                    </q>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm={12} md={8}>
              <Box>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={4} md={4}>
                    <Box pb={2}>
                      <Typography variant="h5">Useful Links</Typography>
                    </Box>
                    <Box pb={1}>
                      <Typography
                        variant="body2"
                        component={Link}
                        href="https://informatsy.in"
                        className={classes.textLink}
                      >
                        Home
                      </Typography>
                    </Box>
                    <Box pb={1}>
                      <Typography
                        variant="body2"
                        component={Link}
                        href="https://informatsy.in/notifications"
                        className={classes.textLink}
                      >
                        Notifications
                      </Typography>
                    </Box>
                    <Box pb={1}>
                      <Typography
                        variant="body2"
                        component={Link}
                        href="https://informatsy.in/classroom"
                        className={classes.textLink}
                      >
                        Classroom
                      </Typography>
                    </Box>
                    <Box pb={1}>
                      <Typography
                        variant="body2"
                        component={Link}
                        href="https://informatsy.in/resources"
                        className={classes.textLink}
                      >
                        Resources
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={4} md={4}>
                    <Box pb={2}>
                      <Typography variant="h5">Information</Typography>
                    </Box>
                    <Box pb={1}>
                      <Typography
                        variant="body2"
                        component={Link}
                        href="https://informatsy.in/about"
                        className={classes.textLink}
                      >
                        About
                      </Typography>
                    </Box>
                    <Box pb={1}>
                      <Typography
                        variant="body2"
                        component={Link}
                        href="https://informatsy.in/features"
                        className={classes.textLink}
                      >
                        Features
                      </Typography>
                    </Box>
                    <Box pb={1}>
                      <Typography
                        variant="body2"
                        component={Link}
                        href="https://informatsy.in/contact"
                        className={classes.textLink}
                      >
                        Contact Us
                      </Typography>
                    </Box>
                    <Box pb={1}>
                      <Typography
                        variant="body2"
                        component={Link}
                        href="/"
                        className={classes.textLink}
                      >
                        Terms of Services
                      </Typography>
                    </Box>
                    <Box pb={1}>
                      <Typography
                        variant="body2"
                        component={Link}
                        href="/"
                        className={classes.textLink}
                      >
                        Privacy Policy
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={4} md={4}>
                    <Box pb={2}>
                      <Typography variant="h5">Follow Us</Typography>
                    </Box>
                    <Box pb={1}>
                      <Typography
                        variant="body2"
                        component={Link}
                        href="https://instagram.com/informatsy_info"
                        className={classes.textLink}
                      >
                        Instagram
                      </Typography>
                    </Box>{" "}
                    <Box pb={1}>
                      <Typography
                        variant="body2"
                        component={Link}
                        href="https://www.youtube.com/channel/UCMQpqiYQpquSysM2saFcwWg"
                        className={classes.textLink}
                      >
                        Youtube
                      </Typography>
                    </Box>{" "}
                    <Box pb={1}>
                      <Typography
                        variant="body2"
                        component={Link}
                        href="https://medium.com/@informatsy"
                        className={classes.textLink}
                      >
                        Medium
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Box textAlign="center" pt={{ xs: 2, sm: 2, md: 5 }} pb={3}>
          <Box pb={2}>
            <hr />
          </Box>
          <Typography variant="body2">
            Informatsy &reg; {currentYear}.
          </Typography>
        </Box>
      </Box>
    </footer>
  );
}
