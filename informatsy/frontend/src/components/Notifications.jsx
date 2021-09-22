import React from "react";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/styles";
import {
  AppBar,
  Toolbar,
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
} from "@material-ui/core";
import SecondAppBar from "./layoutsComponent/SecondAppBar";

const useStyles = makeStyles((theme) => ({
  bg: {
    backgroundColor: "#f0f8ff",
  },
  layout: {
    paddingTop: "90px",
  },
}));

function Notifications() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.bg} style={{ height: "200vh" }}>
      <SecondAppBar title={"Notifications"} backToPage={"/"} />
      <Box className={classes.layout}>
        <Container>
          
        </Container>
      </Box>
    </div>
  );
}

export default Notifications;
