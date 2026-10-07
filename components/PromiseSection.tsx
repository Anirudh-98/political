import React from "react";
import { CircleCheck } from "lucide-react";
import { PROMISES } from "@/data/mockData";

export default function PromiseSection() {
  const renderColumn = (items: string[]) => (
    <div className="space-y-2">
      {items.map((item) => (
        <div key={item} className="flex items-start gap-1.5">
          <CircleCheck className="w-4 h-4 text-white fill-[#08793F] shrink-0 mt-px" />
          <span className="font-condensed text-[13px] font-semibold text-[#0B1B3A] leading-[1.15]">
            {item}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="bg-[#EEF2F7] border border-[#D9DEE7] rounded-lg p-3 flex flex-col h-full shadow-[0_1px_3px_rgba(7,25,54,0.08)]">
      <h2 className="panel-title mb-2">WHAT WE PROMISE</h2>

      <div className="flex-1 content-center grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-2">
        {renderColumn(PROMISES.col1)}
        {renderColumn(PROMISES.col2)}
      </div>

      <p className="mt-2.5 text-[12.5px] font-bold text-[#C8141F] leading-snug">
        We are here to serve. Together, let’s build a better tomorrow.
      </p>
    </div>
  );
}
