import type { Metadata } from "next/types";
import Link from "next/link";

import Newsletter from "@/components/Newsletter";
import ProductionGallery from "@/components/ProductionGallery";
import TeamMHero from "@/components/TeamMHero";
import { Button } from "@/components/ui/button";
import { metadata as Meta } from "@/lib/metadata";

export const metadata: Metadata = Meta;

export default function Home() {
  return (
    <div className="bg-[#f8f5ee]">
      <TeamMHero />

      <section className="px-6 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teamm-green">
              Thank You
            </p>
            <h1 className="mt-4 text-3xl font-black uppercase leading-tight tracking-tight text-[#151812] sm:text-4xl">
              Thank you for spending time with Team M.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-black/72 sm:text-lg">
              To every audience member, artist, collaborator, and supporter who has helped carry
              this story: thank you. Team M asks what becomes possible when people show up honestly
              for one another, and we are grateful you have shown up with us.
            </p>
            <Button
              asChild
              className="mt-8 bg-teamm-gold px-6 py-6 text-sm font-bold uppercase tracking-[0.18em] text-black hover:bg-[#ffb44c]"
            >
              <Link href="/about">About the Show</Link>
            </Button>
          </div>

          <ProductionGallery id="gallery" limit={3} showHeader={false} />
        </div>
      </section>

      <Newsletter />
    </div>
  );
}
