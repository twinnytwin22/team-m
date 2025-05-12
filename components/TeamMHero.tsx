'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 uppercase scale-125 font-black">
          A new musical <br/>by <span className='text-xl md:text-2xl'>Phil Woodmore</span>
        </p>
        <Link
          href="https://mococaweb.myvscloud.com/webtrac/web/search.html?keyword=team+m&begindate=05%2F12%2F2026&enddate=08%2F31%2F2026"
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
