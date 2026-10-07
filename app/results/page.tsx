import React from "react";
import SubPageLayout from "@/components/SubPageLayout";
import { IMPACT_METRICS } from "@/data/mockData";
import { TrendingUp, CheckCircle, BarChart3 } from "lucide-react";

export default function ResultsPage() {
  return (
    <SubPageLayout
      title="Results & Impact Dashboard"
      subtitle="Track our verified grassroot work, audited public service deliveries, and tangible constituency milestones."
    >
      <div className="space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {IMPACT_METRICS.map((stat) => (
            <div
              key={stat.label}
              className="bg-white border border-[#D9DEE7] p-5 rounded-lg text-center shadow-xs"
            >
              <span className="block font-condensed font-black text-3xl text-[#071936]">
                {stat.num}
              </span>
              <span className="block text-xs font-bold text-slate-600 uppercase mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        <div className="bg-white border border-[#D9DEE7] p-6 rounded-lg shadow-xs">
          <h2 className="text-lg font-bold font-condensed uppercase text-[#071936] mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-red-600" />
            <span>Constituency Grievance Redressal Audit</span>
          </h2>

          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                <span>Healthcare & Medical Assistance Requests</span>
                <span>94.8% Resolved</span>
              </div>
              <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                <div className="bg-emerald-600 h-full w-[94.8%]" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                <span>Youth Vocational Training Subsidies</span>
                <span>91.2% Allocated</span>
              </div>
              <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                <div className="bg-blue-600 h-full w-[91.2%]" />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                <span>Drinking Water & Sanitation Tickets</span>
                <span>96.5% Closed</span>
              </div>
              <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                <div className="bg-teal-600 h-full w-[96.5%]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </SubPageLayout>
  );
}
