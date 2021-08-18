import React from "react";
import "./styles.css";

export default function Properties(props) {
  return (
    <div class="properties-container">
      <div class="parent">
        <h3>Grid Container Properties</h3>
        <ul>
          <li>display</li>
          <li>grid-template-columns</li>
          <li>grid-template-rows</li>
          <li>grid-template-areas</li>
          <li>grid-template</li>
          <li>grid-column-gap</li>
          <li>grid-row-gap</li>
          <li>grid-gap</li>
          <li>justify-items</li>
          <li>align-items</li>
          <li>place-items</li>
          <li>justify-content</li>
          <li>align-content</li>
          <li>place-content</li>
          <li>grid-auto-columns</li>
          <li>grid-auto-rows</li>
          <li>grid-auto-flow</li>
          <li>grid</li>
        </ul>
      </div>
      <div class="child">
        <h3>Grid Items Properties</h3>
        <ul>
          <li>grid-column-start</li>
          <li>grid-column-end</li>
          <li>grid-row-start</li>
          <li>grid-row-end</li>
          <li>grid-column</li>
          <li>grid-row</li>
          <li>grid-area</li>
          <li>justify-self</li>
          <li>align-self</li>
          <li>place-self</li>
        </ul>
      </div>
      <div class="diagram">
        <div className="diagram-container">
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
          <div className="item"></div>
        </div>
      </div>
    </div>
  );
}
