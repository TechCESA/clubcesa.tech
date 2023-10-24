'use client';

import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import { TextPlugin } from 'gsap/all';

export default function Hero() {
  const HEADING = 'CESA';
  const QUOTEWORDS = ['Of', 'By', 'For'];

  const headingRef = useRef(null);

  const randomChar = () =>
    HEADING.charAt(Math.floor(Math.random() * HEADING.length));

  function appearTitle(titlePart, delay) {
    for (let i = 0; i < titlePart.current.children.length; i++) {
      let char = titlePart.current.children[i].children[0];
      let initState = char.innerHTML;

      let inc = 0;
      let dur = 0.8;
      let startDate = 0;
      let del = i * 0.5 + delay;

      gsap.fromTo(
        char,
        {
          opacity: 0,
          // k: '-10%',
        },
        {
          duration: dur,
          delay: del,
          opacity: 1,
          ease: 'power3.Out',
          x: 0,
          onStart() {
            startDate = Date.now();
          },
          onUpdate: () => {
            if (inc % 3 === 0) char.innerHTML = randomChar();
            inc++;
            if (Date.now() - startDate >= (dur - 0.1) * 1000)
              char.innerHTML = initState;
          },
        }
      );
    }
  }

  useEffect(() => {
    appearTitle(headingRef, 1);

    gsap.to('#cursor', {
      opacity: 0,
      ease: 'bounce.in',
      repeat: -1,
      duration: 0.4,
    });

    gsap.registerPlugin(TextPlugin); // Register the TextPlugin

    const textTl = gsap.timeline({ repeat: -1 });

    QUOTEWORDS.forEach((w) => {
      const tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 });
      tl.to('#text', { duration: 1, text: w });
      textTl.add(tl);
    });

    return () => {
      textTl.kill();
    };
  });

  return (
    <div className='flex min-h-[80vh] flex-col items-center justify-center sm:min-h-[90vh]'>
      <h1
        className='text-8xl font-black leading-none tracking-wider sm:text-[12rem]'
        ref={headingRef}
      >
        {HEADING.split('').map((el, i) => {
          return (
            <span key={i}>
              <span>{el}</span>
            </span>
          );
        })}
      </h1>

      <h3 className='font-bold sm:text-2xl'>
        Community <span id='text'></span>
        <span id='cursor'>|</span> Students
      </h3>
    </div>
  );
}
