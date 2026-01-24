'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';
import LandingPageHeader from '@/components/LandingPageHeader';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('General Inquiry');
  const [phone, setPhone] = useState('');
  const [organization, setOrganization] = useState('');
  const [preferredContact, setPreferredContact] = useState('Email');
  const [timeline, setTimeline] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email) {
      setError('Please enter your email address.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/email/contactSubmission', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          subject,
          phone,
          organization,
          preferredContact,
          timeline,
          message,
        }),
      });

      if (res.ok) {
        setSuccess(true);
        setName('');
        setEmail('');
        setSubject('General Inquiry');
        setPhone('');
        setOrganization('');
        setPreferredContact('Email');
        setTimeline('');
        setMessage('');
      } else {
        const data = await res.json();
        setError(data?.error || 'Something went wrong. Please try again.');
      }
    } catch {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="pb-20 bg-white min-h-screen flex items-center flex-col">
        <LandingPageHeader title="Contact Us" />
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-2xl mx-auto bg-teamm-green rounded-lg overflow-hidden shadow-2xl">
          <div className="p-8 md:p-12">
            <div className="flex justify-center mb-6">
              <div className="bg-white p-4 rounded-full">
                <MessageSquare className="h-8 w-8 text-teamm-green" />
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-center font-oswald uppercase tracking-wide">
              {success ? "Thank you for reaching out!" : "Contact Us"}
            </h2>
            <p className="text-white/80 mb-6 text-center font-crimson text-lg">
              {success
                ? "We've received your message and will get back to you soon."
                : "Have a question about Team M? Share a few details and we’ll get back to you as soon as possible."}
            </p>
            {!success && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-white text-black placeholder:text-gray-500 font-montserrat rounded px-4 py-2"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  disabled={loading}
                />
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full bg-white text-black placeholder:text-gray-500 font-montserrat rounded px-4 py-2"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  disabled={loading}
                  required
                />
                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    type="tel"
                    placeholder="Phone (optional)"
                    className="w-full bg-white text-black placeholder:text-gray-500 font-montserrat rounded px-4 py-2"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    disabled={loading}
                  />
                  <input
                    type="text"
                    placeholder="Organization / Company"
                    className="w-full bg-white text-black placeholder:text-gray-500 font-montserrat rounded px-4 py-2"
                    value={organization}
                    onChange={e => setOrganization(e.target.value)}
                    disabled={loading}
                  />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <select
                    className="w-full bg-white text-black font-montserrat rounded px-4 py-2"
                    value={subject}
                    onChange={e => setSubject(e.target.value)}
                    disabled={loading}
                  >
                    <option>General Inquiry</option>
                    <option>Licensing & Rights</option>
                    <option>Productions & Booking</option>
                    <option>Press & Media</option>
                    <option>Partnerships & Sponsorships</option>
                    <option>Merchandise / Brand</option>
                  </select>
                  <select
                    className="w-full bg-white text-black font-montserrat rounded px-4 py-2"
                    value={preferredContact}
                    onChange={e => setPreferredContact(e.target.value)}
                    disabled={loading}
                  >
                    <option>Email</option>
                    <option>Phone</option>
                    <option>No preference</option>
                  </select>
                </div>
                <input
                  type="text"
                  placeholder="Timeline / Event date (optional)"
                  className="w-full bg-white text-black placeholder:text-gray-500 font-montserrat rounded px-4 py-2"
                  value={timeline}
                  onChange={e => setTimeline(e.target.value)}
                  disabled={loading}
                />
                <textarea
                  placeholder="Your message"
                  className="w-full bg-white text-black placeholder:text-gray-500 font-montserrat rounded px-4 py-2 min-h-30"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  disabled={loading}
                  required
                />
                {error && (
                  <div className="text-red-200 bg-red-700/70 rounded px-3 py-2 text-sm">{error}</div>
                )}
                <Button
                  type="submit"
                  className="bg-teamm-gold hover:bg-teamm-gold/90 text-black font-oswald uppercase tracking-wider w-full"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}