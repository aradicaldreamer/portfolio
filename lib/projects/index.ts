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

export const projects = [
  // Professional
  mbt,
  piffleplus,
  fitbitArcade,
  // Academic
  igped,
  // Game Jams
  maka,
  // Speaking
];

export function getProjectById(id: string) {
  return projects.find((p) => p.id === id);
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.homeFeatured);
}
