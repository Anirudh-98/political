import React from "react";
import { Users, GraduationCap, HeartHandshake, BarChart3 } from "lucide-react";
import { HERO_FEATURES } from "@/data/mockData";

export default function HeroFeature() {
  const getIcon = (name: string) => {
    const iconClass = "w-7 h-7 text-[#071936]";
    switch (name) {
      case "GraduationCap":
        return <GraduationCap className={iconClass} strokeWidth={2.2} />;
      case "HeartHandshake":
        return <HeartHandshake className={iconClass} strokeWidth={2.2} />;
      case "TrendingUp":
        return <BarChart3 className={iconClass} strokeWidth={2.6} />;
      default:
        return <Users className={`${iconClass} fill-[#071936]`} strokeWidth={2.2} />;
    }
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-3">
      {HERO_FEATURES.map((item, index) => (
        <div
          key={item.num}
          className={`flex flex-col items-center text-center px-1 ${
            index > 0 ? "sm:border-l sm:border-slate-400" : ""
          }`}
        >
          {getIcon(item.iconName)}
          <span className="mt-1.5 font-condensed text-[13.5px] font-bold text-[#071936] leading-tight @[720px]:whitespace-nowrap">
            {item.title}
          </span>
          <span className="font-condensed text-[13.5px] font-semibold text-[#33415C] leading-tight mt-0.5">
            {item.subtitle}
          </span>
        </div>
      ))}
    </div>
  );
}
