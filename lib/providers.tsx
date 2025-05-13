'use client'
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



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
