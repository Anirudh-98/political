import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronRight,
  CircleCheck,
  Quote,
  type LucideIcon,
} from "lucide-react";

// Shared building blocks for the inner pages (About, Vision, Programs, ...).
// Pages are a stack of full-width <Section> bands; everything else goes inside one.

const INK = "text-[#0B1B3A]";
const HEADING = "font-condensed font-extrabold uppercase text-[#071936]";
const CARD =
  "bg-white border border-[#D9DEE7] rounded-xl shadow-[0_1px_2px_rgba(7,25,54,0.06)]";
const CARD_HOVER =
  "transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(7,25,54,0.12)] hover:border-[#9AA6BB]";

// Icon badge colours, cycled across the cards in a grid. All pass contrast with white icons.
const ACCENTS = ["#071936", "#C8141F", "#08793F", "#1D46C4", "#C2410C", "#6D31D6", "#0B7268"];
const accent = (index: number) => ACCENTS[index % ACCENTS.length];

type Tone = "white" | "tint" | "navy";

const TONE_BG: Record<Tone, string> = {
  white: "bg-white",
  tint: "bg-[#EEF2F7]",
  navy: "bg-[#071936]",
};

function IconBadge({
  icon: Icon,
  color,
  size = "md",
}: {
  icon: LucideIcon;
  color: string;
  size?: "sm" | "md" | "lg";
}) {
  const box = size === "lg" ? "w-14 h-14 rounded-xl" : size === "sm" ? "w-9 h-9 rounded-lg" : "w-12 h-12 rounded-xl";
  const glyph = size === "lg" ? "w-7 h-7" : size === "sm" ? "w-[18px] h-[18px]" : "w-6 h-6";
  return (
    <span
      className={`flex ${box} shrink-0 items-center justify-center text-white`}
      style={{ backgroundColor: color }}
    >
      <Icon className={glyph} aria-hidden="true" />
    </span>
  );
}

