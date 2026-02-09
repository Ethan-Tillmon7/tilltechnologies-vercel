import type { Metadata } from "next";
import SectionWrapper from "@/components/common/SectionWrapper";
import PageContent from "@/components/common/PageContent";
import InterestTabs from "@/components/interests/InterestTabs";

export const metadata: Metadata = {
  title: "Interests | TillTechnologies.ai",
  description: "Music, photography, fitness, travels — some things that keep me going",
};

export default function InterestsPage() {
  return (
    <SectionWrapper>
      <PageContent
        title="Interests"
        subtitle="Music, photography, fitness, travels — some things that keep me going"
      >
        <InterestTabs />
      </PageContent>
    </SectionWrapper>
  );
}
