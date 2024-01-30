'use client';

import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export default function Carousel({ images }) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);

  return (
    <div className='overflow-hidden' ref={emblaRef}>
      <div className='flex h-full touch-pan-y md:h-[70vh]'>
        {images.map((img) => (
          <div
            className='min-w-0 flex-shrink-0 flex-grow-0 basis-full'
            key={Math.random().toString()}
          >
            <Image
              src={img}
              alt={img}
              height={512}
              width={512}
              quality={100}
              className='m-auto block h-full w-[95%] object-cover object-center md:w-[70%]'
            />
          </div>
        ))}
      </div>
    </div>
  );
}
