import React from "react";
import SubPageLayout from "@/components/SubPageLayout";
import { CheckCircle2, Compass, Eye, HeartHandshake } from "lucide-react";

export default function VisionPage() {
  return (
    <SubPageLayout
      title="Our Vision — Political Strategy Hub"
      subtitle="Building resilient democratic constituencies where every citizen thrives and every booth has accountable leadership."
    >
      <div className="space-y-6">
        <div className="bg-white border border-[#D9DEE7] rounded-lg p-6 shadow-xs">
          <div className="max-w-3xl">
            <h2 className="text-xl font-bold font-condensed uppercase text-[#071936] mb-3">
              Vision for New-Age Democratic Representation
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              We envision an India where political leadership is evaluated by service delivery rather than election cycle promises. By institutionalizing 10+ trained cadres per polling booth, we create a living bridge between public policy and the citizen on the ground.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-slate-100 pt-6">
            <div className="p-4 bg-slate-50 rounded-lg">
              <Compass className="w-6 h-6 text-blue-600 mb-2" />
              <h3 className="font-condensed font-bold text-base text-[#071936] uppercase">
                Ethical Politics
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Rooted in transparent conduct, dignity for all families, and strict anti-corruption safeguards.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg">
              <HeartHandshake className="w-6 h-6 text-emerald-600 mb-2" />
              <h3 className="font-condensed font-bold text-base text-[#071936] uppercase">
                Citizen Primacy
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Healthcare, youth livelihoods, and village sanitation delivered at doorsteps before asking for votes.
              </p>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg">
              <Eye className="w-6 h-6 text-purple-600 mb-2" />
              <h3 className="font-condensed font-bold text-base text-[#071936] uppercase">
                Cadre Meritocracy
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Youth from ordinary backgrounds trained and promoted into genuine constituency leaders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </SubPageLayout>
  );
}
