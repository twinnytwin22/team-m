'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Protest_Riot } from 'next/font/google';

const protestRiot = Protest_Riot({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-protest-riot',
});
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: 'easeOut' },
  },
};

const PhilStory: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-[#0d4024] via-[#106e39] to-[#00913f] text-white py-28 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className={`${protestRiot.className} text-teamm-gold text-shadow-black text-shadow text-shadow-lg text-7xl text-center pb-24`}        >
        
          My Story
        </motion.h1>

        <motion.h2
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-xl md:text-2xl text-center mb-16 text-white/80"
        >
          By Dr. Philip A. Woodmore<br />
          Creator, Writer, Composer & Director
        </motion.h2>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <Card className="bg-white/5 border-white/10">
            <CardContent className="relative p-6 text-lg md:text-xl leading-relaxed text-white/90 whitespace-pre-line">
              <Image
                src="/headshots/phil.jpeg"
                alt="Dr. Philip A. Woodmore"
                width={120}
                height={120}
                className="rounded-md border border-white/20 float-right ml-6 mb-4"
              />

              In 2017, I was completely overwhelmed by the national response to *Antigone in Ferguson*. What started as a community collaboration quickly grew beyond anything I could have imagined—culminating in a call that changed my life: an invitation for an Off-Broadway run. That moment affirmed for me the power of theater to heal, challenge, and unite. It also sparked a dream—to create something wholly original that could continue this work. But like many dreams, I didn’t know exactly how to begin.

              Years later, while leading a master class at Red Mountain Theater Company in Birmingham, Alabama, I was working with a brilliant group of students preparing for a summer showcase. During a class discussion, I posed a question: “If you had 90 seconds to pitch a brand-new show to a big-time Broadway producer, what would your idea be?” One by one, they shared their incredible concepts. Then, they turned the question back on me.

              Without much thought, I began sharing the story that would one day become *Team M*—a rough sketch of a show that didn’t even have a title yet. The students were captivated. They urged me to actually write it. I agreed in the moment, more as encouragement to them than as a commitment to myself. Truthfully, I had no real intention of diving into a brand-new musical from the ground up.

              But when I returned to St. Louis, something shifted. The idea kept tugging at me—it began following me into conversations, into lessons, into quiet moments. I couldn’t ignore it. One day, I sat down and decided to take it seriously.

              I called Michael Beatty, whose wisdom and vision have always grounded me. Then I reached out to Shawna Flanigan, whose insight as a dramaturg gave shape and clarity to what I was trying to say. Both agreed to walk this journey with me. And from there, the real work began.

              I had the privilege of collaborating with some incredibly gifted young artists—Kit Greene, Jonathan Savage, and Annie Zigman—who helped me bring early drafts of the characters to life. My mother, Alma Woodmore, even helped me shape the voice of Maria, the group leader in the story, giving her warmth and wisdom drawn from real life.

              What followed was nearly four years of writing, editing, table readings, composing music, and workshopping. It was hard, humbling, and holy work.

              Now, I am thrilled to share *Team M* with the world—a story born out of mentorship, community, and a deep belief in the power of storytelling to change lives.

              <div className="mt-10 text-right text-white text-xl font-semibold">
                See you in May 2026.
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default PhilStory;
