import React from 'react'
import DarkModeSwitch from '../ThemeToggle'
import { NavLink } from './navlink'
import Image from 'next/image'

function Header() {
  return (
    <div className='w-full h-20 bg-teamm-green flex items-center justify-between px-4 fixed top-0 z-50'>
      <div className=''>
        <Image src={'/teamm-logo-full.png'} alt='Teamm Logo' width={100} height={100} className='h-16 w-auto'/>
      </div>
      <NavLink href='/'>
        <h1 className='text-teamm-gold font-montserrat text-2xl font-bold'>Teamm</h1>
      </NavLink>
      <DarkModeSwitch/>
    </div>
  )
}

export default Header