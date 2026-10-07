"use client";

import React from "react";
import Image from "next/image";
import {
  MonitorPlay,
  Award,
  GraduationCap,
  HeartHandshake,
  Radio,
  Bell,
  Play,
} from "lucide-react";
import { VideoItem, LATEST_VIDEOS } from "@/data/mockData";

interface YoutubeHeroProps {
  onOpenVideo: (video: VideoItem) => void;
}

const BULLETS = [
  { label: "Program Updates", Icon: MonitorPlay },
  { label: "Success Stories", Icon: Award },
  { label: "Training Highlights", Icon: GraduationCap },
  { label: "Public Service Initiatives", Icon: HeartHandshake },
  { label: "Live Events & Interactions", Icon: Radio },
];

export default function YoutubeHero({ onOpenVideo }: YoutubeHeroProps) {
  const featuredVideo: VideoItem = {
    id: "featured-rally",
    title: "Real Work, Real Impact, Real Change - Constituency Address",
    category: "Rally Broadcast",
    duration: "24:10",
    image: "/images/rally-featured.webp",
    youtubeId: "LXb3EKWsInQ",
    description:
      "Full recording of the mega constituency assembly rally featuring booth-level progress reports, public service milestones, and the roadmap for upcoming development projects.",
  };

  const miniThumbnails = [
    LATEST_VIDEOS[0],
    LATEST_VIDEOS[2],
    LATEST_VIDEOS[3],
    LATEST_VIDEOS[4],
  ];

  return (
    <div className="@container bg-[#071936] text-white rounded-lg border-b-[3px] border-[#E21E2B] overflow-hidden flex flex-col h-full">
      <div className="flex-1 min-h-0 p-3 sm:p-4 grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-4">
        {/* Left: YouTube lockup on top, channel contents spread down to the panel's bottom edge */}
        <div className="sm:col-span-5 @[510px]:col-span-4 flex flex-col gap-2.5">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="w-12 h-[34px] bg-[#E21E2B] rounded-lg flex items-center justify-center shrink-0">
                <Play className="w-4 h-4 fill-white text-white ml-0.5" />
              </div>
              <div className="flex flex-col">
                <span className="font-condensed font-bold text-white text-[28px] sm:text-[23px] @[510px]:text-[28px] leading-none tracking-tight">
                  YouTube
                </span>
                <span className="font-condensed font-bold text-[15px] tracking-[0.14em] text-white uppercase leading-none mt-1">
                  CHANNEL
                </span>
              </div>
            </div>

            <div className="mt-3 text-[13px] font-condensed font-bold tracking-wide text-[#FFD91A] uppercase leading-tight">
              WATCH • LEARN • GET INSPIRED
            </div>
          </div>

          <ul className="flex-1 flex flex-col justify-evenly gap-2 border-t border-white/20 pt-1 text-[13px] text-white font-semibold">
            {BULLETS.map(({ label, Icon }) => (
              <li key={label} className="flex items-center gap-2.5">
                <Icon className="w-[18px] h-[18px] text-white shrink-0" />
                <span className="leading-tight">{label}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right: featured video, thumbnails, subscribe */}
        <div className="sm:col-span-7 @[510px]:col-span-8 flex flex-col gap-2.5">
          <button
            type="button"
            onClick={() => onOpenVideo(featuredVideo)}
            className="relative flex-1 max-sm:flex-none max-sm:aspect-video min-h-[120px] w-full rounded-md overflow-hidden cursor-pointer group border border-slate-500/70 bg-slate-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5D000]"
            aria-label="Play featured rally video"
          >
            <Image
              src={featuredVideo.image}
              alt="Evening rally crowd"
              fill
              sizes="(min-width: 1024px) 28vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black/65 via-black/15 to-transparent" />

            <div className="absolute top-3 right-4 text-left leading-[1.15] select-none font-condensed font-extrabold text-[15px] @[510px]:text-[19px] text-[#FFD91A] tracking-wide">
              <span className="block">REAL WORK</span>
              <span className="block">REAL IMPACT</span>
              <span className="block">REAL CHANGE</span>
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-10 bg-[#E21E2B] rounded-xl flex items-center justify-center">
                <Play className="w-5 h-5 fill-white text-white ml-0.5" />
              </div>
            </div>
          </button>

          <div className="grid grid-cols-4 gap-2">
            {miniThumbnails.map((video) => (
              <button
                type="button"
                key={video.id}
                onClick={() => onOpenVideo(video)}
                className="relative h-12 rounded overflow-hidden cursor-pointer group border border-slate-500/70 bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5D000]"
                aria-label={`Watch video: ${video.title}`}
              >
                <Image
                  src={video.image}
                  alt=""
                  fill
                  sizes="120px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-black/55 border border-white/70 flex items-center justify-center">
                    <Play className="w-2.5 h-2.5 fill-white text-white ml-px" />
                  </div>
                </div>
              </button>
            ))}
          </div>

          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="self-start py-1.5 px-4 bg-[#E21E2B] hover:bg-red-700 text-white font-condensed font-bold text-[15px] uppercase tracking-wide rounded flex items-center gap-2 transition-colors"
          >
            <span>SUBSCRIBE NOW</span>
            <Bell className="w-4 h-4 fill-white" />
          </a>
        </div>
      </div>

      {/* Bottom Yellow Strip */}
      <div className="bg-[#F5D000] text-[#071936] py-1.5 px-4 text-center font-condensed font-extrabold text-[14px] leading-tight tracking-wide uppercase">
        STAY CONNECTED. STAY INFORMED. STAY EMPOWERED.
      </div>
    </div>
  );
}
