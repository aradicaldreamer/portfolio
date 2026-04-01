type SkillGroup = {
  label: string;
  skills: string[];
};

const skillGroups: SkillGroup[] = [
  {
    label: "Game Development",
    skills: ["Unity / C#", "Unreal Engine / C++", "GOAP AI Systems", "Custom Editor Tools", "Real-time Rendering"],
  },
  {
    label: "Engineering",
    skills: ["CI/CD — Kubernetes, Concourse", "Cloud Infrastructure — AWS", "Test Automation", "C# / .NET"],
  },
  {
    label: "Collaboration",
    skills: ["Technical Documentation", "Mentorship & Training", "Architecture & Code Review", "Cross-disciplinary Teams"],
  },
];

export default function HomeAbout() {
  return (
    <section id="about" className="border-t border-zinc-200 dark:border-zinc-800/60">
      <div className="container-section section-padding">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-6 h-px bg-indigo-400" />
          <span className="text-indigo-500 dark:text-indigo-400 text-xs tracking-widest uppercase">
            about
          </span>
        </div>
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight mb-10">
          A bit about me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Bio */}
          <div className="space-y-4">
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              I&apos;m Dan — a Melbourne-based game developer and automation
              engineer. I graduated from the University of Melbourne with a
              degree in Electrical Engineering and Arts, and have spent the
              years since building systems that scale: first in infrastructure
              and tooling, and increasingly in games.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Game development sits at the intersection of everything I love
              most — maths, creativity, problem-solving, and storytelling. I
              care about the craft of clean, maintainable systems as much as I
              care about the end result.
            </p>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              I&apos;m equally energised by shipping something polished and by
              helping another developer find their footing along the way.
            </p>
          </div>

          {/* Skills */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-6">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <h3 className="text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-600 mb-3 font-medium">
                  {group.label}
                </h3>
                <ul className="space-y-1.5">
                  {group.skills.map((skill) => (
                    <li key={skill} className="flex items-baseline gap-2">
                      <span className="w-1 h-1 rounded-full bg-indigo-400 flex-shrink-0 mt-[7px]" />
                      <span className="text-sm text-zinc-700 dark:text-zinc-300">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
