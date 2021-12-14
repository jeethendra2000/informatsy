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

// import Informatsy from "../../Assets/logo.png";
// import CodeForces from "../../Assets/codeforces.jpg";
// import TopCoder from "../../Assets/topcoder.jpg";
// import AtCoder from "../../Assets/atcoder.png";
// import CodeChef from "../../Assets/codechef.jpg";
// import CsAcademy from "../../Assets/csacademy.png";
// import HackerRank from "../../Assets/hackerrank.png";
// import HackerEarth from "../../Assets/hackeearth.png";
// import KickStart from "../../Assets/google-img.png";
// import LeetCode from "../../Assets/leetcode.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    borderRadius: "10px",
  },
}));


export default function ContestCard({ name, site, start_time, url }) {
  const classes = useStyles();
  const dat = new Date(start_time).toUTCString();
  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar
              alt={site}
              src={
                require(site === "Informatsy"
                  ? "../../Assets/logo.png"
                  : site === "CodeForces"
                  ? "../../Assets/codeforces.jpg"
                  : site === "TopCoder"
                  ? "../../Assets/topcoder.jpg"
                  : site === "AtCoder"
                  ? "../../Assets/atcoder.png"
                  : site === "CodeChef"
                  ? "../../Assets/codechef.jpg"
                  : site === "CsAcademy"
                  ? "../../Assets/csacademy.png"
                  : site === "HackerRank"
                  ? "../../Assets/hackerrank.png"
                  : site === "HackerEarth"
                  ? "../../Assets/hackeearth.png"
                  : site === "LeetCode"
                  ? "../../Assets/leetcode.jpg"
                  : "../../Assets/google-img.png").default
              }
            >
              {site[0]}
            </Avatar>
          }
          action={
            <IconButton
              aria-label="compete"
              onClick={() => window.location.assign(url)}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          }
          title={name}
          subheader={dat}
        />
      </Card>
    </div>
  );
}
