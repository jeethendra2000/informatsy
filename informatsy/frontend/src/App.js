import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

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
    divider:"rgba(0,0,0,0.3)",
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
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/popup" component={PopupAccount} />
            <Navbar>
              <Switch>
                <Route exact path="/login" component={Login} />
                <Route exact path="/" component={HomePage} />
                <Route exact path="/resources" component={ResourcePage}/>
                <Route exact path="/resources/syllabus" component={Syllabus} />
                <Route exact path="/resources/notes" component={Notes} />
                <Route exact path="/resources/questionPapers" component={QuestionPapers} />
                <Redirect to='/'> </Redirect>
              </Switch>
            </Navbar>
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}
export default App;
