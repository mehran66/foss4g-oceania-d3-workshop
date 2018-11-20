// URL: https://beta.observablehq.com/@milafrerichs/example-exercise-events
// Title: Example & Exercise: Events
// Author: Mila Frerichs (@milafrerichs)
// Version: 71
// Runtime version: 1

const m0 = {
  id: "1368888b1e88d1a5@71",
  variables: [
    {
      inputs: ["md"],
      value: (function(md){return(
md`# Example & Exercise: Events
In this example we look at events to add some interaction to our maps.  
We can use all HTML Events but most often you will use mouseevents like \`mouseover\`   
\`mouseenter\`   
\`mouseleave\`   
\`mousemove\`

`
)})
    },
    {
      name: "event",
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
    .on('mouseover', function() {
      d3.select(this).attr('fill', 'red');
    })
  return svg.node();
}
)
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`inside the function \`this\` refers to the element the event is triggered. The circle in our case.`
)})
    },
    {
      name: "mousemove",
      inputs: ["d3","DOM"],
      value: (function(d3,DOM)
{
  const width = 90;
  const height = 90;
  const svg = d3.select(DOM.svg(width, height))
  svg.append('text').attr('x', 5).attr('y', 80)
  svg.append("rect")
    .attr("fill", "#000")
    .attr("x", 10)
    .attr("y", 10)
    .attr('width', '50')
    .attr('height', '50')
    .on('mousemove', function() {
      d3.select('text').text(`x:${d3.mouse(this)[0]} y:${d3.mouse(this)[1]}`);
    })
  return svg.node();
}
)
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`We can get the mouse position with \`d3.mouse(this)\``
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`
## Exercise 1: Change the color to black when moving the mouse away from the circle
## Exercise 2: Change color to red on click

<br/>
### Resources:
- [D3 Mouse](https://github.com/d3/d3-selection#mouse)

__Imports__:
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
  id: "1368888b1e88d1a5@71",
  modules: [m0]
};

export default notebook;
