import React from "react";
import {
  UsersRound,
  Users,
  MapPinCheck,
  ClipboardCheck,
  Landmark,
  Map,
} from "lucide-react";

const METRICS = [
  { label: "BOOTHS COVERED", value: "5,000+", Icon: UsersRound },
  { label: "TRAINED CADRES", value: "50,000+", Icon: Users },
  { label: "PEOPLE SERVED", value: "2,00,000+", Icon: MapPinCheck },
  { label: "SERVICES DELIVERED", value: "1,50,000+", Icon: ClipboardCheck },
  { label: "DISTRICTS", value: "Multiple", Icon: Landmark, plain: true },
  { label: "STATES", value: "Expanding", Icon: Map, plain: true },
];

export default function ImpactStats() {
  return (
    <section className="@container bg-[#071936] text-white">
      <div className="site-container px-3 sm:px-4 py-2.5">
        <div className="grid grid-cols-2 sm:grid-cols-3 @7xl:grid-cols-7 gap-x-3 @7xl:gap-x-0 gap-y-3 items-center">
          {METRICS.map(({ label, value, Icon, plain }, index) => (
            <div
              key={label}
              className={`flex items-center gap-2.5 sm:gap-3 px-0 @7xl:px-3 min-w-0 @7xl:justify-center ${
                index > 0 ? "@7xl:border-l @7xl:border-slate-400/70" : ""
              }`}
            >
              <span className="flex w-10 h-10 shrink-0 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/30">
                <Icon className="w-5 h-5 text-[#FFD91A]" strokeWidth={2} />
              </span>
              <div>
                <span className="block font-condensed font-bold text-[12.5px] text-white tracking-wide uppercase leading-tight">
                  {label}
                </span>
                <span
                  className={`block font-condensed font-extrabold leading-tight ${
                    plain
                      ? "text-[18px] text-white"
                      : "text-[23px] text-[#FFD91A]"
                  }`}
                >
                  {value}
                </span>
              </div>
            </div>
          ))}

          {/* Closing statement */}
          <div className="col-span-2 sm:col-span-3 @7xl:col-span-1 px-2 @7xl:border-l @7xl:border-slate-500/60 text-center @7xl:text-left font-condensed font-extrabold text-[15px] text-[#FFD91A] uppercase leading-tight @7xl:whitespace-nowrap">
            <span className="block">TOGETHER, WE BUILD</span>
            <span className="block">A BETTER CONSTITUENCY</span>
          </div>
        </div>
      </div>
    </section>
  );
}
