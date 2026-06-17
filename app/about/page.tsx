import LandingPageHeader from "@/components/LandingPageHeader";
import ProductionGallery from "@/components/ProductionGallery";
import SocialRow from "@/components/SocialRow";

const details = [
  "Original music, lyrics, and book by Dr. Philip A. Woodmore",
  "Themes of grief, identity, mental health, and healing",
  "Recommended for ages 11 and up",
];

export default function AboutPage() {
  return (
    <div className="bg-[#f8f5ee] text-[#151812]">
      <LandingPageHeader title="About Team M." />

      <main className="mx-auto max-w-7xl space-y-16 px-6 py-16 sm:px-8 lg:px-10">
        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-[0_18px_60px_rgba(0,0,0,0.06)]">
            <h1 className="text-3xl font-black uppercase tracking-tight sm:text-4xl">
              Team M is a new musical set in a weekly support group in Macey, Indiana.
            </h1>
            <div className="mt-6 space-y-6 text-base leading-8 text-black/72 sm:text-lg">
              <p>
                Nine people gather in a church basement, each carrying their own history, grief, and
                questions about healing. As the sessions continue, the connections between them become
                harder to ignore.
              </p>
              <p>
                With a score shaped by gospel, pop, rock, and musical theater, Team M explores mental
                health, identity, and community in a way that stays personal and human.
              </p>
              <p>
                Team M continues to move forward while remaining grounded in the work on stage and
                in the room.
              </p>
            </div>
          </article>

          <aside className="rounded-[2rem] border border-black/10 bg-[#151812] p-8 text-white shadow-[0_18px_60px_rgba(0,0,0,0.12)]">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teamm-gold">
              Details
            </p>
            <ul className="mt-6 space-y-4 text-base leading-8 text-white/76">
              {details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>

            <div className="mt-8 border-t border-white/10 pt-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-teamm-gold">
                Follow
              </p>
              <div className="mt-4">
                <SocialRow iconColor="white" />
              </div>
            </div>
          </aside>
        </section>

        <section>
          <ProductionGallery limit={3} showHeader={false} />
        </section>
      </main>
    </div>
  );
}
