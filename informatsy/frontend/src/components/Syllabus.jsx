import { makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Box, Button, Paper, Grid, Typography } from "@material-ui/core";
import Mechanical from "../Assets/mech.png";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "auto",
    maxWidth: "300px",
  },
  card: {
    borderRadius: "30px",
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
    <Box mr={2} pb={{ xs: 2, sm: 3, md: 5 }}>
      <Box textAlign="center">
        <Typography variant="h4">Branches</Typography>
      </Box>
      <Grid container spacing={5}>
        {data.map((item) => (
          <Grid item xs={12} sm={6}>
            <Box textAlign="center">
              <Paper
                onClick={() => {
                  console.log(data);
                }}
                className={classes.card}
                elevation={5}
              >
                <img className={classes.root} src={item.branchImage} />
                <Typography variant="h6">{item.branchName}</Typography>
              </Paper>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
