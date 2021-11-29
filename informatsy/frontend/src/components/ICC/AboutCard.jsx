import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles({
  root: {
    minWidth: 250,
  },
});
function AboutCard({ fullname, work, bio, image }) {
  const classes = useStyles();

  return (
    <div>
      {/* <Card
        className={classes.root}
        elevation={8}
        style={{ borderRadius: "35px", marginRight:"20px" }}
      >
        <CardContent> */}
          <Grid
            container
            justify="center"
            alignItems="center"
            direction="column"
            // className={styles.aboutCard}
          >
            <Grid item>
              <Avatar
                style={{
                  width: "100px",
                  height: "100px",
                  marginBottom: "20px",
                }}
                alt={fullname}
                src={image}
              />
            </Grid>
            <Grid item>
              <Typography
                variant="h5"
                color="textPrimary"
                style={{ textAlign: "center" }}
              >
                {fullname}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="h6"
                color="textPrimary"
                style={{ textAlign: "center" }}
              >
                {work}
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle2"
                color="textSecondary"
                style={{ textAlign: "center" }}
              >
                <q>{bio}</q>
              </Typography>
            </Grid>
          </Grid>
        {/* </CardContent>
      </Card> */}
    </div>
  );
}

export default AboutCard;
