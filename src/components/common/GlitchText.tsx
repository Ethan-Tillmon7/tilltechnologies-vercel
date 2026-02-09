"use client";

import { useCallback, useRef, useState } from "react";

const GLITCH_CHARS = "!@#$%^&*()_+-=[]{}|;:,.<>?/~`01";

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "span";
}

export default function GlitchText({
  text,
  className = "",
  as: Tag = "span",
}: GlitchTextProps) {
  const [display, setDisplay] = useState(text);
  const isAnimating = useRef(false);

  const glitch = useCallback(() => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    const original = text;
    const duration = 400;
    const interval = 30;
    const steps = Math.floor(duration / interval);
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      // Progressively reveal the real characters from left to right
      const resolved = Math.floor(progress * original.length);
      const scrambled = original
        .split("")
        .map((char, i) => {
          if (char === " ") return " ";
          if (i < resolved) return original[i];
          return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)];
        })
        .join("");

      setDisplay(scrambled);

      if (step >= steps) {
        clearInterval(timer);
        setDisplay(original);
        isAnimating.current = false;
      }
    }, interval);
  }, [text]);

  return (
    <Tag className={className} onMouseEnter={glitch}>
      {display}
    </Tag>
  );
}
