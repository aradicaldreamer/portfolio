import type { Project } from "./types";

export const playerController: Project = {
  id: "player-controller",
  title: "2D Player Controllers",
  year: "",
  team: "Solo",
  role: "Programmer",
  category: "personal",
  image: "/images/player-controller/trixie-run.png",
  description:
    "A reusable 2D platformer controller with extensible abilities, substance interactions (water, bounce pads, flight), and multi-controller keybinding. Base code remains unmodified when extending for specific games.",
  tags: ["Unity", "C#", "State Machines"],
  links: [
    {
      label: "GitHub",
      url: "https://github.com/Aspekt1024/PlayerController2D",
      type: "github",
    },
  ],
  fullDescription: `
A reusable 2D player controller developed for Unity platformers, designed with extensibility as the primary goal.
The base controller handles all core movement and ability logic, and game-specific features are added by extending - not modifying - the base code.

The controller has been used as the foundation for other projects.
  `.trim(),
  sections: [
    {
      title: "Base Controller",
      body: `
The base controller handles all core movement and ability logic such as running, jumping, and enabling or disabling abilities. Game-specific features are added by either adding additional abilities or effects, which can be enabled or disabled at runtime.

The player controller operates with a blackboard to store state. Abilities and effects can match against this state to determine if they're valid for the situation. For example, you can only jump if you're on the ground, or have the double jump ability and it hasn't been used yet.
      `.trim(),
      image: "/images/player-controller/playercontroller2d.gif",
      imageAlt: "2D player controller in action",
    },
    {
      title: "Ability Extensibility",
      body: `
Adding more abilities is the first obvious need for extension. Adding abilities such as a blink with time dilation and a cursor could easily be done by adding an ability module with rules for when it can be used.
      `.trim(),
      image: "/images/player-controller/blink.gif",
      imageAlt: "Added blink ability",
    },
    {
      title: "Environment Extensibility",
      body: `
Environmental substances such as bouncy pads and water were able to modify character physics without any changes to the base controller code. Each substance type is self-contained and can be dropped into any scene.
      `.trim(),
      image: "/images/player-controller/water-physics.gif",
      imageAlt: "Additional environmental effects and abilities",
    },
    {
      title: "Reskinning and animations",
      body: `
By updating the animator, adding additional abilities, and adjusting the physics properties of the controller to fit the game, the player controller was ready to go for another project.
      `.trim(),
      image: "/images/player-controller/trixie.gif",
      imageAlt: "Sprites and animations",
    },
  ],
};
