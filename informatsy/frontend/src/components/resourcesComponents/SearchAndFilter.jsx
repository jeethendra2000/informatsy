import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import FilterListIcon from "@material-ui/icons/FilterList";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

import FilterMenu from "./FilterMenu";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 10px",
    display: "flex",
    alignItems: "center",
    width: "100%",
    borderRadius: "30px",
    transition: "0.3s",
    "&:hover": {
      boxShadow: "0 8px 20px 0 rgba(0,0,0,0.2)",
    },
    [theme.breakpoints.down("md")]: {
      borderRadius: "50px",
    },
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
    color: "#212121",
  },
  divider: {
    height: 28,
    margin: 4,
  },
  fullList: {
    width: "auto",
  },
}));

export default function SearchAndFilter() {
  const classes = useStyles();
  const [searchData, setSearchData] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    alert(searchData);

    setSearchData("");
  };

  return (
    <>
      <Paper
        component="form"
        className={classes.root}
        elevation={4}
        onSubmit={handleSearchSubmit}
      >
        <InputBase
          className={classes.input}
          placeholder="Search"
          value={searchData}
          onChange={(e) => setSearchData(e.target.value)}
          inputProps={{ "aria-label": "search" }}
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
        <Divider className={classes.divider} orientation="vertical" />
        <IconButton
          className={classes.iconButton}
          aria-label="filter"
          disableTouchRipple
          onClick={() => {
            toggle();
          }}
        >
          <FilterListIcon />
          <Typography style={{ paddingLeft: "5px" }} variant="body1">
            Filter
          </Typography>
        </IconButton>
        <SwipeableDrawer
          anchor={"bottom"}
          open={isOpen}
          onClose={toggle}
          onOpen={toggle}
        >
          <div
            className={classes.fullList}
            role="presentation"
            onKeyDown={toggle}
          >
            <FilterMenu toggle={toggle} />
          </div>
        </SwipeableDrawer>
      </Paper>
    </>
  );
}
