"use client";

import React, { useState } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import BottomCTA from "./BottomCTA";
import Footer from "./Footer";
import CadreRegistrationModal from "./modals/CadreRegistrationModal";
import BoothSearchModal from "./modals/BoothSearchModal";
import AuthModal from "./modals/AuthModal";
import ServiceRequestModal from "./modals/ServiceRequestModal";

interface SubPageLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export default function SubPageLayout({
  title,
  subtitle,
  children,
}: SubPageLayoutProps) {
  const [authModal, setAuthModal] = useState<{
    isOpen: boolean;
    mode: "login" | "register";
  }>({ isOpen: false, mode: "login" });

  const [cadreModalOpen, setCadreModalOpen] = useState(false);
  const [boothModalOpen, setBoothModalOpen] = useState(false);
  const [serviceModalOpen, setServiceModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F6F8]">
      {/* Header */}
      <Header
        onOpenAuth={(mode) => setAuthModal({ isOpen: true, mode })}
      />

      {/* Navigation */}
      <Navbar />

      {/* Page Title Banner */}
      <div className="bg-[#071936] text-white py-6 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl sm:text-3xl font-condensed font-black uppercase tracking-tight text-white">
            {title}
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl font-medium">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {children}
      </main>

      {/* Bottom CTA Bar */}
      <BottomCTA
        onRegisterCadre={() => setCadreModalOpen(true)}
        onFindBooth={() => setBoothModalOpen(true)}
      />

      {/* Footer */}
      <Footer />

      {/* Global Modals */}
      <AuthModal
        isOpen={authModal.isOpen}
        defaultMode={authModal.mode}
        onClose={() => setAuthModal({ ...authModal, isOpen: false })}
      />

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
