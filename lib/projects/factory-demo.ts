import type { Project } from "./types";

export const factoryDemo: Project = {
  id: "factory-demo",
  title: "Factory Demo",
  year: "2025",
  team: "Solo",
  role: "Developer",
  category: "personal",
  image: "/images/factory-demo.png",
  video: "/videos/FactoryDemo.mp4",
  description:
    "Machines and conveyor belts for satisfying gameplay.",
  tags: ["Unreal", "C++", "Blueprints", "Gameplay Systems"],
  fullDescription:
    "A demonstration of spline mesh interaction in Unreal Engine. Taking inspiration from Satisfactory, this prototype looks at conveyor belts, items sources and a crafting system.",
  sections: [
    {
      title: "Overview",
      body: "Spline Meshes are used to create the bendable conveyor belt shapes, along with a shader for the movable parts. This is combined with a system to combine, store and distribute items in machines.",
      video: "/videos/FactoryDemo.mp4",
    },
  ],
};
