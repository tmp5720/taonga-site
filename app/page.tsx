"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const [aboutVisible, setAboutVisible] = useState(false);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    if (!aboutRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAboutVisible(true);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(aboutRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="space-y-24">
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
          <div className="absolute inset-0 bg-black/45" />
        </div>

        {/* Text */}
        <div className="absolute inset-0 flex items-end">
          <div className="p-8 sm:p-12">

            <div className="mt-3 max-w-xl text-sm text-zinc-200 sm:text-base">
              <p>Computer Engineering Technology and Photography</p>
              <p>Embedded systems, FPGA work, and visual storytelling.</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="/portfolio"
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

        {/* ↓ ABOUT ME ARROW */}
        <button
          onClick={scrollToAbout}
          aria-label="Scroll to about section"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/80 hover:text-white transition"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase">
            About Me
          </span>
          <ChevronDown size={26} className="animate-bounce" />
        </button>
      </section>

      {/* Spacer so About is NOT visible initially */}
      <div aria-hidden className="h-40 sm:h-64" />

      {/* Spacer so About is NOT visible initially */}
<div aria-hidden className="h-40 sm:h-64" />

{/* SUB DIVIDER */}
<div className="px-8 sm:px-12">
  <div className="h-px w-24 bg-zinc-300/40" />
</div>

{/* ABOUT ME */}
<section
  ref={aboutRef}
  id="about"
  className={`bg-black transition-all duration-700 ease-out
    ${aboutVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
  `}
>
  <div className="p-8 sm:p-12 max-w-3xl">
    <h2 className="text-2xl font-semibold tracking-tight text-white">
      About Me
    </h2>

    <p className="mt-4 text-sm leading-relaxed text-zinc-300">
      I’m a Computer Engineering Technology student with a strong focus on
      embedded systems, FPGA design, and firmware development, alongside a
      deep passion for photography and visual storytelling. My work blends
      technical precision with creative intent.
    </p>
  </div>
</section>


      
    </div>
  );
}
