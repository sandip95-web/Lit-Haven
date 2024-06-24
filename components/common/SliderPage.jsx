import React, { useEffect, useState } from 'react'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { useSupabase } from '@/lib/supabase/hooks/useSupabase';
import Slider from 'react-slick';
import ProductCard from './ProductCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderPage = () => {
    const { books, getDataFromSupabase } = useSupabase();
  const [categories, setCategories] = useState({});

  useEffect(() => {
    getDataFromSupabase();
  }, []);

  useEffect(() => {
    if (books) {
      // Group products by category
      const grouped = books.reduce((acc, product) => {
        if (!acc[product.genre]) {
          acc[product.genre] = [];
        }
        acc[product.genre].push(product);
        return acc;
      }, {});

      setCategories(grouped);
    }
  }, [books]);

  // NextArrow component
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-gray-800 rounded-full p-3 shadow-md focus:outline-none z-10"
        onClick={onClick}
        aria-label="Next"
      >
        <BsArrowRight size={24} />
      </button>
    );
  };

  // PrevArrow component
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-gray-800 rounded-full p-3 shadow-md focus:outline-none z-10"
        onClick={onClick}
        aria-label="Previous"
      >
        <BsArrowLeft size={24} />
      </button>
    );
  };

  // Slick Slider settings
  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    adaptiveHeight: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    centerMode: false,
    centerPadding: '0',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
        },
      },
    ],
  };
  return (
    <>
    
       {Object.keys(categories).map((category, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 capitalize">{category}</h2>
            <Slider {...sliderSettings}>
              {categories[category].map((product) => (
                <ProductCard key={product.bookIsbn} product={product} />
              ))}
            </Slider>
          </div>
        ))}
    </>
  )
}

export default SliderPage
