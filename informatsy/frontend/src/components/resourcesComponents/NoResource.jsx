import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Typography } from "@material-ui/core";
import noResultFound from "../../Assets/noResultFound.jpg";

const useStyles = makeStyles(() => ({
  icon: {
    maxWidth: "95%",
  },
}));

export default function NoResource() {
  const classes = useStyles();
  return (
    <>
      <Grid item xs={12}>
        <Box py={{ xs: 8, sm: 6, md: 6 }} textAlign="center">
          <Typography variant="h6" component="h6" color="textSecondary">
            <Box>
              <img src={noResultFound} alt=":(" className={classes.icon} />
            </Box>
            Sorry! No resources found :( <br />
            Please try something else.
          </Typography>
        </Box>
      </Grid>
    </>
  );
}
