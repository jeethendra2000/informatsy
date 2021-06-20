import { makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Box, Paper, Grid, Typography } from "@material-ui/core";
import axios from "axios";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "auto",
    maxWidth: "300px",
  },
  card: {
    borderRadius: "30px",
    transition: "0.3s",
    "&:hover": {
      boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
    },
  },
}));

export default function Syllabus() {
  const classes = useStyles();
  let [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/syllabus/").then((res) => {
      const data = res.data;
      setData(data);
    });
  }, []);

  return (
    <Box mr={2} pb={{ xs: 3, sm: 5, md: 6 }}>
      <Box textAlign="center" pb={4}>
        <Typography variant="h4" component="h5" gutterBottom>
          Branches
        </Typography>
      </Box>
      <Grid container spacing={5}>
        {data.map((item) => (
          <Grid item xs={12} sm={6} key={item.branchName}>
            <Box textAlign="center">
              <Paper className={classes.card} elevation={5}>
                <img className={classes.root} src={item.branchImage} />
                <Typography variant="h6" componet="h5" gutterBottom>
                  {item.branchName}
                </Typography>
              </Paper>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
