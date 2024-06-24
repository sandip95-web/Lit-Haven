"use client";
import Image from "next/image";
import HomeImage from "@/assets/images/background.jpeg"; // Replace with your image path
import SliderPage from "./common/SliderPage";
import { Suspense } from "react";


const HomePage = () => {
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
          Welcome to Our BookStore!
        </h1>

        {/* Subheading */}
        <p className="text-lg text-gray-700 mb-8 text-center">
          Explore our services and discover something new.
        </p>

        <Suspense
          fallback={
            <div className="flex items-center justify-center h-full">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
            </div>
          }
        >
          <SliderPage />
        </Suspense>
      </div>
    </div>
  );
  F;
};

export default HomePage;
