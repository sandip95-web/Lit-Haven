'use client';
import { useAppSelector } from '@/lib/supabase/hooks/redux';
import { getCart } from '@/redux/cartSlice';
import Image from 'next/image';
import React from 'react';

const DeliveryInfo = () => {
  const cart = useAppSelector(getCart);
  console.log(cart);

  const deliveryAddress = {
    name: "Natsu Dragneel",
    address: "1234 Main St, Apt 101, Springfield, IL, 62701",
  };

  return (
    <div className="flex-1 bg-white p-8 rounded-lg shadow-lg">
      {/* Delivery Address */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">1) Delivery Address</h2>
        <div className="text-gray-700">
          <p className="text-lg font-medium">{deliveryAddress.name}</p>
          <p className="text-lg">{deliveryAddress.address}</p>
        </div>
      </div>

      {/* Cart Items */}
      <div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">2) Items and Delivery</h2>
        <div className="space-y-6">
          {cart.map((item: any) => (
            <div key={item.bookIsbn} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out">
              <div className="flex items-center space-x-4">
                <Image src={item.bookImage} alt={item.bookTitle} width={60} height={60} className="rounded-lg" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{item.bookTitle}</h3>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                </div>
              </div>
              <div className="text-xl font-semibold text-gray-900">Price: ${item.price.toFixed(2)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeliveryInfo;
