import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { Typography, Grid } from "@material-ui/core";
import AboutCard from "./AboutCard";
import { useEffect, useState } from "react";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function AboutUs() {
  const classes = useStyles();
  let [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://informatsy.pythonanywhere.com/api/aboutUs/")
      .then((res) => {
        const data = res.data;
        setData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ marginTop: "50px" }}>
      <Typography
        variant="h3"
        style={{ textAlign: "center", marginBottom: "30px" }}
        color="textPrimary"
      >
        Informatsy
      </Typography>
      <Typography
        variant="body1"
        color="textSecondary"
        gutterBottom
        style={{ marginLeft: "30px", marginRight: "30px" }}
      >
        <q>
          One stop platform for students. Informatsy is a platform which
          help the students in the process of learning by
          providing them the necessary resources and features which makes easier
          for them to track the academic activities and alerts from their
          college.
        </q>
      </Typography>
      <Typography
        variant="h3"
        style={{ textAlign: "center", marginTop: "40px", marginBottom: "30px" }}
        color="textPrimary"
      >
        Informatsy Coding Club
      </Typography>
      <Typography
        variant="body1"
        color="textSecondary"
        gutterBottom
        style={{
          marginLeft: "30px",
          marginRight: "30px",
          marginBottom: "40px",
        }}
      >
        <q>
          Informatsy Coding Club (ICC) is a team of enthusiastic students who
          believe in learning, exploring and sharing the knowledge. Our goal is
          to help the students to improve their problem solving skills, guide
          them in web devolpment and help them in preparing for their interviews
          and placements.
        </q>
      </Typography>
      <Typography
        variant="h3"
        style={{ textAlign: "center", marginTop: "40px", marginBottom: "30px" }}
        color="textPrimary"
      >
        Club Members
      </Typography>

      <Grid container spacing={6} style={{ marginBottom: "10px" }}>
        {data.map((team_member) => (
          <Grid key={team_member.id} item xs={12} sm={6} md={3}>
            <AboutCard
              image={team_member.profileImage}
              fullname={team_member.fullName}
              work={team_member.work}
              bio={team_member.bio}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
