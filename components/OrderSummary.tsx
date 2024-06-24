"use client";
import React from "react";
import { useAppSelector } from "@/lib/supabase/hooks/redux";
import { getCart } from "@/redux/cartSlice";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { supabase } from "@/lib/supabase/books";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISH_KEY!);


const OrderSummary = () => {
  const cart = useAppSelector(getCart);

  const createStripeSession = async () => {
    const stripe = await stripePromise;
    const {
      data: { user },
    } = await supabase.auth.getUser();
    const checkoutSessions = await axios.post("/api/checkout-sessions", {
      items: cart,
      email: user?.email,
    });

    const result= await stripe?.redirectToCheckout({
      sessionId:checkoutSessions.data.id
    })

    if(result?.error){
      console.log(result.error.message);
      
    }
  };

  const orderSummary = {
    subtotal: cart.reduce(
      (acc: number, item: any) => acc + item.price * item.quantity,
      0
    ),
    shipping: 5.99,
    get total() {
      return this.subtotal + this.shipping;
    },
  };

  return (
    <div className="w-full lg:w-1/3 bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Order Summary</h2>
      <div className="space-y-4 text-gray-700">
        <div className="flex justify-between text-lg">
          <span>Subtotal</span>
          <span>${orderSummary.subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-lg">
          <span>Shipping</span>
          <span>${orderSummary.shipping.toFixed(2)}</span>
        </div>
        <div className="border-t border-gray-300 pt-4 flex justify-between text-2xl font-bold text-gray-900">
          <span>Total</span>
          <span>${orderSummary.total.toFixed(2)}</span>
        </div>
      </div>
      <button onClick={createStripeSession} className="w-full bg-green-600 text-white py-3 mt-6 rounded-lg hover:bg-blue-700 transition duration-300">
        Place Order
      </button>
    </div>
  );
};

export default OrderSummary;
