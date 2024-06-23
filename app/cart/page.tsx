"use client";

import BookCart from "@/components/BookCart";
import ProceedToBuy from "@/components/ProceedToBuy";
import { useAppSelector } from "@/lib/supabase/hooks/redux";
import { getCart } from "@/redux/cartSlice";
import React from "react";

const Page = () => {
  const cart = useAppSelector(getCart);
  let totalPrice = 0;

  cart.forEach((item: any) => {
    totalPrice += item.price * item.quantity;
  });
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="flex w-full max-w-8xl">
        <div className="w-3/4 pr-4">
          <BookCart cart={cart} totalPrice={totalPrice} />
        </div>
        <div className="w-1/4 pl-4">
          <ProceedToBuy length={cart.length} totalPrice={totalPrice} />
        </div>
      </div>
    </div>
  );
};

export default Page;
