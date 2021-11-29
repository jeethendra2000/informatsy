import { Box, Button, Grid, InputBase, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";

import axios from "axios";

const useStyles = makeStyles((theme) => ({
  inputField: {
    border: "2px dashed #6d78fe",
    borderRadius: "10px",
    color: "#585858",
    padding: theme.spacing(2),
  },
  error: {
    border: "2px dashed red",
    borderRadius: "10px",
    color: "#585858",
    padding: theme.spacing(2),
  },
}));

export default function Contact() {
  const classes = useStyles();

  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [message, setMessage] = useState("");

  const [fullNameError, setFullNameError] = useState(false);
  const [emailAddressError, setEmailAddressError] = useState(false);
  const [messageError, setMessageError] = useState(false);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (fullName && emailAddress && message) {
      let data = {
        fullName: fullName,
        emailAddress: emailAddress,
        message: message,
      };
      axios
        .post(`${process.env.React_App_SERVER_API}/api/contactForm/`, data)
        .then((res) => {
          setFullName("");
          setEmailAddress("");
          setMessage("");

          alert("Submitted successfully!");
        })
        .catch((err) => {
          alert("Error! Please check your Credentials");
        });
    }

    setFullNameError(fullName === "" ? true : false);
    setEmailAddressError(emailAddress === "" ? true : false);
    setMessageError(message === "" ? true : false);
  };

  return (
    <Box py={5} mr={1} my={{ md: 5 }}>
      <Grid container spacing={5}>
        <Grid item md={6}>
          <Box ml={{ md: 6 }} pl={{ md: 3 }}>
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
                   +91 7676373298 / 6363255811
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
          <Box mr={{ xs: 1 }}>
            <Grid
              justify="center"
              container
              component="form"
              noValidate
              autoComplete="off"
              onSubmit={handleContactSubmit}
              spacing={3}
            >
              <Grid item xs={12} md={10}>
                <InputBase
                  placeholder="Full name"
                  className={fullNameError ? classes.error : classes.inputField}
                  variant="outlined"
                  fullWidth
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} md={10}>
                <InputBase
                  placeholder="Email address"
                  className={
                    emailAddressError ? classes.error : classes.inputField
                  }
                  variant="outlined"
                  fullWidth
                  value={emailAddress}
                  onChange={(e) => setEmailAddress(e.target.value)}
                />
              </Grid>

              <Grid item xs={12} md={10}>
                <InputBase
                  placeholder="Type your message"
                  className={messageError ? classes.error : classes.inputField}
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Grid>

              <Grid item xs={12} md={10}>
                <Button
                  size="small"
                  type="submit"
                  variant="contained"
                  color="primary"
                >
                  <Typography variant="h6">Submit Message</Typography>
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
