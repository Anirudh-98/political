import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  Briefcase,
  GraduationCap,
  Laptop,
  MessageSquare,
  Sprout,
  UserRound,
  Users,
} from "lucide-react";
import SubPageLayout from "@/components/SubPageLayout";
import {
  BlockHeading,
  ButtonLink,
  Callout,
  CourseCards,
  FeatureGrid,
  Section,
  Split,
} from "@/components/PageBlocks";
import { COURSES, courseHref, getCourse } from "@/data/courses";

// What Participants Gain: shared across all training pages
const GAINS = [
  { icon: Users, title: "Leadership Skills" },
  { icon: MessageSquare, title: "Communication Skills" },
  { icon: Laptop, title: "Digital Skills" },
  { icon: UserRound, title: "Personality Development" },
  { icon: Briefcase, title: "Career Opportunities" },
  { icon: Sprout, title: "Self Employment" },
];

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return COURSES.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourse(slug);
  return course ? { title: `${course.name} | Political Strategy Hub` } : {};
}

export default async function CoursePage({ params }: PageProps) {
  const { slug } = await params;
  const course = getCourse(slug);
  if (!course) notFound();

  const otherCourses = COURSES.filter((item) => item.slug !== course.slug);

  return (
    <SubPageLayout
      title={course.name}
      subtitle={course.name}
      eyebrow="Training & Courses"
      parent={{ label: "Training & Courses", href: "/training" }}
      image={course.image}
    >
      <Section>
        <Split image={course.sideImage} alt={course.sideImageAlt}>
          <BlockHeading kicker="Training & Courses" title={course.name} tagline={course.tagline} />
          <div className="space-y-4">
            {course.intro.map((paragraph) => (
              <Callout key={paragraph} icon={GraduationCap}>
                <p>{paragraph}</p>
              </Callout>
            ))}
          </div>
          <div className="mt-6">
            <ButtonLink href="/contact">Enquire About This Course</ButtonLink>
          </div>
        </Split>
      </Section>

      <Section tone="tint" title={course.areasTitle}>
        <FeatureGrid items={course.areas} />
      </Section>

      <Section title="What Participants Gain">
        <FeatureGrid items={GAINS} />
      </Section>

      <Section tone="tint" eyebrow="Training & Courses" title="More Courses">
        <CourseCards
          courses={otherCourses.map((item) => ({
            href: courseHref(item),
            title: item.name,
            image: item.image,
          }))}
        />
      </Section>
    </SubPageLayout>
  );
}
