import { useAppDispatch } from "@/lib/supabase/hooks/redux";
import { addToCart } from "@/redux/cartSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const AddToCart = ({ book }: { book: any }) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
 
  

  return (
    <div className=" flex space-x-4">
      <button className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded shadow-lg transition-colors duration-300">
        Buy Now
      </button>
      <button
        onClick={() => {
          dispatch(addToCart(book));
          router.push("/cart");
        }}
        className="inline-block bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-3 px-6 rounded shadow-lg transition-colors duration-300"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCart;
