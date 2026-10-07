import React from "react";
import {
  BookOpen,
  Eye,
  Flag,
  GraduationCap,
  HeartHandshake,
  Sunrise,
  Users,
  UsersRound,
} from "lucide-react";
import SubPageLayout from "@/components/SubPageLayout";
import {
  Callout,
  FeatureGrid,
  PhotoRow,
  Section,
  Split,
  Statement,
  Steps,
} from "@/components/PageBlocks";

const STAND_FOR = [
  { icon: Users, title: "People First", text: "Understanding people's needs and working towards meaningful solutions." },
  { icon: HeartHandshake, title: "Public Service", text: "Supporting citizens through accessible and transparent services." },
  { icon: GraduationCap, title: "Skilled Youth", text: "Creating opportunities for education, training, skills and employment." },
  { icon: UsersRound, title: "Strong Families & Communities", text: "Supporting families and building stronger, more connected communities." },
  { icon: Eye, title: "Transparent Systems", text: "Promoting accountability, fairness and responsible public service." },
  { icon: Sunrise, title: "Better Tomorrow", text: "Working towards sustainable opportunities and a stronger future." },
];

export default function AboutPage() {
  return (
    <SubPageLayout
      title="About Us"
      subtitle="People First. Service Always."
      image="/images/page-about.webp"
    >
      <Section>
        <Split
          image="/images/sec-about-doorstep.webp"
          alt="Volunteers speaking with a family at their doorstep"
        >
          <div className="space-y-4">
            <Callout icon={Users}>
              <p>
                We believe democracy becomes stronger when public service is connected with
                people, opportunities and real community needs.
              </p>
            </Callout>
            <Callout icon={HeartHandshake}>
              <p>
                Our approach focuses on people-first politics, skilled youth, stronger
                families, transparent systems and better public service.
              </p>
            </Callout>
          </div>
        </Split>
      </Section>

      <Section tone="tint" title="What We Stand For">
        <FeatureGrid items={STAND_FOR} />
      </Section>

      <Section eyebrow="Our Approach" title="Learn → Serve → Lead">
        <Split
          reverse
          image="/images/video-cadre-training.webp"
          alt="Volunteers in a community training session"
        >
          <Callout icon={BookOpen}>
            <p>
              We connect education, skills, public service, employment opportunities and
              community participation into one continuous approach.
            </p>
          </Callout>
          <div className="mt-5">
            <Steps steps={["Learn", "Serve", "Lead"]} icons={[BookOpen, HeartHandshake, Flag]} />
          </div>
        </Split>
      </Section>

      <Section tone="tint">
        <PhotoRow
          photos={[
            { src: "/images/sec-about-community.webp", alt: "Residents planting a sapling together", caption: "Strong Families & Communities" },
            { src: "/images/video-skill-training.webp", alt: "Young people learning computer skills", caption: "Skilled Youth" },
            { src: "/images/video-public-service.webp", alt: "Volunteers assisting residents at a help desk", caption: "Public Service" },
          ]}
        />
      </Section>

      <Statement>
        Together we grow. Together we serve. Together we build a better India.
      </Statement>
    </SubPageLayout>
  );
}
