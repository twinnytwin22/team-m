import type { Metadata } from "next/types";
import Link from "next/link";

import Newsletter from "@/components/Newsletter";
import InTheNews from "@/components/InTheNews";
import ProductionGallery from "@/components/ProductionGallery";
import TeamMHero from "@/components/TeamMHero";
import TeamMVideo from "@/components/TeamMVideo";
import { Button } from "@/components/ui/button";
import { metadata as Meta } from "@/lib/metadata";

export const metadata: Metadata = Meta;

export default function Home() {
  return (
    <div className="bg-[#f8f5ee]">
      <TeamMHero />

      <section className="grid bg-white lg:grid-cols-2">
        <div className="flex items-center px-6 py-8 sm:px-10 lg:px-14 xl:px-[max(3.5rem,calc((100vw-80rem)/2))]">
          <div className="max-w-2xl">
       
            <h1 className="mt-4 text-3xl font-black uppercase leading-tight tracking-tight text-[#151812] sm:text-xl">
              A new musical set in a weekly support group in Macey, Indiana.
            </h1>
            <div className="mt-6 space-y-5 text-base leading-6 text-black/72 sm:text-sm">
              <p>Nine people gather in a church basement, each carrying their own history, grief, and questions about healing. As the sessions continue, the connections between them become harder to ignore.</p>
              <p>With a score shaped by gospel, pop, rock, and musical theater, Team M explores mental health, identity, and community in a way that stays personal and human.</p>
            </div>
            {/* <p className="mt-8 border-t border-black/10 pt-5 text-xs scale-75 font-medium uppercase leading-6 tracking-[0.1em] text-black/55">
              Original music, lyrics, and book by Dr. Philip A. Woodmore · Themes of grief, identity, mental health, and healing · Recommended for ages 11 and up
            </p> */}
            <Button asChild className="mt-4 bg-teamm-gold px-6 py-6 text-sm font-bold uppercase tracking-[0.18em] text-black hover:bg-[#ffb44c]">
              <Link href="/about/cast">Meet the Cast</Link>
            </Button>
          </div>
        </div>
        <TeamMVideo />
      </section>

      {/* <section className="px-6 py-16 sm:px-8 lg:px-10">
        <ProductionGallery id="gallery" limit={3} showHeader={false} />
      </section> */}

      <InTheNews />

      <Newsletter />
    </div>
  );
}
