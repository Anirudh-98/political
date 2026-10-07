"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);
  const [mediaDropdownOpen, setMediaDropdownOpen] = useState(false);

  const programsRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        programsRef.current &&
        !programsRef.current.contains(event.target as Node)
      ) {
        setProgramsDropdownOpen(false);
      }
      if (
        mediaRef.current &&
        !mediaRef.current.contains(event.target as Node)
      ) {
        setMediaDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "ABOUT US", href: "/about" },
    { name: "OUR VISION", href: "/vision" },
    {
      name: "PROGRAMS",
      href: "/programs",
      hasDropdown: true,
      dropdownItems: [
        { label: "Booth Cadre Training", href: "/programs#booth-cadre" },
        { label: "Citizen Welfare Drive", href: "/programs#welfare" },
        { label: "Youth Leadership Wing", href: "/programs#youth" },
        { label: "Women Empowerment Network", href: "/programs#women" },
        { label: "Constituency Grievance Redressal", href: "/programs#grievance" },
      ],
    },
    { name: "TRAINING & COURSES", href: "/training" },
    { name: "VOTER SERVICES", href: "/voter-services" },
    { name: "BOOTH ZONE", href: "/booth-zone" },
    { name: "RESULTS & IMPACT", href: "/results" },
    {
      name: "MEDIA",
      href: "/media",
      hasDropdown: true,
      dropdownItems: [
        { label: "YouTube Video Channel", href: "/media#videos" },
        { label: "Press Releases", href: "/media#press" },
        { label: "Rally & Event Photos", href: "/media#photos" },
        { label: "Impact Case Studies", href: "/media#cases" },
      ],
    },
    { name: "CONTACT US", href: "/contact" },
  ];

  return (
    <div className="@container relative z-20">
    <nav className="bg-[#071936] @7xl:bg-white text-white shadow-md @7xl:shadow-none relative">
      {/* Wide screens: the navy bar starts beside the logo with a slanted edge and runs to the right edge */}
      <div
        aria-hidden="true"
        className="hidden @7xl:block absolute inset-y-0 right-0 bg-[#071936]"
        style={{
          left: "calc(var(--site-gutter) + 308px)",
          clipPath: "polygon(16px 0, 100% 0, 100% 100%, 0 100%)",
        }}
      />
      <div className="site-container px-3 sm:px-4 relative">
        <div className="flex items-center justify-between h-10 @7xl:h-[38px] @7xl:pl-[292px]">
          {/* Desktop Navigation Items */}
          <div className="hidden @7xl:flex items-stretch h-full w-full">
            {/* HOME Tab (Active with red angled background) */}
            <Link
              href="/"
              className={`relative flex items-center gap-1.5 pl-7 pr-4 font-condensed font-bold text-[13.5px] uppercase tracking-wide transition-colors z-10 ${
                pathname === "/"
                  ? "bg-[#E21E2B] text-white"
                  : "text-slate-200 hover:bg-[#E21E2B] hover:text-white"
              }`}
              style={{
                clipPath: "polygon(16px 0, 100% 0, 100% 100%, 0 100%)",
              }}
            >
              <Home className="w-3.5 h-3.5" />
              <span>HOME</span>
            </Link>

            {/* Other Nav Items */}
            <div className="flex items-stretch justify-between flex-1">
              {navLinks.map((item) => {
                const isActive = pathname === item.href;

                if (item.hasDropdown) {
                  const isOpen =
                    item.name === "PROGRAMS"
                      ? programsDropdownOpen
                      : mediaDropdownOpen;
                  const setOpen =
                    item.name === "PROGRAMS"
                      ? setProgramsDropdownOpen
                      : setMediaDropdownOpen;
                  const ref = item.name === "PROGRAMS" ? programsRef : mediaRef;

                  return (
                    <div
                      key={item.name}
                      ref={ref}
                      className="relative flex items-stretch"
                      onMouseEnter={() => setOpen(true)}
                      onMouseLeave={() => setOpen(false)}
                    >
                      <button
                        type="button"
                        onClick={() => setOpen(!isOpen)}
                        aria-expanded={isOpen}
                        className={`flex items-center gap-1 px-2 font-condensed font-bold text-[13.5px] uppercase tracking-wide whitespace-nowrap transition-colors cursor-pointer ${
                          isOpen || isActive
                            ? "bg-[#0c244d] text-white"
                            : "text-white hover:bg-[#0c244d]"
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="w-3 h-3 text-white" />
                      </button>

                      {/* Dropdown Menu */}
                      {isOpen && (
                        <div className="absolute left-0 top-full w-56 bg-[#071936] border border-slate-700 shadow-xl py-1 z-50">
                          {item.dropdownItems?.map((drop) => (
                            <Link
                              key={drop.label}
                              href={drop.href}
                              onClick={() => setOpen(false)}
                              className="block px-4 py-2 text-xs text-slate-200 hover:bg-[#E21E2B] hover:text-white font-medium transition-colors"
                            >
                              {drop.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center px-2 font-condensed font-bold text-[13.5px] uppercase tracking-wide whitespace-nowrap transition-colors ${
                      isActive
                        ? "bg-[#E21E2B] text-white"
                        : "text-white hover:bg-[#0c244d]"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Tablet (768px-1023px) Medium Screen Layout */}
          <div className="hidden sm:flex @7xl:hidden items-center justify-between w-full h-full">
            <Link
              href="/"
              className={`flex items-center gap-1.5 px-3 h-full font-condensed font-bold text-xs uppercase ${
                pathname === "/" ? "bg-[#E21E2B] text-white" : "text-white"
              }`}
            >
              <Home className="w-3.5 h-3.5" />
              <span>HOME</span>
            </Link>

            <div className="flex items-center gap-2">
              <Link
                href="/programs"
                className="text-xs font-condensed font-bold uppercase text-slate-200 hover:text-white px-2 py-1"
              >
                PROGRAMS
              </Link>
              <Link
                href="/training"
                className="text-xs font-condensed font-bold uppercase text-slate-200 hover:text-white px-2 py-1"
              >
                TRAINING
              </Link>
              <Link
                href="/voter-services"
                className="text-xs font-condensed font-bold uppercase text-slate-200 hover:text-white px-2 py-1"
              >
                VOTER SERVICES
              </Link>
              <Link
                href="/results"
                className="text-xs font-condensed font-bold uppercase text-slate-200 hover:text-white px-2 py-1"
              >
                RESULTS
              </Link>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="flex items-center gap-1 px-3 py-1 bg-[#0c244d] text-white font-condensed font-bold text-xs uppercase rounded"
              >
                <Menu className="w-3.5 h-3.5" />
                <span>MORE</span>
              </button>
            </div>
          </div>

          {/* Mobile Screen (under 640px) */}
          <div className="flex sm:hidden items-center justify-between w-full h-full px-2">
            <Link
              href="/"
              className="flex items-center gap-1.5 font-condensed font-bold text-xs uppercase text-white bg-[#E21E2B] px-3 py-1 rounded"
            >
              <Home className="w-3.5 h-3.5" />
              <span>HOME</span>
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex items-center gap-1.5 px-3 py-1 bg-white/10 hover:bg-white/20 text-white font-condensed font-bold text-xs uppercase rounded"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              <span>MENU</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="@7xl:hidden bg-[#031126] border-t border-slate-800 px-4 py-3 space-y-1 shadow-2xl animate-fadeIn">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-3 py-2 rounded text-xs font-condensed font-bold uppercase tracking-wider ${
              pathname === "/"
                ? "bg-[#E21E2B] text-white"
                : "text-slate-300 hover:bg-white/10 hover:text-white"
            }`}
          >
            HOME
          </Link>

          {navLinks.map((item) => (
            <div key={item.name}>
              <Link
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded text-xs font-condensed font-bold uppercase tracking-wider ${
                  pathname === item.href
                    ? "bg-[#E21E2B] text-white"
                    : "text-slate-300 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
              {item.dropdownItems && (
                <div className="pl-4 space-y-1 mt-0.5">
                  {item.dropdownItems.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-3 py-1.5 text-[11px] text-slate-400 hover:text-white hover:bg-white/5 rounded"
                    >
                      • {sub.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
    </div>
  );
}
