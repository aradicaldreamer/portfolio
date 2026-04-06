import type { Project } from "./types";

export const ggs: Project = {
  id: "ggs",
  title: "Guilty Gear -Strive- Nintendo Switch Edition",
  year: "2023-2025",
  team: "Arc System Works / Tantalus South (via Mighty Build and Test)",
  role: "Senior Development Manager, Head of Automation Engineering",
  category: "professional",
  image: "/images/ggs/ggs.png",
  
  description: `
CI/CD build and release management support for the Nintendo Switch port of Guilty Gear -Strive-, including automated testing, build pipeline maintenance, and release management support for patches and updates across multiple regions.
  `,
  tags: ["Unreal Engine", "C++", "Test Automation", "CI/CD", "Release Management"],
  links: [
    {
      label: "Website",
      url: "https://www.guiltygear.com/ggst/sw/en/",
      type: "external",
    },
  ],
  fullDescription: `
  We assisted Arc System Works and their porting partner Tantalus South with the Nintendo Switch port of Guilty Gear -Strive-, which launched in 2025. We provided support for their CI/CD pipelines, automated testing, and release management for patches and updates across multiple regions.

  The biggest challenge that our tools helped solve was tracking performance metrics to ensure that the game was able to run on the Nintendo Switch. I ran the team that built the test automation behaviors, and coordinated with our clients and internal teams to ensure that we were using our tools to effectively deliver results that made a difference to the quality of the game.

  I also coordinated with our systems and infrastructure teams to improve support for Unreal Engine projects to our toolset, to deploy our automated testing builds directly to development kits, and to add the performance reporting to make the data collected readable and actionable.
  `,
  sections: [
    {
      title: "Performance Reporting",
      body: "",
      image: "/images/ggs/ggs_perf_hover.gif",
    },
    {
      title: "Gameplay Trailer",
      body: "",
      youtube: "qzjk2Ybp1TY",
    },
  ],
};