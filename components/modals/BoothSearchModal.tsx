"use client";

import React, { useState, useEffect } from "react";
import { X, Search, MapPin, Users, Phone, Building, CheckCircle2 } from "lucide-react";

interface BoothSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BoothSearchModal({ isOpen, onClose }: BoothSearchModalProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="booth-search-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-xs animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-lg shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 bg-[#071936] text-white">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-emerald-400" />
            <div>
              <h3 id="booth-search-title" className="text-lg font-bold font-condensed tracking-wide uppercase">
                Find Your Booth & Cadre Representative
              </h3>
              <p className="text-xs text-slate-300">
                Booth Level Citizen Governance & Service Network
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="p-1 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 sm:p-6 max-h-[80vh] overflow-y-auto">
          <form onSubmit={handleSearch} className="mb-5">
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
              Search by EPIC (Voter ID), Booth Number, or Pincode
            </label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  required
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="e.g. Booth 14, 221001, or EPIC XYZ123456"
                  className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded focus:border-[#071936] outline-none"
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-[#0A8F4A] hover:bg-emerald-700 text-white font-bold font-condensed uppercase tracking-wider text-xs rounded transition"
              >
                Search
              </button>
            </div>
          </form>

          {/* Result Card */}
          <div className="space-y-3">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-md">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-2.5">
                <div>
                  <span className="text-[10px] font-bold bg-[#071936] text-white px-2 py-0.5 rounded uppercase">
                    Assigned Polling Station
                  </span>
                  <h4 className="text-sm font-bold text-slate-900 mt-1">
                    Booth No. 104 - Primary Govt School, Sector 4
                  </h4>
                </div>
                <div className="text-right">
                  <span className="text-xs font-bold text-emerald-600 flex items-center gap-1 justify-end">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Active Booth
                  </span>
                  <span className="text-[11px] text-slate-500">12 Trained Cadres</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs text-slate-600">
                <div className="flex items-center gap-1.5">
                  <Building className="w-3.5 h-3.5 text-slate-400" />
                  <span>Constituency: Central AC-18</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-slate-400" />
                  <span>Lead Cadre: Rajesh Kumar</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-slate-400" />
                  <span>Cadre Helpline: +91 98765 43210</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>Ward No: 28</span>
                </div>
              </div>
            </div>

            <div className="p-3 bg-blue-50 border border-blue-200 rounded text-xs text-blue-900">
              <strong>Need immediate doorstep assistance?</strong> Call the Cadre Helpline above or submit a direct service request through our portal.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
