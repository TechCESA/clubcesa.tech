import Image from 'next/image';
import Link from 'next/link';
import { AtSign, MapPinIcon, PhoneIcon } from 'lucide-react';

export default function Footer() {
  return (
    <footer className='relative mt-24 h-44 w-full'>
      <Image
        src='/images/footer.svg'
        alt='Footer Image'
        fill
        className='object-cover object-center'
        priority={false}
      />
    </footer>
  );
}
