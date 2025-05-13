'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Protest_Riot } from 'next/font/google';
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';

const protestRiot = Protest_Riot({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-protest-riot',
});

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: 'easeOut' },
  },
};

const SynopsisSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#00913f] via-[#106e39] to-[#0d4024] text-white py-28 px-6 md:px-10 before:absolute before:inset-0 before:bg-gradient-to-tr before:from-black/10 before:to-transparent">
      
      <div className="mb-5">
        <Image
          src="/teamm-logo-m@2x.png"
          alt="Team M Logo"
          width={500}
          height={300}
          className="w-52 px-10 mx-auto mb-16"
        />
      </div>

      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 leading-tight text-center flex flex-wrap gap-2 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="uppercase text-shadow text-shadow-amber-300 text-shadow-sm">
            A powerful journey of
          </span>{' '}
          <span className={`${protestRiot.className} text-teamm-gold text-shadow-black text-shadow-lg`}>
            healing
          </span>,{' '}
          <span className={`${protestRiot.className} text-teamm-gold text-shadow-black text-shadow-lg`}>
            connection
          </span>,{' '}
          <span className="uppercase text-shadow text-shadow-amber-300 text-shadow-sm">
            and
          </span>{' '}
          <span className={`${protestRiot.className} text-teamm-gold text-shadow-black text-shadow-lg`}>
            redemption.
          </span>
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="space-y-6"
        >
          <p className="text-lg md:text-xl leading-relaxed text-white/90">
            In a quiet church basement in the fictional town of Macey, Indiana, nine individuals gather each week for a support group known simply as Team M. What starts as guarded conversation slowly unravels into a deeply human exploration of grief, identity, mental health, and healing. As secrets rise to the surface and tensions begin to simmer, one truth becomes undeniable: these nine lives are far more connected than they appear.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-white/90">
            At the center is Milo—a young man navigating the chaos of a divided mind—anchored by the “team” that holds him together. Set against a powerful original score that blends gospel, pop, rock, and musical theater, <strong>Team M</strong> invites audiences into a world of vulnerability, laughter, and unexpected redemption. It asks us: What does healing really look like when the world tells you to hide?
          </p>
        </motion.div>
      </div>
      
      <div className="flex justify-center mt-8">
        <Button className="bg-teamm-gold hover:bg-teamm-gold/90 text-black font-oswald uppercase tracking-wider text-lg px-8 py-6 font-bold w-fit">
          <Link
          
            href="/about"
          >
            READ MORE
          </Link>
        </Button>
      </div>
      
    </section>
  );
};

export default SynopsisSection;