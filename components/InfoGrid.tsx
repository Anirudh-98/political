"use client";

import React from "react";
import VoterBenefits from "./VoterBenefits";
import CadreStrength from "./CadreStrength";
import YoutubeChannelCard from "./YoutubeChannelCard";
import HowItWorks from "./HowItWorks";
import PromiseSection from "./PromiseSection";
import LatestVideos from "./LatestVideos";
import { VideoItem } from "@/data/mockData";

interface InfoGridProps {
  onOpenVideo: (video: VideoItem) => void;
  onJoinCadre: () => void;
  onSelectVoterCategory: (category: string) => void;
}

export default function InfoGrid({
  onOpenVideo,
  onJoinCadre,
  onSelectVoterCategory,
}: InfoGridProps) {
  // Three independent columns, each stacking two panels (heights differ per column, as in the reference)
  return (
    <section className="site-container px-3 sm:px-4 pb-2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[39fr_26fr_35fr] gap-2 items-stretch">
        <div className="md:col-span-2 lg:col-span-1 flex flex-col gap-2">
          <div className="grow grid">
            <VoterBenefits onSelectCategory={onSelectVoterCategory} />
          </div>
          <div className="grow grid">
            <HowItWorks />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="grow grid">
            <CadreStrength onJoinCadre={onJoinCadre} />
          </div>
          <div className="grid">
            <PromiseSection />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="grow grid">
            <YoutubeChannelCard />
          </div>
          <div className="grow grid">
            <LatestVideos onOpenVideo={onOpenVideo} />
          </div>
        </div>
      </div>
    </section>
  );
}
