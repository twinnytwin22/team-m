import React from 'react'
import * as Tooltip from "@radix-ui/react-tooltip";
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { NavLink } from './navigation/navlink';

type SocialRowProps = {
  iconColor?: string
}

function SocialRow({ iconColor = "green" }: SocialRowProps) {
  return (
    <Tooltip.Provider delayDuration={100}>
      <div className="flex items-center justify-center gap-4">
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <NavLink href="https://www.facebook.com/profile.php?id=61576144800633">
              <FaFacebook color={iconColor} />
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
            <NavLink href="https://www.instagram.com/teammthemusical/">
              <FaInstagram color={iconColor} />
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
  )
}

export default SocialRow