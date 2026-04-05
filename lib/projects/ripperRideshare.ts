import type { Project } from "./types";

export const ripperRideshare: Project = {
  id: "ripperRideshare",
  title: "Ripper Rideshare",
  year: "2019",
  role: "Producer, Designer, Audio Programmer",
  category: "jam",
  image: "/images/ripperRideshare/ripper_rideshare.gif",
  description: `
Locomojam 2019 Entry. Comedic 2D Crazy Taxi where you *are* the GPS!
  `,
  tags: ["C#", "Unity", "Locomojam"],
  links: [
    {
      label: "Ripper Rideshare on Itch.io",
      url: "https://aradicaldreamer.itch.io/ripper-rideshare",
      type: "external",
    },
  ],
  fullDescription: `
Ripper Rideshare is a top-down 2D driving puzzle game where you are the GPS! Guide your vehicle with the help of your Australian nav partner to deliver your passengers safely while avoiding strange and unexpected traffic obstacles. You only have 60 seconds, so complete fares quickly to extend your time, and collect the most money possible!

Made in 48 hours on the trains from Brisbane to Melbourne during Locomojam 2019!
  `,
  sections: [
        {
        title: "Gameplay Preview Video",
        body: "",
        youtubeBelow: "xLqlHqcGRtc"
        },
        {
            title: "Meet the Team",
            body: `
Team Credits (From Left to Right)

Axel Kennedy - Lead Programmer

Michelle Ginnivan - Designer/Writer/Voice Artist

Matthew Deline - Producer/Designer

Juan José Alvarez - Artist

Oliver Taylor - UI Programmer`,
            image: "/images/ripperRideshare/team_photo.jpeg",
        }
    ],
};