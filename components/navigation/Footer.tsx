import Link from "next/link";
import * as Tooltip from "@radix-ui/react-tooltip";
import Image from "next/image";
import { FaFacebook, FaInstagram } from "react-icons/fa";

import { NavLink } from "./navlink";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="bg-[#0f110d] px-6 pb-12 pt-16 text-white sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_0.8fr_1.2fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teamm-gold">Navigate</p>
          <ul className="mt-5 space-y-3">
            <li>
              <NavLink href="/">Home</NavLink>
            </li>
            <li>
              <NavLink href="/gallery">Gallery</NavLink>
            </li>
            <li>
              <NavLink href="/about">About</NavLink>
            </li>
            <li>
              <NavLink href="/about/cast">The Cast</NavLink>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teamm-gold">Explore</p>
          <ul className="mt-5 space-y-3">
            <li>
              <NavLink href="/about/creative-team">Creative Team</NavLink>
            </li>
            <li>
              <NavLink href="/phil-woodmore">Phil Woodmore</NavLink>
            </li>
            <li>
              <NavLink href="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink href="/blog">Blog</NavLink>
            </li>
          </ul>
        </div>

        <div className="lg:pl-8">
          <Image
            src="/teamm-logo-full@2x.png"
            alt="Team M"
            width={500}
            height={160}
            className="w-full max-w-md"
          />
          <p className="mt-6 max-w-xl text-base leading-8 text-white/65">
            Team M is a new musical by Dr. Philip A. Woodmore exploring grief, healing, identity, and
            community through a contemporary original score.
          </p>

          <Tooltip.Provider delayDuration={100}>
            <div className="mt-6 flex items-center gap-4 text-2xl">
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <Link
                    href="https://www.facebook.com/profile.php?id=61576144800633"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-teamm-gold"
                  >
                    <FaFacebook />
                  </Link>
                </Tooltip.Trigger>
                <Tooltip.Content
                  side="top"
                  sideOffset={5}
                  className="rounded bg-gray-800 p-1 text-xs text-white shadow-lg"
                >
                  Facebook
                </Tooltip.Content>
              </Tooltip.Root>

              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <Link
                    href="https://www.instagram.com/teammthemusical/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:text-teamm-gold"
                  >
                    <FaInstagram />
                  </Link>
                </Tooltip.Trigger>
                <Tooltip.Content
                  side="top"
                  sideOffset={5}
                  className="rounded bg-gray-800 p-1 text-xs text-white shadow-lg"
                >
                  Instagram
                </Tooltip.Content>
              </Tooltip.Root>
            </div>
          </Tooltip.Provider>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-center">
        <p className="text-xs font-montserrat text-white/45">
          &copy; {currentYear} Team M: A New Musical. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
