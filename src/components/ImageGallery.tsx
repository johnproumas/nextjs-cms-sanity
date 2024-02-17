'use client';

import Image from 'next/image';
import { useState } from 'react';

import { TImageGallery } from "@/types/TProductPage";
import { urlFor } from '@/lib/sanity';


const ImageGallery = ({ image }: TImageGallery) => {
  const [bigImage, setBigImage] = useState(image[0]);

  const handleImageOnChange = (image: any) => {
    setBigImage(image);
  };

  return (
    <div className="grid gap-4 lg:grid-cols-5">
      <div className="order-last flex gap-4 lg:order-none lg:flex-col">
        {image.map((img: any, index: any) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg bg-gray-100"
          >
            <Image
              src={urlFor(img).url()}
              width={200}
              height={200}
              alt={''}
              className="h-full w-full object-cover object-center cursor-pointer"
              priority
              onClick={() => handleImageOnChange(img)}
            />
          </div>
        ))}
      </div>

      <div className="relative overflow-hidden rounded-lg bg-gray-100 lg:col-span-4">
        <Image
          src={urlFor(bigImage).url()}
          alt="Photo"
          width={500}
          height={500}
          className="h-full w-full object-cover object-center"
        />

        <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">
          Sale
        </span>
      </div>
    </div>
  );
};

export default ImageGallery;