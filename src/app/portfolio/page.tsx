import type { Metadata } from "next";
import SectionWrapper from "@/components/common/SectionWrapper";
import PageContent from "@/components/common/PageContent";
import ProjectGrid from "@/components/portfolio/ProjectGrid";
import SkillCategory from "@/components/skills/SkillCategory";
import ResumeViewer from "@/components/skills/ResumeViewer";
import skillsData from "@/data/skills.json";
import type { SkillCategory as SkillCategoryType } from "@/types";

const categories = skillsData as SkillCategoryType[];

export const metadata: Metadata = {
  title: "Portfolio | TillTechnologies.ai",
  description: "Projects, skills, and resume — Ethan Tillmon's developer toolkit.",
};

export default function PortfolioPage() {
  return (
    <>
      <SectionWrapper>
        <PageContent
          title="Portfolio"
          subtitle="Projects I've built, skills in my toolkit, and my resume."
        >
          <ResumeViewer />
          <div className="mt-10">
            <ProjectGrid />
          </div>
        </PageContent>
      </SectionWrapper>
      <SectionWrapper>
        <h2 className="mb-8 font-pixel text-sm text-primary sm:text-base">
          Skills
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, i) => (
            <SkillCategory key={cat.slug} category={cat} index={i} />
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}
