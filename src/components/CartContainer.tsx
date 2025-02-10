"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductData, StoreState } from "../../type";
import CartItem from "./CartItem";
import { resetCart } from "@/redux/shoppersSlice";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import Link from "next/link";
import FormatedPrice from "./FormatedPrice";
import Button from "./Button";

const CartContainer = ({ session }: any) => {
  const { cart } = useSelector((state: StoreState) => state?.shoppers);
  const dispatch = useDispatch();

  const handleResetCart = () => {
    const confirmed = window.confirm("Are you sure to reset your cart?");
    if (confirmed) {
      dispatch(resetCart());
      toast.success("Successfully Reset Your Cart!");
    }
  };

  return (
    <div>
      {cart?.length > 0 ? (
        <div className="pb-20">
          <div className="w-full h-20 bg-[#f5f5f5] text-accent hidden lg:grid grid-cols-5 place-content-center px-6 text-lg font-semibold">
            <h2 className="col-span-2">Product</h2>
            <h2>Price</h2>
            <h2>Quantity</h2>
            <h2>Sub Total</h2>
          </div>
          <div className="mt-5">
            {cart.map((item: ProductData) => (
              <CartItem key={item?._id} cart={cart} item={item} />
            ))}
          </div>
          <button
            onClick={handleResetCart}
            className="py-2 px-10 bg-lightRed text-white font-semibold uppercase mb-4 hover:bg-red-600 hoverEffect text-sm"
          >
            Reset Cart
          </button>
          <div className="max-w-7xl gap-4 flex justify-end mt-4">
            <div className="w-96 flex flex-col gap-4">
              <h1 className="text-2xl font-semibold text-right">Cart Totals</h1>
              <div>
                <div>
                  <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 px-4 text-lg font-medium">
                    Subtotal <FormatedPrice amount={0} />
                  </p>
                  <p className="flex items-center justify-between border-[1px] border-gray-400 border-b-0 py-1.5 px-4 text-lg font-medium">
                    Shipping Charge <FormatedPrice amount={0} />
                  </p>
                  <p className="flex items-center justify-between border-[1px] border-gray-400 py-1.5 text-lg px-4 font-medium">
                    Total <FormatedPrice amount={0} />
                  </p>
                </div>
              </div>
              <Button
                disabled={!session?.user}
                className="py-3 px-8 rounded-md disabled:bg-darkOrange/40"
              >
                Proceed To Checkout
              </Button>
              {session?.user && <p className="text-center text-sm font-medium text-lightRed -mt-3">Please Sign in to make Checkout</p>}
            </div>
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-center py-20"
        >
          <div className="max-w-[500px] p-4 py-8 bg-white flex flex-col gap-4 items-center rounded-md shadow-lg">
            <h1 className="text-xl font-bold uppercase">
              Your Cart feels lonely.
            </h1>
            <p className="text-sm text-center px-10 -mt-2">
              Your Shopping cart lives to serve. Give it purpose - fill it with
              books, electronics, videos, etc. and make it happy.
            </p>
            <Link
              href={"/"}
              className="bg-lightOrange text-white hover:bg-darkOrange hoverEffect px-8 py-3 rounded-lg font-semibold"
            >
              Continue Shopping
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default CartContainer;
