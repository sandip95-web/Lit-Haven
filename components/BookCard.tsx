import { useRouter } from "next/navigation";
import Image from "next/image";
import React, { useState } from "react";
import Rating from "./common/Rating";

const BookCard = ({ book, index }:{book:any,index:number}) => {
  const [loaded, setLoaded] = useState(false);
  const router = useRouter();

  const handleClick = (id:any) => {
    router.push(`/book/${id}`);
  };

  return (
    <div
      key={index}
      className="max-w-xs rounded-lg overflow-hidden shadow-lg bg-white mx-2 transform hover:scale-105 transition-transform duration-300 cursor-pointer"
      onClick={() => handleClick(book.bookIsbn)}
    >
      <div className="relative h-64">
        <Image
          src={book.bookImage}
          alt={book.bookTitle}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
          onLoad={() => setLoaded(true)}
        />
        {!loaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse">
            Loading...
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-bold text-gray-800 text-xl mb-2 overflow-hidden whitespace-nowrap text-ellipsis">
          {book.bookTitle.charAt(0).toUpperCase() + book.bookTitle.slice(1)}
        </h3>
        <p className="text-gray-700 text-lg mb-2">${book.price}</p>
        <p className="text-gray-500 text-sm mb-4">Category: {book.genre}</p>
        <Rating rating={book.rating} />
        <button
          onClick={() => handleClick(book.bookIsbn)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-full transition-colors duration-300"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default BookCard;
