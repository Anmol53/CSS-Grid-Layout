import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import "./styles.css";
import InputCode from "./InputCode";

export default function Input(props) {
  return (
    <Router>
      <div className="containerIC">
        <div>
          <Link to={`${useLocation().pathname}/html`} className="btnC">
            HTML
          </Link>
          <Link to={`${useLocation().pathname}/css`} className="btnC">
            CSS
          </Link>
        </div>
        <Switch>
          <Route exact path={`${useLocation().pathname}/html`}>
            <InputCode key={`html_${props.idx}`} text={props.data.html} />
          </Route>
          <Route exact path={`${useLocation().pathname}/css`}>
            <InputCode key={`css_${props.idx}`} text={props.data.css} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
