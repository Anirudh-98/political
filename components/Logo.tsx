import React from "react";
import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  showTagline?: boolean;
  variant?: "dark" | "light";
}

export default function Logo({ showTagline = true, variant = "dark" }: LogoProps) {
  const isLight = variant === "light";
  const nameClass = `font-condensed font-extrabold uppercase leading-[0.95] text-[17px] sm:text-[24px] ${
    isLight ? "text-white" : "text-[#071936]"
  }`;

  return (
    <Link
      href="/"
      className="inline-flex flex-col focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded"
      aria-label="Political Strategy Hub Homepage"
    >
      <span className="inline-flex items-center gap-1.5 sm:gap-2">
        {/* Emblem (white backdrop, so it gets a white disc on dark surfaces) */}
        <span className={`shrink-0 ${isLight ? "bg-white rounded-full p-1.5" : ""}`}>
          <Image
            src="/images/logo-emblem.webp"
            alt=""
            width={360}
            height={319}
            priority
            className={isLight ? "w-11 h-auto" : "w-[42px] sm:w-[54px] h-auto"}
          />
        </span>

        <span className="flex flex-col justify-center select-none">
          <span className={nameClass}>POLITICAL</span>
          <span className={nameClass}>
            STRATEGY <span className="text-[#E21E2B]">HUB</span>
          </span>
        </span>
      </span>

      {/* Tagline on its own line under the whole logo, so it has room to be legible */}
      {showTagline && (
        <span
          className={`hidden sm:block font-condensed text-[12px] font-bold uppercase whitespace-nowrap leading-none mt-1.5 select-none ${
            isLight ? "text-white" : "text-[#071936]"
          }`}
        >
          STRATEGY TODAY • SERVICE ALWAYS • VICTORY TOGETHER
        </span>
      )}
    </Link>
  );
}
