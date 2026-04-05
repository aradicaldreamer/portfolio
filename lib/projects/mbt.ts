import type { Project } from "./types";

export const mbt: Project = {
  id: "mbt",
  title: "Mighty Build and Test",
  year: "2019 – 2025",
  team: "Mighty Build and Test",
  role: "Head of Automation Engineering",
  category: "professional",
  image: "/images/mbt/mbt.png",
  
  description: `
An end to end automation service for game development, used by clients such as Google, Halfbrick, and Keywords Studios.
  `,
  tags: [],
  links: [
    {
      label: "Mighty Build and Test",
      url: "https://www.mightybuildandtest.com",
      type: "external",
    },
  ],
  fullDescription: ` I was the first hire on the Mighty Build and Test team, joining in 2019 to help build out the service from the existing internal tools and initial client projects. Mighty Build and Test was grown from the work of Matt Ditton, Ben Britten, Scott Beca, and other early team members who had built the service previously as a part of Mighty Games' internal automation efforts.

Since then, and until my departure in 2025, I helped lead the development of the client delivery aspects of the service and the team, helping it grow to over 50 engineers and supporting a suite of tools and services for our clients' automation needs. I've also been a hands-on contributor to the codebase, working on projects across the stack including test infrastructure, client support tools, and internal systems.

We've helped several clients ship over 30 successful games, from small mobile titles to AAA console games, with multiple supported engines and platforms.
  `,
  sections: [
    {
      title: "Mighty Build and Test Shipped Titles",
      body: "",
      image: "/images/mbt/mbt-titles.png",
    },
    {
      title: "GCAP 2021: Empowering Your Team with Automation",
      body: "Learn best practices on how, when, and why to incorporate automation into your production pipeline, empower your team with the tools and knowledge to save time on tedious tasks and focus on the work that matters most to them! Video courtesy of GCAP and IGEA",
      youtube: "zMebfUt25Aw",
    },
  ],
};
