import Newsletter from "@/components/Newsletter";
import SynopsisSection from "@/components/Synopsis";
import TeamMHero from "@/components/TeamMHero";
import Tickets from "@/components/Tickets";

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
