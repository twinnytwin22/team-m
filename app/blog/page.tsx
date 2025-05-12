'use client';

import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: 'easeOut' },
  }),
};

const team = [
  {
    name: 'Dr. Philip A. Woodmore',
    title: 'Book, Music, and Lyrics',
    bio: `A composer, educator, and music director based in St. Louis, Dr. Woodmore is best known for his Off-Broadway hit *Antigone in Ferguson*, which blended Greek tragedy with gospel to spark national conversations on justice. He also created *The Drum Major Instinct*, a musical adaptation of Dr. Martin Luther King Jr.’s final sermon. With *Team M*, Woodmore continues his mission of using music and theater to catalyze healing and social change.`,
  },
  {
    name: 'Noah Van Ess',
    title: 'Orchestrator',
    bio: `A rising star in the world of musical theater and orchestration. A member of the Carnegie Mellon University Class of 2027, Noah is currently pursuing his BFA in Musical Theatre while also cultivating his gifts as a composer, arranger, and musician. *Team M* marks his first major project as orchestrator—delivering a dynamic and emotionally rich score full of color, texture, and heart.`,
  },
  {
    name: 'Michael Beatty',
    title: 'Creative Consultant',
    bio: `A Broadway veteran and master educator, Michael Beatty brings decades of theatrical expertise to *Team M*. His experience as a performer, director, and mentor supports the artistic and emotional integrity of this work.`,
  },
  {
    name: 'Shawna Flanigan',
    title: 'Dramaturg',
    bio: `A respected theater artist and arts administrator, Shawna has over two decades of experience in youth arts education, devising, and dramaturgy. Her work emphasizes socially engaged theater and inclusive creative spaces. As dramaturg, she ensures the storytelling in *Team M* remains grounded and resonant—particularly around mental health and identity.`,
  },
  {
    name: 'Steve Hartman',
    title: 'Graphic Designer',
    bio: `A multidisciplinary visual artist known for bold, evocative imagery that blends storytelling with striking design. For *Team M*, Hartman’s visuals capture the emotional core of the show—reflecting themes of mental health, identity, and transformation with authenticity.`,
  },
];

const CreativeTeam: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-[#0d4024] via-[#106e39] to-[#00913f] text-white py-28 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold text-teamm-gold mb-12 text-center"
        >
          Creative Team
        </motion.h1>

        <div className="grid gap-12 md:grid-cols-2">
          {team.map((member, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-2"
            >
              <h3 className="text-2xl font-semibold text-white">{member.name}</h3>
              <p className="text-teamm-gold font-medium">{member.title}</p>
              <p className="text-white/90 text-lg leading-relaxed whitespace-pre-line">{member.bio}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Cast & Crew</h2>
          <p className="text-white/80 text-lg">
            Additional designers and production team to be announced in <span className="text-teamm-gold font-semibold">Fall 2025</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CreativeTeam;
