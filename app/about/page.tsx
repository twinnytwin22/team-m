'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ParallaxProvider } from 'react-scroll-parallax';
import LandingPageHeader from '@/components/LandingPageHeader';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import PhotoGallery from '@/components/PhotoGallery';
import SocialRow from '@/components/SocialRow';


const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const stats = [
  { value: '4+', label: 'Years in Development' },
  { value: '15+', label: 'Workshops & Readings' },
  { value: '10+', label: 'Collaborators' },
  { value: 'May 2026', label: 'World Premiere' },
];

const testimonials = [
  {
    quote: `Witnessing Team M come to fruition has been has been nothing short of amazing. As the mental health consultant, I've been honored to watch this grow from an idea to a beautiful work of art. I'm excited for the world to experience this transformational musical!`,
    author: 'De-Andrea Blaylock-Solar'
  },
  {
    quote: `The road Team M actualized has been an example of the research and responsibility  that is crucial to tell the story in fullness and truth.  Dr. Woodmore was intentional about integrating voices, professionals and community to ensure the material is grounded in visibility , awareness and support.`,
    author: 'Jacqueline Thompson'
  },
];

export default function PhilStory() {
  return (
    <ParallaxProvider>
      <div className="bg-white text-gray-900">
        {/* Header Overlay */}
        <LandingPageHeader title="About Team M." />

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-6 py-20 space-y-20 text-lg">

          {/* Timeline & Stats */}
          <div className="grid md:grid-cols-2 gap-16">
            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-1 bg-teamm-gold" />
              <div className="space-y-8 pl-10">
                <p>
                  <strong>Team M</strong> is a new musical by Dr. Philip Woodmore, inviting audiences to a weekly support group meeting in Macey, Indiana. Nine individuals gather under the guidance of their leader and community to explore wellness. Through powerful songs and stories, the musical addresses mental health, the mental health industry, and broader issues of race, identity, and inclusion. Join us for this week&apos;s Team M group session&mdash;where no challenge is too small and every voice matters.
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>
                    <strong>Content Transparency:</strong> Mature language, depictions of violence, and mental health topics. Recommended for ages 11+.
                  </li>
                  <li>
                    <strong>Run Time:</strong> 2.5 hours
                  </li>
                </ul>
              </div>
            </div>

            {/* Stats */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="grid grid-cols-2 gap-8 text-center bg-teamm-green/5 rounded-xl p-8"
            >
              {stats.map((s, idx) => (
                <div key={idx}>
                  <p className="text-3xl font-extrabold text-teamm-gold border-b-2 border-teamm-gold pb-2 mb-2">{s.value}</p>
                  <p className="uppercase tracking-wide text-gray-600 text-sm">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <hr className="border-teamm-gold/30" />

          <div className="gap-4 flex flex-col">
            <h2 className="protest-riot text-2xl font-semibold text-center uppercase">Follow Our Journey</h2>
            <SocialRow />
            <PhotoGallery />
          </div>

          <hr className="border-teamm-gold/30" />

          {/* Testimonials */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="space-y-8"
          >
            <h2 className="protest-riot text-2xl font-semibold text-center uppercase">Praise &amp; Reviews</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((t, idx) => (
                <blockquote key={idx} className="bg-white border-l-4 border-teamm-gold p-8 rounded-r-lg shadow-md">
                  <p className="italic text-gray-700">&ldquo;{t.quote}&rdquo;</p>
                  <footer className="mt-4 text-right font-semibold text-gray-900 uppercase tracking-wide text-sm">&mdash; {t.author}</footer>
                </blockquote>
              ))}
            </div>
          </motion.section>
        </main>

        {/* Call To Action */}
        <section className="py-20 bg-teamm-green text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat uppercase">Be Part of the Story</h2>
          <p className="mb-8">Reserve your seat now for the world premiere of <em>Team M</em> in May 2026.</p>
          <Button className="mt-6 bg-teamm-gold hover:bg-teamm-gold/90 text-black uppercase tracking-wider text-lg px-8 py-6 font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            <Link target="_blank" href="https://www.cocastl.org/calendar/team-m">
              Reserve Tickets
            </Link>
          </Button>
        </section>
      </div>
    </ParallaxProvider>
  );
}
