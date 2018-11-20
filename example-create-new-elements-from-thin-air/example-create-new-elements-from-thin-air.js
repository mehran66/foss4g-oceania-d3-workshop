// URL: https://beta.observablehq.com/@milafrerichs/example-create-new-elements-from-thin-air
// Title: Example: Create new elements from thin air
// Author: Mila Frerichs (@milafrerichs)
// Version: 105
// Runtime version: 1

const m0 = {
  id: "3d5dd3381b9e49b7@105",
  variables: [
    {
      inputs: ["md"],
      value: (function(md){return(
md`# Example: Create new elements from thin air
This is one of the most confusing and most powerful things in d3.  
Don't worry too much if you don't understand it the first time or don't understand everything.  
The important thing is to know how and when to use it.  
`
)})
    },
    {
      inputs: ["html"],
      value: (function(html){return(
html`<div id="main"><p>Test</p>`
)})
    },
    {
      name: "data",
      value: (function(){return(
[1,2,3]
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`Let's define some data we use to create elements out of thin air.  
We just define an array with three numbers in them.`
)})
    },
    {
      inputs: ["d3"],
      value: (function(d3){return(
d3.selectAll('p')
)})
    },
    {
      inputs: ["d3","data"],
      value: (function(d3,data){return(
d3.select('#main').selectAll('p').data(data)
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`Now let's use the magic of d3.  
We select all \`paragraph(p)\` elements on the page and bind our data array to them.  
Look at the result (_RT_) and inspect the Array.  
You should see a \`__data__\` element inside with the value of 1.  
Crazy, right?`
)})
    },
    {
      inputs: ["d3","data"],
      value: (function(d3,data){return(
d3.selectAll('p').data(data).enter()
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`You might have already seen the \`_enter \` and \`_exit \` elements in that data bind result.  
They reference functions we can call called \`enter()\` and  \`exit()\` as you might have imagined.  
They help us select only a subset of that selection.    

\`enter()\` select all elements which are not there yet, in our case this results in two elements. Because one paragraph is already there and our data array has three entries.   
\`exit()\` selects all elements which are too much. You will try this out later but imgine we would have 5 paragraph elements on the page and our data array is only three elements big two parasgraphs would be left over. We can remove them with this exit selection method.  
` 
)})
    },
    {
      inputs: ["d3","data"],
      value: (function(d3,data){return(
d3.selectAll('p').data(data).exit()
)})
    },
    {
      inputs: ["d3","data"],
      value: (function(d3,data){return(
d3.select('#main').selectAll('p').data(data).text((d) => d)
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`If we don't use \`enter()\` or  \`exit()\` we will have all elements that match (in our case 3) and we can update their attributes. In this case we update the text with just the value (1,2,3) in our case.   
If we don't add anything with \`enter()\` and \`append()\` it will just update the ones that are available.`
)})
    },
    {
      name: "air",
      inputs: ["d3","DOM","data"],
      value: (function(d3,DOM,data)
{
  const width = 50;
  const height = 50;
  const svg = d3.select(DOM.svg(width, height))
  svg.selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('fill', '#000')
    .attr('x',0)
    .attr('y',0)
    .attr('width',10)
    .attr('height',10)
  return svg.node();
}
)
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`As you can see, you see things a little bit out of the ordinary.  
What did you expect?  
One rectangular or three?  
Change a few numbers and see what happens.  

When you're done, look at the next line. `
)})
    },
    {
      name: "air_better",
      inputs: ["d3","DOM","data"],
      value: (function(d3,DOM,data)
{
  const width = 50;
  const height = 50;
  const offset = 12;
  const svg = d3.select(DOM.svg(width, height))
  svg.selectAll('rect').data(data)
    .enter().append('rect')
    .attr('fill', '#000')
    .attr('x',(d,i) => i*offset)
    .attr('y',0)
    .attr('width',10)
    .attr('height',10)
  return svg.node();
}
)
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`Play around with the numbers and see how and what changes.  
Change the data source to see how this affects the creation.  
Add more to it, change the type (use strings for example, or objects), remove elements.  
If you forgot what the function does, take another look at the change attributes example. (here)

One weird thing to try out is to add elements to it not ouside of this block but inside it. See hwo this affects the execution and result.

## Resources:
- [Data Joins explained](https://bost.ocks.org/mike/join/)
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
  id: "3d5dd3381b9e49b7@105",
  modules: [m0]
};

export default notebook;
