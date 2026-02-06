import type { Metadata } from "next";
import SectionWrapper from "@/components/common/SectionWrapper";
import PageHeader from "@/components/common/PageHeader";
import WorldMap from "@/components/travels/WorldMap";
import PhotoGallery from "@/components/travels/PhotoGallery";
import LifeTimeline from "@/components/travels/LifeTimeline";

export const metadata: Metadata = {
  title: "Travels | TillTechnologies.ai",
  description: "An interactive map and gallery of places I've explored.",
};

export default function TravelsPage() {
  return (
    <>
      <SectionWrapper>
        <PageHeader
          title="Travels"
          subtitle="An interactive map of where I've been in the world."
        />
        <WorldMap />
      </SectionWrapper>
      <SectionWrapper>
        <PhotoGallery />
      </SectionWrapper>
      <SectionWrapper>
        <LifeTimeline />
      </SectionWrapper>
    </>
  );
}
