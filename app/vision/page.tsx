import React from "react";
import {
  Briefcase,
  Eye,
  GraduationCap,
  HeartHandshake,
  Leaf,
  Lightbulb,
  Sunrise,
  Users,
  UsersRound,
  Zap,
} from "lucide-react";
import SubPageLayout from "@/components/SubPageLayout";
import {
  Callout,
  FeatureGrid,
  PhotoRow,
  Section,
  Split,
  Statement,
} from "@/components/PageBlocks";

const VISION_POINTS = [
  { icon: Zap, title: "Real-Time Public Service" },
  { icon: GraduationCap, title: "Skilled Youth" },
  { icon: Briefcase, title: "Employment & Self-Employment" },
  { icon: UsersRound, title: "Strong Families & Communities" },
  { icon: Eye, title: "Transparent Systems" },
  { icon: Sunrise, title: "Better Tomorrow" },
];

const VALUES = [
  { icon: HeartHandshake, title: "Service", text: "Make public service accessible and meaningful." },
  { icon: Eye, title: "Transparency", text: "Promote transparency and accountability." },
  { icon: Lightbulb, title: "Opportunity", text: "Create opportunities through skills, education and employment." },
  { icon: Users, title: "Inclusion", text: "Serve people without discrimination." },
  { icon: Leaf, title: "Sustainability", text: "Build opportunities for a better future." },
];

export default function VisionPage() {
  return (
    <SubPageLayout
      title="Our Vision"
      subtitle="Skilled Youth. Strong Families. Better Tomorrow."
      image="/images/page-vision.webp"
    >
      <Section
        eyebrow="Vision Statement"
        title="Our vision is to build a stronger community through:"
      >
        <FeatureGrid items={VISION_POINTS} />
      </Section>

      <Section tone="tint" eyebrow="Our Core Approach" title="People First, Service Always">
        <Split
          image="/images/sec-vision-family.webp"
          alt="A three-generation family sitting together at home"
        >
          <Callout icon={Users}>
            <p>
              Instead of focusing only on elections, the model focuses on investing in people,
              skills, opportunities and public service.
            </p>
          </Callout>
        </Split>
      </Section>

      <Section title="Our Values">
        <FeatureGrid items={VALUES} />
      </Section>

      <Section tone="tint">
        <PhotoRow
          photos={[
            { src: "/images/sec-vision-entrepreneur.webp", alt: "A young woman entrepreneur in her tailoring workshop", caption: "Employment & Self-Employment" },
            { src: "/images/video-skill-training.webp", alt: "Young people learning computer skills", caption: "Skilled Youth" },
            { src: "/images/sec-about-community.webp", alt: "Residents planting a sapling together", caption: "Better Tomorrow" },
          ]}
        />
      </Section>

      <Statement label="Vision Statement">
        Instead of spending on elections, invest in people, skills & opportunities. Together we
        grow, together we serve, together we build a better India.
      </Statement>
    </SubPageLayout>
  );
}
