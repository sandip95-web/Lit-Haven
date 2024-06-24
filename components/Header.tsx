"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaSearch, FaUser, FaBoxOpen, FaShoppingCart } from "react-icons/fa";
import Logo from "@/assets/images/logo.png";
import Profile from "@/assets/images/profile.jpg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/lib/supabase/hooks/redux";
import { getCart } from "@/redux/cartSlice";
import { supabase } from "@/lib/supabase/books";

const Header = () => {
  const itemList = [
    "Today's Deals",
    "New Arrivals",
    "Best Sellers",
    "Discounts",
    "Categories",
  ];

  const [query, setQuery] = useState<string>("");
  const [user, setUser] = useState<any>(null);
  const router = useRouter();
  const cart = useAppSelector(getCart);

  const handleSearch = () => {
    router.push(`/search/${query}`);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    router.push("/signin");
  };

  useEffect(() => {
    const getUserDetail = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      setUser(user);
    };
    getUserDetail();
  }, []);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center space-x-2">
            <Image src={Logo} alt="Logo" width={100} height={50} />
          </Link>
        </div>

        {/* Search */}
        <div className="flex-1 mx-4">
          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for products..."
              className="w-full py-2 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 text-sm"
            />
            <FaSearch
              className="absolute left-3 top-3 text-gray-400 cursor-pointer"
              size={18}
              onClick={handleSearch}
            />
          </div>
        </div>

        {/* User Profile and Cart */}
        <div className="flex items-center space-x-4">
          {/* User Profile */}
          <div className="relative flex items-center space-x-2">
            <Image
              src={
                user && user.identities && user.identities.length > 0
                  ? user.identities[0].identity_data.avatar_url
                  : "https://st2.depositphotos.com/11742109/48212/v/450/depositphotos_482126926-stock-illustration-gender-neutral-profile-avatar-front.jpg"
              }
              alt="User Photo"
              width={40}
              height={40}
              className="rounded-full cursor-pointer"
              onClick={() => router.push("/signin")}
            />
            <div className="flex flex-col">
              <span className="text-sm font-medium">
                
                  {" "}
                  {user && user.identities && user.identities.length > 0
                    ? `Hello, ${user.identities[0].identity_data.full_name}`
                    : <Link href="/signin"  className="text-xs text-green-500 hover:underline">Sign-in</Link>}
                
              </span>
              {user && (
                <button
                  onClick={handleSignOut}
                  className="text-xs text-red-500 hover:underline"
                >
                  Sign-out
                </button>
              )}
            </div>
          </div>

          {/* Cart */}
          <Link href="/cart" className="relative flex items-center space-x-2">
            <FaShoppingCart
              className="text-gray-600 hover:text-blue-500 transition duration-300 ease-in-out"
              size={24}
            />
            <span className="bg-yellow-500 text-xs text-white font-bold px-2 py-1 rounded-full">
              {cart.length}
            </span>
          </Link>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="bg-gray-100">
        <div className="container mx-auto px-4 py-2">
          <ul className="flex justify-center space-x-4 text-sm font-medium text-gray-600">
            {itemList.map((item, index) => (
              <li key={index}>
                <Link
                  className="hover:text-blue-500 hover:underline"
                  href={`/${item.toLowerCase().replace(/\s/g, "-")}`}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
