import React from "react";
import SubPageLayout from "@/components/SubPageLayout";
import { VOTER_BENEFITS } from "@/data/mockData";
import { CheckCircle2, ShieldCheck } from "lucide-react";

export default function VoterServicesPage() {
  return (
    <SubPageLayout
      title="Citizen & Voter Services Directory"
      subtitle="Free privileged welfare benefits, subsidy vouchers, and direct grievance assistance available for every resident."
    >
      <div className="space-y-6">
        <div className="bg-white border border-[#D9DEE7] rounded-lg p-5 shadow-xs">
          <h2 className="text-lg font-bold font-condensed uppercase text-[#071936] mb-2">
            One Citizen • One Opportunity • Better Future
          </h2>
          <p className="text-xs text-slate-600 max-w-3xl leading-relaxed">
            Our platform guarantees that no citizen is left behind. Whether you need educational scholarship guidance, health camp referrals, or civic escalation for sanitation and electricity, our booth cadre connects you directly with solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {VOTER_BENEFITS.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-[#D9DEE7] rounded-lg p-4 shadow-xs flex flex-col justify-between"
            >
              <div>
                <span
                  className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded text-white mb-2"
                  style={{ backgroundColor: item.color }}
                >
                  Active Benefit
                </span>
                <h3 className="font-condensed font-bold text-base text-slate-900 uppercase">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Accessible at all booth touchpoints with zero fee or intermediary charges.
                </p>
              </div>

              <div className="mt-4 pt-2 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-600">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Welfare Benefit</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SubPageLayout>
  );
}
