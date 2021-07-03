import React from "react";
import {IconButton, Badge, Avatar}from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useHistory } from "react-router";

function Account({user}) {
    const history = useHistory();
  return (
    <>
      <IconButton
        aria-label="show new notifications"
        color="primary"
        onClick={() => history.push("/notifications")}
        style={{ marginRight: "12px" }}
      >
        <Badge badgeContent={17} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <Avatar alt={user.name} src={user.profileImage} />
    </>
  );
}

export default Account;
