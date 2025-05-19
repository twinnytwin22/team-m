'use client'
import React from 'react'
import Image from 'next/image'
import { Card, CardContent } from './ui/card'

const images = [
  { src: "/general/image_1.jpeg", alt: "Team M 1" },
  { src: "/general/image_2.jpeg", alt: "Team M 2" },
  { src: "/general/image_3.jpeg", alt: "Team M 3" },
  // Add more images if needed
]

function PhotoGallery() {
  return (
    <div className="w-full py-8 px-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {images.map((img, idx) => (
          <Card key={idx} className="overflow-hidden shadow-lg">
            <CardContent className="p-0">
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={400}
                className="w-full h-64 object-cover"
                priority={idx === 0}
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default PhotoGallery