"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CircleCheck,
  ClipboardList,
  GraduationCap,
  Landmark,
  Eye,
  EyeOff,
  Lock,
  Mail,
  MapPin,
  Megaphone,
  ShieldCheck,
  User,
  UserPlus,
  Users,
  type LucideIcon,
} from "lucide-react";
import Logo from "./Logo";

type Mode = "login" | "register";

interface Benefit {
  icon: LucideIcon;
  text: string;
}

const CONTENT: Record<
  Mode,
  {
    image: string;
    eyebrow: string;
    heading: string;
    text: string;
    benefitsTitle: string;
    benefits: Benefit[];
    formTitle: string;
    formText: string;
    submit: string;
    done: string;
    switchText: string;
    switchLabel: string;
    switchHref: string;
  }
> = {
  register: {
    image: "/images/auth-register.webp",
    eyebrow: "Join Political Strategy Hub",
    heading: "People First. Service Always.",
    text: "Create your account to stay connected with the programs, training and public services available in your booth.",
    benefitsTitle: "Why you should register",
    benefits: [
      { icon: ClipboardList, text: "Post service requests and grievances from your booth" },
      { icon: GraduationCap, text: "Explore training, courses and skill opportunities" },
      { icon: Landmark, text: "Get guidance on government schemes and voter services" },
      { icon: Users, text: "Join as a volunteer or booth cadre" },
      { icon: Megaphone, text: "Stay informed with program and media updates" },
    ],
    formTitle: "Create your account",
    formText: "Register with your email and a password to get started.",
    submit: "Register Now",
    done: "Registration Complete",
    switchText: "Already registered?",
    switchLabel: "Login",
    switchHref: "/login",
  },
  login: {
    image: "/images/auth-login.webp",
    eyebrow: "Welcome Back",
    heading: "Together, We Serve. Together, We Grow.",
    text: "Login to continue with your services, programs and booth activities.",
    benefitsTitle: "Why you should login",
    benefits: [
      { icon: ClipboardList, text: "Follow up on your service requests" },
      { icon: BookOpen, text: "Continue with your training and courses" },
      { icon: MapPin, text: "Find your booth information and support" },
      { icon: Megaphone, text: "Stay updated with programs and media" },
    ],
    formTitle: "Login to your account",
    formText: "Enter your email and password to continue.",
    submit: "Login",
    done: "Logged In Successfully",
    switchText: "New here?",
    switchLabel: "Register",
    switchHref: "/register",
  },
};

const ROLES = ["Voter / Citizen", "Booth Cadre", "Constituency Coordinator"];

const LABEL =
  "block font-condensed font-bold uppercase tracking-wide text-[14px] text-[#071936] mb-1.5";
const FIELD =
  "w-full py-3 pr-3.5 text-[16px] text-[#0B1B3A] bg-white border border-slate-400 rounded-lg transition-colors duration-200 focus:border-[#071936] focus:ring-2 focus:ring-[#071936]/30 outline-none";

