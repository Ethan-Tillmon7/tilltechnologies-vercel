"use client";

import SectionPreviewCard from "./SectionPreviewCard";

const sections = [
  {
    label: "About",
    href: "/about",
    icon: "FaUser",
    description: "My story, education, and the places that shaped me.",
  },
  {
    label: "Portfolio",
    href: "/portfolio",
    icon: "FaCode",
    description: "Projects I've built — from AI agents to retro games.",
  },
  {
    label: "Skills",
    href: "/skills",
    icon: "FaTools",
    description: "Languages, frameworks, and tools in my toolkit.",
  },
  {
    label: "Health",
    href: "/health",
    icon: "FaHeartbeat",
    description: "Strava stats, marathon training, and fitness goals.",
  },
  {
    label: "Interests",
    href: "/interests",
    icon: "FaStar",
    description: "Favorite movies, books, music, and places.",
  },
  {
    label: "Travels",
    href: "/travels",
    icon: "FaGlobeAmericas",
    description: "An interactive map of where I've been in the world.",
  },
  {
    label: "Connect",
    href: "/contact",
    icon: "FaEnvelope",
    description: "Get in touch — let's build something together.",
  },
];

export default function SectionGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sections.map((section, i) => (
          <SectionPreviewCard key={section.href} {...section} index={i} />
        ))}
      </div>
    </section>
  );
}
