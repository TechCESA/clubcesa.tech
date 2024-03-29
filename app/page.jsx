'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Image from 'next/image';
import { useEffect } from 'react';

import About from '@/components/about.jsx';
import Events from '@/components/events/events';
import Hero from '@/components/hero.jsx';
import Navbar from '@/components/navbar.jsx';
import PastEvents from '@/components/past_events/past_events';
import Teams from '@/components/teams/teams';
import Crowd from '@/public/images/crowd.png';
import Cloud from '@/public/images/wcloud.png';

gsap.registerPlugin(ScrollTrigger); // Register the TextPlugin

export default function Page() {
  useEffect(() => {
    // To prevent automatic browser scroll on refresh
    history.scrollRestoration = 'manual';

    const tl = gsap.timeline();
    const t2 = gsap.timeline();
    const t3 = gsap.timeline();

    tl.to('#cloud1', {
      x: `-150%`,
      scale: 2.5,
      duration: 4,
    }).to(
      '#cloud2',
      {
        x: `150%`,
        scale: 2.5,
        duration: 4,
      },
      '-=4'
    );

    t2.fromTo(
      '#cesa',
      {
        y: -150,
      },
      {
        scrollTrigger: {
          trigger: '#background',
          start: 'top 35%',
          end: 'bottom 35%',
          scrub: true,
          // markers: true,
        },
        y: 150,
        duration: 5,
        zIndex: 0,
        ease: 'slow(0.7, 0.7, false)',
      }
    );

    t3.fromTo(
      '#crowd-back',
      {
        y: -150,
      },
      {
        scrollTrigger: {
          trigger: '#background',
          start: 'top 35%',
          end: 'bottom 35%',
          scrub: true,
          // markers: true,
        },
        y: 150,
        duration: 5,
        zIndex: 0,
        ease: 'slow(1, 1, false)',
      }
    );

    // Delay the display of the navbar for 2 seconds
    const navbar = document.getElementById('navbar');
    // gsap.set(navbar, { opacity: 0 }); // Set initial opacity to 0 (completely hidden)
    const navTimeout = setTimeout(() => {
      gsap.to(navbar, { opacity: 1, duration: 1, ease: 'power2.out' }); // Smoothly fade in the navbar over 1 second
    }, 2000);

    const overflowTimeout = setTimeout(() => {
      document.body.style.overflow = 'auto';
    }, 4000);

    return () => {
      tl.kill();
      t2.kill();
      t3.kill();
      clearTimeout(navTimeout);
      clearTimeout(overflowTimeout);

      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <div
        id='background'
        className='relative min-h-screen overflow-hidden bg-[url("/images/background.png")] bg-cover bg-fixed bg-center bg-no-repeat md:bg-top'
      >
        <Image
          src={Cloud}
          alt='Cloud image'
          className='absolute -left-[30%] top-0 z-20 w-full rotate-0 scale-[6] md:scale-150'
          priority={true}
          id='cloud1'
          draggable={false}
        />
        <Image
          src={Cloud}
          alt='Cloud image'
          className='absolute -right-[30%] top-0 z-20 w-full rotate-180 scale-[6] md:scale-150'
          priority={true}
          id='cloud2'
          draggable={false}
        />
        <Image
          src={Crowd}
          alt='Crowd'
          id='crowd-front'
          className='absolute bottom-0 z-10 mt-28 hidden w-full object-cover object-center min-[800px]:block'
        />
        <Image
          src={Crowd}
          alt='Crowd'
          id='crowd-back'
          className='absolute bottom-0 z-10 mb-12 hidden w-full -scale-x-100 object-cover object-center min-[800px]:block'
        />
        <div className='absolute -bottom-10 -left-12 z-20 h-[80px] w-[120%] bg-[#121212] blur-xl'></div>
        {/* <div className='absolute -left-12 -top-10 z-10 h-[120px] w-[120%] bg-[#121212]/80 blur-2xl'></div> */}
        <main className='mx-auto max-w-7xl'>
          <Navbar />
          <Hero />
        </main>
      </div>
      <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20'>
        <Events />
        <PastEvents />
      </div>
      <About />
      <div className='mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20'>
        <Teams />
      </div>
    </>
  );
}
