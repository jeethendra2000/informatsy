import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    borderRadius:"10px"
  },
}));

export default function ContestCard() {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar alt="Informatsy" src="logo.png">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="compete" onClick={() => alert('contest link')}>
              <ArrowForwardIosIcon />
            </IconButton>
          }
          title="ICC Day - 1 Contest"
          subheader="September 14, 2016"
        />
      </Card>
    </div>
  );
}
