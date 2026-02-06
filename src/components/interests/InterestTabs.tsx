"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import interestsData from "@/data/interests.json";
import type { FavoriteItem } from "@/types";

const tabs = [
  { key: "movies", label: "Movies" },
  { key: "books", label: "Books" },
  { key: "music", label: "Music" },
  { key: "places", label: "Places" },
] as const;

type TabKey = (typeof tabs)[number]["key"];

function InterestCard({
  item,
  index,
}: {
  item: FavoriteItem;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ delay: index * 0.08 }}
      className="group overflow-hidden rounded-xl border border-secondary/30 bg-background/50"
    >
      {/* Image placeholder */}
      <div className="flex h-56 items-center justify-center bg-secondary/10">
        <span className="px-4 text-center font-pixel text-[0.6rem] text-primary/30">
          {item.title}
        </span>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-text">{item.title}</h3>
        {item.subtitle && (
          <p className="text-sm text-text/50">{item.subtitle}</p>
        )}
        {item.rating && (
          <div className="mt-2 flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={i < item.rating! ? "text-primary" : "text-secondary/30"}
              >
                ★
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function InterestTabs() {
  const [active, setActive] = useState<TabKey>("movies");

  const items = (interestsData[active] ?? []) as FavoriteItem[];

  return (
    <div>
      {/* Tab bar */}
      <div className="mb-8 flex flex-wrap justify-center gap-3">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActive(tab.key)}
            className={`rounded-full px-5 py-2 text-sm transition-colors ${
              active === tab.key
                ? "bg-primary text-background"
                : "border border-secondary/30 text-text/60 hover:border-primary/50 hover:text-primary"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {items.map((item, i) => (
            <InterestCard key={item.id} item={item} index={i} />
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
