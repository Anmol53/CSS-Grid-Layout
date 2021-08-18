import React from "react";
import "./styles.css";
import Input from "./../Input";
import Output from "./../Output";

export default function Slide(props) {
  return (
    <div className="main-container">
      <Input data={props.data} />
      <Output
        html={props.data.html}
        cls={props.data.class}
        key={`html_${props.idx}_${Math.random() * 10}`}
      />
    </div>
  );
}
