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
      className={`text-white duration-200 ease-in-out uppercase tracking-wide font-semibold hover:underline underline-offset-5 decoration-3 ${isActive ? 'underline underline-offset-5 decoration-3' : ''}`}
    >
      {children}
    </Link>
  );
};
