"use client";

import React from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { VideoItem } from "@/data/mockData";

interface VideoCardProps {
  video: VideoItem;
  onClick: (video: VideoItem) => void;
}

export default function VideoCard({ video, onClick }: VideoCardProps) {
  return (
    <button
      type="button"
      onClick={() => onClick(video)}
      className="flex flex-col group cursor-pointer text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded"
      aria-label={`Watch video: ${video.title}`}
    >
      {/* Thumbnail with play button */}
      <div className="relative aspect-[4/3] lg:aspect-auto lg:h-[70px] w-full rounded overflow-hidden bg-slate-900">
        <Image
          src={video.image}
          alt=""
          fill
          sizes="(min-width: 640px) 12vw, 45vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-7 h-7 rounded-full bg-black/50 group-hover:bg-[#E21E2B] border-2 border-white flex items-center justify-center transition-colors">
            <Play className="w-3 h-3 fill-white text-white ml-0.5" />
          </div>
        </div>
      </div>

      <span className="mt-1.5 w-full font-condensed font-semibold text-[12.5px] text-[#0B1B3A] group-hover:text-[#C8141F] leading-[1.12] transition-colors [overflow-wrap:anywhere]">
        {video.title}
      </span>
    </button>
  );
}
