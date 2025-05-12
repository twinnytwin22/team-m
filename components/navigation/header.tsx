import React from "react";
import { NavLink } from "./navlink";
import Image from "next/image";

function Header() {
  return (
    <div className="w-full h-20 bg-teamm-green flex items-center justify-between px-4 fixed top-0 z-50 font-oswald">
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
        <div className="hidden md:flex space-x-5 items-center px-5">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/team">Cast + Creative</NavLink>
          <NavLink href="/services">Phil Woodmore</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;
