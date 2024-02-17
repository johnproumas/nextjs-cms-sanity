'use client';

import { useShoppingCart } from "use-shopping-cart";
import { Button } from "./ui/button";
import { ShoppingBagIcon } from "lucide-react";

const ShoppingCart = () => {
  const { handleCartClick } = useShoppingCart();
  return (
    <Button variant={'ghost'} className='px-2' onClick={() => handleCartClick()}>
      <ShoppingBagIcon />
    </Button>
  );
};

export default ShoppingCart;