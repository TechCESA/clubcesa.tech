'use client';

import { gsap } from 'gsap';
import { useEffect } from 'react';
import { TextPlugin } from 'gsap/all';
import '@/styles/heading.scss';
import { cn } from '@/lib/utils';

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

    return () => {
      textTl.kill();
    };
  });

  return (
    <div
      id='cesa'
      className='z-10 flex min-h-screen flex-col items-center justify-center pb-12'
    >
      <div className='pointer-events-none absolute inset-0 z-0 flex flex-col items-center justify-center gap-8 pt-8 text-9xl font-extrabold opacity-20'>
        <TextAnimation
          className='translate-x-10 text-black/20'
          text='Computer'
        />
        <TextAnimation
          className='-translate-x-40 text-black/40'
          text='Engineering'
        />
        <TextAnimation className='text-black/60' text='Students' />
        <TextAnimation
          className='-translate-x-40 text-black/40'
          text='Association'
        />
      </div>
      <div
        className='glitch text-center text-8xl font-black leading-none tracking-wider sm:text-[12rem]'
        data-text='CESA'
      >
        CESA
      </div>

      <h3 className='text-cesa-blue font-bold sm:text-2xl' id='quote'>
        Community <span id='text'></span>
        <span id='cursor' className='font-normal'>
          |
        </span>{' '}
        Students
      </h3>
    </div>
  );
}

function TextAnimation({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'flex flex-row justify-around gap-12 overflow-hidden whitespace-nowrap pb-6',
        className,
      )}
    >
      <span>{text}</span>
      <span>{text}</span>
      <span>{text}</span>
      <span>{text}</span>
    </div>
  );
}
