import React from 'react';
import Rating from './common/Rating';
import { useRouter } from 'next/navigation';
import BookCard from './BookCard';

const SearchResult = ({ filteredBooks }: { filteredBooks: any }) => {



  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Search Results: {filteredBooks.length} items found</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredBooks.map((book: any, index: number) => (
         <BookCard key={index} book={book} index={index} />
        ))}
      </div>
    </div>
  );
};

export default SearchResult;
