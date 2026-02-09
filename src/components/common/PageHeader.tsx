"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  onTypingDone?: () => void;
}

export default function PageHeader({
  title,
  subtitle,
  onTypingDone,
}: PageHeaderProps) {
  const [typingDone, setTypingDone] = useState(false);

  return (
    <div className="mb-12 text-center">
      <h1 className="font-pixel text-2xl text-primary sm:text-3xl md:text-4xl">
        <TypeAnimation
          sequence={[
            title,
            () => {
              setTypingDone(true);
              onTypingDone?.();
            },
          ]}
          wrapper="span"
          speed={50}
          cursor={true}
        />
      </h1>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={typingDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6 }}
          className="mt-4 text-lg text-text/70"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
