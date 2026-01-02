export default function Home() {
  return (
    <div className="space-y-10">
      <section className="space-y-4">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Computer Engineering Technology and Photography
        </h1>

        <p className="max-w-2xl text-zinc-300">
          I’m Taonga Mwaka — a Computer Engineering Technology student focused on
          embedded systems, firmware, FPGA work.
          </p>

          <p>
          I am also a visual storyteller - through photography, I get to share how I see the world.
          </p>

        <p>
          Welcome to the place I share my ideas, projects and experiences!
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="/photo"
            className="rounded-2xl bg-white px-5 py-2.5 font-medium text-black"
          >
            View Photography
          </a>

          <a
            href="/engineering"
            className="rounded-2xl border border-zinc-700 px-5 py-2.5 font-medium text-white hover:border-zinc-400"
          >
            View Engineering
          </a>
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-6">
          <h2 className="text-lg font-semibold">Photography</h2>
          <p className="mt-2 text-sm text-zinc-300">
            Selected work including portraits, landscapes, and personal projects/narratives.
          </p>
          <a className="mt-4 inline-block text-sm underline" href="/photo">
            Go to portfolio →
          </a>
        </div>

        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-6">
          <h2 className="text-lg font-semibold">Engineering</h2>
          <p className="mt-2 text-sm text-zinc-300">
            Embedded systems, FPGA labs, and firmware projects with source code.
          </p>
          <a className="mt-4 inline-block text-sm underline" href="/engineering">
            Go to projects →
          </a>
        </div>
      </section>
    </div>
  );
}
