"use client";

import React, { useState } from "react";
import SubPageLayout from "@/components/SubPageLayout";
import { LATEST_VIDEOS, VideoItem } from "@/data/mockData";
import VideoCard from "@/components/VideoCard";
import VideoModal from "@/components/modals/VideoModal";

export default function MediaPage() {
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

  return (
    <SubPageLayout
      title="Official Media & Broadcasts"
      subtitle="Watch program updates, training sessions, voter success stories, and live rallies."
    >
      <div className="space-y-6">
        <div className="bg-white border border-[#D9DEE7] p-5 rounded-lg shadow-xs">
          <h2 className="text-lg font-bold font-condensed uppercase text-[#071936] mb-4">
            All Video Broadcasts & Case Studies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {LATEST_VIDEOS.map((video) => (
              <VideoCard
                key={video.id}
                video={video}
                onClick={(v) => setActiveVideo(v)}
              />
            ))}
          </div>
        </div>
      </div>

      <VideoModal
        video={activeVideo}
        isOpen={!!activeVideo}
        onClose={() => setActiveVideo(null)}
      />
    </SubPageLayout>
  );
}
