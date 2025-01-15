'use client';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { MerchStoreData } from '@/utils/merch-store';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';

const SIZES = ['S-36', 'M-38', 'L-40', 'XL-42', 'XXL-44'];

export default function Page({ params }: { params: { slug: string } }) {
  const product = MerchStoreData.find(
    (product) => product.slug === params.slug,
  );

  if (!product) {
    notFound();
  }

  return (
    <div className='container mx-auto my-12 px-4 py-8'>
      <div className='grid items-start gap-8 lg:grid-cols-2'>
        {/* Product Images */}
        <div className='space-y-4'>
          <div className='relative aspect-square overflow-hidden rounded-lg bg-muted'>
            <Image
              src={product.images[0]}
              alt='Product image'
              fill
              className='object-cover'
              priority
            />
          </div>
          {/* <div className='flex snap-x gap-4 overflow-auto pb-2'>
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={cn(
                  'relative aspect-square w-20 flex-none overflow-hidden rounded-lg border-2',
                  selectedImage === index ? 'border-primary' : 'border-muted',
                )}
              >
                <Image
                  src={image}
                  alt={`Product thumbnail ${index + 1}`}
                  fill
                  className='object-cover'
                />
              </button>
            ))}
          </div> */}
        </div>

        {/* Product Info */}
        <div className='space-y-8'>
          <div className='space-y-6'>
            <h1 className='text-3xl font-bold tracking-tight'>
              {product.name}
            </h1>
            <Separator />
            <p className='text-4xl font-bold'>{product.price}</p>
            <div className='text-muted-foreground'>{product.description}</div>
          </div>

          <div className='space-y-4'>
            <div className='space-y-2'>
              {/* <Label className='flex flex-row items-center justify-between text-base'>
                <p>Size</p>
                <SizeGuideModal src={product.size_chart} />
              </Label> */}

              <RadioGroup defaultValue='M' className='grid grid-cols-4 gap-2'>
                {SIZES.map((size) => (
                  <Label
                    key={size}
                    className='flex cursor-pointer items-center justify-center rounded-md border p-3 transition-all duration-200 hover:bg-muted [&:has(:checked)]:bg-primary [&:has(:checked)]:text-primary-foreground [&:has(:checked)]:ring-2 [&:has(:checked)]:ring-primary [&:has(:checked)]:ring-offset-2'
                  >
                    <RadioGroupItem value={size} className='sr-only' />
                    {size}
                  </Label>
                ))}
              </RadioGroup>
            </div>
          </div>

          <Link href={product.google_form} className='block' target='_blank'>
            <Button className='w-full bg-cesa-blue' size='lg'>
              Buy
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

// function SizeGuideModal({ src }: { src: string }) {
//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <Link href='' className='text-sm text-blue-600 underline'>
//           Size guide
//         </Link>
//       </DialogTrigger>
//       <DialogContent className='sm:max-w-[425px]'>
//         <div className='relative aspect-square overflow-hidden rounded-lg bg-muted'>
//           <Image
//             src={src}
//             alt='Product image'
//             fill
//             className='object-cover'
//             priority
//           />
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// }
