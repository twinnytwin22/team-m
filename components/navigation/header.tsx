import React from 'react'
import DarkModeSwitch from '../ThemeToggle'
import { NavLink } from './navlink'
import Image from 'next/image'

function Header() {
  return (
    <div className='w-full h-20 bg-teamm-green flex items-center justify-between px-4 fixed top-0 z-50'>
      <NavLink href='/'>
        <Image src={'/teamm-logo-m.png'} alt='Teamm Logo' width={100} height={100} className='h-16 w-auto pl-6'/>
      </NavLink>
        <h1 className='text-teamm-gold font-montserrat text-2xl font-bold'></h1>
    </div>
  )
}

export default Header