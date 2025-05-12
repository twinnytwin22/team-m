'use client';

import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.8, ease: 'easeOut' },
  }),
};

const lines = [
  "In a quiet church basement in the fictional town of Macey, Indiana, eight strangers gather every week for a support group known simply as Team M.",
  "What begins as a series of guarded conversations slowly unravels into a powerful exploration of grief, identity, mental health, and healing.",
  "As secrets surface and tensions rise, one truth becomes clear: these eight individuals are more connected than they appear.",
  "Team M tells the story of Milo—a young man fighting for peace amidst a mind divided—and the 'team' that holds him together.",
  "This gripping and deeply human musical invites audiences into a world of vulnerability, laughter, and redemption.",
  "It asks us: What does healing really look like when the world tells you to hide?"
];

const SynopsisSection: React.FC = () => {
  return (
    <section className="bg-[#114F2C] text-white py-28 px-6 md:px-10">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-semibold mb-12 leading-tight text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          SYNOPSIS
        </motion.h2>

        {lines.map((line, i) => (
          <motion.p
            key={i}
            custom={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-lg md:text-xl leading-relaxed mb-6 text-white/90"
          >
            {line}
          </motion.p>
        ))}
      </div>
    </section>
  );
};

export default SynopsisSection;
