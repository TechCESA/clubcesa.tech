import Image from 'next/image';
import React from 'react';
import { productInformation } from '@/product-data';
import Link from 'next/link';

export default function Merch() {
  return (
    <div className='container mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2'>
      {productInformation.map((merch) => (
        <div key={merch.sku} className='rounded-lg bg-white p-4 shadow-md'>
          <Image
            src={merch.images[3].src}
            alt={merch.images[3].alt}
            className='mb-4 h-96 w-full rounded-md object-cover'
            width={500}
            height={500}
            quality={100}
          />
          <h2 className='mb-2 text-xl font-bold text-black'>{merch.name}</h2>
          <p className='mb-4 text-gray-600'>{merch.description_s}</p>
          <div className='flex flex-row items-center justify-between'>
            <p className='font-semibold text-black'>{merch.price}</p>
            <Link
              href={merch.link}
              className='mt-4 rounded-md bg-indigo-600 px-4 py-2 text-white'
            >
              View More
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
