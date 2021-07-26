import React from "react";
import { makeStyles } from "@material-ui/styles";
import {
  Box,
  Button,
  Link,
  Container,
  Grid,
  IconButton,
  Card,
  CardContent,
  Typography,
  Avatar,
  Divider,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  bg: {
    backgroundColor: "#f0f8ff",
  },
  card: {
    borderRadius: "0px 0px 25px 25px",
  },
  text: {
    color: "#485675",
    fontWeight: "bold",
  },
  avtar: {
    width: "100%",
    height: "auto",
    maxWidth: "80px",
  },
}));

export default function MyProfile() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div className={classes.bg} style={{ height: "100vh" }}>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={5} lg={4}>
          <Card className={classes.card} elevation={3}>
            <CardContent>
              <Box display="flex" alignItems="center">
                <Box>
                  <IconButton
                    onClick={() => history.push("/")}
                    aria-label="back-to-home"
                  >
                    <ArrowBackIcon className={classes.text} />
                  </IconButton>
                </Box>
                <Box flexGrow={1}>
                  <Typography
                    variant="h6"
                    className={classes.text}
                    color="primary"
                  >
                    My Profile
                  </Typography>
                </Box>
                <Box>
                  <MoreVertIcon
                    onClick={() => alert("hi")}
                    className={classes.text}
                  />
                </Box>
              </Box>

              <Box p={2} pt={4} pb={2}>
                <Grid container alignItems="center" spacing={1}>
                  <Grid item xs={4} sm={4} md={4} lg={4}>
                    <Avatar
                      alt="Name"
                      src="https://i.picsum.photos/id/53/200/200.jpg?hmac=NvXWlWpaKnDMb_phNyfwXppFuuNz0jK69wUnSFYQ6Ww"
                      className={classes.avtar}
                    />
                  </Grid>

                  <Grid item xs={4} sm={4} md={4} lg={4}>
                    <Container>
                      <Typography variant="body1" color="textPrimary">
                        10
                      </Typography>

                      <Typography variant="body1" color="textSecondary">
                        Followers
                      </Typography>
                    </Container>
                  </Grid>
                  <Grid item xs={4} sm={4} md={4} lg={4}>
                    <Typography variant="body1" color="textPrimary">
                      1212
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                      Following
                    </Typography>
                  </Grid>
                </Grid>
              </Box>

              <Box>
                <Container>
                  <Typography variant="body1" color="textPrimary">
                    Pranavbharadwaj
                  </Typography>
                  <Typography variant="body2" color="textPrimary">
                    pranavbharadwaj2001@gmail.com
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Lorem ipsum dolor sit amet conse adipis elit. Consequuntur,
                    Lorem ipsum dolor sit amet.
                    Lorem ipsum dolor sit amet.
                  </Typography>
                </Container>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* profile details */}
        <Grid item xs={12} sm={12} md={7} lg={8}>
          <Container>
            <Typography variant="h6" color="textPrimary">
              Personal Details
            </Typography>
            <Divider />
            <Box py={2}>
              <Grid container spacing={1} alignItems="center">
                <Grid item xs={4}>
                  <Typography>First Name </Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography>:</Typography>
                </Grid>
                <Grid item xs={7}>
                  <Typography>Pranav</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography>Last Name</Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography>:</Typography>
                </Grid>
                <Grid item xs={7}>
                  <Typography>Bharadwaj</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography>Date Of Birth</Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography>:</Typography>
                </Grid>
                <Grid item xs={7}>
                  <Typography>05/01/2001</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography>Gender</Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography>:</Typography>
                </Grid>
                <Grid item xs={7}>
                  <Typography>Male</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography>Phone</Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography>:</Typography>
                </Grid>
                <Grid item xs={7}>
                  <Typography>6363255811</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography>Address</Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography>:</Typography>
                </Grid>
                <Grid item xs={7}>
                  <Typography>Bm Road, Arsikere, Hassan- 573201</Typography>
                </Grid>
              </Grid>
            </Box>
            <Typography variant="h6" color="textPrimary">
              Educational Details
            </Typography>
            <Divider />
            <Box py={2}>
              <Grid container spacing={1} alignItems="center">
                <Grid item xs={4}>
                  <Typography>USN </Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography>:</Typography>
                </Grid>
                <Grid item xs={7}>
                  <Typography>4GH18CS012</Typography>
                </Grid>
                
                <Grid item xs={4}>
                  <Typography>Course Year / Sem</Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography>:</Typography>
                </Grid>
                <Grid item xs={7}>
                  <Typography>6th Sem</Typography>
                </Grid><Grid item xs={4}>
                  <Typography>Branch Name</Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography>:</Typography>
                </Grid>
                <Grid item xs={7}>
                  <Typography>Computer Science & Engineering</Typography>
                </Grid><Grid item xs={4}>
                  <Typography>Course Name</Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography>:</Typography>
                </Grid>
                <Grid item xs={7}>
                  <Typography>Bachelor of Engineering</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography>College</Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography>:</Typography>
                </Grid>
                <Grid item xs={7}>
                  <Typography>Government Engineering College</Typography>
                </Grid>
              </Grid>
            </Box>
            <Typography variant="h6" color="textPrimary">
              Social Profiles
            </Typography>
            <Divider />
            <Box py={2}>
              <Grid container spacing={1} alignItems="center">
                <Grid item xs={4}>
                  <Typography>Github Profile</Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography>:</Typography>
                </Grid>
                <Grid item xs={7}>
                  <Typography>
                    <Link href="https://www.google.com" target="_blank">
                      githubHandle
                    </Link>
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography>LinkedIn Profile</Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography>:</Typography>
                </Grid>
                <Grid item xs={7}>
                  <Typography>
                    <Link href="https://www.google.com" target="_blank">
                      LinkedInHandle
                    </Link>
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography>Facebook Profile</Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography>:</Typography>
                </Grid>
                <Grid item xs={7}>
                  <Typography>
                    <Link href="https://www.google.com" target="_blank">
                      facebookHandle
                    </Link>
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography>Instagram Profile</Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography>:</Typography>
                </Grid>
                <Grid item xs={7}>
                  <Typography>
                    <Link href="https://www.google.com" target="_blank">
                      instagramHandle
                    </Link>
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography>Twitter Profile</Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography>:</Typography>
                </Grid>
                <Grid item xs={7}>
                  <Typography>
                    <Link href="https://www.google.com" target="_blank">
                      twitterHandle
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            <Typography variant="h6" color="textPrimary">
              Educational Profiles
            </Typography>
            <Divider />
            <Box py={2}>
              <Grid container spacing={1} alignItems="center">
                <Grid item xs={4}>
                  <Typography>CodeForces Profile</Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography>:</Typography>
                </Grid>
                <Grid item xs={7}>
                  <Typography>
                    <Link href="https://www.google.com" target="_blank">
                      codeforcesHandle
                    </Link>
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography>Codechef Profile</Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography>:</Typography>
                </Grid>
                <Grid item xs={7}>
                  <Typography>
                    <Link href="https://www.google.com" target="_blank">
                      CodechefHandle
                    </Link>
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography>Leetcode Profile</Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography>:</Typography>
                </Grid>
                <Grid item xs={7}>
                  <Typography>
                    <Link href="https://www.google.com" target="_blank">
                      LeetcodeHandle
                    </Link>
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography>HackerRank Profile</Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography>:</Typography>
                </Grid>
                <Grid item xs={7}>
                  <Typography>
                    <Link href="https://www.google.com" target="_blank">
                      HackerRankHandle
                    </Link>
                  </Typography>
                </Grid>

                <Grid item xs={4}>
                  <Typography>HackerEarth Profile</Typography>
                </Grid>
                <Grid item xs={1}>
                  <Typography>:</Typography>
                </Grid>
                <Grid item xs={7}>
                  <Typography>
                    <Link href="https://www.google.com" target="_blank">
                      HackerEarthHandle
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}
