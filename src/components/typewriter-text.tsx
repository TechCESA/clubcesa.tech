'use client';

import Typewriter from 'typewriter-effect';

export function TypewriterText() {
  return (
    <Typewriter
      component='span'
      options={{
        strings: ['For', 'Of', 'By'],
        autoStart: true,
        loop: true,
      }}
    />
  );
}
