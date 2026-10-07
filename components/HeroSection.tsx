"use client";

import React from "react";
import Image from "next/image";
import HeroFeature from "./HeroFeature";
import YoutubeHero from "./YoutubeHero";
import { VideoItem } from "@/data/mockData";

interface HeroSectionProps {
  onOpenVideo: (video: VideoItem) => void;
}

export default function HeroSection({ onOpenVideo }: HeroSectionProps) {
  return (
    <section className="site-container hero-shell flex-1 flex flex-col">
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 items-stretch">
        {/* Left Column: leader photo fading into the headline */}
        <div className="hero-panel @container lg:col-span-7 bg-white relative overflow-hidden">
          {/* Leader greeting the rally crowd, anchored to the left edge */}
          <div className="absolute inset-y-0 left-0 w-full sm:w-[62%] pointer-events-none">
            <Image
              src="/images/hero-leader.webp"
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 36vw, (min-width: 640px) 62vw, 100vw"
              className="object-cover object-left"
            />
          </div>

          {/* Fade to white so the text stays crisp */}
          <div className="absolute inset-0 bg-white/85 sm:hidden pointer-events-none" />
          <div
            className="absolute inset-0 hidden sm:block pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, rgba(255,255,255,0) 22%, rgba(255,255,255,0.94) 39%, #ffffff 50%)",
            }}
          />

          {/* Content */}
          <div className="relative z-10 h-full flex flex-col justify-center gap-3 p-4 sm:py-6 lg:py-4 sm:pr-6 sm:pl-[40%] sm:min-h-[300px] lg:min-h-0">
            <div>
              <h1 className="font-condensed font-black uppercase leading-[1.02] text-[clamp(24px,8.6cqw,34px)] sm:text-[clamp(30px,5.4cqw,72px)] text-[#071936] whitespace-nowrap">
                STRONG CADRE
              </h1>
              <p className="font-condensed font-black uppercase leading-[1.02] text-[clamp(24px,8.6cqw,34px)] sm:text-[clamp(30px,5.4cqw,72px)] text-[#E21E2B] whitespace-nowrap">
                STRONG CONSTITUENCY
              </p>

              {/* Supporting Banner */}
              <div className="mt-2.5 inline-block max-w-full bg-[#071936] text-white px-2.5 sm:px-3 py-1 rounded-[3px]">
                <span className="font-condensed font-bold text-[clamp(10.5px,1.9cqw,22px)] sm:text-[clamp(12px,1.9cqw,22px)] tracking-wide uppercase whitespace-nowrap">
                  SERVICE BEFORE ELECTION • SUPPORT AFTER VICTORY
                </span>
              </div>

              <p className="mt-2 text-[clamp(12.5px,1.9cqw,22px)] font-semibold text-[#0B1B3A]">
                Skills. Opportunities. Services. Development for Every Citizen.
              </p>
            </div>

            <HeroFeature />

            {/* Bottom Hero Quote */}
            <p className="text-[clamp(15px,2.2cqw,26px)] italic font-bold text-[#071936] leading-snug">
              <span className="font-serif text-xl leading-none mr-1">“</span>
              We don’t ask for votes first, we create{" "}
              <span className="text-[#E21E2B] font-bold">value</span> first.
              <span className="font-serif text-xl leading-none ml-1">”</span>
            </p>
          </div>
        </div>

        {/* Right Column: YouTube channel panel */}
        <div className="hero-side lg:col-span-5">
          <YoutubeHero onOpenVideo={onOpenVideo} />
        </div>
      </div>
    </section>
  );
}
