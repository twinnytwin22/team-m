'use client';

import { Button } from '@/components/ui/button';
import { MapPin, CalendarDays, Clock, Ticket } from 'lucide-react';
import Link from 'next/link';

const Tickets = () => {
  return (
    <section className="bg-black py-10 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        
        {/* Premiere Details */}
        <div className="md:w-1/3 text-center md:text-left">
          <h2 className="text-teamm-gold text-2xl md:text-3xl font-oswald uppercase tracking-wide mb-1 font-bold">
            World Premiere
          </h2>
          <p className="text-white text-lg md:text-xl font-montserrat mb-2">
            May 15–16, 2026
          </p>
          <div className="text-white text-base font-montserrat space-y-1">
            <div className="flex items-center justify-center md:justify-start">
              <CalendarDays className="w-5 h-5 text-teamm-gold mr-2" />
              <span>Fri, May 15 – 7:00PM</span>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <CalendarDays className="w-5 h-5 text-teamm-gold mr-2" />
              <span>Sat, May 16 – 3:00PM & 7:00PM</span>
            </div>
          </div>
        </div>

        {/* Venue + Info */}
        <div className="md:w-1/3 text-center md:text-left space-y-2 text-white font-montserrat">
          <div className="flex items-center justify-center md:justify-start">
            <MapPin className="w-5 h-5 text-teamm-gold mr-2" />
            <span>Catherine B. Berges Theatre at COCA</span>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <Ticket className="w-5 h-5 text-teamm-gold mr-2" />
            <span>$24 · Ages 11+</span>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <Clock className="w-5 h-5 text-teamm-gold mr-2" />
            <span>Run Time: 2.5 hours</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="md:w-1/3 flex justify-center md:justify-end">
          <Link
            href="https://www.cocastl.org/calendar/team-m"
            target="_blank"
            rel="noopener noreferrer"
            className='cursor-pointer'
          >
            <Button className="bg-teamm-gold hover:bg-teamm-gold/90 text-black font-oswald uppercase tracking-wider text-lg px-8 py-6 font-bold cursor-pointer relative">
              Reserve Tickets
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Tickets;
