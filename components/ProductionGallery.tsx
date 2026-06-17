"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { GalleryImage, productionGallery } from "@/lib/gallery";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

type ProductionGalleryProps = {
  className?: string;
  ctaHref?: string;
  ctaLabel?: string;
  id?: string;
  images?: GalleryImage[];
  limit?: number;
  showHeader?: boolean;
  title?: string;
};

export default function ProductionGallery({
  className,
  ctaHref,
  ctaLabel,
  id,
  images = productionGallery,
  limit,
  showHeader = true,
  title = "Gallery",
}: ProductionGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const visibleImages = typeof limit === "number" ? images.slice(0, limit) : images;

  const openImage = (index: number) => {
    setSelectedIndex(index);
  };

  const shiftImage = (direction: -1 | 1) => {
    if (selectedIndex === null || !visibleImages.length) {
      return;
    }

    const nextIndex = (selectedIndex + direction + visibleImages.length) % visibleImages.length;
    setSelectedIndex(nextIndex);
  };

  const selectedImage = selectedIndex === null ? null : visibleImages[selectedIndex];

  return (
    <section id={id} className={cn(className)}>
      {showHeader && (
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tight text-[#151812] sm:text-4xl">
              {title}
            </h2>
          </div>

          {ctaHref && ctaLabel && (
            <Button
              asChild
              className="bg-[#151812] px-6 py-6 text-sm font-bold uppercase tracking-[0.18em] text-white hover:bg-[#0c0d0a]"
            >
              <Link href={ctaHref}>
                {ctaLabel}
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visibleImages.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => openImage(index)}
            className="group overflow-hidden rounded-[1.5rem] border border-black/10 bg-white shadow-[0_16px_40px_rgba(0,0,0,0.08)] transition-transform duration-200 hover:-translate-y-0.5"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={1400}
              height={900}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="h-[260px] w-full object-cover transition duration-300 group-hover:scale-[1.02]"
            />
          </button>
        ))}
      </div>

      <Dialog open={selectedIndex !== null} onOpenChange={(open) => !open && setSelectedIndex(null)}>
        {selectedImage && (
          <DialogContent className="max-w-6xl border border-white/10 bg-[#11130f] p-0 text-white sm:rounded-[1.5rem]">
            <div className="relative bg-black">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={1800}
                height={1200}
                className="max-h-[82vh] w-full object-contain"
              />

              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/80 to-transparent p-4">
                <Button
                  type="button"
                  onClick={() => shiftImage(-1)}
                  className="bg-white/10 text-white hover:bg-white/15"
                >
                  <ChevronLeft className="size-4" />
                  Previous
                </Button>
                <Button
                  type="button"
                  onClick={() => shiftImage(1)}
                  className="bg-white/10 text-white hover:bg-white/15"
                >
                  Next
                  <ChevronRight className="size-4" />
                </Button>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
