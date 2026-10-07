import React from "react";
import {
  Accessibility,
  Baby,
  BadgeCheck,
  Briefcase,
  ClipboardCheck,
  FileText,
  GraduationCap,
  HeartHandshake,
  HeartPulse,
  Landmark,
  Lightbulb,
  Megaphone,
  MessageSquare,
  Repeat,
  Scale,
  Search,
  Send,
  Trophy,
  Users,
} from "lucide-react";
import {
  BlockHeading,
  Callout,
  CheckList,
  FeatureGrid,
  GroupLabel,
  Panel,
  PhotoRow,
  Section,
  Split,
  Statement,
  Steps,
  TileList,
} from "@/components/PageBlocks";

// The five programs. Each has its own page at /programs/<slug>; `Body` is that page's content.

export interface Program {
  slug: string;
  number: number;
  name: string;
  tagline: string;
  // Hero photo for the program's page and its card on the Programs page
  image: string;
  Body: () => React.ReactNode;
}

function DemocraticWelfare() {
  return (
    <>
      <Section>
        <Split
          image="/images/video-public-service.webp"
          alt="Volunteers assisting residents at a community help desk"
        >
          <BlockHeading
            kicker="Program 1"
            title="Democratic Welfare Program"
            tagline="Booth Level Real-Time Service Model"
          />
          <GroupLabel>A people-first service model focused on:</GroupLabel>
          <TileList
            columns={2}
            items={[
              "Skilled Youth",
              "Employment & Self-Employment",
              "Strong Families & Communities",
              "Transparent Systems",
              "Better Tomorrow",
              "Real-Time Public Service",
            ]}
          />
        </Split>
      </Section>

      <Section tone="tint">
        <Callout icon={Repeat}>
          <p>
            The program cycle includes program initiation, booth-level cadre formation, training
            and capacity building, real public service, skill development and employment
            support, transparency and reporting, and community impact.
          </p>
        </Callout>
        <div className="mt-8">
          <PhotoRow
            photos={[
              { src: "/images/video-cadre-training.webp", alt: "Booth-level cadre in a training session", caption: "Training and Capacity Building" },
              { src: "/images/video-health-camp.webp", alt: "A doctor checking a village resident at a health camp", caption: "Real Public Service" },
              { src: "/images/video-skill-training.webp", alt: "Young people learning computer skills", caption: "Skill Development" },
            ]}
          />
        </div>
      </Section>

      <Statement>Learn. Serve. Earn. Lead.</Statement>
    </>
  );
}

function CadreDevelopment() {
  return (
    <>
      <Section>
        <Split
          image="/images/video-cadre-training.webp"
          alt="Booth-level cadre attending a training session"
        >
          <BlockHeading
            kicker="Program 2"
            title="Booth Level Cadre Development"
            tagline="Trained Today. Serving Tomorrow."
          />
          <GroupLabel>The program develops trained booth-level cadre with a focus on:</GroupLabel>
          <TileList
            columns={2}
            items={[
              "Understanding people's needs",
              "Awareness & mobilization",
              "Program execution",
              "Data collection & reporting",
              "Community coordination",
              "Public service",
            ]}
          />
        </Split>
      </Section>

      <Section tone="tint">
        <Split
          reverse
          image="/images/sec-booth-team.webp"
          alt="A team of young booth-level volunteers"
        >
          <Panel icon={Users} title="Selection Focus" color="#C8141F">
            <CheckList
              columns={1}
              items={[
                "Age 18 to 30 years",
                "Minimum qualification",
                "Passion for social service",
                "Good communication",
                "Discipline and ethics",
                "Willingness to learn and serve",
              ]}
            />
          </Panel>
        </Split>
      </Section>
    </>
  );
}

function PublicService() {
  return (
    <>
      <Section>
        <Split
          image="/images/video-health-camp.webp"
          alt="A doctor checking a village resident at a health camp"
        >
          <BlockHeading
            kicker="Program 3"
            title="Real-Time Public Service"
            tagline="Service at the Booth Level"
          />
          <Callout icon={Scale}>
            <p>No Favour. No Fear. Only Fairness, Transparency & Service.</p>
          </Callout>
        </Split>
      </Section>

      <Section tone="tint" title="Service Flow">
        <Steps
          steps={[
            "Identify",
            "Verify & Document",
            "Forward to Concerned Department",
            "Follow Up & Coordinate",
            "Resolve & Support",
            "Inform & Record",
          ]}
          icons={[Search, FileText, Send, MessageSquare, BadgeCheck, ClipboardCheck]}
        />
      </Section>

      <Section title="Service Areas">
        <FeatureGrid
          columns={3}
          items={[
            { icon: HeartPulse, title: "Health & Hospitals" },
            { icon: Landmark, title: "Municipal & Local Services" },
            { icon: GraduationCap, title: "Education & Scholarships" },
            { icon: Trophy, title: "Youth & Sports" },
            { icon: Baby, title: "Women & Child Support" },
            { icon: Briefcase, title: "Employment & Entrepreneurship" },
            { icon: Accessibility, title: "Senior Citizen Support" },
            { icon: Megaphone, title: "Public Grievances" },
            { icon: HeartHandshake, title: "Welfare Schemes" },
          ]}
        />
      </Section>
    </>
  );
}

