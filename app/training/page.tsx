import React from "react";
import {
  Briefcase,
  GraduationCap,
  HeartHandshake,
  Landmark,
  Laptop,
  MessageSquare,
  Scale,
  Sprout,
  Target,
  UserRound,
  Users,
  UsersRound,
} from "lucide-react";
import SubPageLayout from "@/components/SubPageLayout";
import {
  BlockHeading,
  ButtonLink,
  Callout,
  CourseCards,
  FeatureGrid,
  GroupLabel,
  PhotoRow,
  Section,
  Split,
} from "@/components/PageBlocks";
import { COURSES, courseHref } from "@/data/courses";

const CORE_AREAS = [
  { icon: Landmark, title: "Political & Public Service" },
  { icon: Scale, title: "Public Policy & Governance" },
  { icon: Users, title: "Leadership & Ethics" },
  { icon: MessageSquare, title: "Communication Skills" },
  { icon: HeartHandshake, title: "Social Service" },
  { icon: UsersRound, title: "Team Building & Coordination" },
];

const GAINS = [
  { icon: Users, title: "Leadership Skills" },
  { icon: MessageSquare, title: "Communication Skills" },
  { icon: Laptop, title: "Digital Skills" },
  { icon: UserRound, title: "Personality Development" },
  { icon: Briefcase, title: "Career Opportunities" },
  { icon: Sprout, title: "Self Employment" },
];

export default function TrainingPage() {
  return (
    <SubPageLayout
      title="Training & Courses"
      subtitle="Skill Today. Strong Tomorrow."
      image="/images/page-training.webp"
    >
      <Section>
        <Split
          image="/images/sec-training-speaking.webp"
          alt="A trainee practising public speaking in front of her class"
        >
          <Callout icon={Target}>
            <p>
              Training is designed to build practical skills, leadership, communication, career
              opportunities and public-service capabilities.
            </p>
          </Callout>
        </Split>
      </Section>

      <Section id="political-diploma" tone="tint">
        <Split
          reverse
          image="/images/video-cadre-training.webp"
          alt="Trainees attending a cadre training session"
        >
          <BlockHeading
            kicker="Political Diploma Cadre Training"
            title="Real-Time Training. Real-Life Skills. Real Future."
          />
          <Callout icon={GraduationCap}>
            <p>
              The Political Diploma Cadre program focuses on developing trained booth-level
              cadre through structured training and practical experience.
            </p>
          </Callout>
          <div className="mt-6">
            <ButtonLink href="/training/political-diploma-cadre">View This Course</ButtonLink>
          </div>
        </Split>
        <div className="mt-8">
          <GroupLabel>Core Training Areas</GroupLabel>
          <FeatureGrid items={CORE_AREAS} />
        </div>
      </Section>

      <Section id="courses" eyebrow="Training & Courses" title="All Courses">
        <CourseCards
          courses={COURSES.map((course) => ({
            href: courseHref(course),
            title: course.name,
            image: course.image,
          }))}
        />
      </Section>

      <Section tone="tint" title="What Participants Gain">
        <FeatureGrid items={GAINS} />
        <div className="mt-8">
          <PhotoRow
            photos={[
              { src: "/images/video-skill-training.webp", alt: "Young people learning computer skills", caption: "Digital Skills" },
              { src: "/images/sec-results-career.webp", alt: "A young woman at work in an office", caption: "Career Opportunities" },
              { src: "/images/sec-vision-entrepreneur.webp", alt: "A young woman entrepreneur in her tailoring workshop", caption: "Self Employment" },
            ]}
          />
        </div>
      </Section>
    </SubPageLayout>
  );
}
