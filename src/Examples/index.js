import React, { useState } from "react";
import "./styles.css";
import Slide from "./Slide";
import Data from "./Data";

export default function Examples() {
  const [currSlide, setCurrSlide] = useState(0);
  const prev = () => {
    setCurrSlide(currSlide - 1);
  };
  const next = () => {
    setCurrSlide(currSlide + 1);
  };
  return (
    <div className="main">
      <h1>{Data[currSlide].ex_no}</h1>
      <Slide key={currSlide} idx={currSlide} data={Data[currSlide]} />
      <div>
        <button onClick={prev} disabled={currSlide === 0} className="btnS">
          Prev
        </button>
        <button
          onClick={next}
          disabled={currSlide >= Data.length - 1}
          className="btnS"
        >
          Next
        </button>
      </div>
    </div>
  );
}
