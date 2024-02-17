import Image from 'next/image';

import { client } from "@/lib/sanity";
import { TSimpleProduct } from "@/types/TSimpleProduct";
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

async function getData() {
  const query = `*[_type == 'product'][0...4] | order(_createdAt desc) {
        _id,
        name,
        price,
        'slug': slug.current,
        'category': category->name,
        'image': image[0].asset->url
    }`;

  const data = await client.fetch(query);
  return data as TSimpleProduct[];
}

const NewProducts = async () => {
  const data = await getData();

  return (
    <div className='mt-14 lg:mt-20'>
      <div className="w-full">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold tracking-tight">
            Our Newest products
          </h2>

          <Link className="text-primary flex items-center gap-x-1" href="/all">
            See All{" "}
            <span>
              <ArrowRight />
            </span>
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((product) => (
            <div key={product._id} className="group relative">
              <div className="aspect-auto w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
                <Link
                  href={`/product/${product.slug}`}>
                  <Image
                    src={product.image}
                    alt="Product image"
                    className="w-full h-full object-cover object-center lg:h-full lg:w-full"
                    width={200}
                    height={300}
                  />
                </Link>
              </div>

              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm">
                    <Link href={`/product/${product.slug}`}>
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm">
                    {product.category}
                  </p>
                </div>
                <p className="text-sm font-medium">
                  ${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;