'use client';

import gsap from 'gsap';
import Image from 'next/image';
import { useEffect } from 'react';

import Hero from '@/components/hero.jsx';
import Navbar from '@/components/navbar.jsx';
import About from '@/components/about.jsx';
import Cloud from '@/public/images/wcloud.png';

export default function Page() {
  useEffect(() => {
    // To prevent automatic browser scroll on refresh
    history.scrollRestoration = 'manual';

    const tl = gsap.timeline();

    tl.to('#cloud1', {
      x: -1500,
      scale: 2.5,
      duration: 3,
    }).to(
      '#cloud2',
      {
        x: 1500,
        scale: 2.5,
        duration: 3,
      },
      '-=3'
    );

    // Delay the display of the navbar for 2 seconds
    const navbar = document.getElementById('navbar');
    // gsap.set(navbar, { opacity: 0 }); // Set initial opacity to 0 (completely hidden)
    const navTimeout = setTimeout(() => {
      gsap.to(navbar, { opacity: 1, duration: 1, ease: 'power2.out' }); // Smoothly fade in the navbar over 1 second
    }, 2000);

    return () => {
      tl.kill();
      clearTimeout(navTimeout);
    };
  }, []);

  return (
    <>
      <div className='relative min-h-screen overflow-hidden bg-[url("/crowd/background-cropped.png")] bg-cover bg-fixed bg-no-repeat'>
        <Image
          src={Cloud}
          alt='Cloud image'
          className='absolute -left-[30%] top-0 z-10 w-full rotate-0 scale-150'
          priority={true}
          id='cloud1'
          draggable={false}
        />
        <Image
          src={Cloud}
          alt='Cloud image'
          className='absolute -right-[30%] top-0 z-10 w-full rotate-180 scale-150'
          priority={true}
          id='cloud2'
          draggable={false}
        />
        <main className='m-auto max-w-[90vw] sm:max-w-[75vw]'>
          <Navbar />
          <Hero />
        </main>
        <div className='bg-black'>
          <div className='m-auto max-w-[90vw] sm:max-w-[75vw]'>
            <About />
            {/* 

             // add your code here
    
            */}
          </div>
        </div>
      </div>
    </>
  );
}
