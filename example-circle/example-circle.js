// URL: https://beta.observablehq.com/@milafrerichs/example-circle
// Title: Example: Circle
// Author: Mila Frerichs (@milafrerichs)
// Version: 31
// Runtime version: 1

const m0 = {
  id: "a8fb78f9390d4214@31",
  variables: [
    {
      inputs: ["md"],
      value: (function(md){return(
md`# Example: Circle
Let's look at an example for an element, we will use heavily.  
The Circle.   
The circle is a svg element which has standard attributes for x,y called \`cx\` and \`cy\` and a radius called \`r\`  
The circle is great for point data especially if we want to change the size according to a data point.  
It is way easier to change the radius depending on a attribute as changing the \`d\` value of a \`path\`.
`
)})
    },
    {
      name: "svg",
      inputs: ["d3","DOM"],
      value: (function(d3,DOM)
{
  const width = 50;
  const height = 50;
  const svg = d3.select(DOM.svg(width, height))
  svg.append("circle")
    .attr("fill", "#000")
    .attr("cx", 10)
    .attr("cy", 10)
    .attr('r', '5')
  return svg.node();
}
)
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`
## Exercise 1: Add a border around the circle
## Exercise 2: Change the radius of the circle

### Resources:
[SVG Circle](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/circle)
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
  id: "a8fb78f9390d4214@31",
  modules: [m0]
};

export default notebook;
