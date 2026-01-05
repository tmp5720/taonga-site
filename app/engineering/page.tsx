import Link from "next/link";

const PROJECTS = [
  {
    title: "FPGA & DSP Lab Work",
    subtitle: "DE1-SoC • VHDL • filters • audio",
    description:
      "Built and tested FPGA-based audio pipelines and filter components, focusing on clean timing, memory-mapped peripherals, and predictable real-time behavior.",
    tags: ["VHDL", "FPGA", "Quartus", "Digital Signal Processing"],
    href: "#", // replace with GitHub or a case-study route later
  },
  {
    title: "Embedded Systems Projects",
    subtitle: "Firmware • peripherals • debugging workflows",
    description:
      "Developed embedded firmware projects with a focus on reliability, documentation, and repeatable test workflows across hardware and software.",
    tags: ["C/C++", "Embedded", "Debugging", "Testing"],
    href: "#",
  },
  {
    title: "Photography Portfolio Site",
    subtitle: "Next.js • UI/UX • performance",
    description:
      "Designed and built this website to present work with intention—focusing on layout, performance, and a clean editorial feel.",
    tags: ["Next.js", "TypeScript", "UI"],
    href: "#",
  },
];

const SKILLS = {
  "Embedded & Firmware": ["C", "C++", "FreeRTOS", "I2C/SPI/UART", "Debugging"],
  "Digital Design": ["VHDL", "FPGA workflows", "Timing closure basics", "Memory-mapped I/O"],
  Tooling: ["Git/GitHub", "Linux", "Oscilloscope/Logic Analyzer", "Documentation"],
};

export default function EngineeringPage() {
  return (
    <div className="space-y-16">
      {/* HERO */}
      <section className="space-y-4">
        <p className="text-xs tracking-widest uppercase text-zinc-500">
          Engineering
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Embedded systems, digital design, and firmware.
        </h1>
      </section>

      {/* SKILLS */}
      <section className="grid gap-4 sm:grid-cols-3">
        {Object.entries(SKILLS).map(([group, items]) => (
          <div
            key={group}
            className="rounded-3xl border border-zinc-200 bg-white p-6"
          >
            <h2 className="text-sm font-semibold tracking-tight">{group}</h2>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600">
              {items.map((s) => (
                <li key={s} className="flex items-start gap-2">
                  <span className="mt-2 h-1 w-1 rounded-full bg-zinc-400" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* PROJECTS */}
      <section className="space-y-6">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
          </div>
          {/* Optional: link to GitHub */}
          <a
            href="https://github.com/tmp5720"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-block text-sm text-zinc-600 hover:text-zinc-900 underline"
          >
            GitHub →
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {PROJECTS.map((p) => (
            <div
              key={p.title}
              className="rounded-3xl border border-zinc-200 bg-white p-6"
            >
              <div className="space-y-1">
                <h3 className="text-lg font-semibold tracking-tight">
                  {p.title}
                </h3>
                <p className="text-xs tracking-wide text-zinc-500">
                  {p.subtitle}
                </p>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-zinc-600">
                {p.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-zinc-200 px-2.5 py-1 text-xs text-zinc-600"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {p.href !== "#" && (
                <div className="mt-5">
                  <a
                    href={p.href}
                    className="text-sm underline text-zinc-700 hover:text-zinc-900"
                  >
                    View details →
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE / RESUME */}
      <section className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-600">
          I’ve worked full time, in an environment where my output mattered.
          This allowed me to enhance my abilities in professional documentation, 
          team collaboration, project testing and meeting desired deliverables.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-zinc-50 p-5">
            <p className="text-sm font-semibold">What I bring</p>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600">
              <li>• Solid embedded & digital design fundamentals</li>
              <li>• Documentation and repeatable workflows</li>
              <li>• Practical debugging mindset</li>
              <li>• Clean, simple interfaces (software + UI)</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-zinc-50 p-5">
            <p className="text-sm font-semibold">Currently exploring</p>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600">
              <li>• DSP & audio systems</li>
              <li>• FPGA optimization & timing</li>
              <li>• Robust embedded testing</li>
              <li>• High quality engineering writeups</li>
            </ul>
          </div>
        </div>

        <div className="mt-7 flex flex-wrap gap-3">
          {/* If you add a resume PDF later: put it in /public/resume.pdf and link it */}
          <a
  href="/resume.pdf"
  target="_blank"
  rel="noreferrer"
  className="rounded-2xl bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-black/90"
>
  View Resume
</a>
        </div>
      </section>
    </div>
  );
}
