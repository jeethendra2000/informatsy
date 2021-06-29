import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import { Container, Grid, Typography, Box, Button } from "@material-ui/core";
import Chip from "@material-ui/core/Chip";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles(() => ({
  chip: {
    color: "#212121",
    transition: "0.3s",
    boxShadow: "0 2px 4px 0 rgba(0,0,0,0.2)",
  },
  chipSelected: {
    transition: "0.3s",
    boxShadow: "0 2px 4px 0 rgba(0,0,0,0.2)",
    backgroundColor: "#2196f3",
    color: "white",
  },
  clearButton: {
    borderRadius: "25px",
    backgroundColor: "white",
    transition: "0.3s",
    color: "#FF0000",
    boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
    "&:hover": {
      backgroundColor: "white",
      color: "#FF0000",
      boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
    },
  },
  applyButton: {
    borderRadius: "25px",
    backgroundColor: "white",
    color: "#228B22",
    transition: "0.3s",
    boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
    "&:hover": {
      backgroundColor: "white",
      color: "#228B22",
      boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
    },
  },
}));

export default function FilterMenu() {
  const classes = useStyles();
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedYearOrSem, setSelectedYearOrSem] = useState("");
  const [ct, setCt] = useState(0);

  const clear = () => {
    setSelectedCourse("");
    setSelectedYearOrSem("");
  };

  return (
    <div>
      <Box bgcolor="#F8F8F8">
        <Box py={1}>
          <Container>
            <Typography variant="h6">Courses</Typography>
          </Container>
        </Box>

        <Divider />
        <Box py={2}>
          <Container>
            <Grid container spacing={2}>
              <Grid item>
              <Typography component="h6" onClick={()=> setSelectedCourse("Mec")}>
                  <Chip label={"Mec"} className={selectedCourse === "Mec" ? classes.chipSelected : classes.chip} />
                </Typography>
              </Grid>
              <Grid item>
              <Typography component="h6" onClick={()=> setSelectedCourse("CV")}>
                  <Chip label={"CV"} className={selectedCourse === "CV" ? classes.chipSelected : classes.chip} />
                </Typography>
              </Grid>
              <Grid item>
                <Typography component="h6" onClick={()=> setSelectedCourse("EC")}>
                  <Chip label={"EC"} className={selectedCourse === "EC" ? classes.chipSelected : classes.chip} />
                </Typography>
              </Grid>
              <Grid item>
              <Typography component="h6" onClick={()=> setSelectedCourse("CS")}>
                  <Chip label={"CS"} className={selectedCourse === "CS" ? classes.chipSelected : classes.chip} />
                </Typography>
              </Grid>
              <Grid item>
              <Typography component="h6" onClick={()=> setSelectedCourse("information science")}>
                  <Chip label={"information science"} className={selectedCourse === "information science" ? classes.chipSelected : classes.chip} />
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Box py={1}>
          <Container>
            <Typography variant="h6">Year or Sem</Typography>
          </Container>
        </Box>
        <Divider />
        <Box py={2}>
          <Container>
            <Grid container spacing={2}>
              <Grid item>
                <Typography component="h6" onClick={()=> setSelectedYearOrSem("1st Sem")}>
                  <Chip label={"1st Sem"} className={selectedYearOrSem === "1st Sem" ? classes.chipSelected : classes.chip} />
                </Typography>
              </Grid>
              <Grid item>
              <Typography component="h6" onClick={()=> setSelectedYearOrSem("2nd Sem")}>
                  <Chip label={"2nd Sem"} className={selectedYearOrSem === "2nd Sem" ? classes.chipSelected : classes.chip} />
                </Typography>
              </Grid>
              <Grid item>
              <Typography component="h6" onClick={()=> setSelectedYearOrSem("3rd Sem")}>
                  <Chip label={"3rd Sem"} className={selectedYearOrSem === "3rd Sem" ? classes.chipSelected : classes.chip} />
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Box pt={2} pb={3}>
          <Container>
            <Grid container alignItems="center" justify="space-around">
              <Grid item>
                <Button
                onClick={()=> clear()}
                  variant="contained"
                  size="large"
                  endIcon={<CloseIcon />}
                  className={classes.clearButton}
                >
                  <Typography variant="body1" component="h6">
                    Clear
                  </Typography>
                </Button>
              </Grid>
              <Grid item>
                <Button
                onClick={() => setCt(ct+1)}
                  variant="contained"
                  size="large"
                  endIcon={<CheckIcon />}
                  className={classes.applyButton}
                >
                  <Typography variant="body1" component="h6">
                    Apply
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </div>
  );
}
