"use client";

import { motion } from "framer-motion";
import aboutData from "@/data/about.json";

export default function Bio() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center gap-8 md:flex-row md:items-start"
    >
      {/* Profile photo placeholder */}
      <div className="h-48 w-48 shrink-0 rounded-full border-2 border-primary/30 bg-secondary/20" />

      <div>
        <h2 className="mb-4 font-pixel text-sm text-primary sm:text-base">
          About Me
        </h2>
        <p className="max-w-2xl leading-relaxed text-text/80">
          {aboutData.bio}
        </p>
      </div>
    </motion.div>
  );
}
