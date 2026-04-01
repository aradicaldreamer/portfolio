export type ProjectSection = {
  title: string;
  body: string;
  image?: string;
  imageAlt?: string;
  video?: string;
  youtube?: string;      // YouTube video ID — replaces image in the side-by-side layout
  youtubeBelow?: string; // YouTube video ID — full-width embed below the image+text row
};

export type ProjectLink = {
  label: string;
  url: string;
  type: "external" | "github";
};

export type Project = {
  id: string;
  title: string;
  year: string;
  team?: string;
  role?: string;
  category: "professional" | "personal" | "jam";
  homeFeatured?: boolean;
  description: string;
  tags: string[];
  image?: string;
  video?: string;
  links?: ProjectLink[];
  fullDescription?: string;
  sections?: ProjectSection[];
};
