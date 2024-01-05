import home_sih from '@/public/event/sih/home.jpg';
import sih_pic_1 from '@/public/event/sih/pic_1.jpg';
import sih_pic_2 from '@/public/event/sih/pic_2.jpg';
import sih_pic_3 from '@/public/event/sih/pic_3.jpg';
import sih_pic_4 from '@/public/event/sih/pic_4.jpg';
import sih_pic_5 from '@/public/event/sih/pic_5.jpg';
import sih_pic_6 from '@/public/event/sih/pic_6.jpg';
import home_farewell from '@/public/event/farewell/home.webp';
import farewell_pic_1 from '@/public/event/farewell/pic_1.jpg';
import farewell_pic_2 from '@/public/event/farewell/pic_2.jpg';
import farewell_pic_3 from '@/public/event/farewell/pic_3.jpg';
import farewell_pic_4 from '@/public/event/farewell/pic_4.jpg';
import farewell_pic_5 from '@/public/event/farewell/pic_5.jpg';
import farewell_pic_6 from '@/public/event/farewell/pic_6.jpg';

export const eventInformation = [
  {
    title: 'Techfest',
    image: '/public/event/event.avif',
    date: '12',
    month: 'Jan',
    time: '12:00-13:10',
    location: 'Room 137',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptates, quas, voluptatibus, dolores voluptatem quibusdam voluptatum iusto quod quos doloribus! Quod, voluptates. Quisquam voluptate, voluptas quidem voluptatibus quia doloribus?',
    registerLink: 'https://www.example.com',
    knowMoreLink: 'https://www.example.com',
  },
  {
    title: 'Techfest2',
    image: '/public/event/event.avif',
    date: '12',
    month: 'Jan',
    time: '12:00-13:10',
    location: 'Room 137',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptates, quas, voluptatibus, dolores voluptatem quibusdam voluptatum iusto quod quos doloribus! Quod, voluptates. Quisquam voluptate, voluptas quidem voluptatibus quia doloribus?',
    registerLink: 'https://www.example.com',
    knowMoreLink: 'https://www.example.com',
  },
  {
    title: 'Techfest2',
    image: '/public/event/event.avif',
    date: '12',
    month: 'Jan',
    time: '12:00-13:10',
    location: 'Room 137',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptates, quas, voluptatibus, dolores voluptatem quibusdam voluptatum iusto quod quos doloribus! Quod, voluptates. Quisquam voluptate, voluptas quidem voluptatibus quia doloribus?',
    registerLink: 'https://www.example.com',
    knowMoreLink: 'https://www.example.com',
  },
];

export const pastEventInformation = [
  {
    sku: 'farewell-2023',
    title: 'Farewell 2023',
    images: [
      farewell_pic_1,
      farewell_pic_2,
      farewell_pic_3,
      farewell_pic_4,
      farewell_pic_5,
      farewell_pic_6,
    ],
    home_image: home_farewell,
    date: '20 Apr 2023',
    description: `As the academic year draws to a close, celebrating the journey, achievements, and memories that our students have created during their time at Bharati Vidyapeeth College.`,
    url: '/event/farewell-2023',
  },
  {
    sku: 'sih-2023',
    title: 'SIH 2023',
    images: [sih_pic_1, sih_pic_2, sih_pic_3, sih_pic_4, sih_pic_5, sih_pic_6],
    home_image: home_sih,
    date: '26 Sep 2023',
    description: `Smart India Hackathon is an initiative by the Government of India aimed at promoting innovation and problem-solving among young minds. It is a platform for students to come together and work on real-world challenges faced by various industries. Participants collaborate in teams to develop innovative solutions, utilizing technology and creative thinking.`,
    url: '/event/sih-2023',
  },
];
