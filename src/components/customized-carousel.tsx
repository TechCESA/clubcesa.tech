import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { MemberType } from '@/types/member';
import Autoplay from 'embla-carousel-autoplay';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

export default function CustomizedCarousel({
  teamName,
  team,
  snapDelay,
}: {
  teamName: string;
  team: MemberType[];
  snapDelay: number;
}) {
  return (
    <>
      <p className='mb-4 mt-8 font-bold text-cesa-blue'>{teamName}</p>
      <Carousel
        opts={{ loop: true, align: 'center' }}
        className='w-full'
        plugins={[
          Autoplay({
            delay: snapDelay,
            stopOnMouseEnter: true,
            stopOnInteraction: true,
            stopOnFocusIn: true,
          }),
        ]}
      >
        <CarouselContent>
          {team.map((mem) => (
            <CarouselItem key={teamName} className='md:basis-1/2 lg:basis-1/3'>
              <MemberCard mem={mem} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
}

export function MemberCard({ mem }: { mem: MemberType }) {
  const { img, name, role, linkedin, instagram, twitter } = mem;

  const socialProfiles: {
    platform: 'instagram' | 'twitter' | 'linkedin';
    url: string;
  }[] = [
    { platform: 'instagram', url: instagram },
    { platform: 'twitter', url: twitter },
    { platform: 'linkedin', url: linkedin },
  ];

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'instagram':
        return <Instagram className='h-5 w-5' />;
      case 'twitter':
        return <Twitter className='h-5 w-5' />;
      case 'linkedin':
        return <Linkedin className='h-5 w-5' />;
      default:
        return null;
    }
  };

  return (
    <div className='flex w-full max-w-sm flex-col items-center p-6'>
      <Avatar className='mb-4 h-32 w-32'>
        <AvatarImage src={img} alt={name} className='object-cover' />
        <AvatarFallback className='text-2xl font-bold text-cesa-blue'>
          {name
            .split(' ')
            .map((n) => n[0])
            .join('')}
        </AvatarFallback>
      </Avatar>
      <h3 className='text-center text-2xl font-bold'>{name}</h3>
      <p className='mb-4 text-sm text-cesa-blue'>{role}</p>
      <div className='mt-4 flex justify-center space-x-4'>
        {socialProfiles.map((profile) => (
          <a
            key={profile.platform}
            href={profile.url}
            target='_blank'
            rel='noopener noreferrer'
            className='text-muted-foreground transition-colors hover:text-foreground'
          >
            {getSocialIcon(profile.platform)}
          </a>
        ))}
      </div>
    </div>
  );
}
