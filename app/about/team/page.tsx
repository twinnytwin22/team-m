'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card'; // Using radiux/shadcn
import Image from 'next/image';
import { Protest_Riot } from 'next/font/google';
import LandingPageHeader from '@/components/LandingPageHeader';

const protestRiot = Protest_Riot({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-protest-riot',
});
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: 'easeOut' },
  }),
};

const team = [
  {
    name: 'Dr. Philip A. Woodmore',
    title: 'Music, Lyrics and Book by',
    image: '/headshots/phil.jpeg', // Replace with real image later
    bio: `A composer, educator, and music director based in St. Louis, Dr. Woodmore is best known for his Off-Broadway hit "Antigone in Ferguson", which blended Greek tragedy with gospel to spark national conversations on justice. He also created "The Drum Major Instinct", a musical adaptation of Dr. Martin Luther King Jr.'s final sermon. With "Team M", Woodmore continues his mission of using music and theater to catalyze healing and social change.`,
  },
  {
    name: 'Noah Van Ess',
    title: 'Orchestrator and Co-Arranger ',
    image: '/headshots/noah.jpeg',
    bio: `A rising star in the world of musical theater and orchestration. A member of the Carnegie Mellon University Class of 2027, Noah is currently pursuing his BFA in Musical Theatre while also cultivating his gifts as a composer, arranger, and musician. "Team M" marks his first major project as orchestrator—delivering a dynamic and emotionally rich score full of color, texture, and heart.`,
  },
  {
    name: 'Michael Beatty',
    title: 'Creative Consultant',
    image: '/headshots/michael.jpg',
    bio: `A Broadway veteran and master educator, Michael Beatty brings decades of theatrical expertise to "Team M". His experience as a performer, director, and mentor supports the artistic and emotional integrity of this work.`,
  },
  {
    name: 'Shawna Flanigan',
    title: 'Dramaturg',
    image: '/headshots/shawna.jpeg',
    bio: `A respected theater artist and arts administrator, Shawna has over two decades of experience in youth arts education, devising, and dramaturgy. Her work emphasizes socially engaged theater and inclusive creative spaces. As dramaturg, she ensures the storytelling in "Team M" remains grounded and resonant—particularly around mental health and identity.`,
  },
  {
    name: 'Steve Hartman',
    title: 'Graphic Designer',
    image: '/headshots/Steve_1500px.jpg',
    bio: `A multidisciplinary visual artist known for bold, evocative imagery that blends storytelling with striking design. For "Team M", Hartman's visuals capture the emotional core of the show—reflecting themes of mental health, identity, and transformation with authenticity.`,
  },
 {
  name: "Randal Herndon",
  title: "Marketing & Advertising ",
  image: "/headshots/randal.jpeg",
  bio: `Randal Herndon is a dynamic creative professional and digital strategist from St. Louis, Missouri, now based in Phoenix, Arizona. As Website Manager at the Arizona Science Center, he elevates digital engagement through innovation and storytelling. He's also a celebrated DJ and music producer under the name Twinny Twin.`,
 }
];

const CreativeTeam: React.FC = () => {
  return (
    <section className="bg-gray-100 text-gray-800">
      <LandingPageHeader title='The Team'/>

      <div className="max-w-6xl mx-auto py-16">
                <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={`text-3xl font-semibold text-center uppercase my-16 ${protestRiot.className}`}>
          Creative Team
        </motion.h1>          

        <div className="grid gap-10 md:grid-cols-2">
          {team.map((member, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="bg-white/5 border-white/10">
                <CardContent className="p-6">
                  <div className="mb-3">
                    <h3 className="text-xl font-semibold text-gray-900 uppercase">{member.name}</h3>
                    <p className="text-teamm-gold font-medium">{member.title}</p>
                  </div>
                  <div className="relative text-white/90 text-lg leading-relaxed">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={200}
                      height={200}
                      quality={100}
                      className="float-right ml-4 mb-2  border border-white/20 aspect-square object-cover object-top rounded-ful w-24 h-24 rounded-full" 
                    />
                    <p className="whitespace-pre-line text-gray-900">{member.bio}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
<hr className="border-gray-300 my-16" />
        <div className="mt-24 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={`text-3xl font-semibold text-center uppercase ${protestRiot.className}`}>
          Cast & Crew
        </motion.h1>          
        <p className="text-black/80 text-lg">
            Additional designers and production team to be announced in{' '}
            <span className="text-teamm-gold font-semibold">Fall 2025</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CreativeTeam;