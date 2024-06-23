"use client";
import React from "react";
import Image from "next/image";
import { useAppSelector, useAppDispatch } from "@/lib/supabase/hooks/redux";
import {
  decrementQuantity,
  getCart,
  incrementQuantity,
  removeFromCart,
} from "@/redux/cartSlice";

const BookCart = () => {
  const cart = useAppSelector(getCart);
  const dispatch = useAppDispatch();

  let totalPrice = 0;

  cart.forEach((item: any) => {
    totalPrice += item.price * item.quantity;
  });

  return (
    <div className="bg-gray-100 min-h-screen p-6 flex flex-col items-center">
      <div className="bg-white shadow-2xl rounded-3xl overflow-hidden mx-auto w-full max-w-7xl">
        {cart.length === 0 ? (
          <div className="p-10 text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Your cart is empty</h2>
          </div>
        ) : (
          <div className="p-8">
            <h2 className="text-4xl font-extrabold mb-8 text-center text-gray-800">Shopping Cart</h2>
            {cart.map((product: any, index: number) => (
              <div
                key={product.id}
                className={`flex justify-between items-center flex-wrap p-6 ${
                  index !== cart.length - 1 ? "border-b border-gray-300" : ""
                }`}
              >
                <div className="flex items-center">
                  <div className="w-28 h-28 p-4">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={100}
                      height={100}
                      className="object-contain rounded-lg"
                    />
                  </div>
                  <div className="ml-6 flex flex-col">
                    <h2 className="text-xl font-bold text-gray-900">{product.title}</h2>
                    <p className="text-sm font-medium text-green-500 mt-1">In Stock</p>
                    <p className="text-xl font-semibold text-gray-700 mt-1">
                      Price: ${product.price.toFixed(2)}
                    </p>
                    <div className="flex items-center mt-4">
                      <label className="mr-2 text-sm font-medium text-gray-700">Quantity:</label>
                      <button
                        onClick={() =>
                          product.quantity > 1 && dispatch(decrementQuantity(product))
                        }
                        className="bg-gray-300 hover:bg-gray-400 px-3 py-2 rounded-l-lg transition duration-300"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        value={product.quantity}
                        className="w-12 p-2 border-t border-b text-center"
                        readOnly
                      />
                      <button
                        onClick={() => dispatch(incrementQuantity(product))}
                        className="bg-gray-300 hover:bg-gray-400 px-3 py-2 rounded-r-lg transition duration-300"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <button
                    onClick={() => dispatch(removeFromCart(product))}
                    className="bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-lg transition duration-300 ease-in-out"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="p-6 flex justify-between items-center border-t border-gray-300 mt-6">
              <div className="text-lg font-semibold text-gray-700">
                Subtotal ({cart.length} items):
              </div>
              <div className="text-2xl font-extrabold text-gray-900">${totalPrice.toFixed(2)}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookCart;
