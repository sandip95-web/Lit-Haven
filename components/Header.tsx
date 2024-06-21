"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "@/assets/images/logo.png";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const itemList = [
    "Today's Deals",
    "New Arrivals",
    "Best Sellers",
    "Discounts",
    "Categories",
  ];

  const [query, setQuery] = useState<string>("");
  const router = useRouter();

  const handleSearch = () => {
    router.push(`/search/${query}`);
  };
  return (
    <header className="bg-white">
      <div className="container mx-auto px-4 py-8 flex items-center">
        {/* logo */}
        <div className="mr-auto md:w-48 flex-shrink-0">
          <Link href="/">
            <Image width={200} height={100} src={Logo} alt="" />
          </Link>
        </div>
        {/* search */}
        <div className="w-full max-w-xs xl:max-w-lg 2xl:max-w-2xl bg-gray-100 rounded-md hidden xl:flex items-center">
          <select
            className="bg-transparent uppercase font-bold text-sm p-4 mr-4"
            name=""
            id=""
          >
            <option>all categories</option>
          </select>
          <input
            className="border-l border-gray-300 bg-transparent font-semibold text-sm pl-4"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="text"
            placeholder="I'm searching for ..."
          />
          <svg
            className="ml-auto h-5 px-4 text-gray-500 cursor-pointer"
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="search"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            onClick={handleSearch}
          >
            <path
              fill="currentColor"
              d="M508.5 468.9L387.1 347.5c-2.3-2.3-5.3-3.5-8.5-3.5h-13.2c31.5-36.5 50.6-84 50.6-136C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c52 0 99.5-19.1 136-50.6v13.2c0 3.2 1.3 6.2 3.5 8.5l121.4 121.4c4.7 4.7 12.3 4.7 17 0l22.6-22.6c4.7-4.7 4.7-12.3 0-17zM208 368c-88.4 0-160-71.6-160-160S119.6 48 208 48s160 71.6 160 160-71.6 160-160 160z"
            />
          </svg>
        </div>
        {/* phone number */}
        <div className="ml-auto md:w-48 hidden sm:flex flex-col place-items-end">
          <span className="font-bold md:text-xl">
            Hello! Sandip
            <Image
              src="/path/to/user-photo.jpg" // Replace with the actual path to the user's photo
              alt="User Photo"
              width={40} // Adjust size as needed
              height={40} // Adjust size as needed
              className="rounded-full" // Optional: makes the image round
            />
          </span>
        </div>
        {/* buttons */}
        <nav className="contents">
          <ul className="ml-4 xl:w-48 flex items-center justify-end">
            <li className="ml-2 lg:ml-4 relative inline-block">
              <a className="" href="">
                <svg
                  className="h-9 lg:h-10 p-2 text-gray-500 hover:text-blue-500 transition duration-300 ease-in-out"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="user"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"
                  />
                </svg>
              </a>
            </li>
            <li className="ml-2 lg:ml-4 relative inline-block">
              <a className="" href="">
                <div className="absolute -top-1 right-0 z-10 bg-yellow-400 text-xs font-bold px-1 py-0.5 rounded-sm">
                  3
                </div>
                <svg
                  className="h-9 lg:h-10 p-2 text-gray-500 hover:text-blue-500 transition duration-300 ease-in-out"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="box-open"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path
                    fill="currentColor"
                    d="M425.4 0c-9.7 0-18.6 6.1-22.2 15.4L320 243.9 236.8 15.4c-3.6-9.3-12.5-15.4-22.2-15.4-13.8 0-25.3 11.5-25.3 25.3 0 3.5.8 7 2.3 10.2l99.7 247.5H48c-26.5 0-48 21.5-48 48v144c0 26.5 21.5 48 48 48h544c26.5 0 48-21.5 48-48V320c0-26.5-21.5-48-48-48H358.5L458.2 24.5c1.5-3.2 2.3-6.7 2.3-10.2 0-13.8-11.5-25.3-25.3-25.3zM48 464v-96h544v96H48zm0-144h544v48H48v-48zm176-272l64 160h64l64-160h-192z"
                  />
                </svg>
              </a>
            </li>
            <li className="ml-2 lg:ml-4 relative inline-block">
              <a className="" href="">
                <div className="absolute -top-1 right-0 z-10 bg-yellow-400 text-xs font-bold px-1 py-0.5 rounded-sm">
                  12
                </div>
                <svg
                  className="h-9 lg:h-10 p-2 text-gray-500 hover:text-blue-500 transition duration-300 ease-in-out"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="far"
                  data-icon="shopping-cart"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M551.991 64H144.28l-8.726-44.608C133.35 8.128 123.478 0 112 0H12C5.373 0 0 5.373 0 12v24c0 6.627 5.373 12 12 12h80.24l69.594 355.701C150.796 415.201 144 430.802 144 448c0 35.346 28.654 64 64 64s64-28.654 64-64a63.681 63.681 0 0 0-8.583-32h145.167a63.681 63.681 0 0 0-8.583 32c0 35.346 28.654 64 64 64 35.346 0 64-28.654 64-64 0-18.136-7.556-34.496-19.676-46.142l1.035-4.757c3.254-14.96-8.142-29.101-23.452-29.101H203.76l-9.39-48h312.405c11.29 0 21.054-7.869 23.452-18.902l45.216-208C578.695 78.139 567.299 64 551.991 64zM208 472c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm256 0c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm23.438-200H184.98l-31.31-160h368.548l-34.78 160z"
                  />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
        {/* cart count */}
        <div className="ml-4 hidden sm:flex flex-col font-bold">
          <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Sign Out
          </button>
        </div>
      </div>
      <div className="container mx-auto px-4 flex items-center">
        {itemList.map((item, index) => (
          <Link
            href={`/${item.toLowerCase().replace(/\s/g, "-")}`}
            key={index}
            className="text-gray-600 hover:text-blue-500 hover:underline px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out"
          >
            {item}
          </Link>
        ))}
      </div>
      <hr />
    </header>
  );
};

export default Header;
