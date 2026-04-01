import type { Project } from "./types";

export const lonelyAstronaut: Project = {
  id: "lonely-astronaut",
  title: "Lonely Astronaut 95",
  year: "2018",
  team: "Global Game Jam",
  role: "Lead Programmer",
  category: "jam",
  image: "/images/lonely-astronaut.png",
  description:
    "GGJ 2018 - 48 hours. Theme: Transmission. A stranded astronaut attempts to befriend alien civilisations via social media using a language they don't understand.",
  tags: ["Unity", "C#", "Game Jam"],
  links: [
    {
      label: "Global Game Jam",
      url: "https://globalgamejam.org/2018/games/lonelyastronaut95",
      type: "external",
    },
  ],
  fullDescription: `
LonelyAstronaut95 is stranded far from home, and desperate for friendship, needs to befriend alien civilisations via a social media device - using a language they do not know.

Built for Global Game Jam 2018 in under 48 hours. My first game jam, acting as lead programmer on a team that was half-formed before the day.
  `,
  sections: [
    {
      title: "Social Media Simulation",
      body: `
Players must interpret alien communication and respond in kind, piecing together meaning through trial and error.
If they send messages a civilisation dislikes too many times, they'll be forever disregarded by that civilisation.

Help them befriend all civilisations by figuring out the correct messages that appeal to everyone.
      `,
      image: "/images/lonely-astronaut.png",
      imageAlt: "Lonely Astronaut 95 gameplay",
    },
    {
      title: "Global Game Jam 2018",
      body: "Built in under 48 hours at Global Game Jam 2018. My first game jam as lead programmer, on a team that was half-formed before the day. The theme was Transmission. Post-jam fixes were minimal — focused on delivering a smoother playthrough for the Melbourne Play Party, including a less random planet personality system.",
      image: "/images/gamejam/la.png",
      imageAlt: "Lonely Astronaut 95 planet screen",
    },
  ],
};
