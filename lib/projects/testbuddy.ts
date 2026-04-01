import type { Project } from "./types";

export const testbuddy: Project = {
  id: "testbuddy",
  title: "TestBuddy",
  year: "2024 – present",
  team: "Mighty Build and Test",
  role: "Technical Lead",
  category: "professional",
  homeFeatured: true,
  image: "/images/mbt.png",
  description:
    "An enterprise QA platform built for games industry testers. One-button bug creation, automated similar-bug detection, Jira and LQA CMS integration, gameplay footage recording, and cross-platform coverage — all designed to reduce friction at every step of the reporting workflow.",
  tags: ["QA Tooling", "C#", ".NET", "MAUI", "AWS"],
  fullDescription:
    "TestBuddy is an enterprise QA tool developed at Mighty Build and Test, purpose-built for games industry test teams. The goal was to remove friction from every part of the bug-reporting workflow — from capturing a defect to getting it into a project management system.\n\nThe platform handles gameplay footage recording, one-button bug creation, automated detection of similar existing bugs, and deep integrations with Jira and LQA CMS. It runs cross-platform and is designed to slot into existing studio pipelines without disruption.",
  sections: [
    {
      title: "One-Button Bug Creation",
      body: "The core experience is fast, low-friction reporting. Testers can file a complete bug report — with footage, metadata, and reproduction steps — in a single action. The system automatically captures context so testers can stay focused on testing rather than administration.",
    },
    {
      title: "Similar Bug Detection",
      body: "TestBuddy analyses incoming reports against existing bug databases to surface potential duplicates before they're filed. This reduces noise in the backlog and helps teams spot patterns across platforms and build versions early in the cycle.",
    },
    {
      title: "Integrations & Platform Coverage",
      body: "Deep integrations with Jira and LQA CMS mean bugs flow directly into existing studio workflows without copy-paste or reformatting. The tool runs cross-platform, supporting the variety of hardware configurations typical in games QA environments.",
    },
  ],
};
