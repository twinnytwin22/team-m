'use client'

import React from 'react'
import Image from 'next/image'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { cn } from '@/lib/utils'

type SliderImage = {
  src: string
  alt: string
}

type PhotoSlider1Props = {
  images?: SliderImage[]
  className?: string
  imageClassName?: string
  slideClassName?: string
  loop?: boolean
  showArrows?: boolean
}

const defaultImages: SliderImage[] = [
  { src: '/slider/IMG_7337.JPG', alt: 'Team M rehearsal wide shot' },
  { src: '/slider/IMG_7338.JPG', alt: 'Speaker in red shirt at table read' },
  { src: '/slider/IMG_7339.JPG', alt: 'Cast members reviewing script pages' },
  { src: '/slider/IMG_7340.JPG', alt: 'Performer speaking during rehearsal' },
  { src: '/slider/IMG_7341.JPG', alt: 'Students reading scripts in theater seats' },
  { src: '/slider/IMG_7345.JPG', alt: 'Team M members posing in green shirts' },
  { src: '/slider/IMG_7346.JPG', alt: 'Cast members reacting during table read' },
  { src: '/slider/IMG_7349.JPG', alt: 'Performer reading script with gesture' },
]

function PhotoSlider1({
  images = defaultImages,
  className,
  imageClassName,
  slideClassName,
  loop = true,
  showArrows = true,
}: PhotoSlider1Props) {
  if (!images.length) return null

  return (
    <div className={cn('relative w-full', className)}>
      <Carousel
        opts={{
          align: 'center',
          loop,
          slidesToScroll: 1,
        }}
        className="w-full"
      >
        <CarouselContent>
          {images.map((image, idx) => (
            <CarouselItem
              key={`${image.src}-${idx}`}
              className={cn('basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4', slideClassName)}
            >
              <div className="overflow-hidden rounded-xl border border-black/10 bg-black/5">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1600}
                  height={1000}
                  priority={idx === 0}
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 92vw, 1200px"
                  className={cn(
                    'h-[220px] w-full object-cover sm:h-[260px] lg:h-[280px] xl:h-[300px]',
                    imageClassName
                  )}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {showArrows && (
          <>
            <CarouselPrevious className="left-3 z-10 border-white/80 bg-white/90 hover:bg-white" />
            <CarouselNext className="right-3 z-10 border-white/80 bg-white/90 hover:bg-white" />
          </>
        )}
      </Carousel>
    </div>
  )
}

export default PhotoSlider1