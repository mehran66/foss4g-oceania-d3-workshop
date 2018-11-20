// URL: https://beta.observablehq.com/@milafrerichs/your-first-point-on-a-map
// Title: Your First Point on a "Map"
// Author: Mila Frerichs (@milafrerichs)
// Version: 38
// Runtime version: 1

const m0 = {
  id: "75bf0bdbb6b502e0@38",
  variables: [
    {
      inputs: ["md"],
      value: (function(md){return(
md`# Your First Point on a "Map"

Tasks:
- Define a projection
- Fit the projection to the screen
- Add a Circle to the map`
)})
    },
    {
      name: "map",
      inputs: ["d3","DOM","data"],
      value: (function(d3,DOM,data)
{
  const width = 400;
  const height = 400;
  const svg = d3.select(DOM.svg(width, height))
  // use the bounds object to fit your projection
  
  svg.selectAll('circle').data([data]).enter().append('circle')
  // your code here
  return svg.node();
}
)
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`## Some help:
- look up fitExtent or fitSize
- you only need to change the attributes of the circle, it is already created and bound to the data object.
`
)})
    },
    {
      name: "data",
      value: (function(){return(
[144.960930,-37.797831]
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md` ## Solution
There are many ways to solve this here is one of mine.  
[My Solution](https://beta.observablehq.com/@milafrerichs/solution-1-your-first-point-on-a-map)
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
  id: "75bf0bdbb6b502e0@38",
  modules: [m0]
};

export default notebook;
