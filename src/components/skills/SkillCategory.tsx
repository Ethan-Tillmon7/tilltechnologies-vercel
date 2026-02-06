"use client";

import { motion } from "framer-motion";
import SkillBar from "./SkillBar";
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
      transition={{ delay: index * 0.15 }}
      className="rounded-xl border border-secondary/30 bg-background/50 p-6"
    >
      <h3 className="mb-6 font-pixel text-xs text-primary">{category.name}</h3>
      {category.skills.map((skill, i) => (
        <SkillBar key={skill.name} skill={skill} delay={i * 0.1} />
      ))}
    </motion.div>
  );
}
