import { Geist, Geist_Mono, Protest_Riot, Montserrat, Crimson_Text } from "next/font/google";
import "./globals.css";
import Header from "@/components/navigation/header";
import Footer from "@/components/navigation/Footer";
import Providers from "@/lib/providers";
import { ToastProvider } from "@/components/ui/toast";
import { metadata as Meta } from "@/lib/metadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const protestRiot = Protest_Riot({
  variable: "--font-protest-riot",
  subsets: ["latin"],
  weight: "400",
});


const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const crimsonText = Crimson_Text({
  variable: "--font-crimson",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata = Meta

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${protestRiot.variable} ${montserrat.variable} ${crimsonText.variable} antialiased`}
      >
        <Providers>
          <Header />
          <div className="pt-20 overflow-x-hidden">
                        <ToastProvider />

            {children}
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
