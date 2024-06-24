"use client";
import React from "react";
import SharedTotal from "./common/SharedTotal";
import { useRouter } from "next/navigation";

const ProceedToBuy = ({
  length,
  totalPrice,
}: {
  length: number;
  totalPrice: number;
}) => {
  const router = useRouter();
  return (
    <div className="bg-white shadow-2xl rounded-3xl p-6 flex flex-col items-center justify-center h-full space-y-6">
      <h2 className="text-3xl font-extrabold text-gray-800">
        Ready to Checkout?
      </h2>
      <p className="text-gray-600 text-center">
        You're just one step away from completing your purchase. Review your
        order and proceed to checkout to enjoy our premium products.
      </p>
      <div className="w-full">
        <div className="text-lg font-semibold text-gray-800 flex justify-between mb-4">
          <SharedTotal length={length} totalPrice={totalPrice} />
        </div>
        <p className="text-gray-600 text-center mb-6">
          By proceeding, you agree to our{" "}
          <a href="#" className="text-blue-500 underline">
            Terms and Conditions
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-500 underline">
            Privacy Policy
          </a>
          . Enjoy fast shipping and hassle-free returns with every order.
        </p>
        <button
          onClick={() => router.push("/checkout")}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg w-full transition duration-300 ease-in-out"
        >
          Proceed to Buy
        </button>
      </div>
    </div>
  );
};

export default ProceedToBuy;
