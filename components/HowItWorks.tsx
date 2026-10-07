"use client";

import React from "react";
import {
  Search,
  ClipboardList,
  Users,
  HandHeart,
  BadgeCheck,
  Smile,
  ArrowRight,
  ArrowDown,
} from "lucide-react";
import { HOW_IT_WORKS_STEPS } from "@/data/mockData";

export default function HowItWorks() {
  const getStepIcon = (name: string) => {
    const size = "w-7 h-7";
    switch (name) {
      case "FileText":
        return <ClipboardList className={`${size} text-[#071936]`} />;
      case "Users":
        return <Users className={`${size} text-[#071936] fill-[#071936]`} />;
      case "Settings":
        return <HandHeart className={`${size} text-[#1D46C4]`} />;
      case "ShieldCheck":
        return <BadgeCheck className={`${size} text-white fill-[#08793F]`} />;
      case "Smile":
        return <Smile className={`${size} text-[#08793F]`} strokeWidth={2.4} />;
      default:
        return <Search className={`${size} text-[#1D46C4]`} strokeWidth={2.6} />;
    }
  };

  return (
    <div className="bg-[#EEF2F7] border border-[#D9DEE7] rounded-lg p-3 flex flex-col h-full">
      <h2 className="panel-title mb-2">HOW IT WORKS</h2>

      {/* Desktop / tablet: horizontal process with arrows */}
      <div className="hidden sm:flex flex-1 items-center justify-between gap-1">
        {HOW_IT_WORKS_STEPS.map((step, index) => (
          <React.Fragment key={step.num}>
            <div className="flex flex-col items-center text-center flex-1 min-w-0">
              {getStepIcon(step.iconName)}
              <span className="font-condensed text-[12.5px] font-semibold text-[#0B1B3A] leading-[1.12] mt-1.5 [overflow-wrap:anywhere]">
                {step.title}
              </span>
            </div>

            {index < HOW_IT_WORKS_STEPS.length - 1 && (
              <ArrowRight className="w-3.5 h-3.5 text-[#071936] shrink-0 mt-2" />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Mobile: vertical process */}
      <div className="sm:hidden space-y-1.5">
        {HOW_IT_WORKS_STEPS.map((step, index) => (
          <div key={step.num} className="flex flex-col items-center">
            <div className="flex items-center gap-3 w-full bg-white p-2 rounded">
              {getStepIcon(step.iconName)}
              <span className="text-xs font-semibold text-slate-800">
                {step.title}
              </span>
            </div>
            {index < HOW_IT_WORKS_STEPS.length - 1 && (
              <ArrowDown className="w-3.5 h-3.5 text-slate-400 mt-1.5" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
