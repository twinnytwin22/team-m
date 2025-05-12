'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

import CLOUDS from 'vanta/dist/vanta.clouds.min.js';

const Hero: React.FC = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      const effect = CLOUDS({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        skyColor: 0x88c0d0,
        cloudColor: 0xffffff,
        cloudShadowColor: 0x000000,
        sunlightColor: 0xfff1a5,
        speed: 1.2,
      });
      setVantaEffect(effect);
    }

    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
      }
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className="w-full h-screen flex items-center justify-center text-white relative z-10">
      <div className="relative z-20 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold drop-shadow-lg">Team M.</h1>
        <p className="mt-4 text-xl md:text-2xl max-w-2xl mx-auto">
          A new musical about grief, healing, and the strength of community.
        </p>
      </div>
      {/* Optional: Add a dark overlay for text contrast */}
      <div className="absolute inset-0 bg-black/20 z-0" />
    </div>
  );
};

export default Hero;
