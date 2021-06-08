import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import logo from "../Assets/logo.png";

import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import {
  Avatar,
  Container,
  Hidden,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { useHistory, useLocation } from "react-router";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    marginLeft: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      marginLeft: theme.spacing(12),
    },
  },

  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    [theme.breakpoints.up("md")]: {
      marginRight: theme.spacing(40),
      marginLeft: theme.spacing(1),
    },
  },
  navbar: {
    backgroundColor: "#fcfefe",
  },
  menuList: {
    display: "flex",
    color: "#6d78fe",
  },
  active: {
    backgroundColor: "#e4ebeb",
  },

  loginButton: {
    marginLeft: theme.spacing(2),
  },
  signUpButton: {
    border: "3px solid",
    borderRadius: "10%",
    marginLeft: theme.spacing(2),

    "&:hover": {
      border: "3px solid",
      backgroundColor: "#1876d2",
      color: "white",
    },
  },
  page: {
    background: "#f9f9f9",
    width: "100%",
    padding: theme.spacing(1),
  },
  toolbar: {
    paddingBottom: "10px",
  },
}));

export default function Navbar({ children }) {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const menuItems = [
    { title: "Home", path: "/" },
    { title: "Resources", path: "/login" },
    { title: "About", path: "/asd" },
    { title: "Features", path: "/aa" },
    { title: "Contact", path: "/popup" },
  ];
  return (
    <div className={classes.root}>
      <AppBar position="sticky" className={classes.navbar}>
        <Toolbar>
          <Hidden mdUp>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="primary"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Avatar src={logo} className={classes.logo} />
          <Hidden smDown>
            <Typography
              variant="h4"
              align="center"
              className={classes.title}
              color="primary"
            >
              Informatsy
            </Typography>
          </Hidden>

          <Hidden smDown>
            <List className={classes.menuList}>
              {menuItems.map((menu) => (
                <ListItem
                  className={
                    location.pathname === menu.path ? classes.active : null
                  }
                  button
                  key={menu.title}
                  onClick={() => history.push(menu.path)}
                >
                  <ListItemText primary={menu.title} />
                </ListItem>
              ))}
            </List>

            <Button
              color="primary"
              size="medium"
              variant="outlined"
              onClick={() => history.push("/signup")}
              className={classes.signUpButton}
            >
              Signup
            </Button>
            <Button
              color="primary"
              size="medium"
              variant="contained"
              onClick={() => history.push("/login")}
              className={classes.loginButton}
            >
              Login
            </Button>
          </Hidden>
        </Toolbar>
      </AppBar>

      {/* main content */}
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        <Container>{children}</Container>
      </div>
    </div>
  );
}
