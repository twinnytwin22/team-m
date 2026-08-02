'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card'; // Using radiux/shadcn
import Image from 'next/image';
import LandingPageHeader from '@/components/LandingPageHeader';
import CrossPageCallout from '@/components/CrossPageCallout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8, ease: 'easeOut' as const },
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


const productionTeam = [
  {
    name: "Jacqueline Thompson",
    title: "Director",
    image: "/headshots/jacq_headshot.jpeg",
    bio: `Jacqueline Thompson is a St. Louis–based actor, director, educator, and the Artistic Director of Metro Theater Company, where she leads youth-focused, inclusive theatrical programming and community engagement. A seasoned theater professional and associate professor at the University of Missouri-St. Louis, she has directed and performed with many local companies and is recognized for her leadership in the arts and commitment to expanding opportunities for diverse voices in theater.`
  }, 
  {
    name: "Alisa Cooper", 
    title: "Choreographer",
    image: "/headshots/alisa.jpeg",
bio: `Alisa Cooper is a St. Louis–based choreographer and Program Manager for COCA’s summer arts camps, where she brings years of experience as a teaching artist and alum of the organization to her work with young performers and creatives. She started dancing at COCA as a child and continues to participate in local productions, most recently choreographing a production of Hairspray for a St. Louis theater company, showcasing her artistic leadership in the regional performing arts community.`
}, 
{
  name: "Al Anderson",
  title: "Music Supervisor/Pit Conductor ",
  image: "/headshots/al.jpeg",
    bio: `Al Anderson is a St. Louis-born singer, songwriter, composer, producer, and music director known for his dynamic work in performance and theater. He has served as music director and instrumentalist for numerous regional theatrical productions, contributed to community arts events, and leads artist development initiatives while also releasing his own music and serving as a music consultant and educator.`
}
]

const CreativeTeam: React.FC = () => {
  return (
    <section className="bg-gray-100 text-gray-800">
      <LandingPageHeader title='The Creative Team'/>

      <div className="max-w-6xl mx-auto py-16">        

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
              <Card className="bg-white border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 uppercase tracking-tight">{member.name}</h3>
                    <p className="text-teamm-gold font-semibold mt-1 text-sm uppercase tracking-wide">{member.title}</p>
                  </div>
                  <div className="relative text-gray-700 leading-loose">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={120}
                      height={120}
                      quality={100}
                      className="float-right ml-6 mb-4 border-2 border-teamm-gold/40 aspect-square object-cover object-top w-28 h-28 rounded-full shadow-sm" 
                    />
                    <p className="whitespace-pre-line text-base">{member.bio}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
<hr className="border-gray-300 my-16" />
        <div className="my-16">
          <h2 className="protest-riot text-3xl font-semibold text-center uppercase mb-10">
            Production Team
          </h2>
          <Accordion type="single" collapsible className="border-t border-gray-300 text-left">
            <AccordionItem value="2027-workshop-production-team">
              <AccordionTrigger className="py-6 text-2xl font-black uppercase tracking-tight text-gray-900 hover:no-underline">
                2027 Workshop Production Team
              </AccordionTrigger>
              <AccordionContent>
                <p className="pb-4 text-base text-black/65">To be announced.</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="2026-workshop-production-team">
              <AccordionTrigger className="py-6 text-2xl font-black uppercase tracking-tight text-gray-900 hover:no-underline">
                2026 Workshop Production Team
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="grid gap-10 md:grid-cols-2">
                  {productionTeam.map((member, i) => (
                    <motion.div
                      key={i}
                      custom={i}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <Card className="border-gray-200 bg-white shadow-md transition-shadow duration-300 hover:shadow-lg">
                        <CardContent className="p-8">
                          <div className="mb-4">
                            <h3 className="text-2xl font-bold uppercase tracking-tight text-gray-900">{member.name}</h3>
                            <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-teamm-gold">{member.title}</p>
                          </div>
                          <div className="relative leading-loose text-gray-700">
                            <Image
                              src={member.image}
                              alt={member.name}
                              width={120}
                              height={120}
                              quality={100}
                              className="float-right mb-4 ml-6 h-28 w-28 aspect-square rounded-full border-2 border-teamm-gold/40 object-cover object-top shadow-sm"
                            />
                            <p className="whitespace-pre-line text-base">{member.bio}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

       <hr className="border-gray-300 my-16" />
        <CrossPageCallout
          href="/about/cast"
          buttonLabel="Meet the Cast"
          description="See the performers bringing Team M to life on stage."
        />
      </div>
    </section>
  );
};

export default CreativeTeam;
