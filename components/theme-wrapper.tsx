"use client";

import React from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";

export default function ThemeWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <Header />
      {children}
    </ThemeProvider>
  );
}