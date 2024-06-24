"use client";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import successImage from "@/assets/images/success.png"; // Ensure you have a success image in your assets
import { useAppDispatch, useAppSelector } from "@/lib/supabase/hooks/redux";
import { clearCart, getCart } from "@/redux/cartSlice";

const SuccessPage = () => {
  const cart = useAppSelector(getCart);
  const dispatch = useAppDispatch();

  return (
    <div className="absolute top-0 w-full min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="bg-white p-10 rounded-lg shadow-lg text-center max-w-3xl w-full">
        <div className="mb-6">
          <FaCheckCircle className="text-green-500 text-6xl mx-auto" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Payment Successful!
        </h1>
        <p className="text-gray-700 mb-6">
          Thank you for your purchase. Your order has been successfully
          processed.
        </p>

        {/* Order Details */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Order Details
          </h2>
          <div className="space-y-4">
            {cart.map((item: any) => (
              <div
                key={item.bookIsbn}
                className="flex items-center justify-between p-4 border border-gray-300 rounded-lg"
              >
                <div className="flex items-center">
                  <Image
                    src={item.bookImage}
                    alt={item.bookTitle}
                    width={60}
                    height={90}
                    className="rounded-lg"
                  />
                  <div className="ml-4 text-left">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {item.bookTitle}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Link
          href="/"
          onClick={() => dispatch(clearCart())}
          className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
