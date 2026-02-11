"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaSoundcloud } from "react-icons/fa";
import interestsData from "@/data/interests.json";
import type { FavoriteItem } from "@/types";
import MarathonCountdown from "@/components/health/MarathonCountdown";
import StravaFeed from "@/components/health/StravaFeed";
import FitnessGoals from "@/components/health/FitnessGoals";
import TravelStats from "@/components/travels/TravelStats";
import WorldMap from "@/components/travels/WorldMap";
import PhotoGallery from "@/components/travels/PhotoGallery";

const tabs = [
  { key: "health", label: "Health" },
  { key: "movies", label: "Movies" },
  { key: "books", label: "Books" },
  { key: "music", label: "Music" },
  { key: "travels", label: "Travels" },
  { key: "photography", label: "Photography" },
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

function ArtistTicker() {
  const artists = interestsData.liveMusic as string[];
  const separator = "  \u00b7  ";
  const tickerText = artists.join(separator);

  return (
    <div className="mt-8">
      <p className="mb-3 text-center text-sm text-text/50">
        Artists Seen - 140+ &amp; counting
      </p>
      <div className="overflow-hidden rounded-xl border border-secondary/30 bg-background/50 py-3">
        <div className="animate-ticker flex whitespace-nowrap">
          <span className="px-4 text-sm text-text/60">
            {tickerText}
          </span>
          <span className="px-4 text-sm text-text/60">
            {tickerText}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function InterestTabs() {
  const [active, setActive] = useState<TabKey>("health");

  return (
    <div>
      {/* Tab bar */}
      <div className="mb-8 flex flex-wrap gap-3">
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

      {/* Content */}
      <AnimatePresence mode="wait">
        {active === "health" && (
          <motion.div
            key="health"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-10"
          >
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              <StravaFeed />
              <MarathonCountdown />
            </div>
            <FitnessGoals />
          </motion.div>
        )}

        {active === "movies" && (
          <motion.div
            key="movies"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {((interestsData as Record<string, unknown>).movies as FavoriteItem[] | undefined)?.length ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {((interestsData as Record<string, unknown>).movies as FavoriteItem[]).map((item, i) => (
                  <InterestCard key={item.id} item={item} index={i} />
                ))}
              </div>
            ) : (
              <div className="rounded-xl border border-secondary/30 bg-background/50 p-8 text-center">
                <p className="text-text/50">
                  Favorite movies coming soon — stay tuned!
                </p>
              </div>
            )}
          </motion.div>
        )}

        {active === "books" && (
          <motion.div
            key="books"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {(interestsData.books as FavoriteItem[]).map((item, i) => (
              <InterestCard key={item.id} item={item} index={i} />
            ))}
          </motion.div>
        )}

        {active === "music" && (
          <motion.div
            key="music"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h3 className="mb-4 font-pixel text-xs text-primary">
              Favorite Songs
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {(interestsData.music as FavoriteItem[]).map((item, i) => (
                <InterestCard key={item.id} item={item} index={i} />
              ))}
            </div>
            <ArtistTicker />

            <a
              href="https://soundcloud.com/thanillmon?utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center justify-center text-text/50 transition-colors hover:text-primary"
              aria-label="SoundCloud"
            >
              <FaSoundcloud size={22} />
            </a>
          </motion.div>
        )}

        {active === "travels" && (
          <motion.div
            key="travels"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-10"
          >
            <TravelStats />
            <WorldMap />
            <PhotoGallery />
          </motion.div>
        )}

        {active === "photography" && (
          <motion.div
            key="photography"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {(interestsData.photography as { src: string; alt: string }[]).length === 0 ? (
              <div className="rounded-xl border border-secondary/30 bg-background/50 p-8 text-center">
                <p className="text-text/50">
                  Photography gallery coming soon — check back for snapshots!
                </p>
              </div>
            ) : (
              <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
                {(interestsData.photography as { src: string; alt: string }[]).map((photo, i) => (
                  <motion.div
                    key={photo.src}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="mb-4 overflow-hidden rounded-xl border border-secondary/30"
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full"
                    />
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
