import React, { useEffect, useState } from "react";
import logo from "../Assets/logo.png";
// import '../componentcss/Login.css';
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import MuiAlert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import { Fade, StepContent } from "@material-ui/core";
import BG from "../Assets/bgpatern.jpg";
import { useParams } from "react-router";
import { axiosinfo } from "../Authaxios";
import { useLocation } from "react-router-dom";
function Copyright() {
  return (
    <Typography
      variant="body3"
      color="textprimary"
      align="center"
      style={{ color: "white" }}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Informatsy
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    color: "white",
  },
  parent: {
    position: "absolute",
    background: `url(${BG})`,
    backgroundRepeat: "none",
    backgroundSize: "cover",
    height: "100.5vh",
    width: "100%",
    marginTop: "-5px",
  },
  child: {
    marginTop: "10rem",
  },
  paper: {
    borderRadius: "5px",
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.9)",
    padding: "20px",
  },
  avatar: {
    margin: theme.spacing(2),
    backgroundColor: "white",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  alert: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
function ResetPassword() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [statement, setStatement] = useState("");
  const [condition, setCondition] = useState("");
  const [password, setPass] = useState("");
  const [confirmPass, setConfirm] = useState("");
  const [isAuth, setAuth] = useState(true);
  // const [token, setToken] = useState("");
  //   let { token } = useParams();
  const search = useLocation().search;
  const token = new URLSearchParams(search).get("token");
  useEffect(() => {
    axiosinfo
      .post("accounts/passwordValidator/", { token })
      .then((res) => {
        if (res.status === 200) {
          setAuth(true);
        }
      })
      .catch((err) => {
        setAuth(false);
      });
  }, []);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  //-------submitting data----------
  function submit(e) {
    e.preventDefault();
    setOpen(false);
    setCondition("");
    setStatement("");
    if (password !== "" && confirmPass !== "" && password === confirmPass) {
      if (
        password.match(/[a-z]/g) &&
        password.match(/[A-Z]/g) &&
        password.match(/[0-9]/g) &&
        password.match(/[^a-zA-Z\d]/g) &&
        !password.match(/\s/g) &&
        password.length >= 6
      ) {
        axiosinfo
          .post("accounts/password/change/", {
            token: token,
            password: password,
            confirmPassword: confirmPass,
          })
          .then((res) => {
            if (res.status === 200) {
              setCondition("success");
              setOpen(true);
              setStatement("successfully changed password");
              setTimeout(() => {
                window.location.href = "/login";
              }, 1000);
            } else {
              setOpen(true);
              setCondition("error");
              setStatement("something went wrong");
            }
          })
          .catch((err) => {
            setOpen(true);
            setCondition("error");
            setStatement(err.response.data);
          });
      } else {
        setOpen(true);
        setCondition("warning");
        setStatement(
          "password should min six length and one Uppercase,lowercase,special character and number"
        );
      }
    } else {
      setCondition("info");
      setStatement("Enter both fields to proceed and Both are same");
      setOpen(true);
    }
  }
  if (isAuth) {
    return (
      <body className={classes.parent}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Snackbar
              open={open}
              autoHideDuration={6000}
              onClose={handleClose}
              key={Fade}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <Alert onClose={handleClose} id="alertgreen" severity={condition}>
                {statement}
              </Alert>
            </Snackbar>
            <Avatar
              className={classes.avatar}
              size="large"
              src={logo}
              alt="informatsy"
            ></Avatar>
            <Typography component="h1" variant="h5">
              Change password
            </Typography>
            <form className={classes.form} noValidate>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="password"
                type="password"
                label="New password"
                name="password"
                onChange={(e) => setPass(e.target.value)}
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Confirm password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(e) => setConfirm(e.target.value)}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.submit}
                onClick={submit}
              >
                Confirm new password
              </Button>
            </form>
          </div>
          <Box mt={8} ml={8.5}>
            <Copyright />
          </Box>
        </Container>
      </body>
    );
  } else {
    return (
      <div className={classes.alert}>
        <Alert id="alertgreen" severity="warning">
          your requested url or link is expired try with new request here{" "}
          <a href="/accounts/forgot">New forgot password request</a>
        </Alert>
      </div>
    );
  }
}

export default ResetPassword;
