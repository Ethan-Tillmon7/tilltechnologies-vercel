"use client";

import { TypeAnimation } from "react-type-animation";

export default function TypewriterHeader() {
  return (
    <TypeAnimation
      sequence={[
        "Hello World...",
        1200,
        "Hello World... Welcome to Till Technologies",
        3000,
      ]}
      wrapper="h1"
      speed={50}
      className="font-pixel text-base leading-relaxed text-primary sm:text-xl md:text-2xl lg:text-3xl"
      cursor={true}
    />
  );
}
