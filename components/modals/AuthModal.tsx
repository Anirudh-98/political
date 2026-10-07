"use client";

import React, { useState, useEffect } from "react";
import { X, Lock, Phone, User, CheckCircle, ShieldCheck } from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultMode?: "login" | "register";
}

export default function AuthModal({
  isOpen,
  onClose,
  defaultMode = "login",
}: AuthModalProps) {
  const [mode, setMode] = useState<"login" | "register">(defaultMode);
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("Voter / Citizen");
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    setMode(defaultMode);
  }, [defaultMode]);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      onClose();
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="auth-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-xs animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md bg-white rounded-lg shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Tabs */}
        <div className="flex bg-[#071936] text-white">
          <button
            type="button"
            onClick={() => setMode("login")}
            className={`flex-1 py-3.5 text-center font-bold font-condensed tracking-wider uppercase text-sm border-b-2 transition ${
              mode === "login"
                ? "border-[#E21E2B] text-white bg-white/5"
                : "border-transparent text-slate-400 hover:text-white"
            }`}
          >
            Portal Login
          </button>
          <button
            type="button"
            onClick={() => setMode("register")}
            className={`flex-1 py-3.5 text-center font-bold font-condensed tracking-wider uppercase text-sm border-b-2 transition ${
              mode === "register"
                ? "border-emerald-500 text-white bg-white/5"
                : "border-transparent text-slate-400 hover:text-white"
            }`}
          >
            Citizen Register
          </button>
          <button
            onClick={onClose}
            aria-label="Close"
            className="px-3 text-slate-400 hover:text-white transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 sm:p-6">
          {isSuccess ? (
            <div className="text-center py-6">
              <CheckCircle className="w-14 h-14 text-emerald-600 mx-auto mb-3" />
              <h4 className="text-lg font-bold font-condensed uppercase text-slate-900">
                {mode === "login" ? "Logged in Successfully" : "Registration Complete"}
              </h4>
              <p className="text-xs text-slate-600 mt-1">
                Redirecting to your Strategy Hub dashboard...
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="text-center mb-3">
                <h3
                  id="auth-modal-title"
                  className="text-base font-bold text-slate-900 font-condensed uppercase tracking-wide"
                >
                  {mode === "login"
                    ? "Access Strategy & Cadre Portal"
                    : "Create Citizen / Cadre Account"}
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Secure OTP verification for authenticated access
                </p>
              </div>

              {mode === "register" && (
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded focus:border-navy-900 outline-none"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Mobile Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="10-digit mobile number"
                    className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded focus:border-navy-900 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Access Role
                </label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded bg-white outline-none"
                >
                  <option value="Voter / Citizen">Voter / Citizen (Access Benefits & Requests)</option>
                  <option value="Booth Cadre">Booth Cadre (Field Training & Reporting)</option>
                  <option value="Constituency Coordinator">Constituency Coordinator (Analytics)</option>
                </select>
              </div>

              <button
                type="submit"
                className={`w-full py-2.5 font-bold font-condensed tracking-wider uppercase text-sm text-white rounded transition shadow-sm ${
                  mode === "login"
                    ? "bg-[#071936] hover:bg-[#031126]"
                    : "bg-[#0A8F4A] hover:bg-emerald-700"
                }`}
              >
                {mode === "login" ? "Get Login OTP" : "Register Now"}
              </button>

              <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500 pt-2 border-t border-slate-100">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Encrypted & Verified Citizen Network</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
