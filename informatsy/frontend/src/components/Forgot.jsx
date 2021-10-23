import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
// import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./layoutsComponent/Navbar";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Button, Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Divider from "@material-ui/core/Divider";
import shadows from "@material-ui/core/styles/shadows";
import { Link } from "react-router-dom";
import { axiosinfo } from "../Authaxios";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "70vh",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  gridMain: {
    marginTop: "3em",
    border: "1px solid grey",
    maxWidth: "20rem",
    borderRadius: "20px",
  },
  textMain: {
    backgroundColor: "#fafcb1",
    padding: "1rem",
    fontSize: "1em",
    border: "1px solid grey",
    borderRadius: "20px",
    shadows: "2px 2px 2px solid black",
  },
}));
export default function Forgot() {
  const classes = useStyles();
  const [input, setInput] = React.useState("");
  const [inputstatus, setStatus] = React.useState(false);
  const changeSubmitStatus = (e) => {
    var reg =
      /^[A-Z,a-z,0-9,?./""-]+@(gmail|outlook|yahoo|icloud|gov|nic)+[.]+(com|org|net|gov|mil|biz|info|mobi|in|name|aero|jobs|museum|co)+$/;
    if (reg.test(e)) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  };
  const handleRequest = () => {
    if (inputstatus) {
      axiosinfo
        .post("accounts/forgotpass/", { data: `${input}` })
        .then((res) => console.log("Email sent to your account"))
        .catch((err) => console.log(err));
    } else {
      alert("Please enter valid email");
    }
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container maxWidth="sm" align="center">
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={3}
          className={classes.gridMain}
        >
          <Grid item m={5}>
            <Typography
              variant="h6"
              component="h6"
              color="primary"
              align="start"
            >
              Request Password reset
            </Typography>
          </Grid>
          <Divider />
          <Grid item m={1}>
            <Typography className={classes.textMain}>
              Forgotten your password? Enter your e-mail address below, and
              we'll send you an e-mail allowing you to reset it.
            </Typography>
          </Grid>
          <Grid item m={1}>
            <TextField
              type="email"
              id="outline"
              label="E-mail address"
              variant="outlined"
              size="medium"
              helperText="Enter Email associated with your account"
              onChange={(e) => {
                setInput(e.target.value);
                changeSubmitStatus(e.target.value);
              }}
            />
          </Grid>
          <Grid item m={1}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleRequest}
              disabled={!inputstatus}
            >
              Reset my Password
            </Button>
          </Grid>
          <Grid item m={6}>
            <Button color="secondary" component={Link} to="/">
              Go back to home page
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
