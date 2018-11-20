// URL: https://beta.observablehq.com/@milafrerichs/example-scales
// Title: Example: Scales
// Author: Mila Frerichs (@milafrerichs)
// Version: 163
// Runtime version: 1

const m0 = {
  id: "c86ce03edabfe6fb@163",
  variables: [
    {
      inputs: ["md"],
      value: (function(md){return(
md`# Example: Scales
_Scales are a convenient abstraction for a fundamental task in visualization: mapping a dimension of abstract data to a visual representation._

The most used scale is the linear time scale

## Linear Scale
`
)})
    },
    {
      name: "scale",
      inputs: ["d3"],
      value: (function(d3){return(
d3.scaleLinear()
)})
    },
    {
      inputs: ["scale"],
      value: (function(scale){return(
scale.domain([1,10]).range([10,1])
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`We provide scales with a _domain_ (our abstract data) and a _range_ (the representation)
`
)})
    },
    {
      inputs: ["scale"],
      value: (function(scale){return(
scale(10)
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`If we call the scale with a value from the _domain_ we get the corresponding _range_`
)})
    },
    {
      inputs: ["scale"],
      value: (function(scale){return(
scale(1)
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`## Time Scale 
d3 gives us the possibility to define time scales very easy.  
`
)})
    },
    {
      name: "time",
      inputs: ["d3"],
      value: (function(d3){return(
d3.scaleTime()
)})
    },
    {
      inputs: ["time"],
      value: (function(time){return(
time.domain([new Date(2000, 0, 1, 0), new Date(2000, 0, 1, 2)])
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`We just supply the scale the date range`
)})
    },
    {
      inputs: ["time","d3"],
      value: (function(time,d3){return(
time.ticks(d3.timeMinute.every(15))
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`and with _ticks_ and the helper _d3.timeMinute.every(15)_ we get an array of 15 minute time intervals.`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`## Ordinal Scale
`
)})
    },
    {
      name: "ord",
      inputs: ["d3"],
      value: (function(d3){return(
d3.scaleOrdinal().range([1,10]).domain()
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`Ordinal scales specifies an explicit mapping from a set of data values to a corresponding set of visual attributes (such as colors).`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`### Color Scales`
)})
    },
    {
      inputs: ["d3"],
      value: (function(d3){return(
d3.schemeCategory10
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`Helper methods from d3 allows us to define color schemes with distinct color values.   
More infos and more colors can be found here: https://github.com/d3/d3-scale-chromatic#schemeCategory10
`
)})
    },
    {
      name: "colors",
      inputs: ["d3"],
      value: (function(d3){return(
d3.scaleOrdinal(d3.schemeCategory10)
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`If we put the array of colors into an ordinal scale we get distinct colors for different values.  
Try it out, change the value and see the changes.
`
)})
    },
    {
      inputs: ["colors"],
      value: (function(colors){return(
colors(0)
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`#### Real World Example
We have a dataset, which has objects with property "x"
We define a color scale for that so we have the same color for the same values.
`
)})
    },
    {
      name: "data",
      value: (function(){return(
[{x: 10},{x: 15}]
)})
    },
    {
      name: "linear_colors",
      inputs: ["d3","data"],
      value: (function(d3,data){return(
d3.scaleLinear()
    .domain(d3.extent(data, (d) => d.x))
    .range(d3.schemeGnBu[3])
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md` We define a linear color scale for values from 10-15 and map them to a Green-Blue color scheme defined [here](https://github.com/d3/d3-scale-chromatic#schemeGnBu). `
)})
    },
    {
      inputs: ["linear_colors","data"],
      value: (function(linear_colors,data){return(
linear_colors(data[1].x)
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`
We get rgb values back we can use to style svg objects.

<br/>
__Useful helper methods:__
* d3.max
* d3.min
* d3.extent

Check them out here: https://github.com/d3/d3-array#statistics
In combination with scales they're very useful.
`
)})
    },
    {
      inputs: ["d3","data"],
      value: (function(d3,data){return(
d3.extent(data, (d) => d.x)
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`## Resources
https://github.com/d3/d3-scale
`
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
  id: "c86ce03edabfe6fb@163",
  modules: [m0]
};

export default notebook;
