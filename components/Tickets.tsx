import { Button } from "@/components/ui/button";
import { Clock, MapPin } from "lucide-react";
import Link from "next/link";

const Tickets = () => {
  return (
    <section className="bg-black py-8 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-1/3 text-center md:text-left">
            <h2 className="text-teamm-gold text-2xl md:text-3xl font-oswald uppercase tracking-wider mb-2 font-bold">
              WORLD PREMIERE
            </h2>
            <p className="text-white text-lg md:text-xl font-montserrat">
              May 2026
            </p>
          </div>
          
          <div className="md:w-1/3 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex items-center text-white">
              <MapPin className="w-5 h-5 text-teamm-gold mr-2" />
              <span className="font-montserrat">St. Louis, MO</span>
            </div>
            <div className="flex items-center text-white">
              <Clock className="w-5 h-5 text-teamm-gold mr-2" />
              <span className="font-montserrat">2h 15m</span>
            </div>
          </div>
          
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <Button className="bg-teamm-gold hover:bg-teamm-gold/90 text-black font-oswald uppercase tracking-wider text-lg px-8 py-6 font-bold">
              
              <Link target="_blank" href={'https://mococaweb.myvscloud.com/webtrac/web/search.html?keyword=team+m&begindate=05%2F12%2F2026&enddate=08%2F31%2F2026'}> Reserve Tickets</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tickets;