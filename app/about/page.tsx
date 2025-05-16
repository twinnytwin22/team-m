'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Protest_Riot } from 'next/font/google';
import LandingPageHeader from '@/components/LandingPageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const protestRiot = Protest_Riot({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-protest-riot',
});

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const milestones = [
  { year: '2017', text: 'Off-Broadway invitation for *Antigone in Ferguson*' },
  { year: '2020', text: 'Master class spark at Red Mountain Theater Company' },
  { year: '2021', text: 'First drafts of *Team M* shared with collaborators' },
  { year: '2024', text: 'Four years of workshops, table reads, composition' },
];

const stats = [
  { value: '4+', label: 'Years in Development' },
  { value: '50+', label: 'Workshops & Readings' },
  { value: '10+', label: 'Collaborators' },
  { value: 'May 2026', label: 'World Premiere' },
];

const testimonials = [
  { quote: 'A powerful exploration of grief and redemption.', author: 'NY Times' },
  { quote: 'A journey that will stay with you.', author: 'TheaterMania' },
];

export default function PhilStory() {
  return (
    <ParallaxProvider>
      {/* Hero Section */}
   
      {/* Header Overlay */}
      <LandingPageHeader title="About Team M."/>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-20 space-y-20">
        {/* Bio Card */}
  

        {/* Timeline & Stats */}
        <div className="grid md:grid-cols-2 gap-16">
          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-1 bg-gold" />
            <div className="space-y-8 pl-10">
              <p>
                <strong>Team M</strong> is a new musical by Dr. Philip Woodmore, inviting audiences to a weekly support group meeting in Macey, Indiana. Eight individuals gather under the guidance of their leader and community to explore wellness. Through powerful songs and stories, the musical addresses mental health, the mental health industry, and broader issues of race, identity, and inclusion. Join us for this week’s Team M group session—where no challenge is too small and every voice matters.
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
            className="grid grid-cols-2 gap-8 text-center"
          >
            {stats.map((s, idx) => (
              <div key={idx}>
                <p className="text-5xl font-extrabold text-gold">{s.value}</p>
                <p className="mt-2 uppercase tracking-wide text-gray-600">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Testimonials */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="space-y-8"
        >
          <h2 className="text-2xl font-semibold text-center uppercase font-montserrat">Praise & Reviews</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((t, idx) => (
              <blockquote key={idx} className="bg-gray-50 p-6 rounded-lg shadow">
                <p className="italic text-gray-700">“{t.quote}”</p>
                <footer className="mt-4 text-right font-semibold text-gray-900">— {t.author}</footer>
              </blockquote>
            ))}
          </div>
        </motion.section>
      </main>

      {/* Call To Action */}
      <section className="py-20 bg-teamm-green text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-montserrat uppercase ">Be Part of the Story</h2>
        <p className="mb-8">Reserve your seat now for the world premiere of <em>Team M</em> in May 2026.</p>
     <Button className="mt-6 bg-teamm-gold text-black font-bold uppercase">
                <Link target="_blank" href={'https://www.cocastl.org/calendar/team-m'}>
                Reserve Tickets
                </Link>
              </Button>
      </section>
    </ParallaxProvider>
  );
}
