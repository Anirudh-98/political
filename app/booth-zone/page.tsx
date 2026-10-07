import React from "react";
import {
  BadgeCheck,
  Briefcase,
  ClipboardCheck,
  FileText,
  GraduationCap,
  HeartHandshake,
  MapPin,
  Megaphone,
  MessageSquare,
  Search,
  Send,
  UsersRound,
} from "lucide-react";
import SubPageLayout from "@/components/SubPageLayout";
import {
  BlockHeading,
  Callout,
  CheckList,
  Panel,
  PhotoRow,
  Section,
  Split,
  Steps,
  TileList,
} from "@/components/PageBlocks";

export default function BoothZonePage() {
  return (
    <SubPageLayout
      title="Booth Zone"
      subtitle="Strong Booth. Strong Constituency."
      image="/images/page-booth-zone.webp"
    >
      <Section>
        <Split
          image="/images/sec-booth-survey.webp"
          alt="Volunteers speaking with a resident at her doorstep"
        >
          <Callout icon={MapPin}>
            <p>
              The booth is an important point for connecting people with public services,
              opportunities and community support.
            </p>
          </Callout>
        </Split>
      </Section>

      <Section tone="tint" title="Booth-Level Support">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Panel icon={HeartHandshake} title="Public Service" color="#071936">
            <CheckList
              columns={1}
              items={[
                "Grievance support",
                "Government scheme guidance",
                "Citizen assistance",
                "Service follow-up",
              ]}
            />
          </Panel>
          <Panel icon={GraduationCap} title="Education & Skills" color="#1D46C4">
            <CheckList
              columns={1}
              items={[
                "Course information",
                "Coaching opportunities",
                "Skill development",
                "Career support",
              ]}
            />
          </Panel>
          <Panel icon={Briefcase} title="Employment" color="#08793F">
            <CheckList
              columns={1}
              items={[
                "Job opportunities",
                "Resume support",
                "Interview guidance",
                "Entrepreneurship support",
              ]}
            />
          </Panel>
          <Panel icon={UsersRound} title="Community Support" color="#C8141F">
            <CheckList
              columns={1}
              items={[
                "Youth support",
                "Women empowerment",
                "Senior citizen support",
                "Community awareness",
              ]}
            />
          </Panel>
        </div>
      </Section>

      <Section>
        <Split
          reverse
          image="/images/sec-booth-team.webp"
          alt="A team of young booth-level volunteers"
        >
          <BlockHeading title="Booth Cadre" tagline="A trained booth cadre is expected to:" />
          <TileList
            columns={1}
            items={[
              "Understand people's needs",
              "Coordinate services",
              "Support government schemes",
              "Promote education and skill programs",
              "Maintain peace and harmony",
              "Build a bridge between people and administration",
            ]}
          />
        </Split>
      </Section>

      <Section tone="tint" title="Booth-Level Service Flow">
        <Steps
          steps={["Identify", "Verify", "Forward", "Follow Up", "Resolve", "Inform", "Record"]}
          icons={[Search, FileText, Send, MessageSquare, BadgeCheck, Megaphone, ClipboardCheck]}
        />
        <div className="mt-8">
          <PhotoRow
            photos={[
              { src: "/images/video-public-service.webp", alt: "Volunteers assisting residents at a help desk", caption: "Public Service" },
              { src: "/images/video-skill-training.webp", alt: "Young people learning computer skills", caption: "Education & Skills" },
              { src: "/images/sec-voter-awareness.webp", alt: "A community awareness meeting in a village", caption: "Community Support" },
            ]}
          />
        </div>
      </Section>
    </SubPageLayout>
  );
}
