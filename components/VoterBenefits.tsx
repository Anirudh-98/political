"use client";

import React from "react";
import {
  GraduationCap,
  MonitorPlay,
  Briefcase,
  UserRound,
  HeartPulse,
  Sprout,
  Accessibility,
  Users,
} from "lucide-react";
import { VOTER_BENEFITS } from "@/data/mockData";

interface VoterBenefitsProps {
  onSelectCategory?: (category: string) => void;
}

export default function VoterBenefits({ onSelectCategory }: VoterBenefitsProps) {
  const getCategoryIcon = (iconName: string, color: string) => {
    const props = { className: "w-7 h-7", style: { color }, strokeWidth: 2.2 };
    switch (iconName) {
      case "Laptop":
        return <MonitorPlay {...props} />;
      case "Briefcase":
        return <Briefcase {...props} />;
      case "Users":
        return <UserRound {...props} />;
      case "HeartPulse":
        return <HeartPulse {...props} />;
      case "Sprout":
        return <Sprout {...props} />;
      case "HeartHandshake":
        return <Accessibility {...props} />;
      case "Zap":
        return <Users {...props} />;
      default:
        return <GraduationCap {...props} />;
    }
  };

  return (
    <div className="@container bg-[#EEF2F7] border border-[#D9DEE7] rounded-lg p-3 flex flex-col h-full">
      <h2 className="panel-title mb-2">VOTER BENEFITS – CATEGORIES</h2>

      {/* 8 compact category tiles */}
      <div className="flex-1 grid grid-cols-4 @md:grid-cols-8 gap-1.5">
        {VOTER_BENEFITS.map((item) => (
          <button
            type="button"
            key={item.id}
            onClick={() => onSelectCategory?.(item.title)}
            className="flex flex-col items-center justify-center text-center bg-white rounded px-1 py-2 border border-transparent hover:border-slate-400 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-400"
          >
            <span className="flex items-center justify-center mb-1.5">
              {getCategoryIcon(item.iconName, item.color)}
            </span>
            <span className="font-condensed text-[12.5px] font-semibold text-[#0B1B3A] leading-[1.12]">
              {item.title}
            </span>
          </button>
        ))}
      </div>

      <div className="mt-2 flex items-center justify-center gap-2 text-[#08793F]">
        <span className="h-px w-8 bg-[#08793F]" />
        <span className="text-[13px] font-bold whitespace-nowrap">
          One Citizen • One Opportunity • Better Future
        </span>
        <span className="h-px w-8 bg-[#08793F]" />
      </div>
    </div>
  );
}
