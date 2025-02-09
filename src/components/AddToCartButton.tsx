'use client';

import React, { useState } from 'react'
import { ProductData } from '../../type';
import { twMerge } from 'tailwind-merge';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/redux/shoppersSlice';
import toast from 'react-hot-toast';

interface Props {
    className?: string;
    item: ProductData;
  }

const AddToCartButton = ({ item, className }: Props) => {

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    // dispatch(addToCart(item));
    // toast.success(`${item?.title.substring(0, 12)} added successfully!`);
    try {
      setLoading(true);
      dispatch(addToCart(item));
      toast.success(`${item?.title.substring(12, 0)} added successfully!`);
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleAddToCart}
      className={twMerge(
        "bg-accent text-white w-full py-2 border border-px border-accent hover:bg-darkOrange hover:border-darkOrange hoverEffect font-semibold tracking-wide flex items-center justify-center gap-1",
        className
      )}
    >
      Add to cart 
    </button>
  )
}

export default AddToCartButton
