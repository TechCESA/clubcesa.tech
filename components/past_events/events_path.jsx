'use client';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect, useRef, useState } from 'react';
import { useScrollPercentage } from 'react-scroll-percentage';

gsap.registerPlugin(ScrollTrigger);

export default function EventPath() {
  const [ref, percentage] = useScrollPercentage({});
  let pathRef = useRef(null);
  const [flag, setFlag] = useState(true);
  const points = [0.13, 0.5];

  useEffect(() => {
    if (flag) {
      let topArray = gsap.utils.toArray('.circles');
      topArray.forEach((circle, index) => {
        gsap.fromTo(
          circle,
          {
            scale: 0,
          },
          {
            scrollTrigger: {
              trigger: '#path',
              start: `0% ${100 - points[index] * 100 * 2}%`,
              end: `10% ${100 - points[index] * 100 * 2}%`,
              scrub: 1,
            },
            scale: 1.2,
            ease: 'power4.inOut',
          }
        );
      });
      setFlag(false);
    }

    var pathLength = pathRef.getTotalLength();
    pathRef.style.strokeDasharray = pathLength + ' ' + pathLength;
    let drawOffset = pathLength * percentage * 0.8;
    pathRef.style.strokeDashoffset = pathLength - drawOffset;
  }, [percentage]);

  return (
    <div className='relative' ref={ref}>
      <div className='fixed top-0 bg-white'>
        <h2 className='bg-white text-black'>{percentage}</h2>
      </div>
      <div
        className={`circles absolute left-[50%] top-[24%] h-5 w-5 translate-x-[-50%] translate-y-[-50%] rounded-full bg-white`}
      ></div>
      <div
        className={`circles absolute left-[50%] top-[74%] h-5 w-5 translate-x-[-50%] translate-y-[-50%] rounded-full bg-white`}
      ></div>
      <svg
        ref={ref}
        viewBox='0 0 8 640'
        fill='none'
        height='100%'
        width={8}
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          id='path'
          ref={(ele) => (pathRef = ele)}
          d='M4 0V621V1022.5'
          stroke='white'
          strokeWidth='15'
        />
      </svg>
    </div>
  );
}
