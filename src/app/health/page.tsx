import type { Metadata } from "next";
import SectionWrapper from "@/components/common/SectionWrapper";
import PageHeader from "@/components/common/PageHeader";
import MarathonCountdown from "@/components/health/MarathonCountdown";
import StravaFeed from "@/components/health/StravaFeed";
import FitnessGoals from "@/components/health/FitnessGoals";

export const metadata: Metadata = {
  title: "Health & Fitness | TillTechnologies.ai",
  description: "Strava stats, marathon training, and fitness goals.",
};

export default function HealthPage() {
  return (
    <>
      <SectionWrapper>
        <PageHeader
          title="Health"
          subtitle="Strava stats, marathon training, and fitness goals."
        />
        <MarathonCountdown />
      </SectionWrapper>
      <SectionWrapper>
        <StravaFeed />
      </SectionWrapper>
      <SectionWrapper>
        <FitnessGoals />
      </SectionWrapper>
    </>
  );
}
