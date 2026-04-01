import type { Project } from "./types";

export const forestDemo: Project = {
  id: "forest-demo",
  title: "Tiny Forest",
  year: "2025",
  team: "Solo",
  role: "Developer",
  category: "personal",
  image: "/images/forest-sprite.png",
  description:
    "Summon a thriving ecosystem in this exploration of shaders and artistry.",
  tags: ["Unity", "C#", "Shaders", "VFX", "3D Art"],
  fullDescription:
    "A Unity exploration into art pipelines, shaders, and bringing a living world to life at runtime. The project covers runtime-editable grass, trees, and water — all driven by custom shaders — alongside fauna systems that add movement and personality to the environment.",
  sections: [
    {
      title: "Interactive Grass",
      body: "Grass, trees, and water are all runtime-editable via custom shaders, allowing the environment to respond dynamically to the player and to in-world events. The player can only walk on grassy areas, and the grass shader makes way for the player and fox as they walk over it.",
      video: "/videos/forest-demo.mp4",
    },
    {
      title: "300,000 Butterflies",
      body: "When the player approaches the butterflies, they scatter and avoid them in real time. This uses a compute shader and a vertex shader with a shared buffer to simulate a boids algorithm for butterfly movement with player avoidance. The video demonstrates 300,000 butterflies simulated simultaneously with full player interaction and no frame rate drop.",
      video: "/videos/forest-demo-butterflies-many.mp4",
    },
    {
      title: "Cloth",
      body: "The main character was an opportunity to explore the full modelling, rigging, and animation pipeline end-to-end. A key focus was understanding cloth behaviour and inverse kinematics in Unity.",
      video: "/videos/forest-demo-character-intro.mp4",
    },
  ],
};
