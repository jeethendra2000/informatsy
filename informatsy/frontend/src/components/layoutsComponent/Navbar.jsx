import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import logo from "../../Assets/logo.png";
import Footer from "./Footer";
import Button from "@material-ui/core/Button";

import {
  Avatar,
  Container,
  Hidden,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { useHistory, useLocation } from "react-router";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    marginLeft: theme.spacing(5),
  },

  title: {
    paddingTop: "3px",
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
      borderRadius: "8px",
    },
  },
  page: {
    background: "#f9f9f9",
    width: "100%",
    padding: theme.spacing(1),
  },
  toolbar: {
    paddingBottom: "80px",
    [theme.breakpoints.down("sm")]: {
      paddingBottom: "60px",
    },
  },
  mobileLogo: {
    position: "absolute",
    left: "50%",
    marginLeft: "-24px",
    top: "10px",
  },
}));

export default function Navbar({ children }) {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const menuItems = [
    { title: "Home", logo: "HomeIcon", path: "/" },
    { title: "Resources", logo: "MenuBookIcon", path: "/resources" },
    { title: "About", logo: "InfoIcon", path: "/kj" },
    { title: "Features", logo: "ImportantDevicesIcon", path: "/aa" },
    { title: "Contact", logo: "CallIcon", path: "/popup" },
  ];

  return (
    <div className={classes.root}>
      {/* Header */}
      <AppBar position="fixed" className={classes.navbar}>
        <Toolbar>
          {/* -----------------------Brand Logo----------------------- */}
          <Hidden smDown>
            <Link to="/" style={{ textDecoration: "none" }}>
              <div style={{ display: "flex" }}>
                <Avatar src={logo} className={classes.logo} />
                <Typography
                  variant="h4"
                  align="center"
                  className={classes.title}
                  color="primary"
                >
                  Informatsy
                </Typography>
              </div>
            </Link>
            {/* --------------Menu Bar-------------- */}
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
          </Hidden>
          {/*----------------Brand Logo on small screen---------------- */}
          <Hidden mdUp>
            <Sidebar menuItems={menuItems} />
            <Link to="/">
              <Avatar src={logo} className={classes.mobileLogo} />
            </Link>
          </Hidden>
          {/* ----------------Login And SignUp Button---------------- */}
          <Hidden smDown>
            <Button
              color="primary"
              size="medium"
              variant="outlined"
              onClick={() => history.push("/popup")}
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
        <div className={classes.toolbar}> </div>
        <Container> {children} </Container>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
