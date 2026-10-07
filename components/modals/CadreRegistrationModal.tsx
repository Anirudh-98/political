"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle, Shield, Award, Send, User, Phone, Mail, MapPin } from "lucide-react";

interface CadreRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CadreRegistrationModal({
  isOpen,
  onClose,
}: CadreRegistrationModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    district: "",
    constituency: "",
    boothNumber: "",
    experience: "None / Fresh Volunteer",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [cadreId, setCadreId] = useState("");

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

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile.replace(/\D/g, ""))) {
      newErrors.mobile = "Valid 10-digit mobile number required";
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.district.trim()) newErrors.district = "District is required";
    if (!formData.constituency.trim()) newErrors.constituency = "Constituency is required";
    if (!formData.boothNumber.trim()) newErrors.boothNumber = "Booth number or area is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      const generatedId = `CADRE-${Math.floor(10000 + Math.random() * 90000)}`;
      setCadreId(generatedId);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: "",
      mobile: "",
      email: "",
      district: "",
      constituency: "",
      boothNumber: "",
      experience: "None / Fresh Volunteer",
    });
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cadre-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-xs animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-lg shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 bg-[#071936] text-white">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#E21E2B] flex items-center justify-center text-white">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <h3 id="cadre-modal-title" className="text-lg font-bold font-condensed tracking-wide uppercase">
                Join As Cadre — You Become A Leader
              </h3>
              <p className="text-xs text-slate-300">
                Min. 10 Cadres per Booth • Training • Skills • Growth
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-5 sm:p-6 max-h-[80vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-red-100 text-[#E21E2B] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-9 h-9" />
              </div>
              <h4 className="text-xl font-bold font-condensed text-slate-900 uppercase">
                Welcome to the Cadre Force!
              </h4>
              <p className="text-sm text-slate-600 mt-2">
                Your registration has been accepted into the Political Strategy Hub network.
              </p>
              <div className="mt-4 p-3 bg-slate-50 border border-slate-200 rounded-md inline-block">
                <span className="text-xs text-slate-500 font-mono block">CADRE ENROLLMENT ID</span>
                <span className="text-base font-bold text-[#E21E2B] font-mono tracking-wider">{cadreId}</span>
              </div>
              <p className="text-xs text-slate-500 mt-3">
                Your District Coordinator will reach out with your booth training schedule and identity credentials.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="mt-6 w-full py-2.5 bg-[#071936] hover:bg-[#031126] text-white font-semibold rounded text-sm transition"
              >
                Close & Return
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="bg-red-50 border border-red-200 rounded p-2.5 text-xs text-red-900 flex items-center gap-2">
                <span className="font-bold uppercase tracking-wider text-[11px] bg-[#E21E2B] text-white px-2 py-0.5 rounded">
                  Cadre Pledge
                </span>
                <span>Dedicated service to citizens and disciplined booth management.</span>
              </div>

              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded focus:border-[#E21E2B] focus:ring-1 focus:ring-[#E21E2B] outline-none"
                  />
                </div>
                {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
              </div>

              {/* Mobile & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                    <input
                      type="tel"
                      required
                      value={formData.mobile}
                      onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                      placeholder="10-digit number"
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded focus:border-[#E21E2B] focus:ring-1 focus:ring-[#E21E2B] outline-none"
                    />
                  </div>
                  {errors.mobile && <p className="text-xs text-red-600 mt-1">{errors.mobile}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="cadre@example.com"
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded focus:border-[#E21E2B] focus:ring-1 focus:ring-[#E21E2B] outline-none"
                    />
                  </div>
                  {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* District & Constituency */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    District <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      required
                      value={formData.district}
                      onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                      placeholder="e.g. Varanasi / Patna"
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded focus:border-[#E21E2B] focus:ring-1 focus:ring-[#E21E2B] outline-none"
                    />
                  </div>
                  {errors.district && <p className="text-xs text-red-600 mt-1">{errors.district}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Constituency <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.constituency}
                    onChange={(e) => setFormData({ ...formData, constituency: e.target.value })}
                    placeholder="Assembly constituency"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:border-[#E21E2B] focus:ring-1 focus:ring-[#E21E2B] outline-none"
                  />
                  {errors.constituency && <p className="text-xs text-red-600 mt-1">{errors.constituency}</p>}
                </div>
              </div>

              {/* Booth Number & Experience */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Booth Number / Area <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.boothNumber}
                    onChange={(e) => setFormData({ ...formData, boothNumber: e.target.value })}
                    placeholder="e.g. Booth 104"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:border-[#E21E2B] focus:ring-1 focus:ring-[#E21E2B] outline-none"
                  />
                  {errors.boothNumber && <p className="text-xs text-red-600 mt-1">{errors.boothNumber}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Prior Experience
                  </label>
                  <select
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded bg-white focus:border-[#E21E2B] focus:ring-1 focus:ring-[#E21E2B] outline-none"
                  >
                    <option value="None / Fresh Volunteer">Fresh Volunteer (New)</option>
                    <option value="1-2 Years Student / Youth Wing">1-2 Years Youth Wing</option>
                    <option value="3+ Years Active Grassroot Cadre">3+ Years Active Cadre</option>
                    <option value="Senior Booth Incharge">Senior Booth Incharge</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2.5 px-4 bg-[#E21E2B] hover:bg-[#c41420] text-white font-bold font-condensed tracking-wider uppercase text-sm rounded flex items-center justify-center gap-2 transition disabled:opacity-50 mt-4 shadow-sm"
              >
                {isSubmitting ? (
                  <span>Registering Cadre...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Cadre Registration</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
