import React from "react";
import SubPageLayout from "@/components/SubPageLayout";
import { MapPin, Users, ShieldCheck, Flag } from "lucide-react";

export default function BoothZonePage() {
  return (
    <SubPageLayout
      title="Booth Zone — Our Grassroot Strength"
      subtitle="Minimum 10 trained, verified cadres per polling booth across every assembly constituency."
    >
      <div className="space-y-6">
        <div className="bg-white border border-[#D9DEE7] rounded-lg p-5 shadow-xs">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4 bg-slate-50 rounded-lg">
              <span className="block text-3xl font-condensed font-black text-[#071936]">
                5,000+
              </span>
              <span className="text-xs font-bold text-slate-600 uppercase">
                Active Booths
              </span>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg">
              <span className="block text-3xl font-condensed font-black text-emerald-600">
                100%
              </span>
              <span className="text-xs font-bold text-slate-600 uppercase">
                Trained & Verified
              </span>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg">
              <span className="block text-3xl font-condensed font-black text-blue-600">
                10+
              </span>
              <span className="text-xs font-bold text-slate-600 uppercase">
                Cadres per Booth
              </span>
            </div>
            <div className="p-4 bg-slate-50 rounded-lg">
              <span className="block text-3xl font-condensed font-black text-red-600">
                24/7
              </span>
              <span className="text-xs font-bold text-slate-600 uppercase">
                Grievance Hotline
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white border border-[#D9DEE7] rounded-lg p-6 shadow-xs">
          <h2 className="text-lg font-bold font-condensed uppercase text-[#071936] mb-3">
            Booth Command Structure
          </h2>
          <div className="space-y-3 text-xs text-slate-700 leading-relaxed">
            <p>
              Each polling booth is organized under a dedicated <strong>Booth Incharge</strong> supported by two <strong>Sector Cadre Leads</strong>, four <strong>Voter Welfare Assistants</strong>, and three <strong>Youth Digital Ambassadors</strong>.
            </p>
            <p>
              This institutional framework guarantees that public issues are resolved swiftly at the local level without administrative bottlenecks.
            </p>
          </div>
        </div>
      </div>
    </SubPageLayout>
  );
}
