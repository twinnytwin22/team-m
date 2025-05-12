import React from "react";
import * as Tooltip from "@radix-ui/react-tooltip";
import Image from "next/image";
import { NavLink } from "./navlink";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { PiXLogo } from "react-icons/pi";

function Footer() {
  return (
    <footer className="bg-black text-white pt-12 px-5 pb-24">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-y-8 lg:gap-y-0 lg:justify-between">
        {/* First column: Navigation Links */}
        <div className="flex-1 space-y-2 text-center lg:text-left lg:space-x-4 text-3xl">
          <ul className="space-y-2">
            <li className="py-2">
              <NavLink href="/home">Home</NavLink>
            </li>
            <li className="py-2">
              <NavLink href="/about">About</NavLink>
            </li>
            <li className="py-2">
              <NavLink href="/services">Cast + Creative</NavLink>
            </li>
          </ul>
        </div>

        {/* Second column: Additional Navigation Links */}
        <div className="flex-1 space-y-2 text-center lg:text-left lg:space-x-4 text-3xl">
          <nav>
            <ul className="list-none p-0 space-y-2">
            <li className="py-2">
                <NavLink href="/careers">Phil Woodmore</NavLink>
              </li>
              <li className="py-2">
                <NavLink href="/blog">Blog</NavLink>
              </li>
             
              <li className="py-2">
                <NavLink href="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>
        </div>

        {/* Third column: Logo and Social Icons */}
        <div className="flex-1 text-center text-2xl">
          <div className="mb-5">
            <Image
              src="/teamm-logo-full@2x.png"
              alt="Logo"
              width={500}
              height={300}
              className="w-md lg:w-full px-10 mx-auto"
            />
          </div>
          <Tooltip.Provider delayDuration={100}>
            <div className="flex items-center justify-center gap-4">
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <NavLink href="https://facebook.com">
                    <FaFacebook />
                  </NavLink>
                </Tooltip.Trigger>
                <Tooltip.Content
                  side="top"
                  sideOffset={5}
                  className="bg-gray-800 text-white p-1 rounded shadow-lg text-xs"
                >
                  Facebook
                </Tooltip.Content>
              </Tooltip.Root>

              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <NavLink href="https://twitter.com">
                    <PiXLogo />
                  </NavLink>
                </Tooltip.Trigger>
                <Tooltip.Content
                  side="top"
                  sideOffset={5}
                  className="bg-gray-800 text-white p-1 rounded shadow-lg text-xs"
                >
                  Twitter
                </Tooltip.Content>
              </Tooltip.Root>

              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <NavLink href="https://instagram.com">
                    <FaInstagram />
                  </NavLink>
                </Tooltip.Trigger>
                <Tooltip.Content
                  side="top"
                  sideOffset={5}
                  className="bg-gray-800 text-white p-1 rounded shadow-lg text-xs"
                >
                  Instagram
                </Tooltip.Content>
              </Tooltip.Root>
            </div>
          </Tooltip.Provider>
        </div>
      </div>
    </footer>
  );
}

export default Footer;