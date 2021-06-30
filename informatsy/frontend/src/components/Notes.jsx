import React, { useEffect } from "react";
import { Box, Grid } from "@material-ui/core";
import SearchAndFilter from "./resourcesComponents/SearchAndFilter";
import ResourceCard from "./resourcesComponents/ResourceCard";

import axios from "axios";
import { useState } from "react";

export default function Notes() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/notes/").then((res) => {
      const data = res.data;
      setData(data);
    });
  }, []);

  return (
    <div>
      <Box mr={4} py={3}>
        <SearchAndFilter />
      </Box>
      <Box mr={3} ml={1} py={2}>
        <Grid container spacing={2} alignItems="center">
          {data.map((note) => (
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
