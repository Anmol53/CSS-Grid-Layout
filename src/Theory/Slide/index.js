import React from "react";
import "./styles.css";
import { Parser } from "html-to-react";

export default function Slide(props) {
  const ParserObj = new Parser();
  return (
    <div className="theory-slide-container">
      <div className="theory-container">
        <h3>{props.data.title}</h3>
        <p>{props.data.text}</p>
      </div>
      <div className="image-container">
        {props.data.img ? (
          <img src={props.data.img} alt={`${props.data.title} image`} />
        ) : (
          <div>{ParserObj.parse(props.data.html)}</div>
        )}
      </div>
    </div>
  );
}
