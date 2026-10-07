import React from "react";
import {
  Users,
  Gift,
  Ticket,
  HeartHandshake,
  ClipboardList,
  BarChart3,
} from "lucide-react";
import { QuickActionItem } from "@/data/mockData";

interface QuickActionCardProps {
  item: QuickActionItem;
  onClick: (actionKey: QuickActionItem["actionKey"]) => void;
}

export default function QuickActionCard({ item, onClick }: QuickActionCardProps) {
  const renderIcon = () => {
    const iconClass = "w-6 h-6 text-white";
    switch (item.iconName) {
      case "Gift":
        return <Gift className={iconClass} />;
      case "Ticket":
        return <Ticket className={iconClass} />;
      case "HandHeart":
        return <HeartHandshake className={iconClass} />;
      case "FileText":
        return <ClipboardList className={iconClass} />;
      case "BarChart3":
        return <BarChart3 className={iconClass} strokeWidth={2.6} />;
      default:
        return <Users className={`${iconClass} fill-white`} />;
    }
  };

  return (
    <div className="relative overflow-hidden bg-white border border-[#D9DEE7] rounded-lg p-3 flex gap-3 shadow-[0_1px_3px_rgba(7,25,54,0.08)] transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(7,25,54,0.14)]">
      <span className="absolute inset-x-0 top-0 h-1" style={{ backgroundColor: item.color }} />
      {/* Circular colored icon */}
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 mt-0.5"
        style={{ backgroundColor: item.color, boxShadow: `0 0 0 4px ${item.color}26` }}
      >
        {renderIcon()}
      </div>

      <div className="flex-1 min-w-0 flex flex-col">
        <h3
          className="font-condensed font-extrabold text-[15.5px] uppercase leading-[1.12]"
          style={{ color: item.color }}
        >
          {item.title}
        </h3>

        <div className="text-[12.5px] text-[#0B1B3A] font-medium leading-[1.4] mt-1 mb-2">
          <p>{item.line1}</p>
          <p>{item.line2}</p>
        </div>

        <button
          type="button"
          onClick={() => onClick(item.actionKey)}
          className="mt-auto self-start py-1 px-3.5 text-white font-condensed font-bold text-[13px] uppercase tracking-wide rounded-[3px] cursor-pointer transition-[filter] hover:brightness-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-slate-500"
          style={{ backgroundColor: item.color }}
        >
          {item.btnText}
        </button>
      </div>
    </div>
  );
}
