import React from 'react'

const Rating = ({rating}:{rating:any}) => {
  return (
    <div className="flex  items-center text-yellow-500">
    {[...Array(Math.floor(JSON.parse(rating).rate))].map((_, i) => (
      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.838 1.448 8.282-7.384-3.998-7.384 3.998 1.448-8.282-6.064-5.838 8.332-1.151z" />
      </svg>
    ))}
    <span className="ml-2 text-gray-600">({JSON.parse(rating).rate})</span>
    <span className="ml-2 text-gray-600">({JSON.parse(rating).count} reviews)</span>
  </div>
  )
}

export default Rating
