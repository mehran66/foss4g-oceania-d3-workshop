// URL: https://beta.observablehq.com/@milafrerichs/example-selection
// Title: Example: Selection
// Author: Mila Frerichs (@milafrerichs)
// Version: 43
// Runtime version: 1

const m0 = {
  id: "8c03284f969d4da9@43",
  variables: [
    {
      inputs: ["md"],
      value: (function(md){return(
md`# Example: Selection`
)})
    },
    {
      inputs: ["html"],
      value: (function(html){return(
html`<div id="main"><h1>H1</h1><h2>H2</h2><h1>2nd H1</h1>`
)})
    },
    {
      inputs: ["d3"],
      value: (function(d3){return(
d3.select('#main').selectAll('h1')
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md` Explore the result (RT) and open it up.
in _groups_ you will find two elements, which are the _h1_ headlines.`
)})
    },
    {
      inputs: ["d3"],
      value: (function(d3){return(
d3.select('#main').selectAll('h1').style('color', 'red')
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`this will select all h1 and change their color to red.`
)})
    },
    {
      inputs: ["d3"],
      value: (function(d3){return(
d3.select('#main').select('h1').style('color', 'green')
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`select only the first one and change it to green. hit the run button on the right side of the previous element to see the first h1 change to green`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`
## Resources:
- [D3 Selection Docs](https://github.com/d3/d3-selection)
- [Selection explained](https://bost.ocks.org/mike/selection/)

## Imports` 
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
  id: "8c03284f969d4da9@43",
  modules: [m0]
};

export default notebook;
