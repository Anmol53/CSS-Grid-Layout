import React, { useState } from "react";
import "./styles.css";
import Slide from "./../Slide";
import Data from "./../Data";

export default function Terminology() {
  const [currSlide, setCurrSlide] = useState(0);
  const prev = () => {
    setCurrSlide(currSlide - 1);
  };
  const next = () => {
    setCurrSlide(currSlide + 1);
  };
  return (
    <div className="main">
      <h1>{currSlide + 1}</h1>
      <Slide key={currSlide} idx={currSlide} data={Data[currSlide]} />
      <div>
        <button
          onClick={prev}
          data-testid="button-prev"
          disabled={currSlide === 0}
          className="btnS"
        >
          Prev
        </button>
        <button
          onClick={next}
          data-testid="button-next"
          disabled={currSlide >= Data.length - 1}
          className="btnS"
        >
          Next
        </button>
      </div>
    </div>
  );
}
