import Newsletter from "@/components/Newsletter";
import SynopsisSection from "@/components/Synopsis";
import TeamMHero from "@/components/TeamMHero";
import Tickets from "@/components/Tickets";
import { Metadata } from "next/types";
import { metadata as Meta } from "@/lib/metadata";
export const metadata: Metadata = Meta;


export default function Home() {
  return (
    <div>
      <TeamMHero />
      <Tickets />
      <SynopsisSection />
      <Newsletter />

    </div>
  );
}
