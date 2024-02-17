"use client";

import Image from "next/image";
import { useShoppingCart } from "use-shopping-cart";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useState } from "react";
import { Loader2 } from "lucide-react";

export default function ShoppingCartModal() {
  const {
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    removeItem,
    totalPrice,
    redirectToCheckout,
  } = useShoppingCart();

  const [isLoading, setIsLoading] = useState(false);
  const isDisabled = isLoading || cartCount === 0;

  // Stripe CheckoutSession Implementation
  async function handleCheckoutClickSession() {
    setIsLoading(true);

    const response = await fetch("/api/checkout", {
      method: "POST",
      body: JSON.stringify(cartDetails),
    });

    const data = await response.json();
    console.log(data);
    const result = await redirectToCheckout(data.id);

    if (result?.error) {
      console.error(result);
    }

    setIsLoading(false);
  }

  // Stripe ClientOnly Implementation
  // async function handleCheckoutClickClient(event: any) {
  //   event.preventDefault();
  //   try {
  //     const result = await redirectToCheckout();
  //     if (result?.error) {
  //       console.log("result");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  return (
    <Sheet
      open={shouldDisplayCart}
      onOpenChange={() => handleCartClick()}
    >
      <SheetContent className="sm:max-w-lg w-[90vw]">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>

        <div className="h-full flex flex-col justify-between">
          <div className="mt-8 flex-1 overflow-y-auto">
            <ul className="-my-6 divide-y divide-gray-200">
              {cartCount === 0 ? (
                <h1 className="py-6">There are no items in the bag</h1>
              ) : (
                <>
                  {/* {JSON.stringify(cartDetails)} */}
                  {Object.values(cartDetails ?? {}).map((entry) => (
                    <li
                      key={entry.id}
                      className="flex py-6"
                    >
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <Image
                          src={entry.image as string}
                          alt="Product image"
                          width={100}
                          height={100}
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium">
                            <h3>{entry.name}</h3>
                            <p className="ml-4">€{entry.price}</p>
                          </div>
                          <p className="mt-1 text-sm line-clamp-2">
                            {entry.description}
                          </p>
                        </div>

                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p className="">QTY: {entry.quantity}</p>

                          <div className="flex">
                            <button
                              type="button"
                              onClick={() => removeItem(entry.id)}
                              className="font-medium text-primary hover:text-primary/80"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>

          <div className="border-t px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium">
              <p>Subtotal:</p>
              <p>${totalPrice}</p>
            </div>
            <p className="mt-0.5 text-sm">
              Shipping and taxes are calculated at checkout.
            </p>

            <div className="mt-6">
              <Button
                onClick={handleCheckoutClickSession}
                className="w-full"
                disabled={isDisabled}
              >
                {isLoading ?? <Loader2 className="mr-2 w-4 h-4 animate-spin" />}
                {isLoading ? "Loading" : "Checkout"}
              </Button>
              {/* <Button
                onClick={handleCheckoutClickClient}
                className="w-full"
              >
                Checkout
              </Button> */}
            </div>

            <div className="mt-6 flex justify-center text-center text-sm">
              <p>
                OR{" "}
                <button
                  onClick={() => handleCartClick()}
                  className=" font-medium text-primary hover:text-primary/80"
                >
                  Continue Shopping
                </button>
              </p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
