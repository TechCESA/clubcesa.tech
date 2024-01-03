'use client';

import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Picture_1 from '@/public/carousel/image-1.avif';
import Picture_2 from '@/public/carousel/image-2.avif';
import Picture_3 from '@/public/carousel/image-3.avif';
import Picture_4 from '@/public/carousel/image-4.avif';
import Picture_5 from '@/public/carousel/image-5.avif';

const slides = [Picture_1, Picture_2, Picture_3, Picture_4, Picture_5];

export default function Carousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);

  return (
    <div className='overflow-hidden' ref={emblaRef}>
      <div className='flex h-[70vh] touch-pan-y'>
        {slides.map((img) => (
          <div
            className='mx-4 min-w-0 flex-shrink-0 flex-grow-0 basis-full'
            key={Math.random().toString()}
          >
            <Image
              src={img}
              alt='img'
              height={1024}
              width={1024}
              className='block h-full w-full object-cover object-center'
            />
          </div>
        ))}
      </div>
    </div>
  );
}
