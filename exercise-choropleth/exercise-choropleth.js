// URL: https://beta.observablehq.com/@milafrerichs/exercise-choropleth
// Title: Exercise: Choropleth
// Author: Mila Frerichs (@milafrerichs)
// Version: 47
// Runtime version: 1

const m0 = {
  id: "e07b42060d953049@47",
  variables: [
    {
      inputs: ["md"],
      value: (function(md){return(
md`# Exercise: Choropleth

Bringing it all together. Use all the things you learned in the previous examples and exercises.

1. Load the geojson data
2. Create a map that is zoomed to the extent of the dataset
3. Style the map elements according to a value in the dataset (just pick one that is interesting to you).
4. Hightlight the outline when you click with your mouse on an element
5. Display the information somewhere
6. (Bonus) Add a legend`
)})
    },
    {
      name: "chart",
      value: (function()
{
}
)
    },
    {
      name: "data",
      inputs: ["d3"],
      value: (function(d3){return(
d3.json("https://data.melbourne.vic.gov.au/api/geospatial/aia8-ryiq?method=export&format=GeoJSON")
)})
    },
    {
      name: "alternative_dataset",
      inputs: ["d3"],
      value: (function(d3){return(
d3.json('https://data.melbourne.vic.gov.au/api/geospatial/s7e6-a6bm?method=export&format=GeoJSON')
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`
## Solution

[One possible solution](https://beta.observablehq.com/@milafrerichs/solution-choropleth)
`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md` _Imports:_`
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
  id: "e07b42060d953049@47",
  modules: [m0]
};

export default notebook;
