import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";

export default function Contact() {
  return (
    <Box py={5} mr={1}>
      <Grid container spacing={5} alignItems="center">
        <Grid item md={6}>
          <Box ml={{ md: 6 }}>
            <Grid container alignItems="center">
              <Grid item xs={12}>
                <Box pb={2}>
                  <Typography
                    variant="h4"
                    component="h5"
                    color="primary"
                    style={{ fontWeight: "bold" }}
                  >
                    Contact Informatsy
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={11} md={10}>
                <Box pb={3}>
                  <Typography
                    variant="body1"
                    component="h5"
                    color="textSecondary"
                  >
                    We're always happy to help, so get in touch today.
                    Communication is simple when there's a way to communicate.
                    Place your contact details below.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Box pb={1}>
                  <Typography variant="h5" component="h5" color="primary">
                    Phone
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={11} md={10}>
                <Box pb={2}>
                  <Typography
                    variant="body1"
                    component="h5"
                    color="textSecondary"
                  >
                    +91 0123456789
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12}>
                <Box pb={1}>
                  <Typography variant="h5" component="h5" color="primary">
                    Email
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={11} md={10}>
                <Box pb={2}>
                  <Typography
                    variant="body1"
                    component="h5"
                    color="textSecondary"
                  >
                    informatsy@gmail.com
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item md={6}>
          <Box>
            <Grid container>
              <Box>
                <Grid item>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi
                  aut vitae excepturi fugiat sequi, quibusdam corrupti quo
                  voluptatum harum rerum enim iure doloribus veritatis a modi
                  consectetur! Recusandae, perferendis expedita.
                </Grid>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
