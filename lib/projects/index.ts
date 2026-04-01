// Re-export types
export type { Project, ProjectSection, ProjectLink } from "./types";

// ─── Project list ────────────────────────────────────────────────────────────
// Edit this list to add, remove, or reorder projects.
// Each import is the project's own file in this folder.

import { testbuddy } from "./testbuddy";
import { legoParty } from "./lego-party";
import { fitbitArcade } from "./fitbit-arcade";
import { innchanted } from "./innchanted";
import { forestDemo } from "./forest-demo";
import { factoryDemo } from "./factory-demo";
import { clumsyBat } from "./clumsy-bat";
import { goap } from "./goap";
import { playerController } from "./player-controller";
import { procgen } from "./procgen";
import { lonelyAstronaut } from "./lonely-astronaut";
import { meowMeowCrash } from "./meow-meow-crash";

export const projects = [
  // Professional
  testbuddy,
  legoParty,
  fitbitArcade,
  innchanted,
  // Personal
  forestDemo,
  factoryDemo,
  clumsyBat,
  procgen,
  goap,
  playerController,
  // Game Jams
  meowMeowCrash,
  lonelyAstronaut,
];

export function getProjectById(id: string) {
  return projects.find((p) => p.id === id);
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.homeFeatured);
}
