// URL: https://beta.observablehq.com/@milafrerichs/example-path
// Title: Example Path
// Author: Mila Frerichs (@milafrerichs)
// Version: 37
// Runtime version: 1

const m0 = {
  id: "9ec324307002da3c@37",
  variables: [
    {
      inputs: ["md"],
      value: (function(md){return(
md`# Example Path
> _"The \`<path>\` element is the most powerful element in the SVG library of basic shapes. You can use it to create lines, curves, arcs and more."_  
[Mozilla Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths)
`
)})
    },
    {
      name: "svg",
      inputs: ["d3","DOM"],
      value: (function(d3,DOM)
{
  const width = 100;
  const height = 100;
  const svg = d3.select(DOM.svg(width, height))
  svg.append("path")
    .attr("fill", "#f0f0f0")
    .attr("d", "M10 10 H 100 V 100 H 10 Z")
  return svg.node();
}
)
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`Play around with the d attribute to get a feel for the values. `
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`## Resources
[SVG Path Element explained](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths)
`
)})
    },
    {
      name: "d3",
      inputs: ["require"],
      value: (function(require){return(
require("https://d3js.org/d3.v5.min.js")
)})
    }
  ]
};

const notebook = {
  id: "9ec324307002da3c@37",
  modules: [m0]
};

export default notebook;
