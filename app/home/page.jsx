'use client';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import Image from 'next/image.js';
import React, { useEffect } from 'react';
import Cloud1 from '@/public/images/cloud1.png';
import Cloud2 from '@/public/images/cloud2.png';

export default function Page() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();

    tl.to('#cloud1', {
      x: -1200,
      scale: 2,
      duration: 3,
    }).to(
      '#cloud2',
      {
        x: 1200,
        scale: 2,
        duration: 3,
      },
      '-=3'
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });

      tl.kill();
    };
  }, []);

  return (
    <div className='relative min-h-screen overflow-hidden bg-[url("/images/Earth-Horizon.jpg")] bg-cover bg-fixed bg-no-repeat'>
      {/* <div className='relative h-screen w-full'> */}
      <Image
        src={Cloud1}
        alt='Cloud1 image'
        className='absolute -left-96 top-16 h-full w-full rotate-180'
        priority={true}
        id='cloud1'
      />
      <Image
        src={Cloud2}
        alt='Cloud2 image'
        className='absolute -right-96 top-16 h-full w-full rotate-0'
        priority={true}
        id='cloud2'
      />
      {/* </div> */}
    </div>
  );
}
