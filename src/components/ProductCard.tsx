import React from "react";
import { ProductData } from "../../type";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import FormatedPrice from "./FormatedPrice";

const ProductCard = ({ item }: { item: ProductData }) => {
  return (
    <div className="border border-px border-lightText/60 rounded-md relative group overflow-hidden">
      <div>
        <Link href={`/product/${item?.slug.current}`}>
        <Image
          src={urlFor(item?.image).url()}
          alt={item?._type}
          width={500}
          height={500}
          className="w-full h-72 object-cover group-hover:scale-105 hoverEffect"
        />
        </Link>
        <p className="uppercase text-xs font-medium text-lightOrange">
          {item?.brand}
        </p>
        <h2 className="text-base font-semibold text-accent line-clamp-1">
          {item?.title}
        </h2>
        <p className="text-center text-sm line-clamp-2">{item?.description}</p>
        <div className="flex items-center gap-3 mb-5">
          <p className="text-lightText line-through">
            <FormatedPrice amount={item?.rowprice} />
          </p>
          <p className="text-darkOrange font-bold">
            <FormatedPrice amount={item?.price} />
          </p>
          </div>
      </div>
    </div>
  );
};

export default ProductCard;
