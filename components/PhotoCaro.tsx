'use client'
import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import Image from 'next/image'

const images = [
  { src: "/general/image_1.jpeg", alt: "Team M 1" },
  { src: "/general/image_2.jpeg", alt: "Team M 2" },
  { src: "/general/image_3.jpeg", alt: "Team M 3" },
  // Add more images if neededs
]

function chunkArray<T>(arr: T[], size: number): T[][] {
  const result = []
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size))
  }
  return result
}

function PhotoCaro() {
  const columns = 2
  const slides = chunkArray(images, columns)

  return (
    <div className="relative">
      <Carousel
        opts={{
          align: 'start',
          startIndex: 0,
          slidesToScroll: 1,
          loop: true,
          
          breakpoints: {
            640: {
              slidesToScroll: 1,
              slides: '2'
            }}
        }}
        className="w-full h-auto"
      >
        <CarouselContent>
          {slides.map((slide, idx) => (
            <CarouselItem key={idx}>
              <div className="flex gap-4">
                {slide.map((img, i) => (
                  <div key={i} className="flex-1 min-w-0">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      width={400}
                      height={250}
                      className="rounded object-cover w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="z-50" />
        <CarouselNext className="z-50" />
      </Carousel>
    </div>
  )
}

export default PhotoCaro