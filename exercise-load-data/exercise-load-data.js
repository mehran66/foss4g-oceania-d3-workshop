// URL: https://beta.observablehq.com/@milafrerichs/exercise-load-data
// Title: Exercise: Load Data
// Author: Mila Frerichs (@milafrerichs)
// Version: 96
// Runtime version: 1

const m0 = {
  id: "4d49e9e25d3d7953@96",
  variables: [
    {
      inputs: ["md"],
      value: (function(md){return(
md`# Exercise: Load Data`
)})
    },
    {
      name: "chart",
      inputs: ["d3","DOM","projection"],
      value: (function(d3,DOM,projection)
{
  
  const width = 960;
  const height = 600;
 
  const svg = d3.select(DOM.svg(width, height))
  
  projection.fitExtent([[20, 20], [960, 600]], );
  
  
  
  return svg.node()
}
)
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`## 1. Exercise Load GeoJSON data 
## 2. Load CSV data
## 3. _Bonus_: Load TopoJSON data
Read this here first: 
- [TopoJSON](https://github.com/topojson/topojson/wiki/Introduction)


I loaded a projection for you. No need to create one yourself, just use \`projection \` 
`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md` ## Tips:
Here are some tips for the exercises if you're stuck.  
<br/>    
<br/>    
<br/>
<br/>   


__Exercise 1:__
- select all path elements from the svg. 
- use the data from ... to bind it to the selection
- append new path elements
- use a geoPath to create the d attribute

If you're still stuck: Use [this]() easy exercise.

__ Exercise 2:__ 
- same procedure as 1 but instead
- Use a circle as svg element
- you don't need a geoPath
- use the projection directly

__ Exercise 3: __
- Use the topology data object
- Use a global proojection like Mercator, or EqualEarth
- Take a look at the [reference](https://github.com/topojson/topojson-client/blob/master/README.md#feature)
` 
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`## Resources
- https://github.com/topojson/topojson-client
- Circle
- Path
- [Example: Projection](https://beta.observablehq.com/d/2fe3120f30a852b2)
- [Example: Circle](https://beta.observablehq.com/d/a8fb78f9390d4214)
- [Example: GeoPath](https://beta.observablehq.com/d/e5746e81c35061d2)


### Solution
[&rarr; Solution](https://beta.observablehq.com/@milafrerichs/solution-load-data)  
`
)})
    },
    {
      name: "geojson",
      inputs: ["d3"],
      value: (function(d3){return(
d3.json("https://data.melbourne.vic.gov.au/api/geospatial/aia8-ryiq?method=export&format=GeoJSON")
)})
    },
    {
      name: "csv",
      inputs: ["d3"],
      value: (function(d3){return(
d3.csv('https://data.melbourne.vic.gov.au/resource/whrp-vp44.csv')
)})
    },
    {
      name: "topology",
      inputs: ["d3"],
      value: (function(d3){return(
d3.json('https://unpkg.com/world-atlas@1/world/110m.json')
)})
    },
    {
      from: "@milafrerichs/australia-projection",
      name: "projection",
      remote: "projection"
    },
    {
      name: "d3",
      inputs: ["require"],
      value: (function(require){return(
require("https://d3js.org/d3.v5.min.js")
)})
    },
    {
      name: "topojson",
      inputs: ["require"],
      value: (function(require){return(
require('topojson')
)})
    }
  ]
};

const m1 = {
  id: "@milafrerichs/australia-projection",
  variables: [
    {
      name: "projection",
      inputs: ["proj4d3","proj4jsString"],
      value: (function(proj4d3,proj4jsString){return(
proj4d3(proj4jsString)
)})
    },
    {
      from: "@fil/proj4js-d3",
      name: "proj4d3",
      remote: "proj4d3"
    },
    {
      name: "proj4jsString",
      value: (function(){return(
'+proj=utm +zone=55 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs'
)})
    }
  ]
};

const m2 = {
  id: "@fil/proj4js-d3",
  variables: [
    {
      name: "proj4d3",
      inputs: ["proj4","d3"],
      value: (function(proj4,d3){return(
function proj4d3(proj4string) {
  const degrees = 180 / Math.PI,
    radians = 1 / degrees,
    raw = proj4(proj4string),
    p = function(lambda, phi) {
      return raw.forward([lambda * degrees, phi * degrees]);
    };
  p.invert = function(x, y) {
    return raw.inverse([x, y]).map(function(d) {
      return d * radians;
    });
  };
  const projection = d3.geoProjection(p).scale(1);
  projection.raw = raw;
  return projection;
}
)})
    },
    {
      name: "proj4",
      inputs: ["require"],
      value: (function(require){return(
require("proj4")
)})
    },
    {
      name: "d3",
      inputs: ["require"],
      value: (function(require){return(
require("d3-selection", "d3-geo", "d3-fetch", "d3-geo-projection", "d3-geo-polygon", "d3-inertia")
)})
    }
  ]
};

const notebook = {
  id: "4d49e9e25d3d7953@96",
  modules: [m0,m1,m2]
};

export default notebook;
