"use client";

import React from "react";
import { Play } from "lucide-react";
import { YOUTUBE_CHANNEL_BULLETS } from "@/data/mockData";

// Decorative placeholder until the real channel URL is known. It does not encode a link.
const QR_SIZE = 25;

function isFinder(x: number, y: number) {
  const inBox = (bx: number, by: number) =>
    x >= bx && x < bx + 7 && y >= by && y < by + 7;
  return inBox(0, 0) || inBox(QR_SIZE - 7, 0) || inBox(0, QR_SIZE - 7);
}

function isQuietZone(x: number, y: number) {
  const inBox = (bx: number, by: number) =>
    x >= bx && x < bx + 8 && y >= by && y < by + 8;
  return inBox(0, 0) || inBox(QR_SIZE - 8, 0) || inBox(0, QR_SIZE - 8);
}

function buildModules() {
  const cells: { x: number; y: number }[] = [];
  let seed = 20240917;
  for (let y = 0; y < QR_SIZE; y++) {
    for (let x = 0; x < QR_SIZE; x++) {
      seed = (seed * 1103515245 + 12345) & 0x7fffffff;
      if (isQuietZone(x, y)) continue;
      if ((seed >> 16) % 2 === 0) cells.push({ x, y });
    }
  }
  return cells;
}

const QR_MODULES = buildModules();

function QrPlaceholder() {
  const finder = (x: number, y: number) => (
    <g key={`${x}-${y}`}>
      <rect x={x} y={y} width="7" height="7" />
      <rect x={x + 1} y={y + 1} width="5" height="5" fill="white" />
      <rect x={x + 2} y={y + 2} width="3" height="3" />
    </g>
  );

  return (
    <svg
      viewBox={`0 0 ${QR_SIZE} ${QR_SIZE}`}
      className="w-[60px] h-[60px]"
      fill="#111827"
      shapeRendering="crispEdges"
      role="img"
      aria-label="QR code placeholder"
    >
      {QR_MODULES.filter((c) => !isFinder(c.x, c.y)).map((c) => (
        <rect key={`${c.x}-${c.y}`} x={c.x} y={c.y} width="1" height="1" />
      ))}
      {finder(0, 0)}
      {finder(QR_SIZE - 7, 0)}
      {finder(0, QR_SIZE - 7)}
    </svg>
  );
}

export default function YoutubeChannelCard() {
  return (
    <div className="@container bg-white border border-[#D9DEE7] rounded-lg p-3 flex flex-col h-full">
      <h2 className="panel-title mb-2" style={{ color: "#C8141F" }}>
        OUR YOUTUBE CHANNEL – CONNECT WITH REAL IMPACT
      </h2>

      <div className="flex-1 grid grid-cols-[1fr_auto] @[360px]:grid-cols-[minmax(auto,1fr)_auto_auto] items-stretch content-center gap-x-5 gap-y-3 @[360px]:pr-3">
        {/* YouTube badge */}
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2.5 border border-slate-400 rounded-lg px-5 py-3 hover:border-slate-500 transition-colors"
          aria-label="Visit our YouTube channel"
        >
          <span className="w-[52px] h-9 bg-[#E21E2B] rounded-[10px] flex items-center justify-center shrink-0">
            <Play className="w-5 h-5 fill-white text-white ml-0.5" />
          </span>
          <span className="font-condensed font-extrabold text-[#111111] text-[24px] sm:text-[32px] leading-none tracking-tight">
            YouTube
          </span>
        </a>

        {/* Bullets: between the badge and the QR box, which sits right beside the text */}
        <ul className="col-span-2 order-last @[360px]:col-span-1 @[360px]:order-none justify-self-start flex flex-col justify-between gap-1 text-[13px] text-[#0B1B3A] font-semibold">
          {YOUTUBE_CHANNEL_BULLETS.map((bullet) => (
            <li key={bullet} className="flex items-center gap-2">
              <span aria-hidden="true" className="text-[10px] leading-none text-[#071936] shrink-0">✦</span>
              <span className="leading-tight">{bullet}</span>
            </li>
          ))}
        </ul>

        {/* QR box */}
        <div className="flex flex-col items-center justify-center border-[1.5px] border-[#E21E2B] rounded-lg px-2.5 py-2">
          <QrPlaceholder />
          <span className="mt-1.5 text-[10.5px] font-condensed font-extrabold text-[#071936] uppercase text-center leading-[1.1]">
            SCAN &<br />
            WATCH NOW
          </span>
        </div>
      </div>
    </div>
  );
}
