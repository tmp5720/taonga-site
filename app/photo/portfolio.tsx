"use client";

import { useEffect, useState } from "react";

type Category = "Landscape" | "Portraiture" | "Collections";

const DATA: Record<Exclude<Category, "Collections">, string[]> = {
  Landscape: [
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

type CollectionItem = {
  image?: string;
  text: string;
};

type CollectionGroup = {
  title: string;
  description: string;
  coverImage: string;
  items: CollectionItem[];
};

const COLLECTIONS: CollectionGroup[] = [
  {
    title: "The Theory of Equivalence",
    description:
      "A reflection on family, absence, memory, and the emotional weight a photograph can hold.",
    coverImage: "/portfolio/collections/canadice-4.jpg",
    items: [
      {
        image: "/portfolio/collections/canadice-9.jpg",
        text: "Two dads, three sons. As I watched them interact during a peaceful day at Canadice Lake, I got hit with a feeling of longing, like suddenly there was a void in my life, something I haven’t felt in years. I see a grandfather, mature in his years, take his son fishing. A father, learning the ropes, copying an example set by the man who came before him. Two sons, brothers, living seemingly carefree - unaware of the weight that comes with age, and unaware of the stress that comes with giving them a life that others view as I viewed it.",
      },
      {
        image: "/portfolio/collections/canadice-4.jpg",
        text: "Minor White’s theory of Equivalence may help explain why this scene and image affected me so strongly. White suggests that a photograph becomes an “Equivalent” when what the viewer or audience sees corresponds to something internal, transforming the image from a simple record into a more symbolic experience, typically shaped by emotions, memories, and moments of self-awareness.",
      },
      {
        image: "/portfolio/collections/canadice-7.jpg",
        text: "At a literal level, all this photograph shows is a quiet, almost unremarkable moment of two fathers and their sons. A simple family in nature. On the surface, this peaceful moment has no distinct, out in the open meaning or emotional cues. The emotional weight of the photograph does not come from the scene itself but is a result of my interaction with it. Rather than documenting my relationship with my own father, the image operates symbolically, allowing me to project my personal history onto a scene that is otherwise detached from it.",
      },
      {
        image: "/portfolio/collections/canadice-1.jpg",
        text: "White proposes that photographers often rely on metaphor when the true subject cannot be photographed directly. Distance creates clarity. Would the emotion be the same if the subjects changed and my own father was in the frame? What about me? Would the photograph impact me in the same way if I was watching a scene of another version of my father and I as father and son? This image retains its strength precisely because it depicts strangers rather than my own family.",
      },
      {
        image: "/portfolio/collections/canadice-6.jpg",
        text: "The same can’t be said for every viewer. The image does not and will not affect us the same way. We simply aren’t the same. Someone else could view it and be hit with a pleasant wave of nostalgia. Another could be stabbed by the dull blade of grief. White summarizes this viewer-centered nature of Equivalence when he states, “Equivalency, while it depends entirely on the photograph itself for the source of stimulation, functions in the mind of the viewer.” In my case, the image becomes meaningful not because of what it depicts, but because of what it allows me to feel, an absence that only exists and emerges through my own experience and perspective.",
      },
      {
        text: "This photograph remains with me not because of what it shows, but because of what it revealed. What started as a simple family scene became a mirror of my own relationship with my father, the choices that led us here, and the distance between us now. I become self-aware to an absence I had grown numb to, one that only surfaced through an indirect observation. In this way, the photograph functions as an Equivalent by allowing me to recognize something internal rather than presenting a fixed meaning.",
      },
    ],
  },
  {
    title: "Dock Day 2026",
    description:
      "A look at the behind the scenes labor and atmosphere surrounding the less glamorized aspects of athletics.",
    coverImage: "/portfolio/collections/dock_day-21.jpg",
    items: [
      {
        image: "/portfolio/collections/dock_day1.jpg",
        text: "Captain.",
      },
      {
        image: "/portfolio/collections/dock_day2.jpg",
        text: "Candid.",
      },
      {
        image: "/portfolio/collections/dock_day3.jpg",
        text: "Still.",
      },
      {
        image: "/portfolio/collections/dock_day5.jpg",
        text: "Coach.",
      },
      {
        image: "/portfolio/collections/dock_day6.jpg",
        text: "Dock.",
      },
      {
        image: "/portfolio/collections/dock_day7.jpg",
        text: "Aperture.",
      },
      {
        image: "/portfolio/collections/dock_day8.jpg",
        text: "Smile.",
      },
      {
        image: "/portfolio/collections/dock_day9.jpg",
        text: "Focus.",
      },
    ],
  },
  {
    title: "Studio Work",
    description:
      "A look into traditional studio work. A blend of artificial lighting and set direction.",
    coverImage: "/portfolio/collections/unsharp-2.jpg",
    items: [
      {
        image: "/portfolio/collections/nat1.jpg",
        text: "",
      },
      {
        image: "/portfolio/collections/nat2.jpg",
        text: "",
      },
      {
        image: "/portfolio/collections/nat3.jpg",
        text: "",
      },
      {
        image: "/portfolio/collections/nat4.jpg",
        text: "",
      },
      {
        image: "/portfolio/collections/nat5.jpg",
        text: "",
      },
      {
        image: "/portfolio/collections/nat6.jpg",
        text: "",
      },
    ],
  },
];

export default function Portfolio() {
  const [active, setActive] = useState<Category>("Landscape");
  const [shown, setShown] = useState<Category>("Landscape");
  const [isFading, setIsFading] = useState(false);

  const [activeCollection, setActiveCollection] = useState<number | null>(null);
  const [shownCollection, setShownCollection] = useState<number | null>(null);
  const [isCollectionFading, setIsCollectionFading] = useState(false);

  const requestTab = (next: Category) => {
    if (next === active) return;
    setActive(next);
  };

  const requestCollection = (index: number) => {
    if (index === activeCollection) return;
    setActiveCollection(index);
  };

  const resetCollections = () => {
    setActiveCollection(null);
    setShownCollection(null);
  };

  useEffect(() => {
    if (active === shown) return;

    setIsFading(true);

    const swap = window.setTimeout(() => {
      setShown(active);

      if (active !== "Collections") {
        resetCollections();
      }

      window.requestAnimationFrame(() => setIsFading(false));
    }, 160);

    return () => window.clearTimeout(swap);
  }, [active, shown]);

  useEffect(() => {
    if (activeCollection === shownCollection) return;
    if (activeCollection === null) return;

    setIsCollectionFading(true);

    const swap = window.setTimeout(() => {
      setShownCollection(activeCollection);
      window.requestAnimationFrame(() => setIsCollectionFading(false));
    }, 180);

    return () => window.clearTimeout(swap);
  }, [activeCollection, shownCollection]);

  const currentCollection =
    shownCollection !== null ? COLLECTIONS[shownCollection] : null;

  return (
    <div className="space-y-10">
      <div className="flex justify-center gap-8 text-sm text-zinc-600">
        {(["Landscape", "Portraiture", "Collections"] as Category[]).map((cat) => (
          <button
            key={cat}
            onClick={() => requestTab(cat)}
            className={
              active === cat
                ? "text-zinc-900 border-b border-zinc-900 pb-1"
                : "hover:text-zinc-800 transition-colors"
            }
          >
            {cat}
          </button>
        ))}
      </div>

      <div
        className={[
          "transition-opacity duration-700 ease-out",
          isFading ? "opacity-20" : "opacity-100",
        ].join(" ")}
      >
        {shown === "Collections" ? (
          <div className="space-y-10">
            {shownCollection === null ? (
              <section className="space-y-10">
                <div className="max-w-2xl mx-auto text-center space-y-3">
                  <p className="text-base leading-7 text-zinc-600">
                    Select a collection to view.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                  {COLLECTIONS.map((collection, index) => (
                    <button
                      key={collection.title}
                      onClick={() => requestCollection(index)}
                      className="group relative overflow-hidden rounded-2xl min-h-[340px] text-left bg-zinc-100"
                    >
                      <img
                        src={collection.coverImage}
                        alt={collection.title}
                        className="absolute inset-0 h-full w-full object-cover transition duration-500 ease-out group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-black/40 transition duration-300 group-hover:bg-black/25" />

                      <div className="relative z-10 flex h-full flex-col justify-end p-8">
                        <h3 className="text-white text-2xl md:text-3xl font-medium">
                          {collection.title}
                        </h3>
                        <p className="mt-3 text-sm md:text-base leading-6 text-white/85 max-w-md">
                          {collection.description}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </section>
            ) : (
              <>
                <div className="flex flex-wrap justify-center gap-6 text-sm text-zinc-600">
                  {COLLECTIONS.map((collection, index) => (
                    <button
                      key={collection.title}
                      onClick={() => requestCollection(index)}
                      className={
                        activeCollection === index
                          ? "text-zinc-900 border-b border-zinc-900 pb-1"
                          : "hover:text-zinc-800 transition-colors"
                      }
                    >
                      {collection.title}
                    </button>
                  ))}

                  <button
                    onClick={resetCollections}
                    className="text-zinc-500 hover:text-zinc-800 transition-colors"
                  >
                    Back
                  </button>
                </div>

                <div
                  className={[
                    "transform transition-all duration-700 ease-out",
                    isCollectionFading
                      ? "opacity-0 translate-y-4"
                      : "opacity-100 translate-y-0",
                  ].join(" ")}
                >
                  {currentCollection && (
                    <section key={currentCollection.title} className="space-y-12">
                      <div className="max-w-2xl mx-auto text-center space-y-3">
                        <h2 className="text-2xl md:text-3xl font-medium text-zinc-900">
                          {currentCollection.title}
                        </h2>
                        <p className="text-base leading-7 text-zinc-600">
                          {currentCollection.description}
                        </p>
                      </div>

                      <div className="space-y-20">
                        {currentCollection.items.map((item, index) => {
                          if (!item.image) {
                            return (
                              <div
                                key={`${currentCollection.title}-${index}`}
                                className="max-w-2xl mx-auto text-center"
                              >
                                <p className="text-base leading-7 text-zinc-700">
                                  {item.text}
                                </p>
                              </div>
                            );
                          }

                          return (
                            <div
                              key={`${currentCollection.title}-${index}`}
                              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center min-h-[70vh] max-w-6xl mx-auto"
                            >
                              <div
                                className={
                                  index % 2 === 0
                                    ? "order-1 flex items-center justify-center"
                                    : "order-1 md:order-2 flex items-center justify-center"
                                }
                              >
                                <div className="w-full max-w-2xl mx-auto rounded-2xl overflow-hidden">
                                  <img
                                    src={item.image}
                                    alt=""
                                    className="block w-full h-auto object-cover transition-opacity duration-200 hover:opacity-90"
                                    loading="lazy"
                                  />
                                </div>
                              </div>

                              <div
                                className={
                                  index % 2 === 0
                                    ? "order-2 flex items-center justify-center"
                                    : "order-2 md:order-1 flex items-center justify-center"
                                }
                              >
                                <div className="w-full max-w-xl mx-auto text-center">
                                  <p className="text-base leading-7 text-zinc-700">
                                    {item.text}
                                  </p>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </section>
                  )}
                </div>
              </>
            )}
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 [column-gap:2rem]">
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
        )}
      </div>
    </div>
  );
}