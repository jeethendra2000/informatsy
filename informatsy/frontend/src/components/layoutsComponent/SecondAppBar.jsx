import React from "react";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/styles";
import {
  AppBar,
  Toolbar,
  Box,
  Grid,
  IconButton,
  Typography,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  nav: {
    backgroundColor: "white",
  },
  layout: {
    [theme.breakpoints.down("md")]: {
      paddingLeft: "0px",
    },
  },
  text: {
    color: "#485675",
    fontWeight: "bold",
  },
}));
function SecondAppBar({ title, backToPage }) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div>
      <AppBar position="fixed" className={classes.nav}>
        <Toolbar className={classes.layout}>
          <Grid container>
            <Grid item xs={12}>
              <Box display="flex" alignItems="center">
                <Box>
                  <IconButton onClick={() => history.push(backToPage)}>
                    <ArrowBackIcon className={classes.text} />
                  </IconButton>
                </Box>
                <Box flexGrow={1}>
                  <Typography
                    variant="h6"
                    className={classes.text}
                    color="primary"
                  >
                    {title}
                  </Typography>
                </Box>
                {/* <Box>
                  <MoreVertIcon
                    onClick={() => alert("hi")}
                    className={classes.text}
                  />
                </Box> */}
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default SecondAppBar;
