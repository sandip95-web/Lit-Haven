'use client'
import Image from 'next/image';
import HomeImage from '@/assets/images/background.jpeg'; // Replace with your image path
import { useSupabase } from '@/lib/supabase/hooks/useSupabase';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HomePage = () => {
  const { books, getDataFromSupabase } = useSupabase();
  const [categories, setCategories] = useState({});

  useEffect(() => {
    getDataFromSupabase();
  }, []);

  useEffect(() => {
    if (books) {
      // Group products by category
      const grouped = books.reduce((acc, product) => {
        if (!acc[product.category]) {
          acc[product.category] = [];
        }
        acc[product.category].push(product);
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Background Image Section */}
      <div className="relative w-full h-80 md:h-96 overflow-hidden rounded-lg shadow-lg">
        <Image
          src={HomeImage}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 py-8 bg-white rounded-lg shadow-lg mt-8">
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 text-center">
          Welcome to Our Website!
        </h1>

        {/* Subheading */}
        <p className="text-lg text-gray-700 mb-8 text-center">
          Explore our services and discover something new.
        </p>

        {/* Display Categories and Products */}
        {Object.keys(categories).map((category, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 capitalize">{category}</h2>
            <Slider {...sliderSettings}>
              {categories[category].map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </Slider>
          </div>
        ))}

        {/* Grid Layout for Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          {/* Feature 1 */}
          <FeatureCard
            title="Quality Products"
            description="Discover our range of high-quality products that cater to your needs."
          />

          {/* Feature 2 */}
          <FeatureCard
            title="Exceptional Service"
            description="Our dedicated team ensures you receive exceptional service with every interaction."
          />

          {/* Feature 3 */}
          <FeatureCard
            title="Customer Satisfaction"
            description="We prioritize customer satisfaction and strive to exceed expectations."
          />

          {/* Feature 4 */}
          <FeatureCard
            title="Innovative Solutions"
            description="Explore our innovative solutions designed to meet your unique challenges."
          />
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({ product }) => {
    const [loaded, setLoaded] = useState(false);
  
    return (
      <div className="max-w-xs rounded overflow-hidden shadow-lg bg-white mx-2">
        <div className="relative h-64 ">
          <Image
            src={product.image}
            alt={product.title}
            layout="fill"
            objectFit="cover"
            className="rounded-t"
            onLoad={() => setLoaded(true)}
          />
          {!loaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
              Loading...
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-bold text-gray-800 text-xl mb-2 h-12 overflow-hidden">{product.title}</h3>
          <p className="text-gray-700 text-lg mb-2">${product.price}</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Buy Now
          </button>
        </div>
      </div>
    );
  };

const FeatureCard = ({ title, description }) => (
  <div className="p-4 bg-gray-200 rounded-lg shadow-md">
    <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>
    <p className="text-gray-700 text-sm">{description}</p>
  </div>
);

export default HomePage;
