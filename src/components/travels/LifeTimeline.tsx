"use client";

import { motion } from "framer-motion";
import travelsData from "@/data/travels.json";

export default function LifeTimeline() {
  const locations = travelsData.locations;

  return (
    <div>
      <h2 className="mb-6 font-pixel text-xs text-primary sm:text-sm">
        Travel Timeline
      </h2>
      <div className="relative ml-4 border-l border-secondary/30 pl-8">
        {locations.map((loc, i) => (
          <motion.div
            key={loc.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative mb-8 last:mb-0"
          >
            <div className="absolute -left-[2.55rem] top-1 h-3 w-3 rounded-full border-2 border-primary bg-primary" />
            <h3 className="font-semibold text-text">{loc.name}</h3>
            <p className="text-sm text-text/50">{loc.country}</p>
            {loc.description && (
              <p className="text-xs text-text/40">{loc.description}</p>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
