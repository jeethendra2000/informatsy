import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { Grid } from "@material-ui/core";
import GetAppIcon from "@material-ui/icons/GetApp";
import Paper from "@material-ui/core/Paper";
import Badge from "@material-ui/core/Badge";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    borderRadius: "12px",
    // color:"white",
    // background: "rgb(109,120,254)",
    // background:
    //   "linear-gradient(45deg, rgba(109,120,254,1) 0%, rgba(255,109,109,0.8911939775910365) 100%)",
    "&:hover": {
      boxShadow: "0 24px 60px 0 rgba(0,0,0,0.2)",
    },
  },
  chips: {
    paddingRight: "10px",
  },
  download: {
    // backgroundColor: "#4979ff",
    // backgroundColor: "#4979ff",
    backgroundColor: "#ff1414",
    borderRadius: "50%",
    maxHeight: "80px",
    height: "80px",
    width: "95px",
    position: "relative",
    display: "inline-block",
    [theme.breakpoints.up("sm")]: {
      marginLeft: "5px",
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: "12px",
    },
  },
  icon: {
    position: "relative",
    marginLeft: "15px",
    marginTop: "25px",
    color: "white",
    [theme.breakpoints.up("sm")]: {
      marginLeft: "12px",
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: "18px",
    },
  },
}));
export default function ResourceCard({subjectName, subjectCode, yearOrSem, course, documentURL}) {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root} elevation={6}>
        <CardContent style={{ padding: "6px 12px" }}>
          <Grid
            container
            spacing={1}
            alignItems="center"
            alignContent="space-between"
            justify="space-between"
          >
            <Grid item xs={10}>
              <Typography variant="h6" component="h2">
                {subjectName}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                gutterBottom
              >
                {subjectCode}
              </Typography>
              <Divider />
              <Grid container style={{ paddingTop: "5px" }} alignItems="center">
                <Grid item className={classes.chips}>
                  <Badge color="error" variant="dot" />
                </Grid>
                <Grid item xs={5}>
                  <Typography variant="body2" component="p">
                    {yearOrSem}
                  </Typography>
                </Grid>
                <Grid item className={classes.chips}>
                  <Badge color="secondary" variant="dot" />
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="body2" component="p">
                    {course}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2}>
              <Paper
                elevation={4}
                onClick={()=> window.location.assign(documentURL)}
                className={classes.download}
              >
                <GetAppIcon className={classes.icon} />
              </Paper>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}
