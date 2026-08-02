'use client'
import { motion } from 'framer-motion'
import React from 'react'

function LandingPageHeader({ title }: { title: string }) {
    return (
        <section className="bg-[rgba(26,111,64,0.92)] py-28 px-6 md:px-12 w-full">
            <div className="w-full mx-auto">
                <motion.h1
          style={{
  WebkitTextStroke: "1px black",
  textShadow: "2px 2px 0 #000, 4px 4px 0 #000, 6px 6px 0 #000",
}}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="protest-riot text-teamm-gold drop-shadow-[0_10px_28px_rgba(0,0,0,0.35)] text-4xl md:text-6xl lg:text-7xl text-center"
                >
                    {title}
                </motion.h1>
            </div>
        </section>
    )
}

export default LandingPageHeader
