import type { Metadata } from "next";
import SectionWrapper from "@/components/common/SectionWrapper";
import PageHeader from "@/components/common/PageHeader";
import InterestTabs from "@/components/interests/InterestTabs";

export const metadata: Metadata = {
  title: "Interests | TillTechnologies.ai",
  description: "Favorite movies, books, music, and places.",
};

export default function InterestsPage() {
  return (
    <SectionWrapper>
      <PageHeader
        title="Interests"
        subtitle="Favorite movies, books, music, and places."
      />
      <InterestTabs />
    </SectionWrapper>
  );
}
