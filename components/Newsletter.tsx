'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageSquare } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please enter your email address.",
      });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/email/newsletterSignUp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        toast({
          title: "Success!",
          description: "You've been added to our mailing list.",
        });
        setEmail("");
      } else {
        const data = await res.json();
        toast({
          variant: "destructive",
          title: "Error",
          description: data?.error || "Something went wrong. Please try again.",
        });
      }
    } catch (err) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Network error. Please try again.",
      });
    } finally {
      setSuccess(true);
      setLoading(false);
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
              {success ? "Thank you for signing up!" : "Stay Updated"}
            </h2>
            <p className="text-white/80 mb-6 text-center font-crimson text-lg">
              {success
                ? "You'll receive exclusive updates, behind-the-scenes content, and early access to tickets."
                : "Join our mailing list for exclusive updates, behind-the-scenes content, and early access to tickets."}
            </p>
            <form hidden={success} onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-grow bg-white font-montserrat"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
              <Button
                type="submit"
                className="bg-teamm-gold hover:bg-teamm-gold/90 text-black font-oswald uppercase tracking-wider"
                disabled={loading}
              >
                {loading ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;