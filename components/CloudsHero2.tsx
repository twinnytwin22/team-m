import React from 'react';
import Script from 'next/script';
export const CloudsHero = () => (

  <div className='isolate'>
    <div id='homepage-background' className="w-full h-screen flex items-center justify-center text-white relative z-10">
    {/* <Script
      src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
      strategy="beforeInteractive"
    />
    <Script
      src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.clouds.min.js"
      strategy="beforeInteractive"
    /> */}
    <Script 
    strategy='lazyOnload'
    id="script">
      {`VANTA.CLOUDS({
      el: "#homepage-background",
       
             mouseControls: false,
             touchControls: false,
             gyroControls: false,
             minHeight: 200.0,
             minWidth: 200.0,
             scale: 1.0,
             scaleMobile: 1.0,
             skyColor: 0x88c0d0,
             cloudColor: 0xffffff,
             cloudShadowColor: 0x000000,
             sunlightColor: 0xfff1a5,
             speed: 0.8,
    });`}
    </Script>
         <div className="relative z-20 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold drop-shadow-lg">Team M.</h1>
        <p className="mt-4 text-xl md:text-2xl max-w-2xl mx-auto">
          A new musical about grief, healing, and the strength of community.
        </p>
      </div>
      {/* Optional: Add a dark overlay for text contrast */}
      <div className="absolute inset-0 bg-black/20 z-0" />
    </div>
  </div>
)    