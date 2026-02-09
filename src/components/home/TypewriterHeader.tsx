"use client";

import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

export default function TypewriterHeader() {
  const [showSecondLine, setShowSecondLine] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4">
      <TypeAnimation
        sequence={[
          "Hello World...",
          1200,
          () => setShowSecondLine(true),
        ]}
        wrapper="h1"
        speed={50}
        className="font-pixel text-base leading-relaxed text-primary sm:text-xl md:text-2xl lg:text-3xl"
        cursor={!showSecondLine}
      />
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