function EducationSkills() {
  return (
    <>
      <Section>
        <Split
          image="/images/video-skill-training.webp"
          alt="Young people learning computer skills at a training centre"
        >
          <BlockHeading
            kicker="Program 4"
            title="Education & Skill Opportunities"
            tagline="Quality Education for All"
          />
          <div className="space-y-4">
            <Callout icon={GraduationCap}>
              <p>
                The program promotes subsidised online coaching and skill opportunities with a
                focus on reducing the financial burden of education.
              </p>
            </Callout>
            <Callout icon={Scale}>
              <p>
                The education model is built around affordable access, online classes, study
                material, expert support, tests and certification.
              </p>
            </Callout>
          </div>
        </Split>
      </Section>

      <Section tone="tint" title="Areas Covered">
        <TileList
          columns={4}
          icon={GraduationCap}
          items={[
            "Competitive Exams",
            "Professional Courses",
            "Digital Marketing",
            "Cyber Security",
            "Data Science",
            "Graphic Design",
            "Accounting & Finance",
            "Spoken English",
            "Personality Development",
            "Office Tools",
            "And more",
          ]}
        />
      </Section>
    </>
  );
}

function Employment() {
  return (
    <>
      <Section>
        <Split
          image="/images/sec-results-career.webp"
          alt="A young woman at work in an office"
        >
          <BlockHeading
            kicker="Program 5"
            title="Employment & Entrepreneurship"
            tagline="Better Skills. Better Jobs. Better Future."
          />
          <Panel icon={Briefcase} title="Employment Support" color="#1D46C4">
            <CheckList
              columns={1}
              items={[
                "Job alerts & opportunities",
                "Resume building",
                "Interview guidance",
                "Placement assistance",
                "Networking opportunities",
              ]}
            />
          </Panel>
        </Split>
      </Section>

      <Section tone="tint">
        <Split
          reverse
          image="/images/sec-vision-entrepreneur.webp"
          alt="A young woman entrepreneur in her tailoring workshop"
        >
          <Panel icon={Lightbulb} title="Entrepreneurship Support" color="#08793F">
            <CheckList
              columns={1}
              items={[
                "Business idea guidance",
                "Project report preparation",
                "Government schemes",
                "Loan & finance support",
                "Marketing & branding support",
              ]}
            />
          </Panel>
        </Split>
      </Section>
    </>
  );
}

export const PROGRAMS: Program[] = [
  {
    slug: "democratic-welfare-program",
    number: 1,
    name: "Democratic Welfare Program",
    tagline: "Booth Level Real-Time Service Model",
    image: "/images/program-democratic-welfare.webp",
    Body: DemocraticWelfare,
  },
  {
    slug: "booth-level-cadre-development",
    number: 2,
    name: "Booth Level Cadre Development",
    tagline: "Trained Today. Serving Tomorrow.",
    image: "/images/program-cadre-development.webp",
    Body: CadreDevelopment,
  },
  {
    slug: "real-time-public-service",
    number: 3,
    name: "Real-Time Public Service",
    tagline: "Service at the Booth Level",
    image: "/images/program-public-service.webp",
    Body: PublicService,
  },
  {
    slug: "education-skill-opportunities",
    number: 4,
    name: "Education & Skill Opportunities",
    tagline: "Quality Education for All",
    image: "/images/program-education-skills.webp",
    Body: EducationSkills,
  },
  {
    slug: "employment-entrepreneurship",
    number: 5,
    name: "Employment & Entrepreneurship",
    tagline: "Better Skills. Better Jobs. Better Future.",
    image: "/images/program-employment.webp",
    Body: Employment,
  },
];

export const getProgram = (slug: string) => PROGRAMS.find((program) => program.slug === slug);

export const programHref = (program: Program) => `/programs/${program.slug}`;
