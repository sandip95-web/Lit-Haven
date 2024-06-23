"use client";
import React from "react";
import Image from "next/image";
import { useAppSelector, useAppDispatch } from "@/lib/supabase/hooks/redux";
import { getCart } from "@/redux/cartSlice";

const BookCart = () => {
  const cart = useAppSelector(getCart);
  const dispatch = useAppDispatch();

  return (
    <div className="bg-gray-100 min-h-screen   p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden  mx-auto">
        {cart.length === 0 ? (
          <div className="p-4 text-center">
            <h2 className="text-xl font-bold mb-2">Your cart is empty</h2>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold mb-4 text-center">
              Shopping Cart
            </h2>
            {cart.map((product: any,index:number) => (
              <div
                key={product.id}
                className={`flex justify-between flex-wrap p-4 ${
                  index !== cart.length - 1 ? "border-b border-gray-200" : ""
                }`}
              >
                <div className="flex justify-evenly">
                <div className="w-1/6 p-2">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
                <div className=" p-2">
                  <h2 className="text-lg font-semibold">{product.title}</h2>
                  <p className="text-lg font-semibold text-green-500">
                    In Stock
                  </p>
                  <p className="text-lg font-semibold">
                    Price: ${product.price.toFixed(2)}
                  </p>
                  <div className="flex items-center">
                    <label className="mr-2">Quantity:</label>
                    <button
                      // onClick={() => handleQuantityChange(product.id, product.quantity - 1)}
                      className="bg-gray-300 px-2 py-1 rounded-l"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={product.quantity}
                      // onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
                      className="w-12 p-1 border-t border-b text-center"
                      min="1"
                    />
                    <button
                      // onClick={() => handleQuantityChange(product.id, product.quantity + 1)}
                      className="bg-gray-300 px-2 py-1 rounded-r"
                    >
                      +
                    </button>
                  </div>
                </div>
                </div>
                <div className="w-1/6 p-2 text-right">
                  <button
                    // onClick={() => handleRemove(product.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BookCart;
