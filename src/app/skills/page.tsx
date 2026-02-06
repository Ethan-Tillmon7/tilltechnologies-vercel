import type { Metadata } from "next";
import SectionWrapper from "@/components/common/SectionWrapper";
import PageHeader from "@/components/common/PageHeader";
import SkillCategory from "@/components/skills/SkillCategory";
import ResumeViewer from "@/components/skills/ResumeViewer";
import skillsData from "@/data/skills.json";
import type { SkillCategory as SkillCategoryType } from "@/types";

const categories = skillsData as SkillCategoryType[];

export const metadata: Metadata = {
  title: "Skills | TillTechnologies.ai",
  description: "Languages, frameworks, and tools in Ethan Tillmon's toolkit.",
};

export default function SkillsPage() {
  return (
    <>
      <SectionWrapper>
        <PageHeader
          title="Skills"
          subtitle="Languages, frameworks, and tools in my toolkit."
        />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {categories.map((cat, i) => (
            <SkillCategory key={cat.slug} category={cat} index={i} />
          ))}
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <ResumeViewer />
      </SectionWrapper>
    </>
  );
}
