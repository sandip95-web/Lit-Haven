import Image from "next/image";
import React from "react";
import Logo from "@/assets/images/logo.png";
import { FaLock } from "react-icons/fa";
import DeliveryInfo from "./DeliveryInfo";
import OrderSummary from "./OrderSummary";

const CheckOutPage = () => {
  // Dummy data for cart items and delivery address
  

 

  return (
    <div className="absolute top-0 w-full bg-gray-100 min-h-screen p-8">
      {/* Header */}
      <div className=" p-6 w-full border-b border-gray-300 ">
        <div className="flex justify-between items-center w-full max-w-6xl mx-auto">
          <Image src={Logo} alt="Logo" width={150} height={150} />
          <div className="text-xl font-semibold">Checkout</div>
          <div className="text-gray-500">
            <FaLock size={30} />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row justify-between w-full max-w-6xl mx-auto mt-8 gap-8">
    <DeliveryInfo/>
    <OrderSummary/>
    

        {/* Right Section */}
       
      </div>
    </div>
  );
};

export default CheckOutPage;
