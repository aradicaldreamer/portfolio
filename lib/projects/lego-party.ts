import type { Project } from "./types";

export const legoParty: Project = {
  id: "lego-party",
  title: "Lego Party",
  year: "2024",
  team: "Mighty Build and Test (for SMG Studios)",
  role: "Automation Lead",
  category: "professional",
  homeFeatured: true,
  image: "/images/lego-party-splash.png",
  description:
    "Served as Automation Lead on Lego Party at SMG Studios, embedded through Mighty Build and Test. Led automated test pipeline development across the project's development and release cycle.",
  tags: ["Test Automation", "CI/CD", "QA Tooling"],
  links: [
    {
      label: "Steam",
      url: "https://store.steampowered.com/app/1969370/LEGO_Party/",
      type: "external",
    },
    {
      label: "Website",
      url: "https://legoparty.com/",
      type: "external",
    },
  ],
  fullDescription:
    "Lego Party is a party game developed by SMG Studios. I was embedded in the team through Mighty Build and Test as Automation Lead, working across the project's development and release cycle in 2023–2024.\n\nMy focus was building and maintaining automated test pipelines to support the team's quality assurance process, ensuring consistent, reliable test coverage throughout production.",
  sections: [
    {
      title: "Automation Lead",
      body: "As Automation Lead, I was responsible for designing and maintaining the automated test infrastructure for Lego Party. This involved building pipelines that integrated into the team's CI/CD workflow, enabling faster feedback loops and reducing manual testing overhead during a fast-paced production cycle.",
      image: "/images/lego-party-credits.png",
      imageAlt: "Lego Party credits",
    },
  ],
};
