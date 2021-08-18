import React from "react";
import "./styles.css";
import Terminology from "./Terminology";
import Properties from "./Properties";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/theory">
          <div className="theory-page">
            <h1>CSS Grid Layout</h1>
            <div>
              <Link
                to={`${useLocation().pathname}/terminology`}
                className="btnC"
              >
                Terminologies
              </Link>
              <Link
                to={`${useLocation().pathname}/properties`}
                className="btnC"
              >
                Properties
              </Link>
            </div>
          </div>
        </Route>
        <Route exact path={`${useLocation().pathname}/terminology`}>
          <Terminology />
        </Route>
        <Route exact path={`${useLocation().pathname}/properties`}>
          <Properties />
        </Route>
      </Switch>
    </Router>
  );
}
