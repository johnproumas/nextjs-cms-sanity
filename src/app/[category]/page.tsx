import Image from "next/image";

import { client } from "@/lib/sanity";
import { TSimpleProduct } from "@/types/TSimpleProduct";
import Link from "next/link";

async function getData(category: string) {
  const query = `*[_type == 'product' && category->name == '${category}'] {
    _id,
    'image': image[0].asset->url,
    price,
    name,
    'slug': slug.current,
    'category': category->name
  }`;

  const data = await client.fetch(query);
  return data;
}

export const dynamic = "force-dynamic";

const CategoryPage = async ({ params }: { params: { category: string } }) => {
  const products: TSimpleProduct[] = await getData(params.category);
  return (
    <main className="flex flex-col max-w-[1920px] w-full mx-auto p-2 xl:p-4">
      <div className="mt-14 lg:mt-20">
        <div className="w-full">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold tracking-tight">
              {params.category}
            </h2>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div
                key={product._id}
                className="group relative"
              >
                <div className="aspect-auto w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
                  <Link href={`/product/${product.slug}`}>
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
                    <p className="mt-1 text-sm">{product.category}</p>
                  </div>
                  <p className="text-sm font-medium">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CategoryPage;
