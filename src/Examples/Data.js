const slides = [
  {
    ex_no: "01 (a)",
    class: "",
    html: `<div className="ex1 parent blue">\n  <div className="box pink" contenteditable="true">\n    Child\n  </div>\n</div>`,
    css: `.parent {\n  display: grid;\n  place-items: center;\n}`
  },
  {
    ex_no: "01 (b)",
    class: "center",
    html: `<div className="ex1 parent blue">\n  <div className="box pink" contenteditable="true">\n    Child\n  </div>\n</div>`,
    css: `.parent {\n  display: grid;\n  place-items: center;\n}`
  },
  {
    ex_no: "02 (a)",
    class: "",
    html: `<div class="ex2 parent">\n  <header className="blue ex2-spacing" contenteditable>\n    Header\n  </header>\n  <main class="coral ex2-spacing" contenteditable>\n    Main\n  </main>\n  <footer class="purple ex2-spacing" contenteditable>\n    Footer Content\n  </footer>\n</div>`,
    css: `.parent {\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n}`
  },
  {
    ex_no: "02 (b)",
    class: "center",
    html: `<div class="ex2 parent">\n  <header className="blue ex2-spacing" contenteditable>\n    Header\n  </header>\n  <main class="coral ex2-spacing" contenteditable>\n    Main\n  </main>\n  <footer class="purple ex2-spacing" contenteditable>\n    Footer Content\n  </footer>\n</div>`,
    css: `.parent {\n  display: grid;\n  grid-template-rows: auto 1fr auto;\n}`
  },
  {
    ex_no: "03 (a)",
    class: "center",
    html: `<div class="ex3 parent white">\n  <div class="span-12-from-1 purple ex3-spacing">\n    Span : 12<br/>Start : 1\n  </div>\n  <div class="span-6-from-1 blue ex3-spacing">\n    Span : 6<br/>Start : 1\n  </div>\n  <div class="span-4-from-5 pink ex3-spacing">\n    Span : 4<br/>Start : 5\n  </div>\n  <div class="span-2-from-3 yellow ex3-spacing">\n    Span : 2<br/>Start : 3\n  </div>\n</div>`,
    css: `.parent{\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n}\n.span-12-from-1 {\n  grid-column: 1 / span 12;\n}\n\n.span-6-from-1 {\n  grid-column: 1 / span 6;\n}\n\n.span-4-from-5 {\n  grid-column: 5 / span 4;\n}\n\n.span-2-from-3 {\n  grid-column: 3 / span 2;\n}\n`
  },
  {
    ex_no: "03 (b)",
    class: "center",
    html: `<div class="ex3 parent white">\n  <div class="span-1-13 purple ex3-spacing">\n    Start : 1<br/>End : 13\n  </div>\n  <div class="span-1-7 blue ex3-spacing">\n    Start : 1<br/>End : 7\n  </div>\n  <div class="span-5-9 pink ex3-spacing">\n    Start : 5<br/>End : 9\n  </div>\n  <div class="span-3-5 yellow ex3-spacing">\n    Start : 3<br/>End : 5\n  </div>\n</div>`,
    css: `.parent{\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n}\n.span-1-13 {\n  grid-column: 1 / 13;\n}\n\n.span-1-7 {\n  grid-column: 1 / 7;\n}\n\n.span-5-9 {\n  grid-column: 5 / 9;\n}\n\n.span-3-5 {\n  grid-column: 3 / 5;\n}\n`
  },
  {
    ex_no: "03 (c)",
    class: "center",
    html: `<div class="ex3 parent white">\n  <div class="span-12-from-1 purple ex3-spacing">\n    Span : 12<br/>Start : 1\n  </div>\n  <div class="span-6-from-1 blue ex3-spacing">\n    Span : 6<br/>Start : 1\n  </div>\n  <div class="span-4-from-5 pink ex3-spacing">\n    Span : 4<br/>Start : 5\n  </div>\n  <div class="span-2-from-9 yellow ex3-spacing">\n    Span : 2<br/>Start : 9\n  </div>\n</div>`,
    css: `.parent{\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n}\n.span-12-from-1 {\n  grid-column: 1 / span 12;\n}\n\n.span-6-from-1 {\n  grid-column: 1 / span 6;\n}\n\n.span-4-from-5 {\n  grid-column: 5 / span 4;\n}\n\n.span-2-from-9 {\n  grid-column: 9 / span 2;\n}\n`
  },
  {
    ex_no: "03 (d)",
    class: "center",
    html: `<div class="ex3 parent white">\n  <div class="span-1-13 purple ex3-spacing">\n    Start : 1<br/>End : 13\n  </div>\n  <div class="span-1-7 blue ex3-spacing">\n    Start : 1<br/>End : 7\n  </div>\n  <div class="span-5-9 pink ex3-spacing">\n    Start : 5<br/>End : 9\n  </div>\n  <div class="span-9-11 yellow ex3-spacing">\n    Start : 9<br/>End : 11\n  </div>\n</div>`,
    css: `.parent{\n  display: grid;\n  grid-template-columns: repeat(12, 1fr);\n}\n.span-1-13 {\n  grid-column: 1 / 13;\n}\n\n.span-1-7 {\n  grid-column: 1 / 7;\n}\n\n.span-5-9 {\n  grid-column: 5 / 9;\n}\n\n.span-9-11 {\n  grid-column: 9 / 11;\n}\n`
  },
  {
    ex_no: "04 : The power of Grid",
    class: "center",
    html: `<div class="ex4 parent white">\n  <div class="purple ex4-spacing">\n    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse aliquid laboriosam minima ex praesentium recusandae reprehenderit unde sit tempore atque aut commodi quae expedita corrupti, dignissimos architecto. Eius, maiores ad?\n  </div>\n  <div class="purple ex4-spacing">\n    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse aliquid laboriosam minima ex praesentium recusandae reprehenderit unde sit tempore atque aut commodi quae expedita corrupti, dignissimos architecto. Eius, maiores ad?\n  </div>\n  <div class="purple ex4-spacing">\n    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse aliquid laboriosam minima ex praesentium recusandae reprehenderit unde sit tempore atque aut commodi quae expedita corrupti, dignissimos architecto. Eius, maiores ad?\n  </div>\n  <div class="purple ex4-spacing">\n    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse aliquid laboriosam minima ex praesentium recusandae reprehenderit unde sit tempore atque aut commodi quae expedita corrupti, dignissimos architecto. Eius, maiores ad?\n  </div>\n  <div class="purple ex4-spacing">\n    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse aliquid laboriosam minima ex praesentium recusandae reprehenderit unde sit tempore atque aut commodi quae expedita corrupti, dignissimos architecto. Eius, maiores ad?\n  </div>\n  <div class="purple ex4-spacing">\n    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse aliquid laboriosam minima ex praesentium recusandae reprehenderit unde sit tempore atque aut commodi quae expedita corrupti, dignissimos architecto. Eius, maiores ad?\n  </div>\n  <div class="purple ex4-spacing">\n    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse aliquid laboriosam minima ex praesentium recusandae reprehenderit unde sit tempore atque aut commodi quae expedita corrupti, dignissimos architecto. Eius, maiores ad?\n  </div>\n  <div class="purple ex4-spacing">\n    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse aliquid laboriosam minima ex praesentium recusandae reprehenderit unde sit tempore atque aut commodi quae expedita corrupti, dignissimos architecto. Eius, maiores ad?\n  </div>\n  <div class="purple ex4-spacing">\n    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse aliquid laboriosam minima ex praesentium recusandae reprehenderit unde sit tempore atque aut commodi quae expedita corrupti, dignissimos architecto. Eius, maiores ad?\n  </div>\n  <div class="purple ex4-spacing">\n    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse aliquid laboriosam minima ex praesentium recusandae reprehenderit unde sit tempore atque aut commodi quae expedita corrupti, dignissimos architecto. Eius, maiores ad?\n  </div>\n  <div class="purple ex4-spacing">\n    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse aliquid laboriosam minima ex praesentium recusandae reprehenderit unde sit tempore atque aut commodi quae expedita corrupti, dignissimos architecto. Eius, maiores ad?\n  </div>\n  <div class="purple ex4-spacing">\n    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse aliquid laboriosam minima ex praesentium recusandae reprehenderit unde sit tempore atque aut commodi quae expedita corrupti, dignissimos architecto. Eius, maiores ad?\n  </div>\n</div>`,
    css: `.parent {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));\n  grid-gap: 0.6rem;\n}`
  },
  {
    ex_no: "Thank You!",
    class: "",
    html: "Thank You!",
    css: "Thank You!"
  }
];

export default slides;
