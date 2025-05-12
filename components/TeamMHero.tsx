'use client';

import React from 'react';
import Image from 'next/image';

function TeamMHero() {
  return (
    <div
      className="relative w-full h-screen flex flex-col items-center justify-center text-white bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: "url('/teamm-bg-full@2x.png')",
      }}
    >
      {/* Content */}
      <div className="text-center px-4">
        <Image
          src="/teamm-logo-full@2x.png"
          alt="Teamm Logo"
          width={400}
          height={100}
          className="h-auto w-auto mx-auto mb-4"
        />
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          A new musical about grief, healing, and the strength of community.
        </p>
        <a
          href="/buy-tickets"
          className="bg-teamm-gold text-white font-bold py-3 px-6 rounded-lg transition duration-300"
        >
          Reserve Tickets
        </a>
      </div>
    </div>
  );
}

export default TeamMHero;
