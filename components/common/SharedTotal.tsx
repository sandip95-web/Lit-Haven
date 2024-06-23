import React from "react";

const SharedTotal = ({length,totalPrice}:{length:number,totalPrice:number}) => {
  return (
    <>
      <div className="text-lg font-semibold text-gray-700">
        Subtotal ({length} items):
      </div>
      <div className="text-2xl font-extrabold text-gray-900">
        ${totalPrice.toFixed(2)}
      </div>
    </>
  );
};

export default SharedTotal;