export function Section({
  id,
  eyebrow,
  title,
  lead,
  tone = "white",
  children,
}: {
  id?: string;
  eyebrow?: string;
  title?: string;
  lead?: React.ReactNode;
  tone?: Tone;
  children?: React.ReactNode;
}) {
  const onNavy = tone === "navy";
  return (
    <section id={id} className={`${TONE_BG[tone]} scroll-mt-4`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {(eyebrow || title || lead) && (
          <header className="max-w-3xl mb-6 sm:mb-8">
            {eyebrow && (
              <p
                className={`flex items-center gap-2 font-condensed font-bold uppercase tracking-[0.12em] text-[13px] ${
                  onNavy ? "text-[#FFD91A]" : "text-[#C8141F]"
                }`}
              >
                <span className={`h-0.5 w-6 ${onNavy ? "bg-[#FFD91A]" : "bg-[#C8141F]"}`} />
                {eyebrow}
              </p>
            )}
            {title && (
              <h2
                className={`font-condensed font-extrabold uppercase leading-[1.08] text-[26px] sm:text-[34px] ${
                  eyebrow ? "mt-1.5" : ""
                } ${onNavy ? "text-white" : "text-[#071936]"}`}
              >
                {title}
              </h2>
            )}
            {title && <span className="block h-1 w-14 rounded-full bg-[#E21E2B] mt-3" />}
            {lead && (
              <div
                className={`mt-4 space-y-3 text-[16px] sm:text-[17px] leading-relaxed ${
                  onNavy ? "text-slate-100" : INK
                }`}
              >
                {lead}
              </div>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  text?: string;
}

// Icon cards. Cards with body text stack the icon above; title-only cards put it beside the title.
export function FeatureGrid({
  items,
  columns = 3,
}: {
  items: FeatureItem[];
  columns?: 2 | 3 | 4;
}) {
  const cols =
    columns === 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : columns === 3
        ? "sm:grid-cols-2 lg:grid-cols-3"
        : "sm:grid-cols-2";
  return (
    <ul className={`grid grid-cols-1 ${cols} gap-4`}>
      {items.map(({ icon, title, text }, index) => (
        <li
          key={title}
          className={`${CARD} ${CARD_HOVER} relative overflow-hidden p-5 ${
            text ? "" : "flex items-center gap-4"
          }`}
        >
          <span
            className="absolute inset-x-0 top-0 h-1"
            style={{ backgroundColor: accent(index) }}
          />
          <IconBadge icon={icon} color={accent(index)} />
          <div className={text ? "mt-4" : ""}>
            <h3 className={`${HEADING} text-[18px] leading-tight`}>{title}</h3>
            {text && <p className={`mt-1.5 text-[15px] leading-relaxed ${INK}`}>{text}</p>}
          </div>
        </li>
      ))}
    </ul>
  );
}

// A list rendered as compact icon tiles (use instead of a plain bullet list)
export function TileList({
  items,
  columns = 3,
  icon: Icon = CircleCheck,
}: {
  items: string[];
  columns?: 1 | 2 | 3 | 4;
  icon?: LucideIcon;
}) {
  const cols =
    columns === 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : columns === 3
        ? "sm:grid-cols-2 lg:grid-cols-3"
        : columns === 2
          ? "sm:grid-cols-2"
          : "";
  return (
    <ul className={`grid grid-cols-1 ${cols} gap-3`}>
      {items.map((item, index) => (
        <li
          key={item}
          className={`${CARD} ${CARD_HOVER} flex items-center gap-3 px-4 py-3`}
        >
          <IconBadge icon={Icon} color={accent(index)} size="sm" />
          <span className="text-[15px] font-semibold leading-snug text-[#071936]">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function CheckList({
  items,
  columns = 2,
}: {
  items: string[];
  columns?: 1 | 2 | 3;
}) {
  const cols =
    columns === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : columns === 2 ? "sm:grid-cols-2" : "";
  return (
    <ul className={`grid grid-cols-1 ${cols} gap-x-8 gap-y-3`}>
      {items.map((item) => (
        <li key={item} className={`flex items-start gap-2.5 text-[15px] leading-snug font-medium ${INK}`}>
          <span className="flex w-5 h-5 mt-px shrink-0 items-center justify-center rounded-full bg-[#08793F] text-white">
            <Check className="w-3 h-3" strokeWidth={3.5} aria-hidden="true" />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

// A titled card with a coloured header strip, grouping a list or a short paragraph
export function Panel({
  icon: Icon,
  title,
  color = "#071936",
  children,
}: {
  icon: LucideIcon;
  title: string;
  color?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`${CARD} ${CARD_HOVER} h-full overflow-hidden`}>
      <div className="flex items-center gap-3 px-5 py-4 text-white" style={{ backgroundColor: color }}>
        <span className="flex w-10 h-10 shrink-0 items-center justify-center rounded-lg bg-white/15">
          <Icon className="w-5 h-5" aria-hidden="true" />
        </span>
        <h3 className="font-condensed font-extrabold uppercase text-[18px] leading-tight">
          {title}
        </h3>
      </div>
      <div className="p-5">{children}</div>
    </div>
  );
}

// Intro paragraph(s) as a highlighted card with an icon, instead of bare text
export function Callout({
  icon: Icon,
  children,
}: {
  icon: LucideIcon;
  children: React.ReactNode;
}) {
  return (
    <div className={`${CARD} border-l-4 border-l-[#E21E2B] p-5 sm:p-6 flex gap-4`}>
      <IconBadge icon={Icon} color="#071936" />
      <div className={`space-y-3 text-[16px] sm:text-[17px] leading-relaxed ${INK}`}>{children}</div>
    </div>
  );
}

// Process flow: connected icon cards in a row on desktop, a vertical list on phones
export function Steps({ steps, icons }: { steps: string[]; icons?: LucideIcon[] }) {
  return (
    <ol className="flex flex-col md:flex-row md:items-stretch gap-2">
      {steps.map((step, index) => {
        const Icon = icons?.[index] ?? CircleCheck;
        return (
          <React.Fragment key={step}>
            <li
              className={`${CARD} md:flex-1 flex md:flex-col items-center md:text-center gap-3 px-4 py-3.5 md:py-5`}
            >
              <span className="flex w-12 h-12 shrink-0 items-center justify-center rounded-full bg-[#071936] text-white">
                <Icon className="w-5 h-5" aria-hidden="true" />
              </span>
              <span className={`${HEADING} text-[16px] leading-tight`}>{step}</span>
            </li>
            {index < steps.length - 1 && (
              <li aria-hidden="true" className="hidden md:flex items-center text-[#071936]">
                <ChevronRight className="w-5 h-5" strokeWidth={3} />
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ol>
  );
}

// Image beside content; `reverse` puts the image on the right
export function Split({
  image,
  alt,
  reverse = false,
  children,
}: {
  image: string;
  alt: string;
  reverse?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
      <div className={`relative ${reverse ? "lg:order-last" : ""}`}>
        {/* Offset colour block behind the photo */}
        <span
          className={`hidden sm:block absolute -bottom-3 ${
            reverse ? "-right-3" : "-left-3"
          } w-2/3 h-2/3 rounded-xl bg-[#E21E2B]`}
        />
        <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-slate-200 shadow-[0_10px_30px_rgba(7,25,54,0.18)]">
          <Image
            src={image}
            alt={alt}
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
}

export interface Photo {
  src: string;
  alt: string;
  caption: string;
}

// A row of captioned photos
export function PhotoRow({ photos }: { photos: Photo[] }) {
  const cols = photos.length >= 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2";
  return (
    <ul className={`grid grid-cols-1 ${cols} gap-4`}>
      {photos.map((photo) => (
        <li
          key={photo.src}
          className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-200 shadow-[0_6px_18px_rgba(7,25,54,0.14)]"
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#071936] via-[#071936]/80 to-transparent pt-10 pb-3 px-4">
            <p className="font-condensed font-extrabold uppercase text-[17px] leading-tight text-white">
              {photo.caption}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

// Closing line / motto band
export function Statement({
  label,
  children,
}: {
  label?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="bg-[#071936] border-y-4 border-[#E21E2B]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-12 text-center">
        <span className="inline-flex w-12 h-12 items-center justify-center rounded-full bg-[#E21E2B] text-white mb-4">
          <Quote className="w-5 h-5" aria-hidden="true" />
        </span>
        {label && (
          <p className="font-condensed font-bold uppercase tracking-[0.12em] text-[13px] text-white mb-2">
            {label}
          </p>
        )}
        <p className="font-condensed font-extrabold uppercase text-[22px] sm:text-[30px] leading-snug text-[#FFD91A]">
          {children}
        </p>
      </div>
    </section>
  );
}

// Program / block heading with a kicker line above and a tagline below
export function BlockHeading({
  kicker,
  title,
  tagline,
}: {
  kicker?: string;
  title: string;
  tagline?: string;
}) {
  return (
    <div className="mb-5">
      {kicker && (
        <p className="inline-block font-condensed font-bold uppercase tracking-[0.12em] text-[13px] text-white bg-[#C8141F] rounded px-2.5 py-1 mb-2">
          {kicker}
        </p>
      )}
      <h3 className={`${HEADING} text-[24px] sm:text-[30px] leading-[1.08]`}>{title}</h3>
      {tagline && (
        <p className="font-condensed font-bold text-[18px] text-[#0B1B3A] mt-1">{tagline}</p>
      )}
    </div>
  );
}

// Small label above a group inside a section
export function GroupLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-2 font-condensed font-bold uppercase tracking-[0.12em] text-[14px] text-[#C8141F] mb-3">
      <span className="h-0.5 w-5 bg-[#C8141F]" />
      {children}
    </p>
  );
}

export interface CourseCard {
  href: string;
  title: string;
  image: string;
}

// Photo cards that link to a course page
export function CourseCards({ courses }: { courses: CourseCard[] }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {courses.map((course) => (
        <li key={course.href}>
          <Link
            href={course.href}
            className={`${CARD} ${CARD_HOVER} group flex h-full flex-col overflow-hidden cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#071936]`}
          >
            <span className="relative block aspect-[16/10] bg-slate-200">
              <Image
                src={course.image}
                alt=""
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </span>
            <span className="flex flex-1 items-center justify-between gap-3 p-4">
              <span className={`${HEADING} text-[17px] leading-tight`}>{course.title}</span>
              <span className="flex w-9 h-9 shrink-0 items-center justify-center rounded-full bg-[#071936] text-white transition-colors duration-200 group-hover:bg-[#E21E2B]">
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </span>
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function ButtonLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 rounded-lg bg-[#E21E2B] px-6 py-3 font-condensed font-bold uppercase tracking-wide text-[16px] text-white transition-colors duration-200 hover:bg-[#C8141F] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#E21E2B]"
    >
      {children}
      <ArrowRight className="w-4 h-4" aria-hidden="true" />
    </Link>
  );
}
