"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-12 text-center"
    >
      <h1 className="font-pixel text-2xl text-primary sm:text-3xl md:text-4xl">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-4 text-lg text-text/70">{subtitle}</p>
      )}
    </motion.div>
  );
}
