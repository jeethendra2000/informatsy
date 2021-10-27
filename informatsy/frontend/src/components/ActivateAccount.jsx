import React, { useEffect } from "react";

import { makeStyles, withStyles } from "@material-ui/core/styles";

import CircularProgress from "@material-ui/core/CircularProgress";
import Cookies from "js-cookie";
import axios from "axios";

import Snackbar from "@material-ui/core/Snackbar";
import { useHistory } from "react-router";

// Inspired by the former Facebook spinners.

const useStylesFacebook = makeStyles((theme) => ({
  root: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    textAlign: "center",
  },
  head: {
    color: "grey",
  },
  bottom: {
    color: theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
    position: "absolute",
  },
  top: {
    color: "#1a90ff",
    animationDuration: "550ms",
    position: "relative",
  },
  circle: {
    strokeLinecap: "round",
  },
}));

export default function ActivateAccount(props) {
  const [state, setState] = React.useState(false);
  const [msg, setmsg] = React.useState("");
  const history = useHistory();
  const [headline, sethead] = React.useState(
    "Activating your account please wait....!"
  );
  const handleClose = () => {
    setState(false);
  };
  const ActivateAccount = () => {
    const query = new URLSearchParams(window.location.search);
    const token = query.get("token");
    console.log(token);

    axios
      .post(
        `${process.env.React_App_SERVER_API}/api/activateAccount/`,
        {
          token: token,
        },

        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        Cookies.set("access_token", res.data.tokens["access_token"], {
          expires: 1 / 48,
        });
        Cookies.set("refresh_token", res.data.tokens["Refresh_token"], {
          expires: 15,
        });
        setState(true);
        setmsg(res.data["statusmsg"]);
        setTimeout(() => {
          history.push("/");
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
        setmsg(err.response.data);
        setState(true);
        sethead(err.response.data);
        setTimeout(() => {
          history.push("/login");
        }, 2000);
      });
  };
  useEffect(() => {
    ActivateAccount();
  }, []);
  const classes = useStylesFacebook();
  return (
    <div>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={state}
        onClose={handleClose}
        message={msg}
      />
      <div className={classes.root}>
        <CircularProgress
          variant="determinate"
          className={classes.bottom}
          size={40}
          thickness={4}
          {...props}
          value={100}
        />
        <CircularProgress
          variant="indeterminate"
          disableShrink
          className={classes.top}
          classes={{
            circle: classes.circle,
          }}
          size={40}
          thickness={4}
          {...props}
        />
        <h4 className={classes.head}>{headline}</h4>
      </div>
    </div>
  );
}
