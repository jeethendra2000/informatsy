import React from "react";
import { makeStyles } from "@material-ui/styles";
import MenuItem from "@material-ui/core/MenuItem";
import MuiPhoneNumber from "material-ui-phone-number";
import {
  Box,
  Link,
  Container,
  Grid,
  IconButton,
  Card,
  CardContent,
  Typography,
  Avatar,
  Divider,
  Button,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useHistory } from "react-router";
import Check from "@material-ui/icons/Check";
import TextField from "@material-ui/core/TextField";

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
  txtField: {
    padding: "10px 0 5px",
  },
}));

export default function MyProfile() {
  const classes = useStyles();
  const history = useHistory();

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    alert("submitted")
  };

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
                    Edit Profile
                  </Typography>
                </Box>
                {/* <Box paddingRight="20px">
                  <Check
                    onClick={() => alert("Saved")}
                    className={classes.text}
                  />
                </Box> */}
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
                      <Box textAlign="center">
                        <Typography variant="body1" color="textPrimary">
                          10M
                        </Typography>

                        <Typography variant="body1" color="textSecondary">
                          Followers
                        </Typography>
                      </Box>
                    </Container>
                  </Grid>
                  <Grid item xs={4} sm={4} md={4} lg={4}>
                    <Box textAlign="center">
                      <Typography variant="body1" color="textPrimary">
                        121k
                      </Typography>
                      <Typography variant="body1" color="textSecondary">
                        Following
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>

              <Box>
                <Container>
                  <Typography variant="body1" color="textPrimary">
                    Pranavbharadwaj
                  </Typography>
                  <Typography variant="body2" color="textPrimary" gutterBottom>
                    pranavbharadwaj2001@gmail.com
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    gutterBottom
                  >
                    Lorem ipsum dolor sit amet conse adipis elit. Consequuntur,
                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
                  </Typography>
                </Container>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* profile details */}
        <Grid item xs={12} sm={12} md={7} lg={8}>
          <Container component="form" noValidate autoComplete="off" onSubmit={handleProfileSubmit}>
            <Typography variant="h6" color="textPrimary">
              Personal Details
            </Typography>
            <Divider />
            <Grid container spacing={1}>
              <Grid item xs={12}>
                <TextField
                  id="standard-basic"
                  className={classes.txtField}
                  label="First Name"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="standard-basic"
                  className={classes.txtField}
                  label="Last Name"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="date"
                  label="Date Of Birth"
                  type="date"
                  className={classes.txtField}
                  // defaultValue="2000-01-01"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="Gender-select"
                  select
                  label="Gender"
                  fullWidth
                  className={classes.txtField}
                  // value={currency}
                  // onChange={handleChange}
                  // helperText="Please Choose your Gender"
                >
                  <MenuItem key="Male" value="Male">
                    Male
                  </MenuItem>
                  <MenuItem key="Female" value="Female">
                    Female
                  </MenuItem>
                  <MenuItem key="Others" value="Others">
                    Others
                  </MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <MuiPhoneNumber
                  name="phone"
                  label="Phone Number"
                  data-cy="user-phone"
                  defaultCountry={"in"}
                  fullWidth
                  className={classes.txtField}
                  // value={this.state.phone}
                  // onChange={this.handlePhoneChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="Address"
                  label="Address"
                  className={classes.txtField}
                  fullWidth
                />
              </Grid>
            </Grid>

            <Typography
              variant="h6"
              style={{ paddingTop: "30px" }}
              color="textPrimary"
            >
              Educational Details
            </Typography>
            <Divider />
            <Box py={2}>
              <Grid container spacing={1} alignItems="center">
                <Grid item xs={12}>
                  <TextField
                    id="USN"
                    label="USN"
                    className={classes.txtField}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="Course Year / Sem"
                    label="Course Year / Sem"
                    className={classes.txtField}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="Branch Name"
                    label="Branch Name"
                    className={classes.txtField}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="Course Name"
                    label="Course Name"
                    className={classes.txtField}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="College"
                    label="College"
                    className={classes.txtField}
                    fullWidth
                  />
                </Grid>
              </Grid>
            </Box>
            <Typography
              variant="h6"
              style={{ paddingTop: "30px" }}
              color="textPrimary"
            >
              Social Profiles
            </Typography>
            <Divider />
            <Box py={2}>
              <Grid container spacing={1} alignItems="center">
                <Grid item xs={12}>
                  <TextField
                    id="Github Profile"
                    label="Github Profile"
                    className={classes.txtField}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="LinkedIn Profile"
                    label="LinkedIn Profile"
                    className={classes.txtField}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="Facebook Profile"
                    label="Facebook Profile"
                    className={classes.txtField}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="Instagram Profile"
                    label="Instagram Profile"
                    className={classes.txtField}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="Twitter Profile"
                    label="Twitter Profile"
                    className={classes.txtField}
                    fullWidth
                  />
                </Grid>
              </Grid>
            </Box>
            <Typography
              variant="h6"
              style={{ paddingTop: "30px" }}
              color="textPrimary"
            >
              Educational Profiles
            </Typography>
            <Divider />
            <Box py={2}>
              <Grid container spacing={1} alignItems="center">
                <Grid item xs={12}>
                  <TextField
                    id="Codeforces Profile"
                    label="Codeforces Profile"
                    className={classes.txtField}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="Codechef Profile"
                    label="Codechef Profile"
                    className={classes.txtField}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="Leetcode Profile"
                    label="Leetcode Profile"
                    className={classes.txtField}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="HackerRank Profile"
                    label="HackerRank Profile"
                    className={classes.txtField}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="HackerEarth Profile"
                    label="HackerEarth Profile"
                    className={classes.txtField}
                    fullWidth
                  />
                </Grid>
              </Grid>
            </Box>
            <Box textAlign="center">
              <Button
                variant="contained"
                type="submit"
                style={{ backgroundColor: "green", color: "white" }}
              >
                Save
              </Button>
            </Box>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}
