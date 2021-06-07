import { Box, Grid, Paper, Typography } from "@material-ui/core";
import React from "react";

export default function FeatureCard({ title, desc, image }) {
  return (
    <Grid item xs={11} sm={6} md={3}>
      <Box p={{ xs: 3, sm: 3, md: 5 }}>
        <Paper elevation={10} style={{ borderRadius: "20px" }}>
          <Grid container spacing={1} justify="center">
            <Grid item xs={8}>
              <Box textAlign="center" p={2}>
                {image}
              </Box>
            </Grid>
            <Grid item xs={10}>
              <Box textAlign="center">
                <Typography variant="h6" color="primary">
                  {title}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={10}>
              <Box textAlign="center">
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  {desc}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Grid>
  );
}
