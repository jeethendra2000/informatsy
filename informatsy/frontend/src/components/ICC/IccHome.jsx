import React from "react";
import Grid from "@material-ui/core/Grid";
import ContestCard from "./ContestCard";
export default function IccHome() {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <ContestCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ContestCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ContestCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ContestCard />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <ContestCard />
        </Grid>
      </Grid>
    </div>
  );
}
