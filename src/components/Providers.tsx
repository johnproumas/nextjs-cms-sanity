"use client";

import { CartProvider as USCProvider } from "use-shopping-cart";

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <USCProvider
      // mode="payment"
      cartMode="checkout-session"
      stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string}
      // successUrl="https://localhost:3000/order/success"
      // cancelUrl="https://localhost:3000/order/failed"
      currency="EUR"
      // billingAddressCollection={true}
      shouldPersist={true}
    >
      {children}
    </USCProvider>
  );
};

export default CartProvider;
