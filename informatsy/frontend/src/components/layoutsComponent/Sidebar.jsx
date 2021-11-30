import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router";
import logo from "../../Assets/logo.png";

import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import InfoIcon from "@material-ui/icons/Info";
import ImportantDevicesIcon from "@material-ui/icons/ImportantDevices";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import ExploreIcon from '@material-ui/icons/Explore';

// selecting icons to sidebar
const selectIcon = (logoTitle) => {
  switch (logoTitle) {
    case "MenuBookIcon":
      return <MenuBookIcon />;
    case "HomeIcon":
      return <HomeIcon />;
    case "InfoIcon":
      return <InfoIcon />;
    case "ImportantDevicesIcon":
      return <ImportantDevicesIcon />;
    case "ExploreIcon":
      return <ExploreIcon />;
    default:
      return <EmailIcon />;
  }
};

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  logoIcon: { display: "flex" },
  logoTitle: {
    paddingTop: "10px",
    paddingLeft: "5px",
  },
}));

export default function Sidebar({ menuItems }) {
  const classes = useStyles();
  const history = useHistory();

  const [open, setOpen] = useState(false);

  return (
    <div>
      <IconButton
        color="primary"
        edge="start"
        aria-label="menu"
        onClick={() => {
          setOpen(true);
        }}
      >
        <MenuIcon />
      </IconButton>

      <SwipeableDrawer
        anchor="left"
        open={open}
        onOpen={() => {
          setOpen(true);
        }}
        onClose={() => {
          setOpen(false);
        }}
      >
        <div className={classes.list}>
          <Button
            onClick={() => {
              history.push("/");
              setOpen(!open);
            }}
          >
            <Box textAlign="center" className={classes.logoIcon} p={2}>
              <Avatar src={logo} />
              <Typography
                variant="h6"
                component="h6"
                className={classes.logoTitle}
              >
                Informatsy
              </Typography>
            </Box>
          </Button>
          <Divider />
          <List>
            {menuItems.map((menu) => (
              <ListItem
                key={menu.title}
                button
                onClick={() => {
                  history.push(menu.path);
                  setOpen(!open);
                }}
              >
                <ListItemIcon>
                  <Box color="#000000DE" ml={1}>
                    {selectIcon(menu.logo)}
                  </Box>
                </ListItemIcon>
                <ListItemText primary={menu.title} />
              </ListItem>
            ))}
          </List>
        </div>
      </SwipeableDrawer>
    </div>
  );
}
