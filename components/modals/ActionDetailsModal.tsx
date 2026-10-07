"use client";

import React, { useEffect } from "react";
import { X, Gift, Ticket, HeartHandshake, CheckCircle2, ArrowRight } from "lucide-react";

interface ActionDetailsModalProps {
  type: "offers" | "vouchers" | "services" | null;
  isOpen: boolean;
  onClose: () => void;
  onOpenServiceRequest: (category: string) => void;
}

export default function ActionDetailsModal({
  type,
  isOpen,
  onClose,
  onOpenServiceRequest,
}: ActionDetailsModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !type) return null;

  const content = {
    offers: {
      title: "SPECIAL OFFERS FOR CADRES",
      subtitle: "Training • Certificates • Rewards & Recognition",
      color: "#1D4ED8",
      icon: <Gift className="w-5 h-5 text-blue-600" />,
      items: [
        {
          heading: "Certified Political Strategy Course",
          desc: "Complete 14 modular lessons on booth analytics, door-to-door enumeration, and digital campaign tools. Receive accredited certification.",
        },
        {
          heading: "Leadership Merit Recognition & Badges",
          desc: "Top 5% active booth cadres receive annual felicitation and state-level leadership fellowship opportunities.",
        },
        {
          heading: "Cadre Welfare & Accidental Insurance Cover",
          desc: "Full complimentary healthcare and accidental coverage for active registered grassroot cadres and immediate families.",
        },
        {
          heading: "Youth Internship & Governance Fellowship",
          desc: "Direct placement in constituency development research councils and public administration oversight desks.",
        },
      ],
      btnText: "Enroll in Cadre Program",
      categoryKey: "Cadre Training & Offers",
    },
    vouchers: {
      title: "SUBSIDY VOUCHERS FOR VOTERS",
      subtitle: "Skill • Education • Health • Business • & More",
      color: "#7C3AED",
      icon: <Ticket className="w-5 h-5 text-purple-600" />,
      items: [
        {
          heading: "Youth Skill Certification Voucher (100% Subsidy)",
          desc: "Waives 100% tuition for IT courses, coding basics, accounting tally, and vocational training across accredited partner institutes.",
        },
        {
          heading: "Medical Diagnostic & Prescription Subsidy",
          desc: "Subsidized diagnostic laboratory tests, eye checkups, and free essential generic medicines through affiliated clinics.",
        },
        {
          heading: "Higher Education Grant Voucher",
          desc: "Financial assistance tokens for college admission fee subsidies for deserving girl students and underprivileged youth.",
        },
        {
          heading: "Small Business & Micro-Enterprise Kit",
          desc: "Subsidized equipment assistance vouchers for street vendors, artisan collectives, and rural self-help groups.",
        },
      ],
      btnText: "Apply for Voucher",
      categoryKey: "Subsidy Vouchers",
    },
    services: {
      title: "FREE PRIVILEGED SERVICES",
      subtitle: "We Care, We Serve, We Stand With You",
      color: "#EA580C",
      icon: <HeartHandshake className="w-5 h-5 text-orange-600" />,
      items: [
        {
          heading: "24/7 Citizen Emergency Assistance Line",
          desc: "Direct hotline for urgent medical transportation, ambulance dispatch, and disaster relief support in every booth.",
        },
        {
          heading: "Free Legal Aid & Document Attestation Desk",
          desc: "Assistance with ration card updates, Aadhaar corrections, voter ID inclusion, and government pension filing.",
        },
        {
          heading: "Doorstep Senior Citizen Health Visits",
          desc: "Monthly doorstep checkups by mobile health vans for elderly residents with free blood pressure and sugar tests.",
        },
        {
          heading: "Clean Drinking Water & Sanitation Taskforce",
          desc: "Rapid response maintenance teams dispatched to resolve community water tank contamination or pump failure within 24 hours.",
        },
      ],
      btnText: "Request Privileged Service",
      categoryKey: "Privileged Services",
    },
  }[type];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="action-details-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-xs animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-lg shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-5 py-4 text-white"
          style={{ backgroundColor: "#071936" }}
        >
          <div className="flex items-center gap-2.5">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-white"
              style={{ backgroundColor: content.color }}
            >
              {content.icon}
            </div>
            <div>
              <h3
                id="action-details-title"
                className="text-lg font-bold font-condensed tracking-wide uppercase text-white"
              >
                {content.title}
              </h3>
              <p className="text-xs text-slate-300">{content.subtitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content list */}
        <div className="p-5 sm:p-6 max-h-[80vh] overflow-y-auto space-y-3.5">
          {content.items.map((item, idx) => (
            <div
              key={idx}
              className="p-3 bg-slate-50 border border-slate-200 rounded-md hover:border-slate-300 transition"
            >
              <div className="flex items-start gap-2">
                <CheckCircle2
                  className="w-4 h-4 shrink-0 mt-0.5"
                  style={{ color: content.color }}
                />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 font-condensed uppercase tracking-tight">
                    {item.heading}
                  </h4>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={() => {
              onClose();
              onOpenServiceRequest(content.categoryKey);
            }}
            className="w-full py-2.5 px-4 text-white font-bold font-condensed tracking-wider uppercase text-sm rounded flex items-center justify-center gap-2 transition shadow-xs mt-4 cursor-pointer"
            style={{ backgroundColor: content.color }}
          >
            <span>{content.btnText}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
