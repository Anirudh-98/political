import React from "react";
import type { Metadata } from "next";
import AuthPage from "@/components/AuthPage";

export const metadata: Metadata = { title: "Register | Political Strategy Hub" };

export default function RegisterPage() {
  return <AuthPage mode="register" />;
}
