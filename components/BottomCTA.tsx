"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Hand,
  UserPlus,
  MapPin,
  Download,
  Headphones,
} from "lucide-react";

interface BottomCTAProps {
  onRegisterCadre: () => void;
  onFindBooth: () => void;
}

export default function BottomCTA({
  onRegisterCadre,
  onFindBooth,
}: BottomCTAProps) {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadBrochure = () => {
    setDownloadSuccess(true);
    // Trigger simulated brochure download
    const dummyText = `POLITICAL STRATEGY HUB - OFFICIAL CONSTITUENCY BROCHURE
=====================================================
Strategy Today • Service Always • Victory Together
Trained Cadres: 50,000+
Booths Covered: 5,000+
Services Delivered: 1,50,000+

Our Core Pillars:
1. Booth Wise Cadre Training (Min 10 cadres per booth)
2. Direct Citizen Grievance Redressal
3. Voter Benefits & Subsidy Vouchers
4. Real-time Impact & Transparency

Contact: helpdesk@politicalstrategyhub.com
Website: www.politicalstrategyhub.com`;

    const blob = new Blob([dummyText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "Political-Strategy-Hub-Brochure.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  const handleContactHelpdesk = () => {
    window.location.href = "tel:+911800123456";
  };

  return (
    <section className="@container bg-white border-t border-b border-[#D9DEE7] relative overflow-hidden shadow-xs">
      <div className="site-container px-3 sm:px-4 py-2 relative z-10">
        <div className="flex flex-wrap @6xl:flex-nowrap items-center justify-between gap-3 sm:gap-4">
          {/* Left: Be a part of the change */}
          <div className="flex items-center gap-2.5 sm:border-r sm:border-slate-200 pr-4 shrink-0">
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-[#1D46C4] shrink-0">
              <Hand className="w-8 h-8" />
            </div>
            <div className="leading-tight">
              <span className="block font-condensed font-extrabold text-[16px] text-[#1D46C4] uppercase">
                BE A PART OF THE CHANGE
              </span>
              <span className="block font-condensed font-extrabold text-[16px] text-[#071936] uppercase">
                REGISTER TODAY!
              </span>
            </div>
          </div>

          {/* Middle Actions */}
          <div className="order-last @6xl:order-none basis-full @6xl:basis-0 grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 flex-1">
            {/* Action 1: Register as Volunteer / Cadre */}
            <button
              type="button"
              onClick={onRegisterCadre}
              className="flex items-center gap-2.5 px-0 @6xl:px-2 py-1.5 rounded hover:bg-slate-50 transition text-left group cursor-pointer focus:outline-none"
            >
              <span className="flex w-10 h-10 shrink-0 items-center justify-center rounded-full bg-[#EEF2F7] text-[#071936] transition-colors duration-200 group-hover:bg-[#071936] group-hover:text-white">
                <UserPlus className="w-5 h-5" />
              </span>
              <div className="leading-none">
                <span className="block font-condensed font-bold text-[13px] text-[#071936] uppercase sm:whitespace-nowrap">
                  REGISTER AS
                </span>
                <span className="block font-condensed font-bold text-[13px] text-[#071936] uppercase sm:whitespace-nowrap mt-0.5">
                  VOLUNTEER / CADRE
                </span>
              </div>
            </button>

            {/* Action 2: Find Your Booth */}
            <button
              type="button"
              onClick={onFindBooth}
              className="flex items-center gap-2.5 px-0 @6xl:px-2 py-1.5 rounded hover:bg-slate-50 transition text-left group cursor-pointer focus:outline-none"
            >
              <span className="flex w-10 h-10 shrink-0 items-center justify-center rounded-full bg-[#EEF2F7] text-[#071936] transition-colors duration-200 group-hover:bg-[#071936] group-hover:text-white">
                <MapPin className="w-5 h-5" />
              </span>
              <div className="leading-none">
                <span className="block font-condensed font-bold text-[13px] text-[#071936] uppercase sm:whitespace-nowrap">
                  FIND YOUR
                </span>
                <span className="block font-condensed font-bold text-[13px] text-[#071936] uppercase sm:whitespace-nowrap mt-0.5">
                  BOOTH
                </span>
              </div>
            </button>

            {/* Action 3: Download Brochure */}
            <button
              type="button"
              onClick={handleDownloadBrochure}
              className="flex items-center gap-2.5 px-0 @6xl:px-2 py-1.5 rounded hover:bg-slate-50 transition text-left group cursor-pointer focus:outline-none"
            >
              <span className="flex w-10 h-10 shrink-0 items-center justify-center rounded-full bg-[#EEF2F7] text-[#071936] transition-colors duration-200 group-hover:bg-[#071936] group-hover:text-white">
                <Download className="w-5 h-5" />
              </span>
              <div className="leading-none">
                <span className="block font-condensed font-bold text-[13px] text-[#071936] uppercase sm:whitespace-nowrap">
                  {downloadSuccess ? "DOWNLOADED!" : "DOWNLOAD"}
                </span>
                <span className="block font-condensed font-bold text-[13px] text-[#071936] uppercase sm:whitespace-nowrap mt-0.5">
                  BROCHURE
                </span>
              </div>
            </button>

            {/* Action 4: Contact Help Desk */}
            <button
              type="button"
              onClick={handleContactHelpdesk}
              className="flex items-center gap-2.5 px-0 @6xl:px-2 py-1.5 rounded hover:bg-slate-50 transition text-left group cursor-pointer focus:outline-none"
            >
              <span className="flex w-10 h-10 shrink-0 items-center justify-center rounded-full bg-[#EEF2F7] text-[#071936] transition-colors duration-200 group-hover:bg-[#071936] group-hover:text-white">
                <Headphones className="w-5 h-5" />
              </span>
              <div className="leading-none">
                <span className="block font-condensed font-bold text-[13px] text-[#071936] uppercase sm:whitespace-nowrap">
                  CONTACT
                </span>
                <span className="block font-condensed font-bold text-[13px] text-[#071936] uppercase sm:whitespace-nowrap mt-0.5">
                  HELP DESK
                </span>
              </div>
            </button>
          </div>

          {/* Right: Responsibility Quote + Tricolor Element */}
          <div className="flex items-center justify-between sm:justify-end gap-3 w-full sm:w-auto sm:shrink-0 pr-1 sm:pr-40">
            <div className="text-left sm:text-right leading-tight">
              <span className="block font-condensed font-bold text-[13.5px] text-[#1D46C4] uppercase">
                GOOD POLITICS IS NOT ABOUT POWER,
              </span>
              <span className="block font-condensed font-bold text-[13.5px] text-[#1D46C4] uppercase">
                IT IS ABOUT RESPONSIBILITY.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Waving leader silhouette with tricolour ribbon on the right edge */}
      <div className="hidden sm:block absolute right-0 inset-y-0 w-40 pointer-events-none">
        <Image
          src="/images/cta-tricolor.webp"
          alt=""
          fill
          sizes="160px"
          className="object-cover object-left mix-blend-multiply"
        />
      </div>
    </section>
  );
}
