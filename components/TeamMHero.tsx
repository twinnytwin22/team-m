import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

function TeamMHero() {
  return (
    <section className="relative flex min-h-[calc(100svh-5rem)] items-center justify-center overflow-hidden bg-[#0e120c] px-6 py-16 text-white sm:px-8 lg:px-10">
      <div className="absolute inset-0">
        <Image
          src="/FIR01385.jpg"
          alt=""
          fill
          priority
          className="object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,8,5,0.7),rgba(5,8,5,0.64),rgba(13,64,36,0.74))]/10" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <Image
          src="/teamm-logo-full@2x.png"
          alt="Team M"
          width={620}
          height={190}
          className="mx-auto h-auto w-full max-w-88 drop-shadow-[0_18px_44px_rgba(0,0,0,0.45)] sm:max-w-[28rem]"
        />

        <p className="mt-8 text-lg font-black uppercase tracking-[0.18em] text-white sm:text-2xl">
          A new musical by Phil Woodmore
        </p>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/78 sm:text-lg">
          Nine people. One support group. A story of grief, healing, identity, and connection.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            asChild
            className="bg-teamm-gold px-6 py-6 text-sm font-bold uppercase tracking-[0.18em] text-black hover:bg-[#ffb44c]"
          >
            <Link href="/about">ABOUT TEAM M.</Link>
          </Button>
          <Button
            asChild
            className="border border-white/15 bg-white/10 px-6 py-6 text-sm font-bold uppercase tracking-[0.18em] text-white hover:bg-white/15"
          >
            <Link href="/about/creative-team">Meet the Team</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default TeamMHero;
