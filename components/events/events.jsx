'use client';

import EventCard from './events_components';

export default function Events() {
  const eventInformation = [
    {
      title: 'Techfest',
      image:
        'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      date: '12',
      month: 'July',
      time: '12:00-01:10',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptates, quas, voluptatibus, dolores voluptatem quibusdam voluptatum iusto quod quos doloribus! Quod, voluptates. Quisquam voluptate, voluptas quidem voluptatibus quia doloribus?',
      registerLink: 'https://www.google.com',
      knowMoreLink: 'https://www.google.com',
    },
    {
      title: 'Techfest2',
      image:
        'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      date: '24',
      month: 'May',
      time: '12:00-01:10',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptates, quas, voluptatibus, dolores voluptatem quibusdam voluptatum iusto quod quos doloribus! Quod, voluptates. Quisquam voluptate, voluptas quidem voluptatibus quia doloribus?',
      registerLink: 'https://www.google.com',
      knowMoreLink: 'https://www.google.com',
    },
    {
      title: 'Techfest2',
      image:
        'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      date: '24',
      month: 'May',
      time: '12:00-01:10',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptates, quas, voluptatibus, dolores voluptatem quibusdam voluptatum iusto quod quos doloribus! Quod, voluptates. Quisquam voluptate, voluptas quidem voluptatibus quia doloribus?',
      registerLink: 'https://www.google.com',
      knowMoreLink: 'https://www.google.com',
    },
  ];

  return (
    <div id='events' className='py-16'>
      <h1 className='text-center text-2xl font-semibold md:text-5xl'>Events</h1>
      <section className='max-w-screen flex min-h-screen flex-col items-center justify-center md:grid md:grid-cols-3 md:justify-items-center md:gap-y-20'>
        {eventInformation.map((event, index) => {
          return <EventCard eventInformation={event} key={index} />;
        })}
      </section>
    </div>
  );
}
