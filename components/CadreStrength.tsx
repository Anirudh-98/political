"use client";

import React from "react";
import { Users, ShieldCheck, UsersRound, Flag } from "lucide-react";

interface CadreStrengthProps {
  onJoinCadre: () => void;
}

export default function CadreStrength({ onJoinCadre }: CadreStrengthProps) {
  const numberClass =
    "font-condensed font-extrabold text-[19px] @[270px]:text-[22px] text-[#071936] leading-none mt-1";
  const labelClass =
    "font-condensed text-[11px] @[270px]:text-[12.5px] text-[#0B1B3A] font-semibold leading-[1.12] mt-1 [overflow-wrap:anywhere]";

  return (
    <div className="@container bg-[#EEF2F7] border border-[#D9DEE7] rounded-lg p-3 flex flex-col h-full">
      <h2 className="panel-title mb-2">CADRE AT BOOTH – OUR STRENGTH</h2>

      {/* 4 statistics in a row */}
      <div className="flex-1 grid grid-cols-4 text-center items-center">
        <div className="flex flex-col items-center px-1">
          <Users className="w-7 h-7 text-[#071936] fill-[#071936]" />
          <span className={numberClass}>10+</span>
          <span className={labelClass}>Cadres per Booth</span>
        </div>

        <div className="flex flex-col items-center px-1 border-l border-slate-400">
          <ShieldCheck className="w-7 h-7 text-[#08793F]" strokeWidth={2.4} />
          <span className={numberClass}>100%</span>
          <span className={labelClass}>Trained & Verified</span>
        </div>

        <div className="flex flex-col items-center px-1 border-l border-slate-400">
          <UsersRound className="w-7 h-7 text-[#071936] fill-[#071936]" />
          <span className={numberClass}>10+</span>
          <span className={labelClass}>Active Cadres per Booth</span>
        </div>

        <div className="flex flex-col items-center px-1 border-l border-slate-400">
          <Flag className="w-7 h-7 text-[#E21E2B] fill-[#E21E2B]" />
          <span className="font-condensed text-[10px] @[270px]:text-[12.5px] text-[#071936] font-bold leading-[1.12] mt-1.5">
            Stronger Booth Stronger Constituency
          </span>
        </div>
      </div>

      {/* Navy bar + red button */}
      <div className="mt-2.5 flex flex-col items-center gap-2">
        <div className="bg-[#071936] text-white py-1 px-3 text-center rounded-[3px] text-[13px] font-condensed font-bold uppercase tracking-wide">
          YOU JOIN AS CADRE – YOU BECOME A LEADER
        </div>

        <button
          type="button"
          onClick={onJoinCadre}
          className="py-1 px-5 bg-[#E21E2B] hover:bg-[#c41420] text-white font-condensed font-bold text-[13px] uppercase tracking-wide rounded-[3px] transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-red-500"
        >
          JOIN AS CADRE
        </button>
      </div>
    </div>
  );
}
