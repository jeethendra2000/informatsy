import { makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Box, Paper, Grid, Typography } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import axios from "axios";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "auto",
    maxWidth: "300px",
  },
  card: {
    borderRadius: "30px",
  },
}));

function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, open } = props;

  const handleClose = () => {
    onClose(false);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
      <List>
        <ListItem button onClick={() => alert("clicked")}>
          <ListItemText primary={"email"} />
        </ListItem>
        <ListItem
          autoFocus
          button
          onClick={() => alert("clicked")}
        >
          <ListItemText primary="Add account" />
        </ListItem>
      </List>
    </Dialog>
  );
}

export default function Syllabus() {
  const classes = useStyles();
  let [data, setData] = useState([]);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };


  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/syllabus/").then((res) => {
      const data = res.data;
      setData(data);
    });
  }, []);

  return (
    
    <Box mr={2} pb={{ xs: 3, sm: 5, md: 6 }}>
      <Box textAlign="center" pb={4}>
        <Typography variant="h4" component="h5" gutterBottom>
          Branches
        </Typography>
      </Box>
      <Grid container spacing={5}>
        {data.map((item) => (
          <Grid item xs={12} sm={6} key={item.branchName}>
            <Box textAlign="center">
              <Paper
                onClick={() => {
                  console.log(item.branchName);
                }}
                className={classes.card}
                elevation={5}
              >
                <img className={classes.root} src={item.branchImage} />
                <Typography variant="h6" componet="h5" gutterBottom>
                  {item.branchName}
                </Typography>
              </Paper>
            </Box>
          </Grid>
        ))}
      </Grid>
      
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open simple dialog
      </Button>
      <SimpleDialog open={open} onClose={handleClose} />
    </Box>
  );
}
