import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SubPageLayout from "@/components/SubPageLayout";
import { CourseCards, Section } from "@/components/PageBlocks";
import { PROGRAMS, getProgram, programHref } from "@/components/ProgramSections";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PROGRAMS.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgram(slug);
  return program ? { title: `${program.name} | Political Strategy Hub` } : {};
}

export default async function ProgramPage({ params }: PageProps) {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) notFound();

  const { Body } = program;
  const otherPrograms = PROGRAMS.filter((item) => item.slug !== program.slug);

  return (
    <SubPageLayout
      title={program.name}
      subtitle={program.name}
      eyebrow={`Program ${program.number}`}
      parent={{ label: "Our Programs", href: "/programs" }}
      image={program.image}
    >
      <Body />

      <Section tone="tint" eyebrow="Our Programs" title="More Programs">
        <CourseCards
          courses={otherPrograms.map((item) => ({
            href: programHref(item),
            title: item.name,
            image: item.image,
          }))}
        />
      </Section>
    </SubPageLayout>
  );
}
