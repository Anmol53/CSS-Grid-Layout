import React, { useState } from "react";
import "./styles.css";
import Examples from "./Examples";
import Theory from "./Theory";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Link to="/" className="btnC">
        <i className="fas fa-home"></i>
      </Link>
      <Switch>
        <Route exact path="/">
          <div className="home-page">
            <h1>CSS Grid Layout</h1>
            <div>
              <Link to="/theory" className="btnC">
                Theory
              </Link>
              <Link to="/examples" className="btnC">
                Examples
              </Link>
            </div>
          </div>
        </Route>
        <Route exact path="/examples">
          <Examples />
        </Route>
        <Route exact path="/theory">
          <Theory />
        </Route>
      </Switch>
    </Router>
  );
}
