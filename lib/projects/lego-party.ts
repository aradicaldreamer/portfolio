import type { Project } from "./types";

export const legoParty: Project = {
  id: "lego-party",
  title: "Lego Party",
  year: "2024",
  team: "SMG Studios (via Mighty Build and Test)",
  role: "Automation Lead",
  category: "professional",
  homeFeatured: true,
  image: "/images/lego-party/lego-party-splash.png",
  description: `
Served as Test Automation Lead on Lego Party by SMG Studios, via Mighty Build and Test.
Led automated test pipeline development across the project's development and release cycle.
  `,
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
  fullDescription: `
Lego Party was developed by SMG Studios. I worked as Automation Lead with a team of skilled automation engineers at Mighty Build and Test, delivering automated testing across the core gameplay.

My focus was building and maintaining automated tests with test bots that automatically validated new builds as developers made commits to the main branch.
The aim was to confirm the game could be completed, and specific test cases were covered, saving the QA team time, effort and well-being, as the boring (but important) bits of test coverage was taken care of,
allowing them to focus on more important and more interesting issues.
  `,
  sections: [
    {
      title: "Gameplay Automation",
      body: `
My role was to oversee the testbot coverage playing through the game, providing structure to the team to deliver an automated test solution that was as robust as possible.
This involved defining processes and practices that would help with adding additional test cases and maintaining the overall test solution.

The starting point was to complete the game by tracking the state of the game. A lot of this was already automated by SMG, as they required CPU support, so our requirment was to automate the player
character. Playing the core of the game was very simple, and we expanded on this to cover specific test cases such as going through menus, character selection, and validating all stages could be completed.
      `,
      image: "/images/lego-party/lego-party-gameplay.jpg",
      imageAlt: "Lego Party gameplay",
    },
    {
      title: "Multiplayer Testing",
      body: `
One of my tasks was to handle the network multiplayer testing. We usually have multiple test bots running simultaneously when we run our test automation, so I leveraged this and created a
communication channel outside the game to run in a test bot state to handle state for establishing a multiplayer session between two bots.
      `,
      image: "/images/lego-party/lego-party-lobby.png",
      imageAlt: "",
    },
    {
      title: "Test Coverage Reporting",
      body: `
The kind of testing we do for each game largely depends on the individual client. While we had report coverage detailing any errors we ran into, we also wanted to detail the kinds of tests that were run,
how many times, and the success rate.

I introduced a way for the test bots to create correlated markers during test runs, and automatically report the average as a summary. This was soon after integrated as a core feature to
all test bot reports across all clients.
      `,
      image: "/images/lego-party/testbot-report.png",
      imageAlt: "",
    },
  ],
};
