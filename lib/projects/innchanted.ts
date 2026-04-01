import type { Project } from "./types";

export const innchanted: Project = {
  id: "innchanted",
  title: "Innchanted",
  year: "2019 – 2023",
  team: "Dragonbear Studios",
  role: "Lead Programmer",
  category: "professional",
  homeFeatured: true,
  image: "/images/innchanted.png",
  description: `
A co-op adventure where you brew magical potions, serve otherworldly guests, and fend off monsters. As Lead Programmer I oversaw the full codebase architecture and managed the programming team along with production.
  `,
  tags: ["Unity", "C#", "Networked Multiplayer", "NPC Behaviour", "Custom Editors"],
  links: [
    {
      label: "Steam",
      url: "https://store.steampowered.com/app/1369720/Innchanted/",
      type: "external",
    },
    { label: "Website", url: "https://innchanted.com/", type: "external" },
  ],
  fullDescription: `
Innchanted is an online multiplayer co-op adventure game where players brew magical potions, serve otherworldly guests, and battle monsters in a fantasy inn.
I joined the project in 2019 as Lead Programmer and saw it through to its 2023 release on Steam, where it achived a Very Positive review.

My role involved architecting and maintaining the core codebase from the ground up - building systems flexible enough to support rapid iteration
by a small team of programmers, designers and artists, while keeping the codebase clean and maintainable throughout development.
  `.trim(),
  sections: [
    {
      title: "Gameplay Trailer",
      body: ``,
      youtubeBelow: "qlaFsTyE870",
    },
    {
      title: "AI System",
      body: `
AI is driven by a robust, scalable GOAP (Goal Oriented Action Planning) system. Actions and Goals can be safely switched out at any point during gameplay for full control over AI behaviour. It allows in-game helpers to assist players with gameplay tasks, and also controls monster behaviour.

In the example shown, a player delegates the helper AI to cook a steak for a customer. The player interrupts the cooking process, and the AI immediately corrects this by cooking another steak. Before it finishes, the AI is instructed to defend the inn — it promptly fetches a weapon and attacks the monster.
      `.trim(),
      image: "/images/innchanted/helper.gif",
      imageAlt: "AI helper running the inn",
    },
    {
      title: "Level Configuration Editor",
      body: `
The level config editor tool enables selection of attributes for each individual phase of gameplay, including maps, events, dialogue and NPCs. Designers can configure each level phase independently without touching code, allowing rapid iteration on game flow and content.
      `.trim(),
      image: "/images/innchanted/day-matrix.jpg",
      imageAlt: "Level configuration editor toggles",
    },
    {
      title: "Map Editor",
      body: `
The map editor allows for rapid prototyping of playable maps so designers can place objects with predefined rules. It removes the need for programmers to be involved in level layout, giving the design team direct control over the playable space.
      `.trim(),
      image: "/images/innchanted/map-editor.jpg",
      imageAlt: "Placing the mimic chest using the map editor",
    },
    {
      title: "Recipe Editor",
      body: `
The recipe editor manages how objects can be combined at each individual crafting station. Each station can have its own unique set of recipes, all configurable without code changes. This gave the design team direct control over the crafting system's rules and balance.
      `.trim(),
      image: "/images/innchanted/ctRecipeEditor.jpg",
      imageAlt: "Defining recipes for the cauldron",
    },
    {
      title: "Shop System",
      body: `
All systems in Innchanted are designed to be self-contained, with a clean separation between logic and UI. The shop system is a simple example of this — a single call to Shop.Open() handles item selection logic and displays the UI, keeping the rest of the codebase decoupled from shop concerns.
      `.trim(),
      image: "/images/innchanted/ShopFlow.jpg",
      imageAlt: "Shop system workflow diagram",
    },
    {
      title: "Activity System",
      body: `
Players make meaningful choices that affect gameplay. The activity system handles gameplay tasks that offer unique choices for players, impacting the story or offering immediate effects. Activities are flexibly sequenced into the game flow via the level config editor.
      `.trim(),
      image: "/images/innchanted/activities.gif",
      imageAlt: "Night activity selection",
    },
    {
      title: "Quest System",
      body: `
Quests are tutorial-like events that provide crafting and enchanting challenges outside the main gameplay loop. They are flexibly sequenced using the level config editor and usually include custom dialogue to assist players or provide story context.
      `.trim(),
      image: "/images/innchanted/ctPotionTutorial.jpg",
      imageAlt: "Crafting potions for a group of adventurers",
    },
  ],
};
