import React from "react";
import {
  Briefcase,
  GraduationCap,
  Hand,
  HeartHandshake,
  HeartPulse,
  Landmark,
  Laptop,
  MapPin,
  Megaphone,
  Scale,
  ShieldCheck,
  Users,
} from "lucide-react";
import SubPageLayout from "@/components/SubPageLayout";
import {
  Callout,
  CheckList,
  FeatureGrid,
  Panel,
  PhotoRow,
  Section,
  Split,
  Statement,
} from "@/components/PageBlocks";

const SERVICES = [
  { icon: MapPin, title: "Booth Information & Grievance Support" },
  { icon: Landmark, title: "Government Scheme Guidance" },
  { icon: GraduationCap, title: "Education & Skill Opportunities" },
  { icon: Briefcase, title: "Employment & Entrepreneurship Help" },
  { icon: Users, title: "Youth & Women Empowerment" },
  { icon: HeartPulse, title: "Senior Citizen & Health Support" },
  { icon: Laptop, title: "Digital & Online Assistance" },
  { icon: Megaphone, title: "Community Events & Awareness" },
];

export default function VoterServicesPage() {
  return (
    <SubPageLayout
      title="Voter Services"
      subtitle="Your Vote Is Powerful. Your Participation Is Essential."
      image="/images/page-voter-services.webp"
    >
      <Section eyebrow="Introduction" title="Your Booth. Your Future.">
        <Split
          image="/images/video-public-service.webp"
          alt="Volunteers helping residents with paperwork at a help desk"
        >
          <Callout icon={HeartHandshake}>
            <p>
              We are here to serve you, not just before elections, but every day, for your
              better life.
            </p>
          </Callout>
        </Split>
      </Section>

      <Section tone="tint" title="Services Available">
        <FeatureGrid items={SERVICES} columns={4} />
        <div className="mt-8">
          <PhotoRow
            photos={[
              { src: "/images/sec-voter-digital.webp", alt: "A volunteer helping an elderly man use a smartphone", caption: "Digital & Online Assistance" },
              { src: "/images/sec-voter-awareness.webp", alt: "A community awareness meeting in a village", caption: "Community Events & Awareness" },
              { src: "/images/video-health-camp.webp", alt: "A doctor checking a village resident at a health camp", caption: "Senior Citizen & Health Support" },
            ]}
          />
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Panel icon={Scale} title="We Are Committed To" color="#071936">
            <CheckList
              columns={1}
              items={[
                "Transparent and fair service",
                "No caste, no religion, no bias",
                "Everyone equal, everyone important",
                "No promises, only performance",
                "Together we build a better community",
              ]}
            />
          </Panel>
          <Panel icon={Hand} title="You Can Participate" color="#08793F">
            <CheckList
              columns={1}
              items={[
                "Share your problems",
                "Give your suggestions",
                "Join awareness programs",
                "Volunteer for community work",
                "Help keep your area clean, safe and developed",
              ]}
            />
          </Panel>
          <Panel icon={ShieldCheck} title="Our Promise" color="#C8141F">
            <CheckList
              columns={1}
              items={[
                "We will be available.",
                "We will listen.",
                "We will act.",
                "We will inform you.",
                "We will work for you.",
              ]}
            />
          </Panel>
        </div>
      </Section>

      <Statement>Be Informed. Be Involved. Be Empowered.</Statement>
    </SubPageLayout>
  );
}
