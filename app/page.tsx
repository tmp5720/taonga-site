import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-14">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-3xl">
        {/* Image */}
        <div className="relative h-[70vh] min-h-[520px] w-full">
          <Image
            src="/hero.jpg"
            alt="Hero photograph"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 1100px"
          />
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-black/45" />
        </div>

        {/* Text */}
        <div className="absolute inset-0 flex items-end">
          <div className="p-8 sm:p-12">
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              
            </h1>
            <div className="mt-3 max-w-xl text-sm text-zinc-200 sm:text-base">
              <p>
              Computer Engineering Technology and Photography 
              </p>

              <p>
              embedded systems, FPGA work, and visual storytelling.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/photo"
                className="rounded-2xl bg-white px-5 py-2.5 text-sm font-medium text-black"
              >
                View Photography
              </a>
              <a
                href="/engineering"
                className="rounded-2xl border border-white/60 px-5 py-2.5 text-sm font-medium text-white hover:border-white"
              >
                View Engineering
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TWO CARDS UNDER HERO */}
      <section className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-3xl border border-zinc-200 bg-white p-6">
          <h2 className="text-lg font-semibold">Photography</h2>
          <p className="mt-2 text-sm text-zinc-600">
            Selected work, series, and galleries.
          </p>
          <a className="mt-4 inline-block text-sm underline" href="/photo">
            Go to portfolio →
          </a>
        </div>

        <div className="rounded-3xl border border-zinc-200 bg-white p-6">
          <h2 className="text-lg font-semibold">Engineering</h2>
          <p className="mt-2 text-sm text-zinc-600">
            Embedded systems and FPGA projects with source code.
          </p>
          <a className="mt-4 inline-block text-sm underline" href="/engineering">
            Go to projects →
          </a>
        </div>
      </section>
    </div>
  );
}
