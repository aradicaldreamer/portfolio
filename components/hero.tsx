import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function Hero() {
  const stats = [
    { num: "+ 15 years", label: "professional experience" },
    { num: "+ 9 years", label: "in game development" },
    { num: "3", label: "engines" },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Hero body */}
      <div className="relative container-section section-padding flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Left */}
        <div className="flex-1 min-w-0">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-5">
            <div className="w-6 h-px bg-indigo-400" />
            <span className="text-indigo-500 dark:text-indigo-400 text-xs tracking-widest uppercase">
              available for work
            </span>
          </div>

          {/* Name + title */}
          <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-50 leading-tight tracking-tight mb-2">
            Dan Szabo
          </h1>
          <p className="text-lg text-zinc-500 mb-6 font-medium">
            Senior Game Developer{" "}
            <span className="text-indigo-500 dark:text-indigo-400">/</span> Engineer
          </p>

          {/* Bio */}
          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-lg mb-8">
            I build high-performance games and systems with Unity, Unreal, and
            .NET. I love the craft — and I love sharing it. Whether it&apos;s
            real-time rendering, gameplay architecture, or helping another
            developer find their footing, that&apos;s where I find my purpose.
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-3 flex-wrap mb-8">
            <a href="/cv.pdf" download>
              <Button className="bg-indigo-500 hover:bg-indigo-400 text-white rounded-none font-medium text-sm px-5 gap-2 transition-colors">
                <Download size={14} />
                Download CV
              </Button>
            </a>
            <a href="/projects">
              <Button
                variant="outline"
                className="rounded-none text-sm px-5 bg-transparent border-zinc-300 dark:border-zinc-700 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:border-zinc-400 dark:hover:border-zinc-500 transition-colors"
              >
                My Projects
              </Button>
            </a>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-2">
            <span className="text-zinc-400 dark:text-zinc-600 text-xs mr-1">find me on</span>
            <a
              href="https://linkedin.com/in/dan-szabo-02ab952b"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 flex items-center justify-center border border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:border-indigo-400 hover:text-indigo-400 transition-all"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="https://github.com/Aspekt1024"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="group w-9 h-9 flex items-center justify-center border border-zinc-200 dark:border-zinc-800 hover:border-indigo-400 transition-all"
            >
              <img
                src="/github.svg"
                alt=""
                aria-hidden="true"
                className="w-4 h-4 dark:invert opacity-50 group-hover:opacity-100 transition-opacity"
              />
            </a>
            <a
              href="mailto:danszabo.dev@gmail.com"
              aria-label="Email"
              className="w-9 h-9 flex items-center justify-center border border-zinc-200 dark:border-zinc-800 text-zinc-500 hover:border-indigo-400 hover:text-indigo-400 transition-all"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M2 7l10 7 10-7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right — photo */}
        <div className="shrink-0">
          <div className="relative w-48 h-48 md:w-56 md:h-56">
            {/* Soft glow behind photo */}
            <div
              className="absolute inset-0 pointer-events-none scale-150"
              style={{
                background:
                  "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
              }}
            />
            {/* Offset accent border */}
            <div className="absolute inset-0 border border-indigo-400/40 translate-x-2.5 translate-y-2.5" />
            {/* Photo container */}
            <div className="relative z-10 w-full h-full bg-zinc-200 dark:bg-zinc-800/80 border border-zinc-300 dark:border-zinc-700 overflow-hidden">
              <Image
                src="/DanProfile.jpg"
                alt="Dan Szabo"
                fill
                sizes="(max-width: 768px) 192px, 224px"
                className="object-cover object-top"
                priority
              />
            </div>
            {/* Availability badge */}
            <div className="absolute -bottom-3 -right-3 z-20 bg-stone-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 px-3 py-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-zinc-500 dark:text-zinc-400 text-[11px]">
                open to opportunities
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="relative container-section border-t border-zinc-200 dark:border-zinc-800/60 flex">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="flex-1 px-6 md:px-10 py-6 border-r border-zinc-200 dark:border-zinc-800/60 last:border-r-0"
          >
            <div className="text-xl md:text-2xl font-bold text-zinc-900 dark:text-zinc-50 leading-none mb-1">
              {stat.num.replace("+", "")}
              {stat.num.includes("+") && (
                <span className="text-amber-500 dark:text-amber-400">+</span>
              )}
            </div>
            <div className="text-[11px] text-zinc-400 dark:text-zinc-600 uppercase tracking-wider">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
