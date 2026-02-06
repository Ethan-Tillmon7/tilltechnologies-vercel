"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { Skill } from "@/types";

interface SkillBarProps {
  skill: Skill;
  delay?: number;
}

export default function SkillBar({ skill, delay = 0 }: SkillBarProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className="mb-4">
      <div className="mb-1 flex items-center justify-between">
        <span className="text-sm font-medium text-text">{skill.name}</span>
        <span className="text-xs text-text/50">{skill.level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-secondary/20">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 0.8, delay, ease: "easeOut" }}
          className="h-full rounded-full bg-gradient-to-r from-accent to-primary"
        />
      </div>
    </div>
  );
}
