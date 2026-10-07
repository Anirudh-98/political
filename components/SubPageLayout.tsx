"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import Header from "./Header";
import Navbar from "./Navbar";
import BottomCTA from "./BottomCTA";
import Footer from "./Footer";
import CadreRegistrationModal from "./modals/CadreRegistrationModal";
import BoothSearchModal from "./modals/BoothSearchModal";
import ServiceRequestModal from "./modals/ServiceRequestModal";

interface SubPageLayoutProps {
  title: string;
  subtitle: string;
  // Hero photo (subjects on the right; the left fades to navy behind the heading)
  image?: string;
  // Small gold label above the hero line (defaults to the page title)
  eyebrow?: string;
  // Extra breadcrumb level between Home and this page
  parent?: { label: string; href: string };
  children: React.ReactNode;
}

export default function SubPageLayout({
  title,
  subtitle,
  image,
  eyebrow,
  parent,
  children,
}: SubPageLayoutProps) {

  // Start every inner page at the top when arriving from another page
  const pathname = usePathname();
  useEffect(() => {
    if (!window.location.hash) window.scrollTo(0, 0);
  }, [pathname]);

  const [cadreModalOpen, setCadreModalOpen] = useState(false);
  const [boothModalOpen, setBoothModalOpen] = useState(false);
  const [serviceModalOpen, setServiceModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F6F8]">
      {/* Header */}
      <Header />

      {/* Navigation */}
      <Navbar />

      {/* Page hero: photo on the right, heading over a navy fade on the left */}
      <div className="relative bg-[#071936] text-white border-b-4 border-[#E21E2B] overflow-hidden">
        {image && (
          <>
            {/* Photo fills the right side at full clarity; only its left edge fades into the navy */}
            <div className="absolute inset-y-0 right-0 w-full md:w-[60%]">
              <Image
                src={image}
                alt=""
                fill
                priority
                sizes="(min-width: 768px) 60vw, 100vw"
                className="object-cover object-[70%_25%]"
              />
              <div
                className="absolute inset-0 hidden md:block"
                style={{
                  background:
                    "linear-gradient(90deg, #071936 0%, rgba(7,25,54,0.6) 14%, rgba(7,25,54,0) 34%)",
                }}
              />
            </div>
            {/* Phones: the text sits on top of the photo, so darken it for legibility */}
            <div className="absolute inset-0 bg-[#071936]/70 md:hidden" />
          </>
        )}

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-16 min-h-[260px] sm:min-h-[340px] lg:min-h-[400px] flex flex-col justify-center">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-1.5 text-[14px] font-medium text-slate-100">
              <li>
                <Link href="/" className="hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFD91A] rounded">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="w-4 h-4" />
              </li>
              {parent && (
                <>
                  <li>
                    <Link href={parent.href} className="hover:text-white hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFD91A] rounded">
                      {parent.label}
                    </Link>
                  </li>
                  <li aria-hidden="true">
                    <ChevronRight className="w-4 h-4" />
                  </li>
                </>
              )}
              <li aria-current="page" className="text-white font-semibold">
                {title}
              </li>
            </ol>
          </nav>

          {eyebrow ? (
            <>
              <p className="flex items-center gap-2 font-condensed font-bold uppercase tracking-[0.14em] text-[15px] text-[#FFD91A]">
                <span className="h-0.5 w-7 bg-[#FFD91A]" />
                {eyebrow}
              </p>
              <h1 className="font-condensed font-black uppercase leading-[1.03] text-[32px] sm:text-[40px] lg:text-[46px] text-white mt-2 md:max-w-[44%]">
                {title}
              </h1>
            </>
          ) : (
            <>
              <h1 className="flex items-center gap-2 font-condensed font-bold uppercase tracking-[0.14em] text-[15px] text-[#FFD91A]">
                <span className="h-0.5 w-7 bg-[#FFD91A]" />
                {title}
              </h1>
              <p className="font-condensed font-black uppercase leading-[1.03] text-[32px] sm:text-[40px] lg:text-[46px] text-white mt-2 md:max-w-[44%]">
                {subtitle}
              </p>
            </>
          )}
        </div>
      </div>

      {/* Main content: pages render their own full-width section bands */}
      <main className="flex-1">{children}</main>

      {/* Bottom CTA Bar */}
      <BottomCTA
        onRegisterCadre={() => setCadreModalOpen(true)}
        onFindBooth={() => setBoothModalOpen(true)}
      />

      {/* Footer */}
      <Footer />

      {/* Global Modals */}

      <CadreRegistrationModal
        isOpen={cadreModalOpen}
        onClose={() => setCadreModalOpen(false)}
      />

      <BoothSearchModal
        isOpen={boothModalOpen}
        onClose={() => setBoothModalOpen(false)}
      />

      <ServiceRequestModal
        isOpen={serviceModalOpen}
        onClose={() => setServiceModalOpen(false)}
      />
    </div>
  );
}
