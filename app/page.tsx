"use client";

import Link from "next/link"
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
<div aria-hidden className="h-20 sm:h-64" />

{/* SUB DIVIDER */}
<div className="px-8 sm:px-12">
  <div className="h-px w-24 bg-zinc-300/40" />
</div>

{/* ABOUT ME */}
<section
  ref={aboutRef}
  id="about"
  className={`bg-black rounded-3xl overflow-hidden transition-all duration-1000 ease-out
    ${aboutVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
  `}
>
  <div className="p-8 sm:p-12">
    <div className="grid gap-10 md:grid-cols-[1fr_360px] max-w-5xl">
      {/* TEXT */}
      <div className="max-w-3xl">
        <h2 className="text-2xl font-semibold tracking-tight text-white">
          About Me
        </h2>

        <p className="mt-4 text-sm leading-relaxed text-zinc-300">
          I’m Taonga! I’m currently a Computer Engineering Technology student born and raised in Zambia,
           studying in the United States, expected to graduate in May 2026! 
           I have hands-on, full-time experience in Research and Development Engineering where 
           I got to understand working on firmware development, completing time-constrained projects 
           and a being part of a team of people from different parts of the world in every sense.
        </p>

        <p className="mt-4 text-sm leading-relaxed text-zinc-300">
          I started to be fascinated with by the art of photography after taking a photo of sunshine reflecting
           off a glass building in 2012 while traveling with my family. For around a decade, 
           I had an on and off relationship with the art until 2022. 
        </p>

        <p className="mt-4 text-sm leading-relaxed text-zinc-300">
          In my second year of college, when stress the stress of being a student built up,
           I found peace in the idea of being sheltered by creating things for me. 
           This led me to pick it as my minor, one of the best decisions I have ever made.

        </p>

        <p className="mt-4 text-sm leading-relaxed text-zinc-300">
          I started to develop my skills and became more particular about what I wanted to photograph
           and how I wanted to photograph things. I wanted other people to see what I saw too, 
           the story I was trying to tell. This led to a bunch of my images being tied together as narratives
        </p>

        <p className="mt-4 text-sm leading-relaxed text-zinc-300">
          Fast-forward to the fall of 2025. I returned to school for my senior year of college 
          after working a co-op full-time for a year. So much had changed, 
          it felt like so much time had gone by in the blink of an eye.

        </p>

        <p className="mt-4 text-sm leading-relaxed text-zinc-300">
          That became my main theme for most of my work - TIME.
        </p>

        <p className="mt-4 text-sm leading-relaxed text-zinc-300">
          We’re all running out of time, but I want to explore the aspects of the passage of time 
          and the nostalgic feeling of the past as well as the desire for the future and memories to be made.
        </p>

        <p className="mt-4 text-sm leading-relaxed text-zinc-300">
          I taught myself modern web scripting to design and build this site from the ground up,
           using it not only as an extension of my engineering practice but also a representation of my desire to create.
            With only so much time in the world, why not see how much you can create while you still can?
        </p>

        <p className="mt-4 text-sm leading-relaxed text-zinc-300">
          I hope you enjoy your time here!
        </p>
      </div>

      {/* PORTRAIT */}
      <div className="md:justify-self-end">
        <div className="relative w-full max-w-[420px] overflow-hidden rounded-3xl bg-zinc-900/40 ring-1 ring-white/10">
          <div className="relative aspect-[3/4]">
            <Image
              src="/about.jpg"
              alt="Portrait of Taonga Mwaka"
              fill
              className="object-cover"
              sizes="(max-width: 730px) 90vw, 360px"
            />
          </div>
        </div>

        {/* Optional caption */}
        <div className="mt-3 text-xs tracking-wide text-zinc-400">
  <span>Photograph by Katelyn Nagy · </span>
  <Link
    href="https://katelynnagy9.com"
    target="_blank"
    className="underline hover:text-white"
  >
    katelynnagy9.com
  </Link>
</div>

      </div>
    </div>
  </div>
</section>



      
    </div>
  );
}
