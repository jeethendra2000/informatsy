import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Footer from "./Footer";
import Account from "./Account";
import Sidebar from "./Sidebar";
// import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png";
import { useHistory, useLocation } from "react-router";
import Cookies from "js-cookie";
import { UserContext } from "../../UserContexapi";
import { CircularProgress } from "@material-ui/core";

import {
  authAxios,
  // refresh_token,
  // access_token,
  axiosinfo,
} from "../../Authaxios";

import {
  Avatar,
  Container,
  Hidden,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
// import axios from "axios";

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
  loaderdesk: {
    // marginTop: "0.5rem",
    display:"flex",
    justifyContent:"center",
    alignSelf:'center',alignContent:'center'
  },
}));

export default function Navbar({ children }) {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const [loading, setloading] = useState(true);
  const user = React.useContext(UserContext);
  // const user = {
  //   status: false,
  //   name: "SRS",
  //   profileImage: "http://127.0.0.1:8000/media/branch/Rayaru_ZDUCckO.jpg",
  // };
  const expires = 1 / 48;
  // const querying_token = () => {
  //   axiosinfo
  //     .post(`token/refresh/`, {
  //       refresh: refresh_token,
  //     })
  //     .then((res) => {
  //       Cookies.set("access_token", res.data.access, {
  //         expires: expires,
  //       });
  //       console.log("got request");
  //     })
  //     .catch((err) => {
  //       if (err.response.status) {
  //         history.push("/login");
  //       }
  //     });
  // };
  useEffect(() => {
    // console.log(user.user.status);
    //-----------progress event in axios--------------
    // onUploadProgress: progressEvent => console.log(progressEvent.loaded)
    authAxios
      .get(`getuserinfo/`)
      .then((res) => {
        console.log(res.data);
        user.setUser({
          status: true,
          profile_img: res.data.profile_img,
          name: res.data.name,
        });
        setloading(false)

        // console.log(user);
      })
      .catch((err) => {
        console.log(err.response);
        if (err.response) {
          axiosinfo
            .post(`token/refresh/`, {
              refresh: Cookies.get("refresh_token"),
            })
            .then((res) => {
              Cookies.set("access_token", res.data.access, {
                expires: expires,
              });
              authAxios
                .get("/getuserinfo/")
                .then((res) => {
                  user.setUser({
                    status: true,
                    profile_img: res.data.profile_img,
                    name: res.data.name,
                  });
                  setloading(false)
                })
                .catch((err) => {
                  console.log("Can't get user info");
                  setloading(false)
                  user.setUser({ status: false, profile_img: "", name: "" });
                });
            })
            .catch((err) => {
              history.push("/");
              setloading(false)
              user.setUser({ status: false, profile_img: "", name: "" });
              // if (err.response.status === 401) {
              // }
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
              {user.user.status ? (
                !loading ? (
                  <Account />
                ) : (
                  <span className={classes.loaderdesk}>
                    <CircularProgress thickness="3.6" size="2rem" />
                  </span>
                )
              ) : !loading ? (
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
              ) : (
                <span className={classes.loaderdesk}>
                  <CircularProgress thickness="3.6" size="2rem" />
                </span>
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
                {user.user.status ? (
                  !loading ? (
                    <Account />
                  ) : (
                    <span className={classes.loaderdesk}>
                      <CircularProgress thickness="3" size="2rem" color = "secondary"/>
                    </span>
                  )
                ) : !loading ? (
                  <Button
                    color="primary"
                    size="medium"
                    variant="outlined"
                    style={{ borderRadius: "50px" }}
                    onClick={() => history.push("/login")}
                    className={classes.signUpButton}
                  >
                    Sign In
                  </Button>
                ) : (
                  <span className={classes.loaderdesk}>
                    <CircularProgress thickness="3" size="2rem" color = "secondary"/>
                  </span>
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
