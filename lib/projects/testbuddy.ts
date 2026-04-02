import type { Project } from "./types";

export const testbuddy: Project = {
  id: "testbuddy",
  title: "TestBuddy",
  year: "2024 – 2026",
  team: "Mighty Build and Test",
  role: "Technical Lead",
  category: "professional",
  homeFeatured: true,
  image: "/images/mbt.png",
  description: `
An enterprise QA platform built for games industry testers, featuring one-button bug creation, similar-bug detection, and third party integrations such as Jira and LQA tooling.
  `,
  tags: ["QA Tooling", "C#", ".NET", "MAUI", "AWS"],
  fullDescription: `
TestBuddy was a QA tool developed at Mighty Build and Test, built for QA teams. The goal was to remove friction from every part of the bug-reporting workflow,
from capturing a defect to getting it into a project management system.

The platform handles gameplay footage recording, one-button bug creation, automated detection of similar existing bugs, and integrations with Jira and LQA tools.
  `,
  sections: [
    {
      title: "My role",
      body: `
I joined the project a year after the start of its development, as the app was getting ready to head into testing.
My initial focus was to make the development cycle more robust, adding:

- Coding standards to adhere to during development
- Release process to roll out new builds to QA and live users
- Code review process to handle merge requests
- Regular developer-only meetings to discuss code

As more developers were added to the team, I was able to ensure their tasks were clear and communication was open within the team.
      `,
    },
    {
      title: "Tech Stack",
      body: `
The application was build in .NET MAUI, the successor to Xamarin.
The infrastructure uses AWS to handle user authentication and permissions, databases, app sync, and storage.
Third party tools such as Jira and XLOC (Keywords' own LQA content management system) were a necessity for the full feature set.

For my own features, I focused mainly on the LQA feature set, including:

- Optical Character Recognition (OCR) using Tesseract and OpenCV
- Image processing for text recognition
- XLOC integration for localisation coverage as testers play through the game
- Infrastructure integration with AWS for configuration, authentication and storage
      `,
    },
  ],
};
