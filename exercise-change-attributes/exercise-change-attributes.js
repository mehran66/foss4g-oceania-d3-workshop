// URL: https://beta.observablehq.com/@milafrerichs/exercise-change-attributes
// Title: Exercise: Change Attributes
// Author: Mila Frerichs (@milafrerichs)
// Version: 93
// Runtime version: 1

const m0 = {
  id: "eaa6f9921ec66c87@93",
  variables: [
    {
      inputs: ["md"],
      value: (function(md){return(
md`# Exercise: Change Attributes
`
)})
    },
    {
      name: "chart",
      inputs: ["d3","projection","DOM","melbourne","data"],
      value: (function(d3,projection,DOM,melbourne,data)
{
  
  const width = 960;
  const height = 600;
  

  const geoGenerator = d3.geoPath()
  .projection(projection);
  
 
  const svg = d3.select(DOM.svg(width, height))
  
  projection.fitExtent([[20, 20], [960, 600]], melbourne);
  
  svg.append('g').selectAll('path')
  .data(melbourne.features)
  .enter()
    .append('path')
    .attr('d', geoGenerator)
  
  svg.append('g').selectAll('circle')
  .data(data.features)
  .enter()
    .append('circle')
    .attr('cx', (d) => projection(d.geometry.coordinates)[0])
    .attr('cy', (d) => projection(d.geometry.coordinates)[1])
    .attr('r', 4)
    .attr('fill', 'red')
  
  
  return svg.node()
}
)
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`## Exercise 1: Change Color of Path Elements
## Exercise 2: Change color of circles
## Exercise 3: Change size of circle depending on their capacity ("capacity" property)

### Tips
<br>
<br/>
<br>
<br/>
<br>
<br/>
__Exercise 1__: change the \`fill\` attribute.  
__Exercise 3__: Use a scale as shown here, change the radius by using the scale
`
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`## Resources
- [Scales](https://github.com/d3/d3-scale)

## Solution
[Solution](https://beta.observablehq.com/@milafrerichs/solution-change-attributes)

_Imports:_
`
)})
    },
    {
      name: "wards",
      inputs: ["d3"],
      value: (function(d3){return(
d3.json("https://gist.githubusercontent.com/milafrerichs/494283e59840a43b14232f23e768a7c1/raw/b17aa2b6201716f81acf35e0db07b313448290dc/Melbourne_Wards.geojson")
)})
    },
    {
      name: "melbourne",
      inputs: ["d3"],
      value: (function(d3){return(
d3.json('https://gist.githubusercontent.com/milafrerichs/494283e59840a43b14232f23e768a7c1/raw/caac307b2ce8c7be87cad86728e26232ea0e89ad/district.geojson')
)})
    },
    {
      name: "data",
      inputs: ["d3"],
      value: (function(d3){return(
d3.json('https://data.melbourne.vic.gov.au/resource/whrp-vp44.geojson')
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
  id: "eaa6f9921ec66c87@93",
  modules: [m0,m1,m2]
};

export default notebook;
