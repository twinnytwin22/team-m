'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import LandingPageHeader from '@/components/LandingPageHeader';
import CrossPageCallout from '@/components/CrossPageCallout';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: 'easeOut' as const },
  }),
};

const castMembers = [
  { name: 'Milo', title: 'Noah Van Ess', image: '/headshots/noah.jpeg' },
  { name: 'Rose', title: 'De-Rance Blaylock', image: '/headshots/rose.jpg' },
  { name: 'Maria', title: 'Dorrian Neymour', image: '/headshots/maria.jpg' },
  { name: 'Linda', title: 'Nikki Daluga-Guenther', image: '/headshots/linda.jpg' },
  { name: 'Ashley', title: 'Nikki Prodes', image: '/headshots/ashley.jpg' },
  { name: 'Forrest', title: 'Langston Casey', image: '/headshots/forrest.jpg' },
  { name: 'Sofi', title: 'Sarah Hopp', image: '/headshots/sofi.jpeg' },
  { name: 'Bruce', title: 'Duane Foster', image: '/headshots/bruce.jpg' },
  { name: 'Michael', title: 'Stephan Griffin', image: '/headshots/michael-2.png' },
];

const CreativeTeam: React.FC = () => {
  return (
    <section className="bg-gray-100 text-gray-800">
      <LandingPageHeader title="The Cast" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 sm:py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {castMembers.map((member, i) => (
            <motion.div
              key={member.name}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group bg-white border border-gray-200 font-bold rounded-md shadow-md hover:shadow-lg transition-shadow duration-300 p-5"
            >
              <div className="overflow-hidden rounded-md border border-gray-200 bg-gray-50">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={480}
                  height={480}
                  quality={100}
                  className="aspect-square w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>

              <div className="mt-4 space-y-1">
                <p className="font-montserrat uppercase tracking-[0.18em] text-xs font-semibold text-teamm-gold">Character</p>
                <h3 className="text-2xl font-black uppercase tracking-wide leading-tight text-gray-900">{member.name}</h3>
                <p className="text-black/60 text-xs uppercase tracking-[0.18em]">Performed By</p>
                <p className="text-base text-gray-800 font-semibold">{member.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <hr className="border-gray-300 my-14 sm:my-16" />
        <CrossPageCallout
          href="/about/creative-team"
          buttonLabel="Meet the Creative Team"
          description="Explore the artists, designers, and leaders shaping Team M behind the scenes."
        />
      </div>
    </section>
  );
};

export default CreativeTeam;
