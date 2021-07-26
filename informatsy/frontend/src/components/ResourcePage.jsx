import React from "react";
import { Box, Paper, Grid, Typography, makeStyles } from "@material-ui/core";
import { useHistory, useLocation } from "react-router";

import Syllabus from "../Assets/syllabus.jpg";
import Notes from "../Assets/notes.jpg";
import QuestionPaper from "../Assets/questionPaper.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "auto",
    maxWidth: "280px",
  },
  card: {
    borderRadius: "30px",
    transition: "0.2s",
    "&:hover": {
      boxShadow: "0 12px 24px 0 rgba(0,0,0,0.2)",
    },
    [theme.breakpoints.down("md")]: {
      borderRadius: "20px",
    },
  },
}));

export default function ResourcePage() {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  return (
    <div>
      <Box py={4}>
        <Box textAlign="center" pb={{ xs: 1, sm: 2, md: 2 }}>
          <Typography variant="h4" component="h5" gutterBottom>
            Resources
          </Typography>
        </Box>
        <Box py={4} mr={2}>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={4}>
              <Box
                textAlign="center"
                onClick={() => history.push(location.pathname + "/syllabus")}
              >
                <Paper className={classes.card} elevation={5}>
                  <img className={classes.root} src={Syllabus} alt="Syllabus" />
                  <Typography
                    variant="h5"
                    component="h5"
                    gutterBottom
                    style={{ paddingBottom: "10px" }}
                  >
                    Syllabus
                  </Typography>
                </Paper>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box
                textAlign="center"
                onClick={() => history.push(location.pathname + "/notes")}
              >
                <Paper className={classes.card} elevation={5}>
                  <img className={classes.root} src={Notes} alt="Notes" />
                  <Typography
                    variant="h5"
                    component="h5"
                    gutterBottom
                    style={{ paddingBottom: "10px" }}
                  >
                    Notes
                  </Typography>
                </Paper>
              </Box>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Box
                textAlign="center"
                onClick={() =>
                  history.push(location.pathname + "/questionPapers")
                }
              >
                <Paper className={classes.card} elevation={5}>
                  <img
                    className={classes.root}
                    src={QuestionPaper}
                    alt="Question Paper"
                  />
                  <Typography
                    variant="h5"
                    component="h5"
                    gutterBottom
                    style={{ paddingBottom: "10px" }}
                  >
                    Question Papers
                  </Typography>
                </Paper>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}
