"use client";

import { useEffect, useState } from "react";

type Category = "Landscape" | "Portraiture";

const DATA: Record<Category, string[]> = {
  Landscape: [
    "/portfolio/landscape0.jpg",
    "/portfolio/landscape1.jpg",
    "/portfolio/landscape2.jpg",
    "/portfolio/landscape3.jpg",
    "/portfolio/landscape4.jpg",
    "/portfolio/landscape5.jpg",
    "/portfolio/landscape6.jpg",
    "/portfolio/landscape7.jpg",
    "/portfolio/landscape8.jpg",
    "/portfolio/landscape9.jpg",
    "/portfolio/landscape10.jpg",
    "/portfolio/landscape11.jpg",
    "/portfolio/landscape12.jpg",
    "/portfolio/landscape13.jpg",
    "/portfolio/landscape14.jpg",
    "/portfolio/landscape15.jpg",
    "/portfolio/landscape16.jpg",
    "/portfolio/landscape17.jpg",
    "/portfolio/landscape18.jpg",
    "/portfolio/landscape19.jpg",
    "/portfolio/landscape20.jpg",
    "/portfolio/landscape21.jpg",
  ],
  Portraiture: [
    "/portfolio/portrait1.jpg",
    "/portfolio/portrait2.jpg",
    "/portfolio/portrait3.jpg",
    "/portfolio/portrait4.jpg",
    "/portfolio/portrait5.jpg",
    "/portfolio/portrait6.jpg",
    "/portfolio/portrait7.jpg",
    "/portfolio/portrait8.jpg",
    "/portfolio/portrait10.jpg",
    "/portfolio/portrait11.jpg",
    "/portfolio/portrait12.jpg",
    "/portfolio/portrait13.jpg",
    "/portfolio/portrait14.jpg",
    "/portfolio/portrait15.jpg",
    "/portfolio/portrait16.jpg",
    "/portfolio/portrait17.jpg",
    "/portfolio/portrait18.jpg",
    "/portfolio/portrait19.jpg",
  ],
};

export default function Portfolio() {
  const [active, setActive] = useState<Category>("Landscape");

  // what’s currently displayed (lets us fade out before swapping)
  const [shown, setShown] = useState<Category>("Landscape");
  const [isFading, setIsFading] = useState(false);

  const requestTab = (next: Category) => {
    if (next === active) return;
    setActive(next);
  };

  useEffect(() => {
    if (active === shown) return;

    // fade out
    setIsFading(true);

    const swap = window.setTimeout(() => {
      setShown(active); // swap content while hidden-ish
      // fade in
      window.requestAnimationFrame(() => setIsFading(false));
    }, 160);

    return () => window.clearTimeout(swap);
  }, [active, shown]);

  return (
    <div className="space-y-10">
      {/* Tabs */}
      <div className="flex justify-center gap-8 text-sm text-zinc-600">
        {(Object.keys(DATA) as Category[]).map((cat) => (
          <button
            key={cat}
            onClick={() => requestTab(cat)}
            className={
              active === cat
                ? "text-zinc-900 border-b border-zinc-900 pb-1"
                : "hover:text-zinc-800"
            }
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div
        className={[
          "columns-1 sm:columns-2 lg:columns-3 [column-gap:2rem]",
          "transition-opacity duration-1000 ease-out",
          isFading ? "opacity-20" : "opacity-100",
        ].join(" ")}
      >
        {DATA[shown].map((src) => (
          <div
            key={src}
            className="mb-8 break-inside-avoid overflow-hidden rounded-xl bg-zinc-100 inline-block w-full align-top"
          >
            <img
              src={src}
              alt=""
              className="w-full h-auto block transition-opacity duration-200 hover:opacity-90"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
