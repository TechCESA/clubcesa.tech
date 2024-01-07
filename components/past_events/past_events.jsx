'use client';

import { pastEventInformation } from '@/actions/event-data';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect } from 'react';
import EventPath from './events_path';
import PastEventCard from './past_events_components';

gsap.registerPlugin(ScrollTrigger);

const points = [0.13, 0.5];

export default function PastEvents() {
  useEffect(() => {
    let leftCards = gsap.utils.toArray('.left-cards');
    leftCards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          x: -100,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: '#path',
            start: `0% ${100 - points[2 * index] * 100 * 2}%`,
            end: `10% ${100 - points[2 * index] * 100 * 2}%`,
            scrub: 1,
          },
          x: 0,
          opacity: 1,
        }
      );
    });

    let rightCards = gsap.utils.toArray('.right-cards');
    rightCards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { x: 100, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '#path',
            start: `0% ${100 - points[2 * index + 1] * 100 * 2}%`,
            end: `10% ${100 - points[2 * index + 1] * 100 * 2}%`,
            scrub: 1,
          },
          x: 0,
          opacity: 1,
        }
      );
    });

    let rightCards2 = gsap.utils.toArray('.right-cards-2');
    rightCards2.forEach((card, index) => {
      gsap.fromTo(
        card,
        { x: 100, opacity: 0 },
        {
          scrollTrigger: {
            trigger: '#path',
            start: `0% ${100 - points[index * 1] * 100 * 2}%`,
            end: `10% ${100 - points[index * 1] * 100 * 2}%`,
            scrub: 1,
          },
          x: 0,
          opacity: 1,
        }
      );
    });
  }, []);

  return (
    <div id='pastevents'>
      <h1 className='my-12 text-4xl font-black'>Past&nbsp;&nbsp;Events</h1>
      <div className='mb-16 flex w-full flex-row justify-center overflow-hidden'>
        <div className='flex flex-col justify-between pr-[5%] max-sm:hidden'>
          <div className='left-cards my-5'>
            <PastEventCard pastEvents={pastEventInformation[0]} />
          </div>
          <div className='shrink grow basis-auto'></div>
        </div>
        <EventPath />
        <div className='flex flex-col justify-between pl-[5%] max-sm:hidden'>
          <div className='shrink grow basis-auto'></div>
          <div className='right-cards my-5'>
            <PastEventCard pastEvents={pastEventInformation[1]} />
          </div>
        </div>
        <div className='flex flex-col pl-4 sm:hidden'>
          <div className='right-cards-2 my-5'>
            <PastEventCard pastEvents={pastEventInformation[0]} />
          </div>
          <div className='right-cards-2 my-5'>
            <PastEventCard pastEvents={pastEventInformation[1]} />
          </div>
        </div>
      </div>
    </div>
  );
}
