// URL: https://beta.observablehq.com/@milafrerichs/example-fit-projection-to-screen
// Title: Example: Fit Projection to Screen
// Author: Mila Frerichs (@milafrerichs)
// Version: 58
// Runtime version: 1

const m0 = {
  id: "0c01e18ccbefc7ec@58",
  variables: [
    {
      inputs: ["md"],
      value: (function(md){return(
md`# Example: Fit Projection to Screen
We can use the projection to fit a specific geojson object on the screen.  
We use that to not adjust the projection manually by using scale and translate but we can let d3 handle it.
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
md` First we define a projection, in this case Albers projection, most commonly used in the US.`
)})
    },
    {
      inputs: ["projection","bounds"],
      value: (function(projection,bounds){return(
projection.fitExtent([[20,20],[300,300]], bounds)
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`Next we call \`fitExtent\` which takes two parameters, the extent and a geojson object.

> _The extent is specified as an array [[x₀, y₀], [x₁, y₁]], where x₀ is the left side of the bounding box, y₀ is the top, x₁ is the right and y₁ is the bottom. _

Or in easier words, the first array is a padding you can define and the second array the width and height where you want to fit the geojson object in.
`
)})
    },
    {
      inputs: ["projection"],
      value: (function(projection){return(
projection([112.412109375, -44.02442151965934])
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`Now, when we call projection we get values inside this bounding box back`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`## Resource:

- [Fit Extent Docs](https://github.com/d3/d3-geo#projection_fitExtent)
- [Projection Example](https://beta.observablehq.com/@milafrerichs/example-projection)
`
)})
    },
    {
      name: "bounds",
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
      name: "d3",
      inputs: ["require"],
      value: (function(require){return(
require("https://d3js.org/d3.v5.min.js")
)})
    }
  ]
};

const notebook = {
  id: "0c01e18ccbefc7ec@58",
  modules: [m0]
};

export default notebook;
