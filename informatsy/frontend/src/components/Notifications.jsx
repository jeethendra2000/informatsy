import React from "react";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import SecondAppBar from "./layoutsComponent/SecondAppBar";
import { Box, Container } from "@material-ui/core";
import { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  bg: {
    // backgroundColor: "red",
    backgroundColor: "#f0f8ff",

  },
  layout: {
    paddingTop: "90px",
  },
  root: {
    borderRadius: "10px",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function Notifications() {
  const classes = useStyles();
  const history = useHistory();

  let count = 0;
  const [expanded, setExpanded] = useState(-1);
  const handleExpandClick = (index) => {
    if(expanded===index){
      setExpanded("");
    }else{
      setExpanded(index)
    }
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
    <div className={classes.bg} style={{ minHeight:"100vh", paddingBottom:"50px" }}>
      <SecondAppBar title={"Notifications"} backToPage={"/"} />

      <Box className={classes.layout}>
        <Container>
          <Grid container spacing={2}>
            {data.map((item,index) => (
              <Grid item xs={12} sm={6} md={4} key={item.id}>
                <Card className={classes.root} elevation={3}>
                  <CardHeader
                    avatar={
                      <Avatar aria-label="recipe" className={classes.avatar}>
                        {++count}
                      </Avatar>
                    }
                    action={
                      <IconButton
                      name = {count}
                        className={clsx(classes.expand, {
                          [classes.expandOpen]: (index===expanded),
                        })}
                        onClick={()=>handleExpandClick(index)}
                        aria-expanded={index===expanded}
                        aria-label="show more"
                      >
                        <ExpandMoreIcon />
                      </IconButton>
                    }
                    title={item.notificationTitle}
                    subheader={item.relatedTo}
                  />
                  <div key = {count}>
                  <Collapse in = {index===expanded?true:false} timeout="auto" unmountOnExit = {true}>
                    <CardContent>
                      <Typography variant="body2">
                      {item.notificationDescription}
                      </Typography>
                    </CardContent>
                  </Collapse>
                  </div>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default Notifications;
