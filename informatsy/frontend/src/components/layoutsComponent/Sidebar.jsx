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
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router";
import logo from "../../Assets/logo.png";

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
                  <MenuIcon />
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
