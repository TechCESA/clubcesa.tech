'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Profile from '../profile';
import { CESA_TEAM, creative_team } from '@/actions/teams';

export default function Carousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ]);

  return (
    <div className='overflow-hidden' ref={emblaRef}>
      <div className='flex h-full touch-pan-y md:h-[70vh]'>
        {CESA_TEAM.map(({ team_name, lead, jt_lead }) => (
          <div
            className='min-w-0 flex-shrink-0 flex-grow-0 basis-full'
            key={Math.random().toString()}
          >
            <div className='m-auto flex w-[80%] flex-col items-center gap-12 py-12'>
              <h1 className='text-2xl font-bold'>
                {team_name.replace(/[\s]/g, '\u00a0\u00a0')}
              </h1>
              <div className='flex w-full flex-col items-center justify-evenly gap-8 md:flex-row'>
                <Profile {...lead} />
                <Profile {...jt_lead} />
              </div>
            </div>
          </div>
        ))}
        <div className='min-w-0 flex-shrink-0 flex-grow-0 basis-full'>
          <div className='m-auto flex w-[80%] flex-col items-center gap-12 py-12'>
            <h1 className='whitespace-normal text-2xl font-bold'>
              {/* {creative_team.team_name.replace(/[\s]/g, '&npsp;')} */}
              {creative_team.team_name}
            </h1>
            <div className='hidden w-full flex-row items-center justify-evenly gap-8 md:flex'>
              <Profile {...creative_team.jt_lead_1} />
              <Profile {...creative_team.lead} />
              <Profile {...creative_team.jt_lead_2} />
            </div>
            <div className='flex w-full flex-col items-center justify-evenly gap-8 md:hidden'>
              <Profile {...creative_team.lead} />
              <Profile {...creative_team.jt_lead_2} />
              <Profile {...creative_team.jt_lead_1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
