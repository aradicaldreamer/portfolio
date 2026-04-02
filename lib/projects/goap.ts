import type { Project } from "./types";

export const goap: Project = {
  id: "goap",
  title: "NPC Behaviour Systems",
  year: "",
  team: "Solo",
  role: "Programmer",
  category: "personal",
  image: "/images/goap/npc-splash.png",
  description: `
An overview of NPC/AI Behaviour over the years, covering regular state machines, Goal Oriented Action Planning (GOAP) and Utility systems.
  `,
  tags: ["Unity", "C#", "AI Behaviour"],
  links: [
    {
      label: "GitHub",
      url: "https://github.com/Aspekt1024/LittleDrones",
      type: "github",
    },
  ],
  fullDescription: `
Over the years, I've implemented various behaviour systems for NPCs.
I've had success with different systems such as simple Finite State Machines for Clumsy Bat, Goal Oriented Action Planning for Innchanted and other projects, and more recently, the Utility system.
  `,
  sections: [
    {
      title: "Finite State Machines (FSM)",
      body: `
Finite state machines are simple by design. I talk more about the implementation of these in the Clumsy Bat project, so I won't cover it again here.
The focus on this page is about solving for extensibility. FSMs require transitions to be hard-coded between states, so scalability becomes tricky to manage.
      `,
    },
    {
      title: "Goal Oriented Action Planning (GOAP)",
      body: `
The Goal Oriented Action Planning (GOAP) is a system where state transitions are calculated at runtime using a lowest-cost algorithm (A*). This system comprises of 3 main components:

- Goals: what the AI wants to achieve
- Actions: what the AI can do to achive a goal
- Sensors: what the AI knows about the world

Each component is independent and can be added or removed at any point during gameplay, even mid-execution.
      `,
      image: "/images/goap/modules.jpg",
      imageAlt: "GOAP AI module components",
    },
    {
      title: "GOAP Evaluated",
      body: `
The benefit to this system over a regular state machine is how it's very easy to add new abilities, goals and sensors throughout development.
It's also very easy to visualise what the agent is going to do, because it calculates the entire action plan before executing a goal.

The drawback is it can become inefficient when many complex actions are added to the system, as it needs to calculate a combination of most of the
possible action sequences in order to find the most efficient way to achieve a goal.

The video below shows an implementation of GOAP where it wants to collect resources, while keeping itself fuelled.
It will prioritise fuel when the supply runs low, retrieving coal instead of gathering resources.
Otherwise it will collect resources if it can find any, and return them to the storage depot.
      `,
      youtubeBelow: "6hwz5PQqSf4",
    },
    {
      title: "Utility System",
      body: `
The utility system aims to solve the problem of scalability by asking each action for its utilty.
Each action has a utility function that determines how much the agent wants to do it, and the highest utility value wins.

This approach relies on a good blackboard to track the state of the agent, along with caching within the Agent's Sensors to ensure efficient resolution of the utility functions.
As a result, we get a system that's much easier to understand, because each action is only dependent on state, not other actions before it.

In the video below, we follow a wood cutter who's also prepared to defend.
Using a Heirarchical Task Network (HTN), this npc is assigned to a lumber mill near the town, as it has adjacent trees for collection.
The NPC's goal is to collect wood, so they'll cycle between cutting trees and returning the wood to the mill, depending on how much wood they have in their inventory.

If they were to see an enemy, the utility function for defending would return a higher value that cutting wood (though they may need to drop the wood first if they're carrying some),
and so they would attack instead.
      `,
      videoBelow: "/videos/utility-system.mp4",
    },
  ],
};
