import type { Metadata } from "next";
import SectionWrapper from "@/components/common/SectionWrapper";
import PageHeader from "@/components/common/PageHeader";
import Bio from "@/components/about/Bio";
import Education from "@/components/about/Education";
import Timeline from "@/components/about/Timeline";
import PlacesLived from "@/components/about/PlacesLived";

export const metadata: Metadata = {
  title: "About | TillTechnologies.ai",
  description: "Learn about Ethan Tillmon — education, journey, and story.",
};

export default function AboutPage() {
  return (
    <>
      <SectionWrapper>
        <PageHeader title="About Me" subtitle="My story, education, and the places that shaped me." />
        <Bio />
      </SectionWrapper>
      <SectionWrapper>
        <Education />
      </SectionWrapper>
      <SectionWrapper>
        <PlacesLived />
      </SectionWrapper>
      <SectionWrapper>
        <Timeline />
      </SectionWrapper>
    </>
  );
}
