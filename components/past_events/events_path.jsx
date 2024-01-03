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
  const points = [0.08, 0.24, 0.41, 0.59, 0.76];

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
    let drawOffset = pathLength * percentage * 1.2;
    pathRef.style.strokeDashoffset = pathLength - drawOffset;
  }, [percentage]);

  return (
    <div className='relative' ref={ref}>
      <div
        className={`circles absolute left-[50%] top-[12%] h-5 w-5 translate-x-[-50%] translate-y-[-50%] rounded-full bg-white`}
      ></div>
      <div
        className={`circles absolute left-[50%] top-[32%] h-5 w-5 translate-x-[-50%] translate-y-[-50%] rounded-full bg-white`}
      ></div>
      <div
        className={`circles absolute left-[50%] top-[52%] h-5 w-5 translate-x-[-50%] translate-y-[-50%] rounded-full bg-white`}
      ></div>
      <div
        className={`circles absolute left-[50%] top-[72%] h-5 w-5 translate-x-[-50%] translate-y-[-50%] rounded-full bg-white`}
      ></div>
      <div
        className={`circles absolute left-[50%] top-[92%] h-5 w-5 translate-x-[-50%] translate-y-[-50%] rounded-full bg-white`}
      ></div>
      <svg
        ref={ref}
        viewBox='0 0 8 1021'
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
          stroke-width='6'
        />
      </svg>
    </div>
  );
}
