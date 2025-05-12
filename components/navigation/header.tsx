import React from 'react'
import DarkModeSwitch from '../ThemeToggle'
import { NavLink } from './navlink'

function Header() {
  return (
    <div className='w-full h-20 bg-teamm-green flex items-center justify-between px-4 fixed top-0 z-50'>
      <NavLink href='/'>
        <h1 className='text-teamm-gold font-montserrat text-2xl font-bold'>Teamm</h1>
      </NavLink>
      <DarkModeSwitch/>
    </div>
  )
}

export default Header