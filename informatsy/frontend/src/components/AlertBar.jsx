import { useSnackbar } from "notistack";
import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import Fade from "@material-ui/core/Fade";
import Grow from "@material-ui/core/Grow";

function GrowTransition(props) {
  return <Grow {...props} />;
}
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(5),
    },
  },
}));

export default function AlertBar({ content }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState({
    open: false,
    Transition: Fade,
  });
  const handleClick = () => {
    setOpen(true);
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  React.useEffect(() => {
    if (content.alert) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [content.alert]);

  return (
    <Snackbar
      className={classes.root}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      TransitionComponent={state.Transition}
      key={state.Transition.name}
      style={{ height: content.height }}
    >
      <Alert onClose={handleClose} severity={content.msgStatus}>
        {content.msgContent}
      </Alert>
    </Snackbar>
  );
}
