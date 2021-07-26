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
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  avtar: {
    backgroundColor: "#fc8403",
    color: "white",
  },
}));

function Account({ user }) {
  const classes = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        aria-label="show new notifications"
        color="primary"
        onClick={() => history.push("/notifications")}
        style={{ marginRight: "10px" }}
      >
        <Badge badgeContent={17} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <Avatar
        alt={user.name}
        src={user.profileImage}
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
            history.push("/");
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
          <Typography variant="body2">Logout</Typography>
        </MenuItem>
      </Menu>
    </>
  );
}

export default Account;
