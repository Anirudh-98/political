"use client";

import React from "react";
import Logo from "./Logo";
import { User, Star, Users } from "lucide-react";

interface HeaderProps {
  onOpenAuth: (mode: "login" | "register") => void;
}

export default function Header({ onOpenAuth }: HeaderProps) {
  return (
    <div className="@container relative z-30">
    <header className="bg-white border-b border-[#D9DEE7] @7xl:border-b-0">
      <div className="site-container px-3 sm:px-4 py-2 sm:py-2.5 @7xl:py-0 @7xl:h-[46px] flex items-center justify-between gap-4 relative">
        {/* Left: logo. On wide screens it hangs down beside the nav bar, as in the reference */}
        <div className="min-w-0 @7xl:absolute @7xl:left-4 @7xl:top-1">
          <Logo />
        </div>

        {/* Right side: Trust Block + Auth Buttons */}
        <div className="flex items-center gap-3 sm:gap-6 ml-auto shrink-0">
          {/* Trust / Mission Statement Block */}
          <div className="hidden md:flex items-center gap-2.5 text-left">
            {/* Circular badge with star and people */}
            <div className="w-9 h-9 rounded-full border-2 border-[#071936] flex items-center justify-center text-[#071936] shrink-0">
              <div className="relative">
                <Users className="w-[18px] h-[18px] fill-[#071936] text-[#071936]" />
                <Star className="w-2.5 h-2.5 fill-[#071936] text-[#071936] absolute -top-2 left-1/2 -translate-x-1/2" />
              </div>
            </div>

            <div className="flex flex-col text-[12.5px] leading-[1.25] font-semibold text-[#071936]">
              <span>Together for People</span>
              <span>Stronger Constituencies</span>
              <span>Stronger Democracy</span>
            </div>
          </div>

          {/* Action Buttons: LOGIN & REGISTER */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              type="button"
              onClick={() => onOpenAuth("login")}
              className="inline-flex items-center justify-center gap-1.5 px-2.5 sm:px-5 py-1.5 bg-[#071936] hover:bg-[#031126] text-white text-[12.5px] sm:text-[14px] font-bold font-condensed tracking-wide uppercase rounded transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-[#071936]"
            >
              <User className="w-3.5 h-3.5 fill-white" />
              <span>LOGIN</span>
            </button>

            <button
              type="button"
              onClick={() => onOpenAuth("register")}
              className="inline-flex items-center justify-center px-2.5 sm:px-5 py-1.5 bg-[#08793F] hover:bg-[#066534] text-white text-[12.5px] sm:text-[14px] font-bold font-condensed tracking-wide uppercase rounded transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-emerald-600"
            >
              <span>REGISTER</span>
            </button>
          </div>
        </div>
      </div>
    </header>
    </div>
  );
}
