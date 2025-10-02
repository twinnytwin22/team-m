'use client';

import React, { useState } from "react";
import { NavLink } from "./navlink";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import Link from "next/link";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-20 bg-teamm-green flex items-center justify-between px-4 fixed top-0 z-50 font-oswald">
      {/* Left Section with Logo */}
      <div className="flex items-center">
        <NavLink href="/">
          <Image
            src={"/teamm-logo-m.png"}
            alt="Teamm Logo"
            width={100}
            height={100}
            className="h-16 w-auto pl-6"
          />
        </NavLink>
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-5 items-center px-5">
          <NavLink href="/">Home</NavLink>
          
          {/* About Dropdown */}
          <div className="relative group">
            <div className="flex items-center space-x-1 cursor-pointer text-white duration-200 ease-in-out font-oswald uppercase tracking-wide font-semibold hover:underline underline-offset-5 decoration-3">
              <Link href="/about">About</Link>
              <svg 
                className="w-4 h-4 transition-transform group-hover:rotate-180" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            
            {/* Dropdown Menu */}
            <div className="absolute left-0 top-full mt-2 w-52 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="py-2">
     
                <Link 
                  href="/about/team" 
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors font-oswald uppercase tracking-wide font-semibold w-full"
                >
                  The Creative Team
                </Link>
              </div>
            </div>
          </div>
          
          <NavLink href="/phil-woodmore">Phil Woodmore</NavLink>
          <div className="hidden">
          <NavLink href="/join-the-team">Join The Team!</NavLink>
          </div>
        </div>
      </div>

      {/* Reserve Tickets Button (Desktop) */}
      <div className="hidden md:flex cursor-pointer">
        <Button className=" bg-teamm-gold text-black font-bold uppercase cursor-pointer">
          <Link target="_blank" href={'https://www.cocastl.org/calendar/team-m'}>
            Reserve Tickets
          </Link>
        </Button>
      </div>

      {/* Hamburger Menu (Mobile) */}
      <div className="md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger>
            <div
              className="text-white focus:outline-none"
            // aria-label="Open Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
          </SheetTrigger>
          <SheetContent side="left" className="bg-teamm-green text-white p-6">
            <nav className="flex flex-col space-y-4 text-lg mt-10">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about">About</NavLink>
              <div className="ml-4 border-l-2 border-teamm-gold pl-4">
                <NavLink href="/about/team">The Team</NavLink>
              </div>
              <NavLink href="/phil-woodmore">Phil Woodmore</NavLink>
              <Button className="mt-6 bg-teamm-gold text-black font-bold uppercase">
                <Link target="_blank" href={'https://www.cocastl.org/calendar/team-m'}>
                  Reserve Tickets
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}

export default Header;
