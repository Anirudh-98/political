"use client";

import React from "react";
import QuickActionCard from "./QuickActionCard";
import { QUICK_ACTIONS, QuickActionItem } from "@/data/mockData";

interface QuickActionsProps {
  onActionClick: (actionKey: QuickActionItem["actionKey"]) => void;
}

export default function QuickActions({ onActionClick }: QuickActionsProps) {
  return (
    <section className="@container site-container px-3 sm:px-4 py-2">
      {/* 6 Columns on Desktop (>= 1280px), 3 Columns on Tablet, 1 Column on Mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 @6xl:grid-cols-6 gap-2">
        {QUICK_ACTIONS.map((item) => (
          <QuickActionCard
            key={item.id}
            item={item}
            onClick={onActionClick}
          />
        ))}
      </div>
    </section>
  );
}
