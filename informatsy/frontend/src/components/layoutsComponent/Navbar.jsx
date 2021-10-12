import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Footer from "./Footer";
import Account from "./Account";
import Sidebar from "./Sidebar";
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png";
import { useHistory, useLocation } from "react-router";
import Cookies from "js-cookie";
import {
  authAxios,
  refresh_token,
  access_token,
  axiosinfo,
} from "../Authaxios";

import {
  Avatar,
  Container,
  Hidden,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      width: "100%",
    },
  },
  brandLogo: {
    display: "flex",
  },
  logo: {
    marginLeft: theme.spacing(5),
  },

  title: {
    paddingTop: "3px",
  },

  navbar: {
    backgroundColor: "#fcfefe",
  },

  menuList: {
    display: "flex",
    color: "#6d78fe",
    position: "absolute",
    right: "15px",
  },

  active: {
    backgroundColor: "#e4ebeb",
  },

  signUpButton: {
    border: "3px solid",
    borderRadius: "10%",
    "&:hover": {
      border: "3px solid",
      backgroundColor: "#1876d2",
      color: "white",
      borderRadius: "8px",
    },
  },
  page: {
    background: "#f1f1f9",
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
  const [user, setUser] = React.useState({
    status: false,
    name: "",
    profileImage: "",
  });
  // const user = {
  //   status: false,
  //   name: "SRS",
  //   profileImage: "http://127.0.0.1:8000/media/branch/Rayaru_ZDUCckO.jpg",
  // };
  const expires = 1 / 48;
  
  useEffect(() => {
    authAxios
      .post(`getuserinfo/`)
      .then((res) => {
        console.log(res.data);
        setUser({ status: true, details: jwt_decode(access_token) });
        console.log(user);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          axiosinfo
            .post(`token/refresh/`, {
              refresh: refresh_token,
            })
            .then((res) => {
              Cookies.set("access_token", res.data.access, {
                expires: expires,
              });
            })
            .catch((err) => {
              if (err.response.status) {
                history.push("/login");
              }
            });
        }
      });
  }, []);

  const menuItems = [
    { title: "Home", logo: "HomeIcon", path: "/" },
    { title: "Resources", logo: "MenuBookIcon", path: "/resources" },
    { title: "Features", logo: "ImportantDevicesIcon", path: "/features" },
    { title: "Contact", logo: "CallIcon", path: "/contact" },
    { title: "About", logo: "InfoIcon", path: "/about" },
  ];

  return (
    <div className={classes.root}>
      {/* Header */}
      <AppBar position="fixed" className={classes.navbar}>
        <Toolbar>
          {/* -----------------------Brand Logo----------------------- */}
          <Hidden smDown>
            <Link to="/" style={{ textDecoration: "none" }}>
              <div className={classes.brandLogo}>
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
              {user.status ? (
                <Account user={user} />
              ) : (
                <>
                  <ListItem>
                    <Button
                      color="primary"
                      size="medium"
                      variant="outlined"
                      onClick={() => history.push("/signup")}
                      className={classes.signUpButton}
                    >
                      Signup
                    </Button>
                  </ListItem>
                  <ListItem>
                    <Button
                      color="primary"
                      size="medium"
                      variant="contained"
                      onClick={() => history.push("/login")}
                    >
                      SignIn
                    </Button>
                  </ListItem>
                </>
              )}
            </List>
          </Hidden>
          {/*----------------Brand Logo on small screen---------------- */}
          <Hidden mdUp>
            <div style={{ display: "flex" }}>
              <Sidebar menuItems={menuItems} />
              <Link to="/">
                <Avatar src={logo} className={classes.mobileLogo} />
              </Link>
              <div
                style={{
                  display: "flex",
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                }}
              >
                {user.status ? (
                  <Account user={user} />
                ) : (
                  <Button
                    color="primary"
                    size="medium"
                    variant="outlined"
                    style={{ borderRadius: "50px" }}
                    onClick={() => history.push("/signup")}
                    className={classes.signUpButton}
                  >
                    Sign In
                  </Button>
                )}
              </div>
            </div>
          </Hidden>
        </Toolbar>
      </AppBar>

      {/* main content */}
      <div className={classes.page}>
        <div className={classes.toolbar}> </div>
        <Container>{children}</Container>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
