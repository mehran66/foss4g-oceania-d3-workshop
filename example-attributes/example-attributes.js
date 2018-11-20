// URL: https://beta.observablehq.com/@milafrerichs/example-attributes
// Title: Example: Attributes
// Author: Mila Frerichs (@milafrerichs)
// Version: 81
// Runtime version: 1

const m0 = {
  id: "5e9c4b3d4e04e072@81",
  variables: [
    {
      inputs: ["md"],
      value: (function(md){return(
md`# Example: Attributes

Let's look at the attributes for SVG elementsd and how to change them.  
D3 makes it very easy to access them and to change them.  
The function is called \`attr() \` and it takes two parameters.   
The first is the name of the attribute we want to change.  
The second is either a value (String, Number, etc) or a function.  
I'll explain the function later on in this example.  
Let's look at the simplest way to change attributes:  
`
)})
    },
    {
      name: "attr",
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
md`In this example we change the background (\`fill\` in svg) to black.  
We change the position \`cx\` and \`cy\` of the circle element.  
The position is always relative to the upper left corner which is [0,0].  
And we change the radius (\`r\`) of the circle.` 
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
md`The second way to change attributes is to use a function.  
This only works well if the element has data attached to it.  
More about data joins later in the examples. For now it is only important to know that the function takes two parameters: \`d\` \`i\`   
\`d\` is the data attribute of that element.   
\`i\` is the index of the element (if we have more than one, more on that later as well).
` 
)})
    },
    {
      inputs: ["svg","data"],
      value: (function(svg,data){return(
svg.selectAll('circle')
    .data(data)
    .enter()
    .append("circle")
    .attr("fill", (d) => d)
    .attr("cx", 10)
    .attr("cy", 10)
    .attr('r', '5')
)})
    },
    {
      name: "data",
      value: (function(){return(
['#f00']
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`Our element gets the value of the previous array as it's value. So \`d\` in the attribute call will return \`"#f00"\` and can be used to change the color.`
)})
    },
    {
      inputs: ["svg"],
      value: (function(svg){return(
svg.selectAll('circle')
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`Inspect the selection as you have done in the selection example and take a look at the properties of the \`SVGCircleElement\`
You will see that is know has a \`__data__\` property with the value \`"#f00"\` 

__Imports:__
`
)})
    },
    {
      name: "svg",
      inputs: ["d3","DOM"],
      value: (function(d3,DOM){return(
d3.select(DOM.svg(50,50))
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
  id: "5e9c4b3d4e04e072@81",
  modules: [m0]
};

export default notebook;
