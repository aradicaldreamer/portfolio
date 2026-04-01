import type { Project } from "./types";

export const goap: Project = {
  id: "goap",
  title: "GOAP AI System",
  year: "2017, 2019",
  team: "Solo",
  role: "Programmer",
  category: "personal",
  image: "/images/goap.jpg",
  description:
    "A portable Goal Oriented Action Planning system where state transitions are calculated at runtime via a lowest-cost algorithm. Goals, actions, and sensors can be swapped mid-gameplay. Used in both Trixie and Innchanted.",
  tags: ["Unity", "C#", "AI", "GOAP"],
  links: [
    {
      label: "GitHub",
      url: "https://github.com/Aspekt1024/LittleDrones",
      type: "github",
    },
  ],
  fullDescription:
    "Goal Oriented Action Planning (GOAP) is an AI architecture similar to a Finite State Machine, but where transitions between states are not hard-coded — they are automatically calculated at runtime using a lowest-cost algorithm.\n\nThis standalone implementation was developed first in 2017 and refined in 2019. It has since been used as the AI backbone for both Trixie and Innchanted.",
  sections: [
    {
      title: "AI Components",
      body: "The system is composed of three building blocks: Goals (what the AI wants to achieve), Actions (what it can do to achieve a goal), and Sensors (what it can perceive in the world). Each component is independent and can be added or removed at any point during gameplay — even mid-execution — without disrupting other components.",
      image: "/images/goap/modules.jpg",
      imageAlt: "GOAP AI module components",
    },
    {
      title: "Priority-based Planning",
      body: "Goals are assigned priorities. The AI continuously evaluates its goal list and calculates the most efficient action sequence to fulfil the highest-priority active goal. In the demonstration, drones prioritise keeping their fuel supply up — retrieving coal over gathering resources when fuel is low — then return to resource collection once fuel is sufficient.",
      image: "/images/goap/splash.jpg",
      imageAlt: "GOAP AI system demonstration with drones",
    },
  ],
};
