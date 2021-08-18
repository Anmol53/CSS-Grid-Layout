import React from "react";
import "./styles.css";

export default function InputCode(props) {
  return (
    <div contenteditable={"true"}>
      <pre>{props.text}</pre>
    </div>
  );
}
