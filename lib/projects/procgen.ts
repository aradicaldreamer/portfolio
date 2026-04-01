import type { Project } from "./types";

export const procgen: Project = {
  id: "procgen",
  title: "Procedural Generation",
  year: "2022",
  team: "Solo",
  role: "Programmer",
  category: "personal",
  image: "/images/procgen/marching-cubes-smooth.png",
  description:
    "A dive into the world of procedural generation to generate terrain",
  tags: ["Unity", "C#", "Marching Cubes", "Shaders", "Runtime Mesh Manipulation"],
  links: [
    {
      label: "GitHub",
      url: "https://github.com/Aspekt1024/LilWorlds",
      type: "github",
    },
  ],
  fullDescription:`
Procedural generation is a topic that has always fascinated me. This little project was an opportunity to dive into how procedural generation could be used to generate terrain and planets.
`.trim(),
  sections: [
    {
      title: "Hello World",
      body: `
The end result was a procedurally generated planet, complete with a water and atmosphere shader that interacts with the sun.
      `,
      video: "/videos/atmosphere-shader.mp4",
      imageAlt: "Hexapawn game board",
    },
    {
      title: "Noise Map",
      body: `
The starting point was to generate a mesh with height displacement. The height was determined by layers and layers of noise to generate the details of the peaks and valleys. A simple height-based shader was used to add colour to the terrain.
      `,
      image: "/images/procgen/noise-map.png",
      imageAlt: "Hexapawn game board",
    },
    {
      title: "Marching Cubes",
      body: `
Height displacement wasn't enough though! I wanted caves and overhangs. This was achievable by an algorithm known as Marching Cubes.
This allows us to populate a 3D array of cubes with shapes specified by coherent noise functions that define what's solid and what's not.

In addition to the layers of noise that define the large and small detail, we have additional parameters that define things like plateaus, so we get plat surfaces at specific elevations.
      `,
      image: "/images/procgen/marching-cubes-flat.png",
      imageAlt: "Hexapawn game board",
    },
    {
      title: "Off By One",
      body: `
Next, I wanted to turn that flat shaded terrain into smooth shading. That required indexing the generated vertices so they could be reused when generating the triangles of the mesh.

The indexing is very specific. In this image, the index was off by one.
      `,
      image: "/images/procgen/marching-cubes-error.png",
      imageAlt: "Hexapawn game board",
    },
    {
      title: "Smooth Shading",
      body: `
With the vertices indexed properly, the final mesh could be generated with reused vertices along adjacent cubes that contained the triangles. This allows the normals to be averaged along edges, producing that smooth shaded look.
      `,
      image: "/images/procgen/marching-cubes-smooth.png",
      imageAlt: "Hexapawn game board",
    },
    {
      title: "Planets",
      body: `
The last part was to make the flat terrain spherical. This was very simple, as the marching cubes algorithm already generates a 3D volume containing a set of cubes.
The main change was to reduce the weight of solid area as we get further away from a center point.
      `,
      image: "/images/procgen/marching-cubes-sphere.png",
      imageAlt: "Hexapawn game board",
    },
  ],
};
