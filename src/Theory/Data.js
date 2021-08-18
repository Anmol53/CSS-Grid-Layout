import gridLine from "./../images/gridLine.png";
import gridCell from "./../images/gridCell.png";
import gridTrack from "./../images/gridTrack.png";
import gridArea from "./../images/gridArea.png";
import container from "./../images/container.png";

const slides = [
  {
    title: "Grid Container",
    text:
      "The element on which display: grid is applied. It’s the direct parent of all the grid items. In this example container is the grid container.",
    html: `<div className="grid-container heighlight"><div className="item"></div><div className="item"></div><div className="item"></div><div className="item"></div><div className="item"></div><div className="item"></div></div>`
  },
  {
    title: "Grid Line",
    text:
      "The dividing lines that make up the structure of the grid. They can be either vertical (“column grid lines”) or horizontal (“row grid lines”) and reside on either side of a row or column. Here the yellow line is an example of a column grid line.",
    img: gridLine
  },
  {
    title: "Grid Item",
    text:
      "The children (i.e. direct descendants) of the grid container. Here the item elements are grid items, but sub-item isn’t.",
    html: `<div className="grid-container"><div className="item heighlight"></div><div className="item heighlight"></div><div className="item heighlight"></div><div className="item heighlight"></div><div className="item heighlight"></div><div className="item heighlight"></div></div>`
  },
  {
    title: "Grid Cell",
    text:
      "The space between two adjacent row and two adjacent column grid lines. It’s a single “unit” of the grid. Here’s the grid cell between row grid lines 1 and 2, and column grid lines 2 and 3.",
    img: gridCell
  },
  {
    title: "Grid Track",
    text:
      "The space between two adjacent grid lines. You can think of them like the columns or rows of the grid. Here’s the grid track between the second and third row grid lines.",
    img: gridTrack
  },
  {
    title: "Grid Area",
    text:
      "The total space surrounded by four grid lines. A grid area may be composed of any number of grid cells. Here’s the grid area between row grid lines 1 and 3, and column grid lines 1 and 3.",
    img: gridArea
  }
];

export default slides;
