import { useRouter } from "next/navigation";
import React from "react";
import Rating from "./common/Rating";

const BookCard = ({ book, index }: { book: any; index: number }) => {
  const router = useRouter();
  const handleClick = (id: any) => {
    router.push(`/book/${id}`);
  };
  return (
    <div
      key={index}
      className="p-4 bg-white rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105 cursor-pointer"
      onClick={() => handleClick(book.id)}
    >
      <img
        src={book.image}
        alt={book.title}
        className="w-32 h-32 object-cover rounded-lg mb-4"
      />
      <div className="text-center">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {book.title}
        </h3>
        <p className="text-gray-800 font-bold mb-2">${book.price}</p>
        <p className="text-gray-500 text-sm mb-4">Category: {book.category}</p>
        <Rating rating={book.rating} />
      </div>
    </div>
  );
};

export default BookCard;
