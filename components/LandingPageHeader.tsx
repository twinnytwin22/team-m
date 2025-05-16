'use client'
import { motion } from 'framer-motion'
import { Protest_Riot } from 'next/font/google'
import React from 'react'

const protestRiot = Protest_Riot({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-protest-riot',
})

function LandingPageHeader({ title }: { title: string }) {
    return (
        <section className="bg-gradient-to-b from-[#0d4024] via-[#106e39] to-[#00913f]  py-28 px-6 md:px-12 w-screen">
            <div className="w-full mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className={`${protestRiot.className} text-teamm-gold text-shadow-black text-shadow text-shadow-lg text-7xl text-center`}        >
                    {title}        
                    </motion.h1>
            </div>
        </section>
    )
}

export default LandingPageHeader