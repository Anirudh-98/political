import type { Metadata } from "next";
import { Barlow_Semi_Condensed, Inter } from "next/font/google";
import "./globals.css";

const display = Barlow_Semi_Condensed({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "POLITICAL STRATEGY HUB | Strategy Today • Service Always • Victory Together",
  description:
    "Institutional political strategy, cadre training, citizen services, constituency development, and real-time public impact dashboard.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen bg-[#F4F6F8] text-[#1F2937] flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
