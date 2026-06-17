import type { Metadata } from "next";
import Link from "next/link";

import LandingPageHeader from "@/components/LandingPageHeader";
import ProductionGallery from "@/components/ProductionGallery";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Gallery | Team M",
  description:
    "Browse rehearsal, development, and performance photography from Team M, the new musical by Dr. Philip A. Woodmore.",
};

export default function GalleryPage() {
  return (
    <div className="bg-[#f8f5ee] text-[#151812]">
      <LandingPageHeader title="Gallery" />

      <main className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10">
        <div className="mb-10 flex flex-col gap-6 rounded-[2rem] border border-black/10 bg-white p-8 shadow-[0_18px_60px_rgba(0,0,0,0.06)] sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <p className="text-base leading-8 text-black/72 sm:text-lg">
              Moments from the rehearsal, development, and performance rooms.
            </p>
          </div>

          <Button
            asChild
            className="bg-[#151812] px-6 py-6 text-sm font-bold uppercase tracking-[0.18em] text-white hover:bg-[#0a0c09]"
          >
            <Link href="/about">About Team M</Link>
          </Button>
        </div>

        <ProductionGallery showHeader={false} />
      </main>
    </div>
  );
}
