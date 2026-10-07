import React from "react";
import SubPageLayout from "@/components/SubPageLayout";
import { GraduationCap, BookOpen, Award, CheckCircle } from "lucide-react";

export default function TrainingPage() {
  const modules = [
    {
      num: "MOD-01",
      title: "Booth Analytics & Voter Mapping",
      desc: "Electoral roll scrutiny, family mapping, voter mood tracking, and demographic issue enumeration.",
      duration: "12 Hours",
    },
    {
      num: "MOD-02",
      title: "Door-to-Door Citizen Engagement",
      desc: "Empathetic listening techniques, public grievance capture, and immediate helpline dispatch.",
      duration: "16 Hours",
    },
    {
      num: "MOD-03",
      title: "Digital Cadre App & Real-Time Reporting",
      desc: "Using the Political Strategy Hub mobile interface for booth status logging and task resolution.",
      duration: "8 Hours",
    },
    {
      num: "MOD-04",
      title: "Constituency Development Oversight",
      desc: "Monitoring local civic projects, rural road quality, water tankers, and government scheme delivery.",
      duration: "14 Hours",
    },
  ];

  return (
    <SubPageLayout
      title="Cadre Training & Academy Courses"
      subtitle="Standardized field curriculum preparing grassroot volunteers to become disciplined constituency leaders."
    >
      <div className="space-y-6">
        <div className="bg-white border border-[#D9DEE7] rounded-lg p-5 shadow-xs">
          <h2 className="text-lg font-bold font-condensed uppercase text-[#071936] mb-2">
            Professional Certification Program for Cadres
          </h2>
          <p className="text-xs text-slate-600 max-w-3xl leading-relaxed">
            Every volunteer inducted into the Political Strategy Hub undergoes a rigorous 4-module certification track. Training is conducted both online and through regional weekend workshops led by senior campaign strategists and public administration experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {modules.map((mod) => (
            <div
              key={mod.num}
              className="bg-white border border-[#D9DEE7] rounded-lg p-5 shadow-xs"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded">
                  {mod.num}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {mod.duration}
                </span>
              </div>
              <h3 className="font-condensed font-bold text-base text-[#071936] uppercase">
                {mod.title}
              </h3>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                {mod.desc}
              </p>
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs text-emerald-600 font-semibold">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Accredited Certification Provided</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SubPageLayout>
  );
}
