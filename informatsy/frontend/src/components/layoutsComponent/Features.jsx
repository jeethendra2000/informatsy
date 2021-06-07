import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import FeatureCard from "./FeatureCard";

import file from "../../Assets/file.png";
import support from "../../Assets/support.png";
import security from "../../Assets/security.png";
import datacenter from "../../Assets/DataCenter.png";

const useStyles = makeStyles((theme) => ({
  imageStyle: {
    width: "70%",
    [theme.breakpoints.down("sm")]: {
      width: "65%",
    },
  },
}));

export default function Features() {
  const classes = useStyles();

  const cardsDetails = [
    {
      title: "Useful resources",
      desc: "List some of your unique features here so your visitors can find the information they need, easily.",
      image: (
        <img src={file} className={classes.imageStyle} alt={"folderIcon"} />
      ),
    },
    {
      title: "Shared Hosting",
      desc: "List some of your unique features here so your visitors can find the information they need, easily.",
      image: (
        <img
          src={datacenter}
          className={classes.imageStyle}
          alt={"folderIcon"}
        />
      ),
    },
    {
      title: "24/7 Support",
      desc: "List some of your unique features here so your visitors can find the information they need, easily.",
      image: (
        <img src={support} className={classes.imageStyle} alt={"folderIcon"} />
      ),
    },
    {
      title: "Easy to Access",
      desc: "List some of your unique features here so your visitors can find the information they need, easily.",
      image: (
        <img src={security} className={classes.imageStyle} alt={"folderIcon"} />
      ),
    },
  ];

  return (
    <div>
      <Box ml={1}>
        <Box style={{ marginRight: "30px" }} py={{ xs: 1, sm: 2, md: 3 }}>
          <Grid container>
            <Grid item xs={12}>
              <Box textAlign="center" pt={{ xs: 2 }}>
                <Typography
                  variant="h5"
                  component="h6"
                  color="secondary"
                  gutterBottom
                >
                  Features
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box textAlign="center">
                <Typography variant="h4" component="h5" color="primary">
                  Our Services
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
        <Box py={6}>
          <Grid container>
            {cardsDetails.map((card) => (
              <FeatureCard
                key={card.title}
                title={card.title}
                desc={card.desc}
                image={card.image}
              />
            ))}
          </Grid>
        </Box>
      </Box>
    </div>
  );
}
