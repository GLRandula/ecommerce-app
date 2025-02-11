"use client";

import React, { useEffect, useState } from "react";
import { ProductData } from "../../type";
import { ImCross } from "react-icons/im";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { useDispatch } from "react-redux";
import {
  decresaeQuantity,
  incresaeQuantity,
  removeFromCart,
} from "@/redux/shoppersSlice";
import toast from "react-hot-toast";
import FormatedPrice from "./FormatedPrice";
import { FaMinus, FaPlus } from "react-icons/fa6";
import products from "@/sanity/schemas/products";

interface Props {
  cart: ProductData[];
  item: ProductData;
}

const CartItem = ({ cart, item }: Props) => {
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(false);
  const [existingProduct, setExistingProduct] = useState<ProductData | null>(
    null
  );

  useEffect(() => {
    const availableProduct = cart?.find((product) => product?._id === item._id);
    if (availableProduct) {
      setExistingProduct(availableProduct);
    }
  }, [cart, item]);

  const handleMinus = () => {
    if ((existingProduct?.quantity as number) > 1) {
      dispatch(decresaeQuantity(item?._id));
      toast.success("Quantity has decreased!");
    } else {
      toast.error("Quantity can't be decreased less than 1");
    }
  };

  const handlePlus = () => {
    dispatch(incresaeQuantity(item?._id));
    toast.success("Quantity has increased!");
  };

  return (
    <div className="w-full grid grid-cols-5 mb-4 border py-2">
      <div className="flex col-span-5 md:col-span-2 items-center gap-4">
        <ImCross
          onClick={() => {
            dispatch(removeFromCart(item?._id));
            toast.success(
              `${item?.title.substring(0, 12)}... deleted from cart`
            );
          }}
          className="text-accent hover:text-lightRed cursor-pointer duration-300 ml-4"
        />
        <Link href={`/product/${item?.slug.current}`}>
          <Image
            src={urlFor(item?.image).url()}
            alt={item?.title}
            width={200}
            height={200}
            className="w-32 h-32 p-4 object-contain"
          />
        </Link>
        <h1 className="font-semibold">{item?.title.substring(0, 20)}</h1>
      </div>
      <div className="col-span-5 md:col-span-3 flex items-center justify-between py-4 md:py-0 px-4 lg:px-0">
        <p className="flex w-1/3 items-center text-lg font-semibold">
          <FormatedPrice amount={item?.price} />
        </p>
        <div className="flex w-1/3 items-center font-bold gap-6 text-lg">
          <button
            onClick={handleMinus}
            className="w-6 h-6 bg-gray-100 text-sm flex items-center justify-center hover:bg-darkOrange/10 cursor-pointer border-[1px] border-gray-300 hover:border-darkOrange hoverEffect"
          >
            <FaMinus />
          </button>
          <p className="text-sm font-semibold">{item?.quantity}</p>
          <button
            onClick={handlePlus}
            className="w-6 h-6 bg-gray-100 text-sm flex items-center justify-center hover:bg-darkOrange/10 cursor-pointer border-[1px] border-gray-300 hover:border-darkOrange hoverEffect"
          >
            <FaPlus />
          </button>
        </div>
        <div className="flex w-1/3 items-center font-bold gap-6 text-lg">
          <FormatedPrice amount={item.quantity * item.price} />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
