import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Rating from "./Rating";
import { useAppDispatch } from "@/lib/supabase/hooks/redux";
import { addToCart } from "@/redux/cartSlice";
import { useRouter } from "next/navigation";


const ProductCard = ({ product }: { product: any }) => {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();

  return (
    <div className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white mx-2 transform hover:scale-105 transition-transform duration-300 hover:shadow-xl">
      <div className="relative h-64">
        <Link href={`/book/${product.bookIsbn}`}>
          <Image
            src={product.bookImage}
            alt={product.bookTitle}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
            onLoad={() => setLoaded(true)}
          />
        </Link>
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse">
            Loading...
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-bold text-gray-800 text-xl mb-2 overflow-hidden whitespace-nowrap text-ellipsis">
          {product.bookTitle}
        </h3>
        <p className="text-gray-700 text-lg mb-2">${product.price}</p>
        <Rating rating={product.rating} />
        <button
          onClick={() => {
            dispatch(addToCart(product));
            router.push("/cart");
          }}
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg mt-4 hover:bg-blue-600 transition-colors duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
