import React from 'react';
import Rating from './common/Rating';
import Link from 'next/link';
import AddToCart from './AddToCart';


const SingleBookPage = ({ singleBook }: { singleBook: any[] }) => {
  return (
    <div className="max-w-7xl mx-auto my-10 p-6">
      {singleBook.map((book) => (
        <div
          key={book.id}
          className="bg-white shadow-xl rounded-lg overflow-hidden flex flex-col md:flex-row"
        >
          <div className="md:w-1/2 bg-gray-100">
            <img
              className="w-full h-full object-contain p-6"
              src={book.image}
              alt={book.title}
            />
          </div>
          <div className="p-6 md:w-1/2 flex flex-col">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {book.title}
              </h2>
              <p className="text-xl text-gray-600 mb-2">
                Category: {book.category}
              </p>
              <p className="text-lg text-gray-600 mb-2">Price: ${book.price}</p>
              <div className="text-md text-gray-600 mb-4 flex items-center">
                <span>Rating: </span>
                <Rating rating={book.rating} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                About this item
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                {book.description}
              </p>
            </div>
            <AddToCart book={book}/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SingleBookPage;
