"use client";

import { useShoppingCart } from "use-shopping-cart";

import { Button } from "./ui/button";
import { TProductCart } from "@/types/TProductCart";
import { urlFor } from "@/lib/sanity";

const AddToCart = ({
  name,
  description,
  price,
  currency,
  image,
  price_id,
}: TProductCart) => {
  const { addItem, handleCartClick } = useShoppingCart();

  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    price_id: price_id,
  };

  return (
    <Button
      onClick={() => {
        addItem(product), handleCartClick();
      }}
    >
      Add to Cart
    </Button>
  );
};

export default AddToCart;
