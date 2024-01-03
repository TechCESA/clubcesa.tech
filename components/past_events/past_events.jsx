'use client';
import { pastEventInformation } from '@/event-data';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect } from 'react';
import EventPath from './events_path';
import PastEventCard from './past_events_components';

gsap.registerPlugin(ScrollTrigger);

export default function PastEvents() {
  const points = [0.08, 0.24, 0.41, 0.59, 0.76];
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
            start: `0% ${100 - points[index] * 100 * 2}%`,
            end: `10% ${100 - points[index] * 100 * 2}%`,
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
      <h1 className='my-12 text-4xl font-black'>Past Events</h1>
      <div className='flex h-[768px] flex-row justify-center'>
        <div className='flex flex-col pr-[5%] max-sm:hidden'>
          <div className='left-cards h-1/5'>
            <PastEventCard pastEvents={pastEventInformation[0]} />
          </div>
          <div className=' h-1/5 max-h-[25%] min-h-[10%]'></div>
          <div className='left-cards h-1/5'>
            <PastEventCard pastEvents={pastEventInformation[2]} />
          </div>
          <div className=' h-1/5 max-h-[25%] min-h-[10%]'></div>
          <div className='left-cards h-1/5'>
            <PastEventCard pastEvents={pastEventInformation[4]} />
          </div>
        </div>
        <EventPath />
        <div className='flex flex-col items-start pl-[5%] max-sm:hidden'>
          <div className=' h-1/5 max-h-[25%] min-h-[10%]'></div>
          <div className='right-cards h-1/5 '>
            <PastEventCard pastEvents={pastEventInformation[1]} />
          </div>
          <div className=' h-1/5 max-h-[25%] min-h-[10%]'></div>
          <div className='right-cards h-1/5'>
            <PastEventCard pastEvents={pastEventInformation[3]} />
          </div>
          <div className=' h-1/5 max-h-[25%] min-h-[10%]'></div>
        </div>
        <div className='flex translate-y-[20px] flex-col justify-between pl-10 sm:hidden'>
          <div className='right-cards-2 h-1/5 '>
            <PastEventCard pastEvents={pastEventInformation[0]} />
          </div>
          <div className='right-cards-2 h-1/5 '>
            <PastEventCard pastEvents={pastEventInformation[1]} />
          </div>
          <div className='right-cards-2 h-1/5 '>
            <PastEventCard pastEvents={pastEventInformation[2]} />
          </div>
          <div className='right-cards-2 h-1/5 '>
            <PastEventCard pastEvents={pastEventInformation[3]} />
          </div>
          <div className='right-cards-2 h-1/5 '>
            <PastEventCard pastEvents={pastEventInformation[4]} />
          </div>
        </div>
      </div>
    </div>
  );
}
