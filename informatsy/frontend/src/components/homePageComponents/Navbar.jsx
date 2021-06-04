import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Hidden, List, ListItem, ListItemText } from "@material-ui/core";
import { useHistory, useLocation } from "react-router";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    [theme.breakpoints.up("md")]: {
      marginRight: theme.spacing(40),
      marginLeft: theme.spacing(10),
    },
    [theme.breakpoints.down("sm")]: {
      flexGrow: 1,
      marginRight: theme.spacing(0),
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
    backgroundColor: "#f4f4f4",
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
}));

export default function Navbar() {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const menuItems = [
    { title: "Home", path: "/" },
    { title: "Resources", path: "/" },
    { title: "About", path: "/" },
    { title: "Features", path: "/" },
    { title: "Contact", path: "/popup" },
  ];
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navbar}>
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
          <Typography
            variant="h4"
            align="center"
            className={classes.title}
            color="primary"
          >
            Informatsy
          </Typography>

          <Hidden smDown>
            <List className={classes.menuList}>
              {menuItems.map((menu) => (
                <ListItem
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
    </div>
  );
}
