"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
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
          title: "Success",
          description: "You're on the list for future Team M updates.",
        });
        setEmail("");
        setSuccess(true);
      } else {
        const data = await res.json();
        toast({
          variant: "destructive",
          title: "Error",
          description: data?.error || "Something went wrong. Please try again.",
        });
      }
    } catch {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Network error. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="updates" className="bg-[#f8f5ee] px-6 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-black/10 bg-white p-8 text-[#151812] shadow-[0_18px_60px_rgba(0,0,0,0.06)] sm:pb-10">
        <h2 className="text-3xl font-black uppercase tracking-tight sm:text-2xl">Stay updated</h2>
        <p className="mt-4 text-base leading-8 text-black/70 sm:text-lg">
          {success
            ? "You're subscribed. Future Team M updates will come straight to your inbox."
            : "Join the mailing list for future productions and major updates."}
        </p>

        {!success && (
          <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="min-h-14 grow rounded-full border border-black/10 bg-white px-5 font-montserrat text-[#151812] outline-none placeholder:text-black/40 focus:border-teamm-green"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              required
            />
            <Button
              type="submit"
              className="min-h-14 rounded-full bg-teamm-gold px-8 text-sm font-bold uppercase tracking-[0.18em] text-black hover:bg-[#ffb44c]"
              disabled={loading}
            >
              {loading ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Newsletter;
