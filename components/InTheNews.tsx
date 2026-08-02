import { ArrowUpRight } from "lucide-react";

const featuredMedia = {
  outlet: "KMOV First Alert 4",
  title: "Team M featured on KMOV",
  href: "https://www.youtube.com/watch?v=uSsJLQSkKpM",
  embedUrl: "https://www.youtube-nocookie.com/embed/uSsJLQSkKpM?rel=0",
};

export default function InTheNews() {
  return (
    <section aria-labelledby="in-the-news-heading" className="px-6 mt-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-6xl border-b border-black/15 pb-12">
        <div className="grid gap-6 lg:grid-cols-[12rem_minmax(0,1fr)] lg:gap-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-teamm-green">
              Press &amp; Media
            </p>
            <h2
              id="in-the-news-heading"
              className="mt-2 text-xl font-black uppercase tracking-tight text-[#151812]"
            >
              In the News
            </h2>
          </div>

          <article className="grid overflow-hidden rounded-md border border-black/10 bg-white shadow-sm sm:grid-cols-[minmax(0,1.35fr)_minmax(14rem,0.65fr)]">
            <div className="aspect-video bg-black">
              <iframe
                className="h-full w-full"
                src={featuredMedia.embedUrl}
                title={featuredMedia.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>

            <div className="flex flex-col justify-center p-5 sm:p-6">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-black/45">
                {featuredMedia.outlet}
              </p>
              <h3 className="mt-2 text-lg font-extrabold uppercase leading-tight tracking-tight text-[#151812]">
                {featuredMedia.title}
              </h3>
              <a
                className="mt-4 inline-flex w-fit items-center gap-1.5 text-xs font-bold uppercase tracking-[0.12em] text-teamm-green underline decoration-teamm-gold decoration-2 underline-offset-4 transition hover:text-[#0d4024] focus:outline-none focus-visible:ring-2 focus-visible:ring-teamm-gold"
                href={featuredMedia.href}
                target="_blank"
                rel="noreferrer"
              >
                Watch on YouTube
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
