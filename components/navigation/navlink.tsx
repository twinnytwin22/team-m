'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`text-sm font-semibold uppercase tracking-[0.14em] text-white transition duration-200 ease-in-out hover:underline underline-offset-4 decoration-2 ${isActive ? "underline underline-offset-4 decoration-2" : ""}`}
    >
      {children}
    </Link>
  );
};
