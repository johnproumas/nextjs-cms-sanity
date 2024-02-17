import Link from "next/link";

import ImageGallery from "@/components/ImageGallery";
import { client } from "@/lib/sanity";
import { TProductPage } from "@/types/TProductPage";
import AddToCart from "@/components/AddToCart";

async function getData(slug: string) {
  const query = `*[_type == 'product' && slug.current == '${slug}'][0] {
    _id,
    name,
    description,
    'slug': slug.current,
    price,
    'category': category->name,
    image,
    price_id
  }
  `;

  const data = client.fetch(query);
  return data;
}

export const dynamic = "force-dynamic";

const ProductPage = async ({ params }: { params: { slug: string } }) => {
  const product: TProductPage = await getData(params.slug);

  return (
    <main className="flex flex-col max-w-[1920px] w-full mx-auto px-2 py-14 2xl:px-4">
      <section className="product-data grid gap-8 lg:grid-cols-2">
        {/* <section className="max-w-full lg:max-w-[50%]"> */}
        <section>
          <ImageGallery image={product.image} />
        </section>

        <section>
          <div className="mt-4">
            <Link href={`/${product.category}`}>{product.category}</Link>
          </div>
          <div className="mt-1">
            <h1 className="text-xl lg:text-4xl font-semibold">
              {product.name}
            </h1>
          </div>
          <div className="mt-5">
            <span className="text-xl lg:text-3xl font-semibold text-medium">
              €{product.price}
            </span>
          </div>

          <div className="mt-5">
            <p>{product.description}</p>
          </div>

          <div className="flex gap-2.5 mt-8">
            <AddToCart
              currency="EUR"
              description={product.description}
              image={product.image[0]}
              name={product.name}
              price={product.price}
              key={product._id}
              price_id={product.price_id}
            />
            {/* <CheckoutNow
              currency="USD"
              description={product.description}
              image={product.image[0]}
              name={product.name}
              price={product.price}
              key={product._id}
            // price_id={product.price_id}
            /> */}
          </div>
        </section>
      </section>
    </main>
  );
};

export default ProductPage;
