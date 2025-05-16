'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const logoVariants = {
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

const textVariants = {
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
      {/* Content */}
      <div className="text-center px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={logoVariants}
        >
          <Image
            src="/teamm-logo-full@2x.png"
            alt="Teamm Logo"
            width={400}
            height={100}
            className="h-auto w-auto mx-auto mb-4"
          />
        </motion.div>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-8 uppercase scale-125 font-black"
        >
          A new musical <br />by <span className="text-xl md:text-2xl">Phil Woodmore</span>
        </motion.p>
        <Link
        hidden
          href="https://www.cocastl.org/calendar/team-m"
          target="_blank"
          className="bg-teamm-gold text-black font-bold py-3 px-6 rounded-lg transition duration-300 uppercase font-oswald"
        >
          Reserve Tickets
        </Link>
      </div>
    </div>
  );
}

export default TeamMHero;