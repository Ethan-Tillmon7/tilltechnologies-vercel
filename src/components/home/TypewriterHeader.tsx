"use client";

import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

export default function TypewriterHeader() {
  const [mounted, setMounted] = useState(false);
  const [firstLineDone, setFirstLineDone] = useState(false);
  const [showSecondLine, setShowSecondLine] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (firstLineDone) {
      const timer = setTimeout(() => setShowSecondLine(true), 1200);
      return () => clearTimeout(timer);
    }
  }, [firstLineDone]);

  if (!mounted) {
    return (
      <div className="flex flex-col items-center gap-4">
        <h1 className="font-pixel text-base leading-relaxed text-primary sm:text-xl md:text-2xl lg:text-3xl">
          &nbsp;
        </h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center gap-4">
      {firstLineDone ? (
        <h1 className="font-pixel text-base leading-relaxed text-primary sm:text-xl md:text-2xl lg:text-3xl">
          Hello World...
        </h1>
      ) : (
        <TypeAnimation
          sequence={[
            "Hello World...",
            () => setFirstLineDone(true),
          ]}
          wrapper="h1"
          speed={50}
          className="font-pixel text-base leading-relaxed text-primary sm:text-xl md:text-2xl lg:text-3xl"
          cursor={true}
        />
      )}
      {showSecondLine && (
        <TypeAnimation
          sequence={["Welcome to Till Technologies"]}
          wrapper="h2"
          speed={50}
          className="font-pixel text-base leading-relaxed text-primary sm:text-xl md:text-2xl lg:text-3xl"
          cursor={true}
        />
      )}
    </div>
  );
}
