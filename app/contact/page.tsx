"use client";

import React, { useState } from "react";
import SubPageLayout from "@/components/SubPageLayout";
import {
  Callout,
  FeatureGrid,
  Section,
  Split,
  Statement,
} from "@/components/PageBlocks";
import {
  CheckCircle,
  GraduationCap,
  HeartHandshake,
  MapPin,
  Megaphone,
  MessageSquare,
  Send,
} from "lucide-react";

const CATEGORIES = [
  { icon: MessageSquare, title: "General Enquiries", text: "For information about our programs and services." },
  { icon: GraduationCap, title: "Program Enquiries", text: "For information about training, education, skill and employment programs." },
  { icon: HeartHandshake, title: "Public Service Support", text: "For service requests, grievances and citizen assistance." },
  { icon: MapPin, title: "Booth Support", text: "For booth-level public service and community support." },
  { icon: Megaphone, title: "Media & Communication", text: "For media-related information and communication." },
];

const ENQUIRY_TYPES = [
  "General Enquiry",
  "Program Information",
  "Training & Courses",
  "Public Service",
  "Booth Support",
  "Media",
  "Other",
];

const LABEL = "block font-condensed font-bold uppercase tracking-wide text-[14px] text-[#071936] mb-1.5";
const FIELD =
  "w-full px-3.5 py-2.5 text-[16px] text-[#0B1B3A] bg-white border border-slate-400 rounded-lg transition-colors duration-200 focus:border-[#071936] focus:ring-2 focus:ring-[#071936]/30 outline-none";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    location: "",
    enquiryType: "",
    message: "",
  });

  const update =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <SubPageLayout
      title="Contact Us"
      subtitle="Together, We Serve. Together, We Grow."
      image="/images/page-contact.webp"
    >
      <Section>
        <Split
          image="/images/sec-contact-listening.webp"
          alt="A volunteer listening to a couple and noting their request"
        >
          <div className="space-y-4">
            <Callout icon={MessageSquare}>
              <p>Have a question, suggestion, service request or community concern?</p>
            </Callout>
            <Callout icon={HeartHandshake}>
              <p>Connect with us and share your requirements.</p>
            </Callout>
          </div>
        </Split>
      </Section>

      <Section tone="tint" title="Contact Form">
        <div className="max-w-3xl bg-white border border-[#D9DEE7] border-t-4 border-t-[#E21E2B] rounded-xl shadow-[0_8px_24px_rgba(7,25,54,0.10)] p-5 sm:p-7">
          {submitted ? (
            <div className="py-6 text-center">
              <CheckCircle className="w-12 h-12 text-[#08793F] mx-auto mb-2" />
              <h3 className="font-condensed font-extrabold uppercase text-[18px] text-[#071936]">
                Request Submitted
              </h3>
              <p className="text-[15px] text-[#0B1B3A] mt-1">
                Thank you{form.name ? `, ${form.name}` : ""}. We have received your request.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-name" className={LABEL}>Name</label>
                <input id="contact-name" type="text" required autoComplete="name" value={form.name} onChange={update("name")} className={FIELD} />
              </div>
              <div>
                <label htmlFor="contact-mobile" className={LABEL}>Mobile Number</label>
                <input id="contact-mobile" type="tel" required autoComplete="tel" value={form.mobile} onChange={update("mobile")} className={FIELD} />
              </div>
              <div>
                <label htmlFor="contact-email" className={LABEL}>Email Address</label>
                <input id="contact-email" type="email" autoComplete="email" value={form.email} onChange={update("email")} className={FIELD} />
              </div>
              <div>
                <label htmlFor="contact-location" className={LABEL}>Location / Booth</label>
                <input id="contact-location" type="text" value={form.location} onChange={update("location")} className={FIELD} />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="contact-type" className={LABEL}>Select Enquiry Type</label>
                <select id="contact-type" required value={form.enquiryType} onChange={update("enquiryType")} className={FIELD}>
                  <option value="" disabled>
                    Select Enquiry Type
                  </option>
                  {ENQUIRY_TYPES.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="contact-message" className={LABEL}>Message</label>
                <textarea id="contact-message" required rows={4} value={form.message} onChange={update("message")} className={`${FIELD} resize-none`} />
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 py-3 px-7 bg-[#E21E2B] hover:bg-[#C8141F] text-white font-condensed font-bold uppercase tracking-wide text-[16px] rounded-lg transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#E21E2B]"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Request</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </Section>

      <Section title="Contact Categories">
        <FeatureGrid items={CATEGORIES} />
      </Section>

      <Statement>
        We will listen. We will act. We will inform you. We will work for you.
      </Statement>
    </SubPageLayout>
  );
}
