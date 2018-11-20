// URL: https://beta.observablehq.com/@milafrerichs/example-create-elements
// Title: Example: Create Elements
// Author: Mila Frerichs (@milafrerichs)
// Version: 98
// Runtime version: 1

const m0 = {
  id: "0e19a2a7f3f455cf@98",
  variables: [
    {
      inputs: ["md"],
      value: (function(md){return(
md`# Example: Create Elements
In this example we look how to create SVG elements with d3. 
`
)})
    },
    {
      name: "text",
      inputs: ["d3","DOM"],
      value: (function(d3,DOM)
{
  const width = 200;
  const height = 50;
  
  const svg = d3.select(DOM.svg(width, height))
  svg.append('text').text('This is just text').attr('dy', 20)
  return svg.node();
}
)
    },
    {
      name: "svg",
      inputs: ["d3","DOM"],
      value: (function(d3,DOM){return(
d3.select(DOM.svg(200,50))
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`This is an observable helper we can use to create SVG elements for d3. `
)})
    },
    {
      inputs: ["svg"],
      value: (function(svg){return(
svg.node()
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`With \`svg.node()\` we return the element which we can then show in observable. `
)})
    },
    {
      inputs: ["svg"],
      value: (function(svg){return(
svg.append('text').text('test').attr('dy', 20)
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`With \`append()\` we can add elements to the parent element.  
You can add every HTML element you like. We will mostly add SVG elements.
` 
)})
    },
    {
      inputs: ["svg"],
      value: (function(svg){return(
svg.append('text').text('more').attr('dy', 30)
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`every time we call it another element will be added to the SVG
The result is: "test more" `
)})
    },
    {
      inputs: ["svg"],
      value: (function(svg){return(
svg.selectAll('text')
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`If we run this we will have two _SVGTextElements_ in the groups list`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`## Resources
[Append D3 Docs](https://github.com/d3/d3-selection#selection_append)`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md` Imports:`
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
  id: "0e19a2a7f3f455cf@98",
  modules: [m0]
};

export default notebook;
