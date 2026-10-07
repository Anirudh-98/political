import React from "react";
import {
  Briefcase,
  ClipboardList,
  Eye,
  GraduationCap,
  HeartHandshake,
  Repeat,
  TrendingUp,
  Users,
  UsersRound,
  Zap,
} from "lucide-react";
import SubPageLayout from "@/components/SubPageLayout";
import {
  FeatureGrid,
  PhotoRow,
  Section,
  Statement,
  Steps,
} from "@/components/PageBlocks";

const IMPACT_AREAS = [
  { icon: GraduationCap, title: "Education & Skills", text: "Creating access to education, coaching and skill-development opportunities." },
  { icon: Briefcase, title: "Employment", text: "Connecting people with job opportunities, career support and entrepreneurship guidance." },
  { icon: HeartHandshake, title: "Public Service", text: "Supporting citizens with grievances, government schemes and local services." },
  { icon: Users, title: "Youth Development", text: "Building skilled and responsible youth through training and opportunities." },
  { icon: UsersRound, title: "Community Development", text: "Supporting families, communities and local participation." },
  { icon: Eye, title: "Transparency", text: "Promoting reporting, monitoring and transparent service delivery." },
];

export default function ResultsPage() {
  return (
    <SubPageLayout
      title="Results & Impact"
      subtitle="Real Work. Real Impact. Real Change."
      image="/images/page-results.webp"
    >
      <Section title="Impact Areas">
        <FeatureGrid items={IMPACT_AREAS} />
      </Section>

      <Section tone="tint">
        <PhotoRow
          photos={[
            { src: "/images/sec-results-career.webp", alt: "A young woman at work in an office", caption: "Employment" },
            { src: "/images/sec-results-water.webp", alt: "Villagers gathered at a new drinking water tap", caption: "Community Development" },
            { src: "/images/video-skill-training.webp", alt: "Young people learning computer skills", caption: "Education & Skills" },
          ]}
        />
      </Section>

      <Section title="Impact Model">
        <Steps
          steps={["Plan", "Execute", "Monitor", "Improve", "Repeat"]}
          icons={[ClipboardList, Zap, Eye, TrendingUp, Repeat]}
        />
      </Section>

      <Statement label="The Bigger Goal">
        Skilled Youth. Strong Families. Strong Community. Better Future.
      </Statement>
    </SubPageLayout>
  );
}
