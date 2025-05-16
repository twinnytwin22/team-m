'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import LandingPageHeader from '@/components/LandingPageHeader';

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
    <section className="min-h-screen flex flex-col items-center bg-gray-100 text-gray-900">
      <LandingPageHeader title="Phil Woodmore" />
      <div className="max-w-6xl mx-auto py-16">

        <motion.h2
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-xl md:text-2xl text-center mb-16 text-gray-950/80 font-bold font-montserrat"
        >
          Note from Director, Dr. Philip A. Woodmore:<br />
          <span className='text-base'>Creator, Writer, Composer & Director</span>
        </motion.h2>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <Card className="bg-white/5 border-gray-200">
            <CardContent className="relative p-6 text-lg md:text-xl leading-relaxed text-gray-900/90 whitespace-pre-line">
              <Image
                src="/headshots/phil.jpeg"
                alt="Dr. Philip A. Woodmore"
                width={400}
                height={400}
                className="rounded-md border border-white/20 float-right ml-6 mb-4 "
              />
              <p>
                In 2017, I was completely overwhelmed by the national response to *Antigone in Ferguson*. What started as a community collaboration quickly grew beyond anything I could have imagined—culminating in a call that changed my life: an invitation for an Off-Broadway run. That moment affirmed for me the power of theater to heal, challenge, and unite. It also sparked a dream—to create something wholly original that could continue this work. But like many dreams, I didn’t know exactly how to begin. </p><br />

              <p>Years later, while leading a master class at Red Mountain Theater Company in Birmingham, Alabama, I was working with a brilliant group of students preparing for a summer showcase. During a class discussion, I posed a question: “If you had 90 seconds to pitch a brand-new show to a big-time Broadway producer, what would your idea be?” One by one, they shared their incredible concepts. Then, they turned the question back on me.
              </p>
              <br />  <p>Without much thought, I began sharing the story that would one day become *Team M*—a rough sketch of a show that didn’t even have a title yet. The students were captivated. They urged me to actually write it. I agreed in the moment, more as encouragement to them than as a commitment to myself. Truthfully, I had no real intention of diving into a brand-new musical from the ground up.
              </p>
              <br /> <p>But when I returned to St. Louis, something shifted. The idea kept tugging at me—it began following me into conversations, into lessons, into quiet moments. I couldn’t ignore it. One day, I sat down and decided to take it seriously.
              </p>
              <br /><p>I called Michael Beatty, whose wisdom and vision have always grounded me. Then I reached out to Shawna Flanigan, whose insight as a dramaturg gave shape and clarity to what I was trying to say. Both agreed to walk this journey with me. And from there, the real work began.
              </p>
              <br /> <p> I had the privilege of collaborating with some incredibly gifted young artists—Kit Greene, Jonathan Savage, and Annie Zigman—who helped me bring early drafts of the characters to life. My mother, Alma Woodmore, even helped me shape the voice of Maria, the group leader in the story, giving her warmth and wisdom drawn from real life.
              </p>
              <br />What followed was nearly four years of writing, editing, table readings, composing music, and workshopping. It was hard, humbling, and holy work.

              <br />   Now, I am thrilled to share *Team M* with the world—a story born out of mentorship, community, and a deep belief in the power of storytelling to change lives.

              <div className="mt-10 text-right text-gray950 text-xl font-semibold">
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
