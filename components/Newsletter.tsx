'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Success!",
        description: "You've been added to our mailing list.",
      });
      setEmail("");
    } else {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please enter your email address.",
      });
    }
  };

  return (
    <section id="updates" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-teamm-green rounded-lg overflow-hidden shadow-2xl">
          <div className="p-8 md:p-12">
            <div className="flex justify-center mb-6">
              <div className="bg-white p-4 rounded-full">
                <MessageSquare className="h-8 w-8 text-teamm-green" />
              </div>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center font-oswald uppercase tracking-wide">
              Stay Updated
            </h2>
            
            <p className="text-white/80 mb-6 text-center font-crimson text-lg">
              Join our mailing list for exclusive updates, behind-the-scenes content, and early access to tickets.
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-grow bg-white font-montserrat"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button type="submit" className="bg-teamm-gold hover:bg-teamm-gold/90 text-black font-oswald uppercase tracking-wider">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;