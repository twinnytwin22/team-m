'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

type CrossPageCalloutProps = {
  href: string;
  buttonLabel: string;
  description: string;
};

const CrossPageCallout: React.FC<CrossPageCalloutProps> = ({ href, buttonLabel, description }) => {
  return (
    <div className="text-center pb-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <Link
          href={href}
          className="inline-flex items-center justify-center rounded-md bg-teamm-gold px-8 py-3 text-sm font-bold uppercase tracking-[0.18em] text-black shadow-md transition-all duration-200 hover:bg-teamm-gold/90 hover:shadow-lg"
        >
          {buttonLabel}
        </Link>
      </motion.div>
      <p className="text-black/80 text-lg mt-3">{description}</p>
    </div>
  );
};

export default CrossPageCallout;
