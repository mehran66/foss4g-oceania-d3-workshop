// URL: https://beta.observablehq.com/@milafrerichs/example-zoom
// Title: Example: Zoom
// Author: Mila Frerichs (@milafrerichs)
// Version: 66
// Runtime version: 1

const m0 = {
  id: "069e86c06c13fef4@66",
  variables: [
    {
      inputs: ["md"],
      value: (function(md){return(
md`# Example: Zoom`
)})
    },
    {
      name: "map",
      inputs: ["d3","projection","DOM","melbourne"],
      value: (function(d3,projection,DOM,melbourne)
{
 const width = 960;
  const height = 600;
  
  const geoGenerator = d3.geoPath()
  .projection(projection);
  
  const svg = d3.select(DOM.svg(width, height))
  projection.fitExtent([[20, 20], [width, height]], melbourne);
  
  const g = svg.append('g')
  g.selectAll('path')
  .data(melbourne.features)
  .enter()
    .append('path')
    .attr('d', geoGenerator)
    .attr('fill', '#ccc')
    .attr('stroke','#fff');
  
  svg.append('g').append('text').attr('dy', 40).text('Zoom out').on('click', function() {
    svg.transition()
    g.transition()
    .duration(750)
    .attr("transform", "");
  });
  
  const zoom = d3.zoom()
    .on("zoom", () => {
      g.attr("transform", d3.event.transform);
    });
  
  svg.call(zoom);
  return svg.node()
}
)
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`Let's break this down:  
We define a zoom function with the d3 helper \`d3.zoom()\` and add an event on \`zoom\`.  
So everytime we zoom with the mouse this method is called.  
What it does it changes the \`transform\` value of the group that the geojson belongs to.  
More about the [transform](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/transform) attribute.
`
)})
    },
    {
      name: "melbourne",
      inputs: ["d3"],
      value: (function(d3){return(
d3.json("https://data.melbourne.vic.gov.au/api/geospatial/aia8-ryiq?method=export&format=GeoJSON")
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`## Resources

__Imports__:
`
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
  id: "069e86c06c13fef4@66",
  modules: [m0,m1,m2]
};

export default notebook;
