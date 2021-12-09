import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import ReactGA from "react-ga";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import "./App.css";
import Navbar from "./components/layoutsComponent/Navbar";
import Login from "./components/Login";
import PopupAccount from "./components/PopupAccount";
import HomePage from "./components/HomePage";
import ResourcePage from "./components/ResourcePage";
import Syllabus from "./components/Syllabus";
import { UserContext } from "./UserContexapi";
import Signup from "./components/Signup";
import { LinkedInPopUp } from "react-linkedin-login-oauth2";
import axios from "axios";
import Notes from "./components/Notes";
import QuestionPapers from "./components/QuestionPapers";
import About from "./components/layoutsComponent/About";
import IccHome from "./components/ICC/IccHome";
import AboutUs from "./components/ICC/AboutUs";
import Notifications from "./components/Notifications";
import Explore from "./components/exploreComponent/ExploreHome";
import Features from "./components/layoutsComponent/Features";
import ActivationPage from "./components/ActivateAccount";
import MyProfile from "./components/profileComponents/MyProfile";
import RouteChangeTracker from "./RouteChangeTracker";
import Cookies from "js-cookie";
import ForgotPass from "./components/Forgot";
import ResetPassword from "./components/ResetPassword";
import Attendance from "./components/exploreComponent/Attendance";
// Custom theme of Informatsy
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#6D78FE",
      dark: "#1876d2",
    },
    // primary:purple,
    secondary: {
      main: "#ff7e79",
    },
    divider: "rgba(0,0,0,0.3)",
  },
  typography: {
    fontFamily: "Montserrat",
    fontWeightLight: 400,
    fontWeightRegular: 600,
    fontWeightMedium: 700,
    fontWeightBold: 800,
    button: {
      textTransform: "capitalize",
      textDecoration: "none",
    },
  },
});

function App() {
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDQVk4b0MbLQ4YnmpGbq8MPzUDXFsZ3yeY",
    authDomain: "informatsy-1606997742068.firebaseapp.com",
    projectId: "informatsy-1606997742068",
    storageBucket: "informatsy-1606997742068.appspot.com",
    messagingSenderId: "1044436937196",
    appId: "1:1044436937196:web:cc8e71b50aae842df2f8c9",
    measurementId: "G-G6CXLGP1CN",
  };
  const TRACKING_ID = "G-3CEZ1R6HBT";
  // Initialize Firebase

  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    // if ("serviceWorker" in navigator) {
    //   console.log("registered");
    //   window.addEventListener("load", () => {
    //     navigator.serviceWorker.register("./sw.js");
    //   });
    // }

    ReactGA.initialize(TRACKING_ID);
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  //init for google analytics
  // YOUR_OWN_TRACKING_ID
  const user = React.useContext(UserContext);
  //------------handle for google sign in-------------

  //-------------for google login automatic one tap--------------

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <RouteChangeTracker />
          <Switch>
            <Route exact path="/login" component={Login} /> 
            <Route exact path="/signup" component={Signup} /> 
            <Route exact path="/activateAccount" component={ActivationPage} /> 
            <Route exact path="/linkedin" component={LinkedInPopUp} /> 
            <Route exact path="/popup" component={PopupAccount} /> 
            <Route exact path="/profile" component={MyProfile} /> 
            <Route exact path="/notifications" component={Notifications} /> 
            <Route exact path="/accounts/forgot" component={ForgotPass} /> 
            <Route
              exact
              path="/accounts/resetpassword"
              component={ResetPassword}
            /> 
            <Navbar>
              <Switch>
                <Route exact path="/" component={HomePage} /> 
                <Route exact path="/resources" component={ResourcePage} /> 
                <Route exact path="/resources/syllabus" component={Syllabus} /> 
                <Route exact path="/resources/notes" component={Notes} /> 
                <Route
                  exact
                  path="/resources/questionPapers"
                  component={QuestionPapers}
                /> 
                <Route exact path="/ICC" component={IccHome} /> 
                <Route exact path="/explore" component={Explore} /> 
                <Route exact path="/explore/attendance" component={Attendance} /> 
                <Route exact path="/about" component={AboutUs} /> 
                {/* <Redirect to="/"> </Redirect> */} 
              </Switch> 
            </Navbar> 
          </Switch> 
        </Router> 
      </ThemeProvider> 
    </div>
  );
}
export default App;
