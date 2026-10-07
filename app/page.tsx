"use client";

import React, { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import QuickActions from "@/components/QuickActions";
import InfoGrid from "@/components/InfoGrid";
import ImpactStats from "@/components/ImpactStats";
import BottomCTA from "@/components/BottomCTA";
import Footer from "@/components/Footer";

// Modals
import VideoModal from "@/components/modals/VideoModal";
import ServiceRequestModal from "@/components/modals/ServiceRequestModal";
import CadreRegistrationModal from "@/components/modals/CadreRegistrationModal";
import BoothSearchModal from "@/components/modals/BoothSearchModal";
import ActionDetailsModal from "@/components/modals/ActionDetailsModal";

import { VideoItem, QuickActionItem } from "@/data/mockData";

// On landscape desktop/tablet screens the homepage never scrolls: the whole layout is zoomed
// so its height always equals the window height, while its width stays fluid (never narrower
// than the design width). Phones, small tablets and portrait screens get a normal scrolling page.
const FIT_MIN_VIEWPORT = 1024;
const FIT_MIN_ASPECT = 1.25;
const FIT_DESIGN_HEIGHT = 900;
const FIT_DESIGN_MIN_WIDTH = 1280;
const FIT_MAX_PASSES = 6;

export default function HomePage() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const fit = () => {
      // clientHeight excludes any horizontal scrollbar, so the bottom edge is never covered
      const w = window.innerWidth;
      const h = Math.min(window.innerHeight, document.documentElement.clientHeight);
      if (w < FIT_MIN_VIEWPORT || w / h < FIT_MIN_ASPECT) {
        el.style.removeProperty("zoom");
        el.style.removeProperty("height");
        delete el.dataset.fit;
        return;
      }
      el.dataset.fit = "on";
      // Start from the design scale, then shrink until the content no longer overflows.
      // A smaller scale gives the layout more width, so its natural height only goes down.
      let scale = Math.min(h / FIT_DESIGN_HEIGHT, w / FIT_DESIGN_MIN_WIDTH);
      for (let pass = 0; pass < FIT_MAX_PASSES; pass++) {
        el.style.setProperty("zoom", String(scale));
        el.style.height = `${h / scale}px`;
        const overflow = el.scrollHeight / el.clientHeight;
        if (overflow <= 1.002) break;
        scale /= overflow;
      }
    };

    fit();
    window.addEventListener("resize", fit);
    document.fonts?.ready.then(fit);
    // Re-fit when late-loading fonts or images change the content height
    const main = el.querySelector("main");
    const observer = new ResizeObserver(fit);
    if (main) observer.observe(main);
    return () => {
      window.removeEventListener("resize", fit);
      observer.disconnect();
    };
  }, []);

  // Modal states
  const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);
  const [serviceModalOpen, setServiceModalOpen] = useState(false);
  const [serviceCategory, setServiceCategory] = useState("General Public Service");
  const [cadreModalOpen, setCadreModalOpen] = useState(false);
  const [boothModalOpen, setBoothModalOpen] = useState(false);
  const [actionDetailType, setActionDetailType] = useState<"offers" | "vouchers" | "services" | null>(null);

  // Handle Quick Action card clicks
  const handleQuickAction = (key: QuickActionItem["actionKey"]) => {
    switch (key) {
      case "booths":
        setBoothModalOpen(true);
        break;
      case "offers":
        setActionDetailType("offers");
        break;
      case "vouchers":
        setActionDetailType("vouchers");
        break;
      case "services":
        setActionDetailType("services");
        break;
      case "serviceRequest":
        setServiceCategory("General Public Service");
        setServiceModalOpen(true);
        break;
      case "results":
        const el = document.getElementById("impact-stats-section");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        } else {
          window.location.href = "/results";
        }
        break;
    }
  };

  const handleSelectVoterCategory = (category: string) => {
    setServiceCategory(category);
    setServiceModalOpen(true);
  };

  return (
    <div
      ref={rootRef}
      className="site-full min-h-screen flex flex-col bg-[#F4F6F8]"
    >
      {/* 1. TOP HEADER */}
      <Header />

      {/* 2. PRIMARY NAVIGATION BAR */}
      <Navbar />

      {/* 3. HERO / MAIN FEATURE AREA */}
      <main className="flex-1 flex flex-col">
        <HeroSection onOpenVideo={(video) => setActiveVideo(video)} />

        {/* 4. QUICK ACTION SERVICES (6 EQUAL CARDS) */}
        <QuickActions onActionClick={handleQuickAction} />

        {/* 5. INFORMATION GRID (2 ROWS: VOTER BENEFITS, CADRE STRENGTH, YOUTUBE, HOW IT WORKS, PROMISES, VIDEOS) */}
        <InfoGrid
          onOpenVideo={(video) => setActiveVideo(video)}
          onJoinCadre={() => setCadreModalOpen(true)}
          onSelectVoterCategory={handleSelectVoterCategory}
        />

        {/* 6. STATISTICS / IMPACT BAR */}
        <div id="impact-stats-section">
          <ImpactStats />
        </div>

        {/* 7. BOTTOM CALL-TO-ACTION BAR */}
        <BottomCTA
          onRegisterCadre={() => setCadreModalOpen(true)}
          onFindBooth={() => setBoothModalOpen(true)}
        />
      </main>

      {/* 8. FOOTER */}
      <Footer compact />

      {/* INTERACTIVE MODALS */}
      <VideoModal
        video={activeVideo}
        isOpen={!!activeVideo}
        onClose={() => setActiveVideo(null)}
      />

      <ServiceRequestModal
        isOpen={serviceModalOpen}
        onClose={() => setServiceModalOpen(false)}
        initialCategory={serviceCategory}
      />

      <CadreRegistrationModal
        isOpen={cadreModalOpen}
        onClose={() => setCadreModalOpen(false)}
      />

      <BoothSearchModal
        isOpen={boothModalOpen}
        onClose={() => setBoothModalOpen(false)}
      />

      <ActionDetailsModal
        type={actionDetailType}
        isOpen={!!actionDetailType}
        onClose={() => setActionDetailType(null)}
        onOpenServiceRequest={(cat) => {
          setServiceCategory(cat);
          setServiceModalOpen(true);
        }}
      />

    </div>
  );
}
