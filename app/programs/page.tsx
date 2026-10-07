import React from "react";
import SubPageLayout from "@/components/SubPageLayout";
import { BookOpen, Users, Heart, Zap, Award } from "lucide-react";

export default function ProgramsPage() {
  const programs = [
    {
      id: "booth-cadre",
      title: "Booth-Wise Cadre Mobilization & Training",
      category: "Leadership & Organization",
      description: "Recruiting, vetting, and training 10+ disciplined cadres per polling booth with digital grievance escalation apps.",
      icon: Users,
      badgeColor: "bg-emerald-600",
    },
    {
      id: "welfare",
      title: "Citizen Welfare & Doorstep Healthcare",
      category: "Public Welfare",
      description: "Free medical screening camps, mobile diagnostics vans, and generic medicine distribution for remote wards.",
      icon: Heart,
      badgeColor: "bg-red-600",
    },
    {
      id: "youth",
      title: "Youth Skill Certification & Employment Wings",
      category: "Economic Upliftment",
      description: "Vocational education vouchers, digital computer courses, and interview preparation clinics for rural youth.",
      icon: Zap,
      badgeColor: "bg-blue-600",
    },
    {
      id: "women",
      title: "Women Self-Help & Micro-Enterprise Mission",
      category: "Community Empowerment",
      description: "Financial literacy, micro-credit access, and artisan marketing support for rural women's groups.",
      icon: Award,
      badgeColor: "bg-purple-600",
    },
  ];

  return (
    <SubPageLayout
      title="Strategic Programs & Initiatives"
      subtitle="Structured outreach campaigns delivering verifiable public service, cadre skills, and socio-economic progress."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {programs.map((prog) => {
          const Icon = prog.icon;
          return (
            <div
              key={prog.id}
              id={prog.id}
              className="bg-white border border-[#D9DEE7] rounded-lg p-5 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2 rounded text-white ${prog.badgeColor}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-condensed font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded">
                    {prog.category}
                  </span>
                </div>
                <h3 className="font-condensed font-bold text-lg text-[#071936] uppercase tracking-wide">
                  {prog.title}
                </h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  {prog.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-emerald-600">
                  ● Active in 5,000+ Booths
                </span>
                <span className="text-xs font-condensed font-bold uppercase text-[#071936]">
                  Details & Schedule →
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </SubPageLayout>
  );
}
