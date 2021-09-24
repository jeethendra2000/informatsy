import React, { useEffect } from "react";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
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
      .post("http://127.0.0.1:8000/api/activateAccount/", {
        token,
      })
      .then((res) => {
        setState(true);
        setmsg(res.data);
        sethead(res.data);
      })
      .catch((err) => {
        setmsg(err.response.data);
        setState(true);
        sethead(err.response.data);
        setTimeout(() => {
          history.push("/register");
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
