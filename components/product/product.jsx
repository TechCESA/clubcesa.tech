'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Product({ product }) {
  return (
    <div className='bg-white'>
      <div className='pt-6'>
        <nav aria-label='Breadcrumb'>
          <ol
            role='list'
            className='mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8'
          >
            {product.breadcrumbs.map((breadcrumb, idx) => (
              <li key={breadcrumb.id}>
                <div className='flex items-center'>
                  <Link
                    href={breadcrumb.href}
                    className='mr-2 text-sm font-medium text-gray-900'
                  >
                    {breadcrumb.name}
                  </Link>
                  {idx !== product.breadcrumbs.length - 1 ? (
                    <svg
                      width={16}
                      height={20}
                      viewBox='0 0 16 20'
                      fill='currentColor'
                      aria-hidden='true'
                      className='h-5 w-4 text-gray-300'
                    >
                      <path d='M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z' />
                    </svg>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </nav>

        {/* Image gallery */}
        <div className='mx-auto mt-6 max-w-2xl px-4 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8'>
          <div className='aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block'>
            <Image
              src={product.images[1].secure_url}
              alt={product.images[1].public_id}
              className='h-full w-full object-cover object-center'
              width={1024}
              height={1024}
              quality={100}
            />
          </div>
          <div className='hidden lg:grid lg:grid-cols-1 lg:gap-y-8'>
            <div className='aspect-h-2 aspect-w-3 overflow-hidden rounded-lg'>
              <Image
                src={product.images[0].secure_url}
                alt={product.images[0].public_id}
                className='h-full w-full object-cover object-center'
                width={1024}
                height={1024}
                quality={100}
              />
            </div>
            <div className='aspect-h-2 aspect-w-3 overflow-hidden rounded-lg'>
              <Image
                src={product.images[3].secure_url}
                alt={product.images[3].public_id}
                className='h-full w-full object-cover object-center'
                width={1024}
                height={1024}
                quality={100}
              />
            </div>
          </div>
          <div className='aspect-h-5 aspect-w-4 lg:aspect-h-4 lg:aspect-w-3 overflow-hidden rounded-lg'>
            <Image
              src={product.images[2].secure_url}
              alt={product.images[2].public_id}
              className='h-full w-full object-cover object-center'
              width={1024}
              height={1024}
              quality={100}
            />
          </div>
        </div>

        {/* Product info */}
        <div className='mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16'>
          <div className='lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8'>
            <h1 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl'>
              {product.name}
            </h1>
          </div>

          {/* Options */}
          <div className='mt-4 lg:row-span-3 lg:mt-0'>
            <h2 className='sr-only'>Product information</h2>
            <p className='text-2xl font-semibold tracking-tight text-gray-900'>
              {product.price}
            </p>

            {/* Sizes */}
            <div className='flex items-center justify-between'>
              <h3 className='text-sm font-medium text-gray-900'>Size</h3>
              <button
                popovertarget='size_chart'
                className='text-sm font-medium text-indigo-600 hover:text-indigo-500'
              >
                Size guide
              </button>
            </div>

            <div
              id='size_chart'
              popover='auto'
              className='h-80 w-80 overflow-hidden rounded-lg border-2 border-gray-200 shadow-2xl shadow-black/30 md:h-[30rem] md:w-[30rem]'
            >
              <Image
                src={product.size_chart.secure_url}
                alt={product.size_chart.public_id}
                width={512}
                height={512}
                quality={100}
                className='h-full w-full object-contain'
              />
            </div>

            <Link href={product.google_form}>
              <button
                type='submit'
                className='mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
              >
                Fill the form
              </button>
            </Link>
          </div>

          <div className='py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6'>
            {/* Description and details */}
            <div>
              <h3 className='sr-only'>Description</h3>

              <div className='space-y-6'>
                <p className='text-base text-gray-900'>{product.description}</p>
              </div>
            </div>

            <div className='mt-10'>
              <h3 className='text-sm font-semibold text-gray-900'>
                Highlights
              </h3>

              <div className='mt-4'>
                <ul role='list' className='list-disc space-y-2 pl-4 text-sm'>
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className='text-gray-400'>
                      <span className='text-gray-600'>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
