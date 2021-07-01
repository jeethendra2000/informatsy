import React from "react";
import SearchAndFilter from "./resourcesComponents/SearchAndFilter";
import { Box, Grid } from "@material-ui/core";
import ResourceCard from "./resourcesComponents/ResourceCard";

import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function QuestionPapers() {
  const [data, setData] = useState([]);
  const [defaultSearchData, setDefaultSearchData] = useState("");
  const [defaultSelectedCourse, setDefaultSelectedCourse] = useState("");
  const [defaultSelectedYearOrSem, setDefaultSelectedYearOrSem] = useState("");

  const onSearch = (searchData) => {
    setDefaultSearchData(searchData);
  };

  const onFilter = (selectedCourse, selectedYearOrSem) => {
    setDefaultSelectedCourse(selectedCourse);
    setDefaultSelectedYearOrSem(selectedYearOrSem);
  };

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/questionPapers/").then((res) => {
      const data = res.data;
      setData(data);
    });
  }, []);

  return (
    <div>
      <Box mr={4} py={3}>
        <SearchAndFilter onSearch={onSearch} onFilter={onFilter} />
      </Box>
      <Box mr={3} ml={1} py={2}>
        <Grid container spacing={2} alignItems="center">
          {data.map((qp) => (
            <Grid item xs={12} sm={6} md={4} key={qp.id}>
              <ResourceCard
                subjectName={qp.subjectName}
                subjectCode={qp.subjectCode}
                yearOrSem={qp.yearOrSem}
                course={qp.course}
                documentURL={qp.documentURL}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
