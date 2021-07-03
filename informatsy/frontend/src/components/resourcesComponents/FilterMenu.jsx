import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import { Container, Grid, Typography, Box, Button } from "@material-ui/core";
import Chip from "@material-ui/core/Chip";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import axios from "axios";

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

export default function FilterMenu({
  toggle,
  onFilter,
  defaultSortOrder,
  onSort,
  onReverseSort,
  defaultSelectedCourse,
  defaultSelectedYearOrSem,
}) {
  const classes = useStyles();
  const [sortOrder, setSortOrder] = useState(defaultSortOrder);
  const [selectedCourse, setSelectedCourse] = useState(defaultSelectedCourse);
  const [selectedYearOrSem, setSelectedYearOrSem] = useState(
    defaultSelectedYearOrSem
  );
  const [courses, setCourses] = useState([]);
  const [yearOrSems, setYearOrSems] = useState([]);

  const clear = () => {
    setSelectedCourse("");
    setSelectedYearOrSem("");
    setSortOrder("");
  };
  const handleApply = () => {
    toggle();
    onFilter(selectedCourse, selectedYearOrSem, sortOrder);
  };

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/course/").then((res) => {
      const data = res.data;
      setCourses(data);
    });
    axios.get("http://127.0.0.1:8000/api/yearOrSem/").then((res) => {
      const data = res.data;
      setYearOrSems(data);
    });
  }, []);
  return (
    <div>
      <Box bgcolor="#F8F8F8">
        <Box py={1}>
          <Container>
            <Typography variant="h6">Sort by</Typography>
          </Container>
        </Box>

        <Divider />

        <Box py={2}>
          <Container>
            <Grid container spacing={2}>
              <Grid item>
                <Typography
                  component="h6"
                  onClick={() => {
                    setSortOrder("ascending");
                    onSort();
                  }}
                >
                  <Chip
                    label="Order : A to Z"
                    className={
                      sortOrder === "ascending"
                        ? classes.chipSelected
                        : classes.chip
                    }
                  />
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  component="h6"
                  onClick={() => {
                    setSortOrder("descending");
                    onReverseSort();
                  }}
                >
                  <Chip
                    label="Order : Z to A"
                    className={
                      sortOrder === "descending"
                        ? classes.chipSelected
                        : classes.chip
                    }
                  />
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Box py={1}>
          <Container>
            <Typography variant="h6">Courses</Typography>
          </Container>
        </Box>

        <Divider />
        <Box py={2}>
          <Container>
            <Grid container spacing={2}>
              {courses.map((course) => (
                <Grid item key={course.courseName}>
                  <Typography
                    component="h6"
                    onClick={() => setSelectedCourse(course.courseName)}
                  >
                    <Chip
                      label={course.courseName}
                      className={
                        selectedCourse === course.courseName
                          ? classes.chipSelected
                          : classes.chip
                      }
                    />
                  </Typography>
                </Grid>
              ))}
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
              {yearOrSems.map((yearOrSem) => (
                <Grid item key={yearOrSem.yearOrSemName}>
                  <Typography
                    component="h6"
                    onClick={() =>
                      setSelectedYearOrSem(yearOrSem.yearOrSemName)
                    }
                  >
                    <Chip
                      label={yearOrSem.yearOrSemName}
                      className={
                        selectedYearOrSem === yearOrSem.yearOrSemName
                          ? classes.chipSelected
                          : classes.chip
                      }
                    />
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
        <Box pt={2} pb={3}>
          <Container>
            <Grid container alignItems="center" justify="space-around">
              <Grid item>
                <Button
                  onClick={() => clear()}
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
                  onClick={() => handleApply()}
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
