"use client";

import React, { useState, useEffect } from "react";
import { X, CheckCircle, FileText, Send, AlertCircle, Phone, MapPin, User } from "lucide-react";

interface ServiceRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
}

export default function ServiceRequestModal({
  isOpen,
  onClose,
  initialCategory = "General Public Service",
}: ServiceRequestModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    location: "",
    booth: "",
    category: initialCategory,
    description: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [trackingId, setTrackingId] = useState("");

  useEffect(() => {
    if (initialCategory) {
      setFormData((prev) => ({ ...prev, category: initialCategory }));
    }
  }, [initialCategory]);

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
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.mobile.replace(/\D/g, ""))) {
      newErrors.mobile = "Please enter a valid 10-digit mobile number";
    }
    if (!formData.location.trim()) newErrors.location = "Constituency/Village/Area is required";
    if (!formData.category.trim()) newErrors.category = "Please select a category";
    if (!formData.description.trim() || formData.description.length < 10) {
      newErrors.description = "Please describe your need with at least 10 characters";
    }
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
      const generatedId = `PSH-REQ-${Math.floor(100000 + Math.random() * 900000)}`;
      setTrackingId(generatedId);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      name: "",
      mobile: "",
      location: "",
      booth: "",
      category: initialCategory,
      description: "",
    });
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
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
            <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center text-white">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 id="service-modal-title" className="text-lg font-bold font-condensed tracking-wide uppercase">
                Post a Request / Service Need
              </h3>
              <p className="text-xs text-slate-300">
                Tell Us Your Need, We Will Reach You
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

        {/* Content */}
        <div className="p-5 sm:p-6 max-h-[80vh] overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-9 h-9" />
              </div>
              <h4 className="text-xl font-bold font-condensed text-slate-900 uppercase">
                Service Request Submitted!
              </h4>
              <p className="text-sm text-slate-600 mt-2">
                Your request has been routed to the assigned booth cadre.
              </p>
              <div className="mt-4 p-3 bg-slate-50 border border-slate-200 rounded-md inline-block">
                <span className="text-xs text-slate-500 font-mono block">TRACKING ID</span>
                <span className="text-base font-bold text-[#071936] font-mono tracking-wider">{trackingId}</span>
              </div>
              <p className="text-xs text-slate-500 mt-3">
                You will receive an SMS confirmation with the contact details of your local booth representative.
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
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="bg-teal-50 border border-teal-200 rounded p-3 text-xs text-teal-800">
                <strong>Citizen Guarantee:</strong> Every submitted service request is tracked with automated booth cadre assignment and verification.
              </div>

              {/* Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded focus:border-teal-600 focus:ring-1 focus:ring-teal-600 outline-none"
                  />
                </div>
                {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
              </div>

              {/* Mobile */}
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
                    placeholder="10-digit mobile number"
                    className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded focus:border-teal-600 focus:ring-1 focus:ring-teal-600 outline-none"
                  />
                </div>
                {errors.mobile && <p className="text-xs text-red-600 mt-1">{errors.mobile}</p>}
              </div>

              {/* Location & Booth */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Location / Village <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="Ward / Village / Town"
                      className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded focus:border-teal-600 focus:ring-1 focus:ring-teal-600 outline-none"
                    />
                  </div>
                  {errors.location && <p className="text-xs text-red-600 mt-1">{errors.location}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Booth Number (If known)
                  </label>
                  <input
                    type="text"
                    value={formData.booth}
                    onChange={(e) => setFormData({ ...formData, booth: e.target.value })}
                    placeholder="e.g. Booth 42"
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:border-teal-600 focus:ring-1 focus:ring-teal-600 outline-none"
                  />
                </div>
              </div>

              {/* Category */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Service Category <span className="text-red-500">*</span>
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded bg-white focus:border-teal-600 focus:ring-1 focus:ring-teal-600 outline-none"
                >
                  <option value="Education Support">Education Support & Admissions</option>
                  <option value="Skill Development">Skill Development & Courses</option>
                  <option value="Employment Assistance">Employment & Job Support</option>
                  <option value="Women Empowerment">Women Empowerment & Self Help</option>
                  <option value="Health Care">Healthcare & Medical Relief Camp</option>
                  <option value="Agriculture Support">Agriculture & Farmer Subsidy</option>
                  <option value="Senior Citizen Care">Senior Citizen Pension & Care</option>
                  <option value="Civic Grievance">Civic Grievance (Roads, Water, Electricity)</option>
                  <option value="Other Assistance">Other Citizen Need</option>
                </select>
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Describe Your Need <span className="text-red-500">*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Provide specific details so our cadre can assist you effectively..."
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:border-teal-600 focus:ring-1 focus:ring-teal-600 outline-none resize-none"
                />
                {errors.description && <p className="text-xs text-red-600 mt-1">{errors.description}</p>}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2.5 px-4 bg-teal-600 hover:bg-teal-700 text-white font-bold font-condensed tracking-wider uppercase text-sm rounded flex items-center justify-center gap-2 transition disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Submitting Request...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Request</span>
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
