'use client';

import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import { TextPlugin } from 'gsap/all';

export default function Hero() {
  const TITLE = 'CESA';
  const titleParent = useRef(null);

  function randChar() {
    const sample = '#$@%&*!~<>?';
    return sample.charAt(Math.floor(Math.random() * sample.length));
  }

  function appearTitle(titlePart, delay) {
    for (let i = 0; i < titlePart.current.children.length; i++) {
      let char = titlePart.current.children[i].children[0];
      let initState = char.innerHTML;
      let inc = 0;
      let dur = 0.5;
      let startDate = 0;
      let del = i * 0.2 + delay;
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
            if (inc % 3 === 0) char.innerHTML = randChar();
            inc++;
            if (Date.now() - startDate >= (dur - 0.1) * 1000)
              char.innerHTML = initState;
          },
        }
      );
    }
  }

  useEffect(() => {
    appearTitle(titleParent, 0.5);
  });

  return (
    <div className='flex min-h-[80vh] flex-col items-center justify-center sm:min-h-[90vh]'>
      <h1
        className='text-8xl font-black leading-none tracking-wider sm:text-[12rem]'
        ref={titleParent}
      >
        {TITLE.split('').map((el, i) => {
          return (
            <span key={i}>
              <span>{el}</span>
            </span>
          );
        })}
      </h1>
      <h3 className='font-bold sm:text-2xl'>
        Community <AnimatedText /> Students
      </h3>
    </div>
  );
}

function AnimatedText() {
  const WORDS = ['Of', 'By', 'For'];
  const spanRef = useRef(null);

  useEffect(() => {
    const span = spanRef.current;
    let wordIndex = 0;

    gsap.registerPlugin(TextPlugin); // Register the TextPlugin

    function animateWord() {
      const currentWord = WORDS[wordIndex];

      gsap.to(span, {
        duration: 1,
        text: { value: currentWord },
        ease: 'power3.inOut',
        onComplete: function () {
          // Change the word and restart the animation
          wordIndex = (wordIndex + 1) % WORDS.length;
          animateWord();
        },
      });
    }

    animateWord();
  }, []);

  return (
    <span ref={spanRef} id='animated-text'>
      {WORDS[0]}
    </span>
  );
}
