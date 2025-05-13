"use client";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";

export default function Providers({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div lang="en" suppressHydrationWarning>
      <ThemeProvider defaultTheme="light" enableSystem data-theme="light">
        <TooltipProvider>
          <Toaster />
          <Sonner />

          {children}
        </TooltipProvider>
      </ThemeProvider>
    </div>
  );
}
