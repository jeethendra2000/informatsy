import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Typography } from "@material-ui/core";
import SearchAndFilter from "./resourcesComponents/SearchAndFilter";
import ResourceCard from "./resourcesComponents/ResourceCard";
import noResultFound from "../Assets/noResultFound.jpg";

import axios from "axios";
import { useState } from "react";
const useStyles = makeStyles((theme) => ({
  icon: {
    maxWidth: "95%",
  },
}));
export default function Notes() {
  const classes = useStyles();

  const [allData, setAllData] = useState([]);
  const [data, setData] = useState([]);
  const [defaultSelectedCourse, setDefaultSelectedCourse] =
    useState("CSE (BE)");
  const [defaultSelectedYearOrSem, setDefaultSelectedYearOrSem] =
    useState("6th Sem");

  const onSearch = (searchData) => {
    setData(
      allData.filter(
        (d) =>
          (d.subjectName.toLowerCase().includes(searchData.toLowerCase()) ||
            d.subjectCode.toLowerCase().includes(searchData.toLowerCase())) &&
          d.course === defaultSelectedCourse &&
          d.yearOrSem === defaultSelectedYearOrSem
      )
    );
  };
  const onFilter = (selectedCourse, selectedYearOrSem) => {
    setDefaultSelectedCourse(selectedCourse);
    setDefaultSelectedYearOrSem(selectedYearOrSem);
    setData(
      allData.filter(
        (data) =>
          data.course === selectedCourse && data.yearOrSem === selectedYearOrSem
      )
    );
  };

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/notes/")
      .then((res) => {
        const data = res.data;
        setAllData(data);
        setData(
          data.filter(
            (dt) =>
              dt.course === defaultSelectedCourse &&
              dt.yearOrSem === defaultSelectedYearOrSem
          )
        );
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {}, [data, defaultSelectedCourse, defaultSelectedYearOrSem]);

  const noResource = () => (
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
  );

  return (
    <div>
      <Box mr={4} py={3}>
        <SearchAndFilter
          onSearch={onSearch}
          onFilter={onFilter}
          defaultSelectedCourse={defaultSelectedCourse}
          defaultSelectedYearOrSem={defaultSelectedYearOrSem}
        />
      </Box>
      <Box mr={3} ml={1} py={2}>
        <Grid container spacing={2} alignItems="center">
          {data.length === 0
            ? noResource()
            : data.map((note) => (
                <Grid item xs={12} sm={6} md={4} key={note.id}>
                  <ResourceCard
                    subjectName={note.subjectName}
                    subjectCode={note.subjectCode}
                    yearOrSem={note.yearOrSem}
                    course={note.course}
                    documentURL={note.documentURL}
                  />
                </Grid>
              ))}
        </Grid>
      </Box>
    </div>
  );
}
