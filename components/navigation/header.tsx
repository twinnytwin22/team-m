"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavLink } from "./navlink";

const desktopRoutes = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  {
    href: "/about",
    label: "About",
    children: [
      { href: "/about/cast", label: "The Cast" },
      { href: "/about/creative-team", label: "Creative Team" },
    ],
  },
  { href: "/phil-woodmore", label: "Phil Woodmore" },
  { href: "/contact", label: "Contact" },
];

const mobileRoutes = [
  { href: "/", label: "Home" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/about/cast", label: "The Cast", nested: true },
  { href: "/about/creative-team", label: "Creative Team", nested: true },
  { href: "/phil-woodmore", label: "Phil Woodmore" },
  { href: "/contact", label: "Contact" },
];

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[rgba(13,64,36,0.92)] shadow-[0_10px_30px_rgba(0,0,0,0.14)] backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <NavLink href="/">
            <Image
              src="/teamm-logo-m.png"
              alt="Team M"
              width={100}
              height={100}
              className="h-16 w-auto"
            />
          </NavLink>

          <nav className="hidden items-center space-x-6 pl-6 md:flex">
            {desktopRoutes.map((route) => {
              if (!route.children) {
                return (
                  <NavLink key={route.href} href={route.href}>
                    {route.label}
                  </NavLink>
                );
              }

              return (
                <div key={route.href} className="group relative">
                  <div className="flex items-center space-x-1 text-white">
                    <Link
                      href={route.href}
                      className="text-sm font-semibold uppercase tracking-[0.14em] transition hover:underline underline-offset-4 decoration-2"
                    >
                      {route.label}
                    </Link>
                    <svg
                      className="h-4 w-4 transition-transform group-hover:rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>

                  <div className="invisible absolute left-0 top-full mt-3 w-56 rounded-2xl border border-black/10 bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    {route.children.map((childRoute) => (
                      <Link
                        key={childRoute.href}
                        href={childRoute.href}
                        className="block rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#151812] transition hover:bg-black/[0.04]"
                      >
                        {childRoute.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </nav>
        </div>

        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              className="text-white focus:outline-none"
              aria-label="Open navigation menu"
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
            </SheetTrigger>
            <SheetContent side="left" className="border-none bg-[#0d4024] p-6 text-white">
              <nav className="mt-10 flex flex-col space-y-4 text-lg">
                {mobileRoutes.map((route) => (
                  <div
                    key={route.href}
                    className={route.nested ? "ml-4 border-l-2 border-teamm-gold pl-4" : ""}
                  >
                    <NavLink href={route.href}>{route.label}</NavLink>
                  </div>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default Header;
