import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import PopupAccount from "./components/PopupAccount";
import Home from "./components/Home";
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/popup" component={PopupAccount} />
          </Switch>
        </Router>
      </div>
    );
  }
}
