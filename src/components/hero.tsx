'use client';

import { gsap } from 'gsap';
import { useEffect } from 'react';
import { TextPlugin } from 'gsap/all';
import '@/styles/heading.scss';

gsap.registerPlugin(TextPlugin); // Register the TextPlugin

export default function Hero() {
  const QUOTEWORDS = ['For', 'Of', 'By'];

  useEffect(() => {
    const textTl = gsap.timeline({ repeat: -1 });

    QUOTEWORDS.forEach((w) => {
      const tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
      tl.to('#text', { duration: 1, text: w });
      textTl.add(tl);
    });

    gsap.to('#cursor', {
      opacity: 0,
      ease: 'bounce.in',
      repeat: -1,
      duration: 0.4,
    });

    const quote = document.getElementById('quote');
    gsap.set(quote, { opacity: 0 }); // Set initial opacity to 0 (completely hidden)
    const quoteTimeout = setTimeout(() => {
      gsap.to(quote, { opacity: 1, duration: 1, ease: 'power2.out' }); // Smoothly fade in the navbar over 1 second
    }, 3000);

    return () => {
      textTl.kill();
      clearTimeout(quoteTimeout);
    };
  });

  return (
    <div
      id='cesa'
      className='z-0 flex min-h-screen flex-col items-center justify-center pb-64 md:pb-48'
    >
      <div
        className='glitch text-center text-8xl font-black leading-none tracking-wider sm:text-[12rem]'
        data-text='CESA'
      >
        CESA
      </div>

      <h3 className='font-bold text-[#dfbfbf] sm:text-2xl' id='quote'>
        Community <span id='text'></span>
        <span id='cursor' className='font-normal'>
          |
        </span>{' '}
        Students
      </h3>
    </div>
  );
}
