// Re-export types
export type { Project, ProjectSection, ProjectLink } from "./types";

// ─── Project list ────────────────────────────────────────────────────────────
// Edit this list to add, remove, or reorder projects.
// Each import is the project's own file in this folder.

import { fitbitArcade } from "./fitbit-arcade";
import { piffleplus } from "./piffleplus";
import { maka } from "./maka";
import { igped } from "./igped";
import { mbt } from "./mbt";
import { campervanGames } from "./campervanGames";
import { ripperRideshare } from "./ripperRideshare";
import { ggs } from "./ggs";
import { chopchop } from "./chopchop";
import { lowerdecks } from "./lowerdecks";
import { piffle } from "./piffle";
import { shootyskiesoverdrive } from "./shootyskiesoverdrive";
import { piffleswitch } from "./piffleswitch";
import { legoParty } from "./lego-party";
import { fruitninja } from "./fruitninja";
import { fruitninja2 } from "./fruitninja2";
import { monsterdash } from "./monsterdash";
import { jetpackjoyride } from "./jetpackjoyride";
import { trainconductorworld } from "./trainconductorworld";
import { botworldadventure } from "./botworldadventure";
import { armello } from "./armello";
import { crossyroadplus } from "./crossyroadplus";
import { att } from "./att";
import { neocab } from "./neocab";
import { hotlapleague } from "./hotlapleague";
import { warpedkartracers } from "./warpedkartracers";
import { vactics } from "./vactics";
import { necrobarista } from "./necrobarista";
import { tumbletime } from "./tumbletime";
import { wildlife } from "./wildlife";
import { peterrabbitrun } from "./peterrabbitrun";
import { barbie } from "./barbie";
import { shapearcade } from "./shapearcade";
import { shapearcadeunity } from "./shapearcadeunity";

export const projects = [
  // Professional
  campervanGames,
  mbt,
  ggs,
  piffleplus,
  legoParty,
  fitbitArcade,
  piffle,
  warpedkartracers,
  armello,
  lowerdecks,
  att,
  crossyroadplus,
  fruitninja,
  fruitninja2,
  monsterdash,
  jetpackjoyride,
  tumbletime,
  vactics,
  botworldadventure,
  hotlapleague,
  necrobarista,
  piffleswitch,
  shootyskiesoverdrive,
  chopchop,
  wildlife,
  peterrabbitrun,
  barbie,
  trainconductorworld,
  neocab,
  shapearcadeunity,
  // Academic
  igped,
  shapearcade,
  // Game Jams
  maka,
  ripperRideshare,
  // Speaking
];

export function getProjectById(id: string) {
  return projects.find((p) => p.id === id);
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.homeFeatured);
}
