import React from "react";
import {
  BookOpen,
  Briefcase,
  Eye,
  HeartHandshake,
  Landmark,
  Megaphone,
  MessageSquare,
  Mic,
  Newspaper,
  Send,
  Share2,
  TrendingUp,
  Users,
  UsersRound,
  Video,
  Radio,
  Globe,
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

const CONTENT_AREAS = [
  { icon: Mic, title: "Public Voice" },
  { icon: Newspaper, title: "Political Updates" },
  { icon: Landmark, title: "Government Schemes" },
  { icon: TrendingUp, title: "Development" },
  { icon: HeartHandshake, title: "Public Services" },
  { icon: Briefcase, title: "Youth & Employment" },
  { icon: Users, title: "Women Empowerment" },
  { icon: BookOpen, title: "Education" },
  { icon: UsersRound, title: "Community Stories" },
];

const CHANNELS = [
  { icon: Video, title: "YouTube" },
  { icon: Users, title: "Facebook" },
  { icon: Share2, title: "Instagram" },
  { icon: Globe, title: "X" },
  { icon: MessageSquare, title: "WhatsApp" },
  { icon: Send, title: "Telegram" },
  { icon: Briefcase, title: "LinkedIn" },
];

export default function MediaPage() {
  return (
    <SubPageLayout
      title="Media"
      subtitle="Political Media Hub"
      image="/images/page-media.webp"
    >
      <Section title="The Voice of People. The Vision of Leaders. The Victory of Democracy.">
        <Split
          image="/images/sec-media-studio.webp"
          alt="Anchors recording a discussion in a small media studio"
        >
          <Callout icon={Radio}>
            <p>
              Political Media Hub is a platform for connecting people, leaders and public
              information through digital media.
            </p>
          </Callout>
        </Split>
      </Section>

      <Section id="vision" tone="tint">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Panel icon={Eye} title="Our Vision" color="#071936">
            <p className="text-[16px] leading-relaxed text-[#0B1B3A]">
              To build a trusted, transparent and people-centric public media platform that
              empowers citizens, strengthens democracy and transforms society and service
              delivery.
            </p>
          </Panel>
          <Panel icon={Megaphone} title="Our Mission" color="#C8141F">
            <p className="text-[16px] leading-relaxed text-[#0B1B3A] mb-4">
              To inform, educate, inspire and connect every citizen through:
            </p>
            <CheckList
              items={[
                "Real-time news",
                "Public issues",
                "Political information",
                "Government schemes",
                "Development updates",
                "Public service information",
              ]}
            />
          </Panel>
        </div>
      </Section>

      <Section id="content" title="Content Areas">
        <FeatureGrid items={CONTENT_AREAS} />
      </Section>

      <Section id="channels" tone="tint" title="Digital Channels">
        <FeatureGrid items={CHANNELS} columns={4} />
        <div className="mt-8">
          <PhotoRow
            photos={[
              { src: "/images/sec-media-viewers.webp", alt: "Friends watching a video together on a phone", caption: "Community Stories" },
              { src: "/images/page-media.webp", alt: "A reporter interviewing a resident on the street", caption: "Public Voice" },
              { src: "/images/rally-featured.webp", alt: "A large public gathering at dusk", caption: "Political Updates" },
            ]}
          />
        </div>
      </Section>

      <Statement label="Media Philosophy">
        No Hate. No Fake. No Paid News. No Dirty Politics. Only People. Only Positive Change.
      </Statement>

      <Section>
        <div className="flex flex-col items-center text-center gap-4">
          <span className="flex w-14 h-14 items-center justify-center rounded-full bg-[#071936] text-white">
            <Radio className="w-7 h-7" aria-hidden="true" />
          </span>
          <p className="font-condensed font-extrabold uppercase text-[24px] sm:text-[32px] leading-tight text-[#071936]">
            Stay Connected. Stay Informed. Stay Ahead.
          </p>
        </div>
      </Section>
    </SubPageLayout>
  );
}
