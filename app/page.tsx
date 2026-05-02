import Newsletter from "@/components/Newsletter";
import SynopsisSection from "@/components/Synopsis";
import TeamMHero from "@/components/TeamMHero";
import Tickets from "@/components/Tickets";
import { Metadata } from "next/types";
import { metadata as Meta } from "@/lib/metadata";
import PhotoSlider1 from "@/components/sliders/PhotoSlider1";
export const metadata: Metadata = Meta;


export default function Home() {
  return (
    <div>
      <TeamMHero />
      <Tickets />
      <SynopsisSection />
      <PhotoSlider1 className="bg-white pt-4"/>
      <Newsletter />

    </div>
  );
}
