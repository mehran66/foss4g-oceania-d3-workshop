// URL: https://beta.observablehq.com/@milafrerichs/example-projection
// Title: Example: Projection
// Author: Mila Frerichs (@milafrerichs)
// Version: 45
// Runtime version: 1

const m0 = {
  id: "2fe3120f30a852b2@45",
  variables: [
    {
      inputs: ["md"],
      value: (function(md){return(
md`# Example: Projection
D3 provides us another nice little helper to deal with projections.  
There are a lot of projections pre-defined where you can pick one.   
Or you can define your own, more later on this page.
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
      inputs: ["projection"],
      value: (function(projection){return(
projection([112.412109375, -44.02442151965934])
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`
You can call the projection to get adjusted x,y values for display in the browser.  

Important to remember: 
\`projection([longitdue, latitude])\` is the call

More documentation can be found [here](https://github.com/d3/d3-geo#_projection).
## Exercise: Change projection

Pick an Projection from https://github.com/d3/d3-geo#azimuthal-projections

## Create your own projection: Australia Edition
Australia is special and I went to twitter to find out the best projection for Australia and Melbourne.  
After a little more googleing I found something that works just fine.  
`
)})
    },
    {
      name: "custom_projection",
      inputs: ["d3"],
      value: (function(d3){return(
d3.geoConicConformal().rotate([-132, 0]).center([0, -27]).parallels([-18, -36])
)})
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md` You can adjust each projection even further.  
For every type of projection you can adjust \`rotate\` \`scale\` \`center\` .  
For Conic Projections you can adjust \`parallels \` as well. 
Which I did for Australia.
I used this as reference: https://georepository.com/projection_4460/Australian-Centre-for-Remote-Sensing-Lambert-Conformal-Projection.html
`
)})
    },
    {
      inputs: ["custom_projection"],
      value: (function(custom_projection){return(
custom_projection([112.412109375, -44.02442151965934])
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
  id: "2fe3120f30a852b2@45",
  modules: [m0]
};

export default notebook;
