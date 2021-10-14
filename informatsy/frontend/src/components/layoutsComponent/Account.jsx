import React from "react";
import {
  IconButton,
  Badge,
  Avatar,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/styles";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { UserContext } from "../../UserContexapi";

import {
  authAxios,
  refresh_token,
  access_token,
  axiosinfo,
} from "../../Authaxios";
const useStyles = makeStyles((theme) => ({
  avtar: {
    backgroundColor: "#fc8403",
    color: "white",
  },
}));

function Account() {
  const classes = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);
  const user = React.useContext(UserContext);
  console.log(user);
  //----------Requesting to logout and add all tokens to backlist -------------------
  const handleLogout = () => {
    authAxios
      .post("/logout/", { refresh: refresh_token })
      .then((res) => {
        Cookies.remove("access_token");
        Cookies.remove("refresh_token");
        user.setUser({ status: false, profile_img: "", name: "" });
        history.push("/");
      })
      .catch((err) => console.log(err));
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  let [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://informatsy.pythonanywhere.com/api/notifications/")
      .then((res) => {
        const data = res.data;
        setData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <IconButton
        aria-label="show new notifications"
        color="primary"
        onClick={() => history.push("/notifications")}
        style={{ marginRight: "10px" }}
      >
        <Badge badgeContent={data.length} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <Avatar
        alt={user.user.name}
        src={user.user.profile_img}
        onClick={handleClick}
        className={classes.avtar}
      />
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            history.push("/profile");
          }}
        >
          <Typography variant="body2">My Profile</Typography>
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            history.push("/");
          }}
        >
          <Typography variant="body2" onClick={handleLogout}>
            Logout
          </Typography>
        </MenuItem>
      </Menu>
    </>
  );
}

export default Account;
