"use client";

import React from "react";
import Link from "next/link";
import VideoCard from "./VideoCard";
import { LATEST_VIDEOS, VideoItem } from "@/data/mockData";

interface LatestVideosProps {
  onOpenVideo: (video: VideoItem) => void;
}

export default function LatestVideos({ onOpenVideo }: LatestVideosProps) {
  return (
    <div className="bg-white border border-[#D9DEE7] rounded-lg p-3 flex flex-col h-full shadow-[0_1px_3px_rgba(7,25,54,0.08)]">
      <div className="flex items-center justify-between gap-3 mb-2">
        <h2 className="panel-title" style={{ color: "#C8141F" }}>
          LATEST VIDEOS
        </h2>
        <Link
          href="/media"
          className="text-[12.5px] font-bold text-[#1D46C4] hover:underline inline-flex items-center gap-1"
        >
          <span>View All Videos</span>
          <span aria-hidden="true">→</span>
        </Link>
      </div>

      {/* 5 video cards in a row */}
      <div className="flex-1 content-center grid grid-cols-2 min-[420px]:grid-cols-3 sm:grid-cols-5 gap-2">
        {LATEST_VIDEOS.map((video) => (
          <VideoCard key={video.id} video={video} onClick={onOpenVideo} />
        ))}
      </div>
    </div>
  );
}
