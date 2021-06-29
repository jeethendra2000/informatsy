import React from "react";
import { Box, Grid } from "@material-ui/core";
import SearchAndFilter from "./resourcesComponents/SearchAndFilter";
import ResourceCard from "./resourcesComponents/ResourceCard";
import FilterMenu from "./resourcesComponents/FilterMenu";

export default function Notes() {
  return (
    <div>
      <Box mr={4} py={3}>
        <SearchAndFilter />
      </Box>
      <Box mr={3} ml={1} py={2}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={6} md={4}>
            <ResourceCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ResourceCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ResourceCard />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ResourceCard />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