export default function AuthPage({ mode }: { mode: Mode }) {
  const content = CONTENT[mode];
  const isRegister = mode === "register";
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState(ROLES[0]);
  const [done, setDone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDone(true);
    window.setTimeout(() => router.push("/"), 1500);
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-white">
      {/* Left: photo with the reasons to register / login */}
      <aside className="relative hidden lg:flex flex-col justify-between overflow-hidden bg-[#071936] text-white p-10 xl:p-14">
        <Image
          src={content.image}
          alt=""
          fill
          priority
          sizes="50vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(7,25,54,0.55) 0%, rgba(7,25,54,0.35) 30%, rgba(7,25,54,0.92) 68%, #071936 100%)",
          }}
        />

        <div className="relative">
          <Logo variant="light" />
        </div>

        <div className="relative max-w-xl">
          <p className="flex items-center gap-2 font-condensed font-bold uppercase tracking-[0.14em] text-[15px] text-[#FFD91A]">
            <span className="h-0.5 w-7 bg-[#FFD91A]" />
            {content.eyebrow}
          </p>
          <h1 className="font-condensed font-black uppercase leading-[1.05] text-[38px] xl:text-[46px] mt-2">
            {content.heading}
          </h1>
          <p className="mt-3 text-[17px] leading-relaxed text-white">{content.text}</p>

          <h2 className="mt-7 font-condensed font-extrabold uppercase tracking-wide text-[18px] text-[#FFD91A]">
            {content.benefitsTitle}
          </h2>
          <ul className="mt-3 space-y-2.5">
            {content.benefits.map(({ icon: Icon, text }) => (
              <li
                key={text}
                className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-4 py-3"
              >
                <span className="flex w-9 h-9 shrink-0 items-center justify-center rounded-lg bg-[#E21E2B]">
                  <Icon className="w-[18px] h-[18px]" aria-hidden="true" />
                </span>
                <span className="text-[16px] font-medium leading-snug">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Right: the form */}
      <main className="flex flex-col bg-[#EEF2F7]">
        <div className="flex items-center justify-between gap-4 px-5 sm:px-8 py-5">
          <div className="lg:hidden">
            <Logo showTagline={false} />
          </div>
          <Link
            href="/"
            className="ml-auto inline-flex items-center gap-2 rounded-lg px-3 py-2 text-[15px] font-semibold text-[#071936] transition-colors duration-200 hover:bg-white cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#071936]"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Back to Home
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-center px-5 sm:px-8 pb-10">
          <div className="w-full max-w-md">
            <div className="bg-white border border-[#D9DEE7] border-t-4 border-t-[#E21E2B] rounded-2xl shadow-[0_12px_32px_rgba(7,25,54,0.12)] p-6 sm:p-8">
              {done ? (
                <div className="py-8 text-center" role="status">
                  <CircleCheck className="w-14 h-14 text-[#08793F] mx-auto mb-3" aria-hidden="true" />
                  <h2 className="font-condensed font-extrabold uppercase text-[22px] text-[#071936]">
                    {content.done}
                  </h2>
                  <p className="mt-1 text-[15px] text-[#0B1B3A]">Taking you to the homepage…</p>
                </div>
              ) : (
                <>
                  <span className="flex w-12 h-12 items-center justify-center rounded-xl bg-[#071936] text-white">
                    {isRegister ? (
                      <UserPlus className="w-6 h-6" aria-hidden="true" />
                    ) : (
                      <User className="w-6 h-6" aria-hidden="true" />
                    )}
                  </span>
                  <h2 className="mt-4 font-condensed font-extrabold uppercase leading-tight text-[28px] text-[#071936]">
                    {content.formTitle}
                  </h2>
                  <p className="mt-1 text-[16px] text-[#0B1B3A]">{content.formText}</p>

                  <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    {isRegister && (
                      <div>
                        <label htmlFor="auth-name" className={LABEL}>
                          Full Name
                        </label>
                        <div className="relative">
                          <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-slate-500" aria-hidden="true" />
                          <input
                            id="auth-name"
                            type="text"
                            required
                            autoComplete="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className={`${FIELD} pl-11`}
                          />
                        </div>
                      </div>
                    )}

                    <div>
                      <label htmlFor="auth-email" className={LABEL}>
                        Email Address
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-slate-500" aria-hidden="true" />
                        <input
                          id="auth-email"
                          type="email"
                          required
                          autoComplete="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className={`${FIELD} pl-11`}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="auth-password" className={LABEL}>
                        Password
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-[18px] h-[18px] text-slate-500" aria-hidden="true" />
                        <input
                          id="auth-password"
                          type={showPassword ? "text" : "password"}
                          required
                          minLength={isRegister ? 8 : undefined}
                          autoComplete={isRegister ? "new-password" : "current-password"}
                          aria-describedby={isRegister ? "auth-password-hint" : undefined}
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className={`${FIELD} pl-11 !pr-12`}
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword((shown) => !shown)}
                          aria-label={showPassword ? "Hide password" : "Show password"}
                          aria-pressed={showPassword}
                          className="absolute right-1.5 top-1/2 -translate-y-1/2 flex w-10 h-10 items-center justify-center rounded-lg text-slate-600 transition-colors duration-200 hover:bg-slate-100 hover:text-[#071936] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#071936]"
                        >
                          {showPassword ? (
                            <EyeOff className="w-[18px] h-[18px]" aria-hidden="true" />
                          ) : (
                            <Eye className="w-[18px] h-[18px]" aria-hidden="true" />
                          )}
                        </button>
                      </div>
                      {isRegister && (
                        <p id="auth-password-hint" className="mt-1.5 text-[14px] text-[#0B1B3A]">
                          Use at least 8 characters.
                        </p>
                      )}
                    </div>

                    {isRegister && (
                      <div>
                        <label htmlFor="auth-role" className={LABEL}>
                          Register As
                        </label>
                        <select
                          id="auth-role"
                          value={role}
                          onChange={(e) => setRole(e.target.value)}
                          className={`${FIELD} pl-3.5`}
                        >
                          {ROLES.map((item) => (
                            <option key={item} value={item}>
                              {item}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#E21E2B] py-3.5 font-condensed font-bold uppercase tracking-wide text-[17px] text-white transition-colors duration-200 hover:bg-[#C8141F] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#E21E2B]"
                    >
                      {content.submit}
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </button>
                  </form>

                  <p className="mt-5 text-center text-[16px] text-[#0B1B3A]">
                    {content.switchText}{" "}
                    <Link
                      href={content.switchHref}
                      className="font-bold text-[#1D46C4] underline underline-offset-2 hover:text-[#071936] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#071936] rounded"
                    >
                      {content.switchLabel}
                    </Link>
                  </p>
                </>
              )}
            </div>

            <p className="mt-4 flex items-center justify-center gap-2 text-[14px] font-medium text-[#0B1B3A]">
              <ShieldCheck className="w-4 h-4 text-[#08793F]" aria-hidden="true" />
              Your email is used only to identify your account.
            </p>

            {/* Phones and tablets: the reasons sit under the form, since the photo panel is hidden */}
            <div className="lg:hidden mt-8">
              <h2 className="font-condensed font-extrabold uppercase tracking-wide text-[18px] text-[#071936]">
                {content.benefitsTitle}
              </h2>
              <ul className="mt-3 space-y-2.5">
                {content.benefits.map(({ icon: Icon, text }) => (
                  <li
                    key={text}
                    className="flex items-center gap-3 rounded-xl border border-[#D9DEE7] bg-white px-4 py-3"
                  >
                    <span className="flex w-9 h-9 shrink-0 items-center justify-center rounded-lg bg-[#071936] text-white">
                      <Icon className="w-[18px] h-[18px]" aria-hidden="true" />
                    </span>
                    <span className="text-[15px] font-semibold leading-snug text-[#071936]">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
