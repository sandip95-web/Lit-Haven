import React from 'react';
import Rating from './common/Rating';
import { useRouter } from 'next/navigation';

const SearchResult = ({ filteredBooks }: { filteredBooks: any }) => {
const router= useRouter();

const handleClick= (id:any)=>{
  router.push(`/book/${id}`)
}
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Search Results: {filteredBooks.length} items found</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredBooks.map((book: any, index: number) => (
          <div key={index} className="p-4 bg-white rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:scale-105 cursor-pointer" onClick={()=>handleClick(book.id)}>
            <img src={book.image} alt={book.title} className="w-32 h-32 object-cover rounded-lg mb-4" />
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{book.title}</h3>
              <p className="text-gray-800 font-bold mb-2">${book.price}</p>
              <p className="text-gray-500 text-sm mb-4">Category: {book.category}</p>
              <Rating rating={book.rating} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchResult;
