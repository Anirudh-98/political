import React from "react";
import SubPageLayout from "@/components/SubPageLayout";
import { ShieldCheck, Target, Users, Award } from "lucide-react";

export default function AboutPage() {
  return (
    <SubPageLayout
      title="About Us — Political Strategy Hub"
      subtitle="Strategy Today • Service Always • Victory Together. Institutional political management, cadre empowerment, and citizen welfare."
    >
      <div className="space-y-6">
        {/* Mission Statement */}
        <div className="bg-white border border-[#D9DEE7] rounded-lg p-6 shadow-xs">
          <div className="max-w-3xl">
            <h2 className="text-xl font-bold font-condensed uppercase text-[#071936] mb-3">
              Institutional Mandate
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              Political Strategy Hub was created to transform democratic engagement from episodic campaign rhetoric into institutional year-round citizen service. We believe sustainable electoral victories are earned by building disciplined cadre capacity at every polling booth, monitoring genuine citizen grievances, and providing accountable local development.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed mt-3">
              With over 5,000 booths managed and 50,000+ trained cadres across multiple districts, our platform pairs cutting-edge field data intelligence with authentic doorstep welfare delivery.
            </p>
          </div>
        </div>

        {/* 4 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white border border-[#D9DEE7] p-5 rounded-lg">
            <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-700 flex items-center justify-center mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-condensed font-bold text-base text-[#071936] uppercase">
              Grassroot Cadres
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              Minimum 10 trained, verified leaders positioned per booth ensuring direct household touchpoints.
            </p>
          </div>

          <div className="bg-white border border-[#D9DEE7] p-5 rounded-lg">
            <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="font-condensed font-bold text-base text-[#071936] uppercase">
              Service Delivery
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              Doorstep public services, health checkup camps, and youth skill subsidies for every village.
            </p>
          </div>

          <div className="bg-white border border-[#D9DEE7] p-5 rounded-lg">
            <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-700 flex items-center justify-center mb-3">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-condensed font-bold text-base text-[#071936] uppercase">
              Voter Inclusion
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              Ensuring 100% eligible voter enrollment, civic grievance logging, and transparent accountability.
            </p>
          </div>

          <div className="bg-white border border-[#D9DEE7] p-5 rounded-lg">
            <div className="w-10 h-10 rounded-full bg-red-50 text-red-700 flex items-center justify-center mb-3">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-condensed font-bold text-base text-[#071936] uppercase">
              Measurable Results
            </h3>
            <p className="text-xs text-slate-600 mt-1">
              Data-verified grievance resolution dashboards with audit trails and public impact reports.
            </p>
          </div>
        </div>
      </div>
    </SubPageLayout>
  );
}
