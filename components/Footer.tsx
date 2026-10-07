import React from "react";
import Link from "next/link";
import { Globe, Shield, ExternalLink } from "lucide-react";
import Logo from "./Logo";

interface FooterProps {
  // Homepage shows only the slim legal bar, as in the reference design
  compact?: boolean;
}

export default function Footer({ compact = false }: FooterProps) {
  const footerLinks = [
    { label: "About Us", href: "/about" },
    { label: "Our Vision", href: "/vision" },
    { label: "Programs", href: "/programs" },
    { label: "Training & Courses", href: "/training" },
    { label: "Voter Services", href: "/voter-services" },
    { label: "Booth Zone", href: "/booth-zone" },
    { label: "Results & Impact", href: "/results" },
    { label: "Media", href: "/media" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="bg-[#031126] text-white border-t border-slate-800 text-xs">
      {/* Top Institutional Info & Navigation */}
      {!compact && (
      <div className="site-container px-3 sm:px-4 pt-6 pb-5">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          {/* Logo & Tagline */}
          <div className="md:col-span-5">
            <Logo variant="light" showTagline={true} />
            <p className="mt-2 text-xs text-slate-400 max-w-sm leading-relaxed">
              Empowering citizens through grassroot political strategy, booth-level cadre leadership, and transparent public welfare delivery across all constituencies.
            </p>
          </div>

          {/* Nav Links Grid */}
          <div className="md:col-span-7">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 justify-start md:justify-end">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="font-condensed font-bold uppercase tracking-wider text-slate-300 hover:text-white hover:underline transition-colors text-[11.5px]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      )}

      {/* Bottom Copyright, Legal & Web Domains Bar matching reference image */}
      <div className={`bg-[#020b18] border-t border-slate-800/80 px-3 sm:px-4 ${compact ? "py-2" : "py-2.5"}`}>
        <div className="site-container flex flex-col md:flex-row items-center justify-between gap-2 text-[13px] sm:text-[14px] font-medium text-white text-center">
          {/* Copyright */}
          <div>
            <span>© 2024 Political Strategy Hub. All Rights Reserved.</span>
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-3">
            <Link href="/about#privacy" className="hover:text-white hover:underline">
              Privacy Policy
            </Link>
            <span className="text-slate-400">|</span>
            <Link href="/about#terms" className="hover:text-white hover:underline">
              Terms & Conditions
            </Link>
            <span className="text-slate-400">|</span>
            <Link href="/about#disclaimer" className="hover:text-white hover:underline">
              Disclaimer
            </Link>
          </div>

          {/* Official Domains */}
          <div className="flex items-center gap-1.5 text-white">
            <Globe className="w-4 h-4 text-white" />
            <span className="text-[13px] sm:text-[14px] break-words min-w-0">
              www.politicalstrategyhub.com | www.politicalstrategyhub.in | www.politicalstrategyhub.org
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
