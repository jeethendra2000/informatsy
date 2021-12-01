import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router";

const useStyles = makeStyles({
  root: {
    maxWidth: 245,
    borderRadius: "15px",
    margin:"10px"
  },
});

export default function ExploreHome() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Grid container alignItems="center" justify="center">
      <Grid item xs={9} sm={4} md={3}>
        <Card
          className={classes.root}
          elevation={4}
          onClick={() => history.push("/attendance")}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Attendance"
              height="200"
              image="attendance.png"
              title="Attendance"
            />
            <CardContent>
              <Typography variant="h5" component="h2" style={{textAlign:"center"}}>
                Attendance
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>

      <Grid item xs={9} sm={4} md={3}>
        <Card
          className={classes.root}
          elevation={4}
          onClick={() => history.push("/confession")}
        >
          <CardActionArea>
            <CardMedia
              component="Confession"
              alt="Confession"
              height="200"
              image="confess.png"
              title="Confession"
            />
            <CardContent>
              <Typography variant="h5" component="h2" style={{textAlign:"center"}}>
                Confession room
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={9} sm={4} md={3}>
        <Card
          className={classes.root}
          elevation={4}
          onClick={() => history.push("/attendance")}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="200"
              image="attendance.png"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography variant="h5" component="h2" style={{textAlign:"center"}}>
                Attendance
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item xs={9} sm={4} md={3}>
        <Card
          className={classes.root}
          elevation={4}
          onClick={() => history.push("/attendance")}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="200"
              image="attendance.png"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography variant="h5" component="h2" style={{textAlign:"center"}}>
                Attendance
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
}
