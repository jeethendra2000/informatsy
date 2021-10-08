import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import "./App.css";
import Navbar from "./components/layoutsComponent/Navbar";
import Login from "./components/Login";
import PopupAccount from "./components/PopupAccount";
import HomePage from "./components/HomePage";
import ResourcePage from "./components/ResourcePage";
import Syllabus from "./components/Syllabus";
import Notes from "./components/Notes";
import QuestionPapers from "./components/QuestionPapers";
import About from "./components/layoutsComponent/About";
import Notifications from "./components/Notifications";
import Contact from "./components/layoutsComponent/Contact";
import Features from "./components/layoutsComponent/Features";
import MyProfile from "./components/profileComponents/MyProfile";

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

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/popup" component={PopupAccount} />
            <Route exact path="/profile" component={MyProfile} />
            <Route exact path="/notifications" component={Notifications} />
            <Navbar>
              <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/" component={HomePage} />
                <Route exact path="/resources" component={ResourcePage} />
                <Route exact path="/resources/syllabus" component={Syllabus} />
                <Route exact path="/resources/notes" component={Notes} />
                <Route
                  exact
                  path="/resources/questionPapers"
                  component={QuestionPapers}
                />
                <Route exact path="/features" component={Features} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/about" component={About} />
                <Redirect to="/"> </Redirect>
              </Switch>
            </Navbar>
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}
export default App;
