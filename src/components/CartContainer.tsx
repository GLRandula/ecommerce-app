"use client";

import React from "react";
import { useSelector } from "react-redux";
import { StoreState } from "../../type";

const CartContainer = () => {
  const { cart } = useSelector((state: StoreState) => state?.shoppers);

  return (
    <div>{cart?.length > 0 ? (
    <div className="pb-20">
        <div className="w-full h-20 bg-[#f5f5f5] text-accent hidden lg:grid grid-cols-5 place-content-center px-6 text-lg font-semibold">
            <h2 className="col-span-2">Product</h2>
            <h2>Price</h2>
            <h2>Quantity</h2>
            <h2>Sub Total</h2>
        </div>
    </div>) : (
        <div>No Product</div>
    )}
    </div>
  );
};

export default CartContainer;
