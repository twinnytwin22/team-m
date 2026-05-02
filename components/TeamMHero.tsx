'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';

const logoVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -15 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { 
      duration: 1.2, 
      ease: 'easeOut' 
    },
  },
};

const textVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { 
      duration: 0.8, 
      delay: 1.2, // starts after logo reveal
      ease: 'easeOut' 
    },
  },
};

function TeamMHero() {
  return (
    <div
      className="relative w-full h-screen flex flex-col items-center justify-center text-white bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/reamm-bg-full_1@4x.png')" }}
    >
      {/* Subtle gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/50" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={logoVariants}
        >
          <Image
            src="/teamm-logo-full@2x.png"
            alt="Team M Logo"
            width={400}
            height={100}
            className="h-auto w-auto mx-auto mb-6 drop-shadow-2xl"
            priority
          />
        </motion.div>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-lg md:text-2xl max-w-2xl mx-auto mb-10 uppercase font-black tracking-wider drop-shadow-lg"
        >
          A new musical <br />by <span className="text-xl md:text-3xl">Phil Woodmore</span>
        </motion.p>
        <Link
          href="https://www.cocastl.org/calendar/team-m"
          target="_blank"
          className="inline-block bg-teamm-gold hover:bg-teamm-gold/90 text-black font-bold py-4 px-10 rounded-lg transition-all duration-300 uppercase shadow-xl hover:shadow-2xl hover:scale-105"
        >
          Reserve Tickets
        </Link>
      </div>
    </div>
  );
}

export default TeamMHero;