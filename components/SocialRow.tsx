import React from 'react'
import * as Tooltip from "@radix-ui/react-tooltip";
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import Link from 'next/link';

type SocialRowProps = {
  iconColor?: string
}

function SocialRow({ iconColor = "green" }: SocialRowProps) {
  return (
    <Tooltip.Provider delayDuration={100}>
      <div className="flex items-center justify-center gap-4">
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <Link
              href="https://www.facebook.com/profile.php?id=61576144800633"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook color={iconColor} />
            </Link>
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
            <Link
              href="https://www.instagram.com/teammthemusical/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram color={iconColor} />
            </Link>
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
