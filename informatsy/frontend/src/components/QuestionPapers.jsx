import React, { useEffect, useState } from "react";
import { Box, Grid } from "@material-ui/core";
import SearchAndFilter from "./resourcesComponents/SearchAndFilter";
import ResourceCard from "./resourcesComponents/ResourceCard";
import NoResource from "./resourcesComponents/NoResource";
import { CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";

import axios from "axios";
import { authAxios } from "../Authaxios";
const useStyles = makeStyles((theme) => ({
  loader: {
    height: "50vh",
  },
  loaderProgress: {
    position: "absolute",
    left: "50%",
    top: "30%",
    transform: "translate(-50%,-50%)",
  },
}));
export default function QuestionPapers() {
  const classes = useStyles();
  const [allData, setAllData] = useState([]);
  const [data, setData] = useState([]);
  const [defaultSortOrder, setDefaultSortOrder] = useState("");
  const [loading, setLoading] = useState(false);
  const [defaultSelectedCourse, setDefaultSelectedCourse] = useState("");
  const [defaultSelectedYearOrSem, setDefaultSelectedYearOrSem] = useState("");

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

  const onFilter = (selectedCourse, selectedYearOrSem, sortOrder) => {
    setDefaultSelectedCourse(selectedCourse);
    setDefaultSelectedYearOrSem(selectedYearOrSem);
    setDefaultSortOrder(sortOrder);
  };

  const onSort = () => {
    data.sort(function (a, b) {
      let x = a.subjectName.toLowerCase();
      let y = b.subjectName.toLowerCase();
      if (x < y) return -1;
      if (x > y) return 1;
      return 0;
    });
  };

  const onReverseSort = () => {
    data.sort(function (a, b) {
      let x = a.subjectName.toLowerCase();
      let y = b.subjectName.toLowerCase();
      if (x < y) return 1;
      if (x > y) return -1;
      return 0;
    });
  };

  useEffect(() => {
    setLoading(true);
    authAxios
      .get(`questionPapers/`)
      .then((res) => {
        const data = res.data;
        setAllData(data);
        setLoading(false);
        if (defaultSelectedCourse === "" || defaultSelectedYearOrSem === "") {
          setData(data);
        } else {
          setData(
            data.filter(
              (dt) =>
                dt.course === defaultSelectedCourse &&
                dt.yearOrSem === defaultSelectedYearOrSem
            )
          );
        }
      })
      .catch((err) => console.log(err));
  }, [defaultSelectedCourse, defaultSelectedYearOrSem]);

  useEffect(() => {}, [defaultSortOrder]);

  return !loading ? (
    <div>
      <Box mr={4} py={3}>
        <SearchAndFilter
          onSearch={onSearch}
          onFilter={onFilter}
          defaultSortOrder={defaultSortOrder}
          onSort={onSort}
          onReverseSort={onReverseSort}
          defaultSelectedCourse={defaultSelectedCourse}
          defaultSelectedYearOrSem={defaultSelectedYearOrSem}
        />
      </Box>
      <Box mr={3} ml={1} py={2}>
        <Grid container spacing={2} alignItems="center">
          {data.length === 0 ? (
            <NoResource />
          ) : (
            data.map((qp) => (
              <Grid item xs={12} sm={6} md={4} key={qp.id}>
                <ResourceCard
                  subjectName={qp.subjectName}
                  subjectCode={qp.subjectCode}
                  yearOrSem={qp.yearOrSem}
                  course={qp.course}
                  documentURL={qp.documentURL}
                />
              </Grid>
            ))
          )}
        </Grid>
      </Box>
    </div>
  ) : (
    <div className={classes.loader}>
      <span className={classes.loaderProgress}>
        <CircularProgress size="2rem" />
      </span>
    </div>
  );
}
