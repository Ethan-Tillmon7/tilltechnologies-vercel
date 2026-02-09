"use client";

import { motion } from "framer-motion";
import type { SkillCategory as SkillCategoryType } from "@/types";

interface SkillCategoryProps {
  category: SkillCategoryType;
  index: number;
}

export default function SkillCategory({ category, index }: SkillCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="rounded-xl border border-secondary/30 bg-background/50 p-6"
    >
      <h3 className="mb-4 font-pixel text-xs text-primary">{category.name}</h3>
      <ul className="space-y-2">
        {category.skills.map((skill) => (
          <li
            key={skill.name}
            className="text-sm text-text/70 transition-colors hover:text-text"
          >
            {skill.name}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
