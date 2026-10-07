"use client";

import React, { useState } from "react";
import SubPageLayout from "@/components/SubPageLayout";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <SubPageLayout
      title="Contact Us — Political Strategy Hub"
      subtitle="Reach our central secretariat, constituency helplines, or district liaison desks."
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-5 bg-white border border-[#D9DEE7] p-6 rounded-lg shadow-xs space-y-4">
          <h2 className="text-lg font-bold font-condensed uppercase text-[#071936]">
            Constituency Secretariat
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            Our central coordinators and booth support helpdesk are available 24/7 to address citizen queries and volunteer enrollments.
          </p>

          <div className="space-y-3 pt-2 text-xs text-slate-700">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
              <span>Central Secretariat, Sector 4, Civic Tower, New Delhi, India</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Toll Free Helpline: 1800 123 4567</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-blue-600 shrink-0" />
              <span>contact@politicalstrategyhub.com</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-7 bg-white border border-[#D9DEE7] p-6 rounded-lg shadow-xs">
          <h2 className="text-lg font-bold font-condensed uppercase text-[#071936] mb-4">
            Send Message to Secretariat
          </h2>

          {submitted ? (
            <div className="p-6 text-center bg-slate-50 border border-slate-200 rounded-md">
              <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto mb-2" />
              <h3 className="font-condensed font-bold text-base text-[#071936] uppercase">
                Message Dispatched
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Thank you, {name}. Our liaison officer will review and respond shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:border-[#071936] outline-none"
                  placeholder="Your Name"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:border-[#071936] outline-none"
                    placeholder="10-digit mobile"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:border-[#071936] outline-none"
                    placeholder="name@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                  Your Message / Inquiry
                </label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded focus:border-[#071936] outline-none resize-none"
                  placeholder="Describe your inquiry or constituency feedback..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-[#071936] hover:bg-[#031126] text-white font-bold font-condensed tracking-wider uppercase text-xs rounded transition flex items-center justify-center gap-2 cursor-pointer shadow-xs"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Message</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </SubPageLayout>
  );
}
