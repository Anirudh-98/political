import React from "react";
import { ClipboardList, Eye, Repeat, Target, TrendingUp, Zap } from "lucide-react";
import SubPageLayout from "@/components/SubPageLayout";
import {
  Callout,
  CourseCards,
  Section,
  Split,
  Statement,
  Steps,
} from "@/components/PageBlocks";
import { PROGRAMS, programHref } from "@/components/ProgramSections";

export default function ProgramsPage() {
  return (
    <SubPageLayout
      title="Our Programs"
      subtitle="Real Service. Real Skills. Real Opportunities."
      image="/images/page-programs.webp"
    >
      <Section>
        <Split
          image="/images/sec-programs-planning.webp"
          alt="A team reviewing plans around a table"
        >
          <div className="space-y-4">
            <Callout icon={Repeat}>
              <p>Our programs are designed around a continuous cycle of:</p>
            </Callout>
            <Callout icon={Target}>
              <p>
                The objective is to connect public service, skills, opportunities, employment,
                entrepreneurship and community development.
              </p>
            </Callout>
          </div>
        </Split>
        <div className="mt-8">
          <Steps
            steps={["Plan", "Execute", "Monitor", "Improve", "Repeat"]}
            icons={[ClipboardList, Zap, Eye, TrendingUp, Repeat]}
          />
        </div>
      </Section>

      <Section tone="tint" eyebrow="Our Programs" title="All Programs">
        <CourseCards
          courses={PROGRAMS.map((program) => ({
            href: programHref(program),
            title: program.name,
            image: program.image,
          }))}
        />
      </Section>

      <Statement label="Transparency">
        No Favour. No Fear. Only Fairness, Transparency & Service.
      </Statement>
    </SubPageLayout>
  );
}
