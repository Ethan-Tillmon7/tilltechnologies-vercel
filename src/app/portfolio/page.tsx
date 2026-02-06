import type { Metadata } from "next";
import SectionWrapper from "@/components/common/SectionWrapper";
import PageHeader from "@/components/common/PageHeader";
import ProjectGrid from "@/components/portfolio/ProjectGrid";

export const metadata: Metadata = {
  title: "Portfolio | TillTechnologies.ai",
  description: "Projects built by Ethan Tillmon — from AI agents to retro games.",
};

export default function PortfolioPage() {
  return (
    <SectionWrapper>
      <PageHeader
        title="Portfolio"
        subtitle="Projects I've built — from AI agents to retro games."
      />
      <ProjectGrid />
    </SectionWrapper>
  );
}
