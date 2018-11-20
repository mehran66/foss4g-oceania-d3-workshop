// URL: https://beta.observablehq.com/@milafrerichs/example-geo-path
// Title: Example: Geo Path
// Author: Mila Frerichs (@milafrerichs)
// Version: 45
// Runtime version: 1

const m0 = {
  id: "e5746e81c35061d2@45",
  variables: [
    {
      inputs: ["md"],
      value: (function(md){return(
md`# Example: Geo Path
D3 offers a lot of helpers so that you don't need to go too deep into SVG magic.  
One of these helpers is geoPath.  
It helps you create the \`d\` attribute of a \`path \` element.  
`
)})
    },
    {
      name: "projection",
      inputs: ["d3"],
      value: (function(d3){return(
d3.geoAlbers()
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`First we define a projection we need for geoPath to know how to project lat/lng to x/y coordinates`
)})
    },
    {
      name: "path",
      inputs: ["d3","projection"],
      value: (function(d3,projection){return(
d3.geoPath().projection(projection)
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`We construct the \`geoPath\` with the helper and define the projection to be used`
)})
    },
    {
      inputs: ["path","data"],
      value: (function(path,data){return(
path(data)
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`We can now call the method and it will return the \`d\` attribute for a \`path\` svg element.
Look at the [Path Example](https://beta.observablehq.com/@milafrerichs/example-path) for an explanation on the values here.`
)})
    },
    {
      inputs: ["projection","data"],
      value: (function(projection,data){return(
projection(data.geometry.coordinates[0][0])
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`As seen in the [Projection Example]() we can pass coordinates to the projection. The geoPath does something similar but transforming it to the \`d\` attribute as well.  
\`data.geometry.coordinates[0][0]\` references the first corner of the polygon. 
`
)})
    },
    {
      name: "data",
      value: (function(){return(
{
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              112.412109375,
              -44.02442151965934
            ],
            [
              158.02734375,
              -44.02442151965934
            ],
            [
              158.02734375,
              -11.092165893502
            ],
            [
              112.412109375,
              -11.092165893502
            ],
            [
              112.412109375,
              -44.02442151965934
            ]
          ]
        ]
      }
    }
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`## Reference:
https://github.com/d3/d3-geo#paths
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
  id: "e5746e81c35061d2@45",
  modules: [m0]
};

export default notebook;
